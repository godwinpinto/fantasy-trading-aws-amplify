import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { createUser } from './../graphql/mutations';
import { listUsers } from './../graphql/queries';

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
  function setUserDetails(userInfoVal: UserInfo) {
    userInfo.value = userInfoVal
  }
  function signInWithGoogle() {
    try {
      Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })
    } catch (error) {
      console.log(error)
    }
  }
  async function asyncSetUser() {
    try {
      const user:any = await Auth.currentAuthenticatedUser()

      console.log("user", user)
      console.log("user attributes", user.attributes.picture)

      if(user && user.attributes){
        const existingUser:any = await API.graphql(graphqlOperation(listUsers,{filter:{  "email":{"eq":user.attributes.email} }}));
        if(existingUser && existingUser.data && existingUser.data.listUsers && existingUser.data.listUsers.items && existingUser.data.listUsers.items.length==1){
            console.log("user already exists")
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
          console.log("userDetails",userDetails)
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
            console.log("users created",creationDetails);
          }else{
            console.log("Something went wrong in creation")
          }

                  
        }
        console.log("existingUser",existingUser.data.listUsers.items[0].email);



      }else{
        console.log("user is not logged in");
      }


    } catch (error) {
      console.log(error)
    }
  }

  return { userInfo, setUserDetails, signInWithGoogle, asyncSetUser }
})
