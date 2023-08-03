import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { createUser } from '@/graphql/mutations';
import { listUsers } from '@/graphql/queries';
import { useGamePlayStore } from '@/stores/gamePlayStore';
import { storeToRefs } from 'pinia'

export interface UserInfo {
  username: string
  userId: string
  email: string
  profileImage: string
}


export const useUserStore = defineStore('userStore', () => {
  const userInfo = ref<UserInfo>({
    username: '',
    userId: '',
    email: '',
    profileImage: ''
  })

  const gamePlayStore = useGamePlayStore();

  const { participantDetails } = storeToRefs(gamePlayStore)
  
  const setUserDetails=(userInfoVal: UserInfo)=> {
    userInfo.value = userInfoVal
  }

  const signInWithGoogle=()=> {
    try {
      Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })
    } catch (error) {
      console.log("Failed to authenticate",error)
    }
  }
  
  async function asyncSetUser() {
    try {
      const user:any = await Auth.currentAuthenticatedUser()
      if(user && user.attributes){
        const existingUser:any = await API.graphql(graphqlOperation(listUsers,{filter:{  "email":{"eq":user.attributes.email} }}));
        if(existingUser && existingUser.data && existingUser.data.listUsers && existingUser.data.listUsers.items && existingUser.data.listUsers.items.length==1){
            userInfo.value={
              username: user.attributes.name,
              userId: existingUser.data.listUsers.items[0].id,
              email: user.attributes.email,
              profileImage: user.attributes.picture
            }
        }else{
          const email=user.attributes.email;
          const username=user.attributes.name;
          const profileImage=user.attributes.picture;
          const userDetails = { username, email,profileImage };
          const creationDetails:any = await API.graphql({
            query: createUser,
            variables: { input: userDetails }
          });
          if(creationDetails.data && creationDetails.data.createUser ){
            userInfo.value={
              username: user.attributes.name,
              userId: creationDetails.data.createUser.id,
              email: user.attributes.email,
              profileImage: user.attributes.picture
            }
          }else{
            console.log("Unable to create user")
          }
        }
      }else{
        console.log("user is not logged in");
      }
    } catch (error) {
      console.log("Something went wrong in authentication",error)
    }
  }


  const signOut = () => {
    try {
      Auth.signOut();
      userInfo.value = {
        username: '',
        userId: '',
        email: '',
        profileImage: ''
      }
      participantDetails.value = {
        id: '',
        user: {
          id: '',
          username: '',
          profileImage: ''
        },
        balanceAmount: 0,
        betType: '',
        stockCode: '',
        stockUnitBuyPrice: 0,
        stockUnits: 0,
        contestParticipantsId: ''
      }
    } catch (error) {
      console.log("Something went wrong in signout",error);
    }
  }

  return { userInfo, setUserDetails, signInWithGoogle, asyncSetUser,signOut }
})
