import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { createMessage, createParticipant, createUser, updateParticipant } from './../graphql/mutations';
import { listContests, listUsers } from './../graphql/queries';
import { calculateProfitOrLoss, formatAmount } from './utility';


export interface IParticipant {
    id: string
    user: {
        id: string
        username: string
        profileImage: string
    },
    balanceAmount: number
    stockCode: string
    betType: string
    stockUnitBuyPrice: number
    stockUnits: number
    contestParticipantsId: string
}

export const useGamePlayStore = defineStore('gamePlayStore', () => {
    const contestId = ref('')
    const joinedStatus = ref(false)
    const CRYPTO_BTC = ref(0)
    const CRYPTO_ETH = ref(0)
    const CRYPTO_SOL = ref(0)
    const CRYPTO_XRP = ref(0)
    const CRYPTO_DOGE = ref(0)

    const participantDetails = ref<IParticipant>({
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
    })
    const contestDetails = ref();



    const getActiveContest = async () => {
        try {
            const activeContest: any = await API.graphql(graphqlOperation(listContests, {
                filter: {
                    or: [
                        { "status": { "eq": "A" } },
                        { "status": { "eq": "C" } },
                    ]
                }, limit: 1
            }));
            if (activeContest && activeContest.data && activeContest.data.listContests && activeContest.data.listContests.items && activeContest.data.listContests.items.length == 1) {
                contestDetails.value = activeContest.data.listContests.items[0];
                contestId.value = activeContest.data.listContests.items[0].id;
            }
        } catch (error) {
            console.log("error occured in fetching active contest", error);
        }
    }


    const getGamePlayChat = () => {
        try {
            const customQuery = `
                query GamePlayChat($status: String!) {
                listMessages(filter: { status: { eq: $status } }) {
                    items {
                    id
                    name
                    status
                    # Add all other fields you want to include in the response
                    }
                }
                }
            `;
            // Define the variables to be passed to the query
            const variables = {
                status: 'A',
            };

        } catch (error) {
            console.log('error to fetch chat information')
        }
    }

    const joinGame = async (contestId: string, userId: string) => {
        try {
            const variables = {
                balanceAmount: 1000000,
                stockCode: '',
                stockUnitBuyPrice: 0,
                stockUnits: 0,
                userParticipantsId: userId,
                betType: '',
                contestParticipantsId: contestId
            };

            console.log("variables", variables)
            const creationDetails: any = await API.graphql({
                query: createParticipant,
                variables: { input: variables }
            });
            participantDetails.value = creationDetails.data.createParticipant;
        } catch (error) {
            console.log("cannot join game", error);
        }
    }

    const investOrWithdraw = async (action: string, stockCode: string, betType: string) => {

        console.log("CRYPTO_BTC.value", CRYPTO_BTC.value);


        try {
            let balanceAmount = 0;
            const currVal = participantDetails.value
            let stockUnitBuyPrice = 0;
            let stockUnits = 0;
            if (action === 'I') {
                balanceAmount = 0;
                stockUnitBuyPrice = (stockCode == 'BTC' ? CRYPTO_BTC.value : stockCode == 'ETH' ? CRYPTO_ETH.value : stockCode == 'SOL' ? CRYPTO_SOL.value : stockCode == 'XRP' ? CRYPTO_XRP.value : CRYPTO_DOGE.value)
                stockUnits = currVal.balanceAmount / stockUnitBuyPrice
                if (stockUnitBuyPrice == 0) {
                    alert("Please wait for rates to refresh");
                    return
                }

            } else if (action === 'W') {
                balanceAmount = currVal.stockUnitBuyPrice*currVal.stockUnits+calculateProfitOrLoss(currVal.betType, currVal.stockUnitBuyPrice,(currVal.stockCode == 'BTC' ?
                CRYPTO_BTC.value : currVal.stockCode == 'ETH' ?
                    CRYPTO_ETH.value : currVal.stockCode == 'SOL' ?
                        CRYPTO_SOL.value : currVal.stockCode == 'XRP' ?
                            CRYPTO_XRP.value : CRYPTO_DOGE.value), currVal.stockUnits)
                stockCode = '';
                betType = '';
                stockUnitBuyPrice = 0;
                stockUnits = 0;
                if (balanceAmount == 0) {
                    alert("Please wait for rates to refresh");
                    return
                }

            }


            const updatedObject = {
                id: currVal.id,
                balanceAmount: balanceAmount,
                stockCode: stockCode,
                stockUnitBuyPrice: stockUnitBuyPrice,
                stockUnits: stockUnits,
                betType: betType,
                userParticipantsId: currVal.user.id,
                contestParticipantsId: currVal.contestParticipantsId,
            };

            const creationDetails: any = await API.graphql(graphqlOperation(
                updateParticipant,
                {
                    input: { ...updatedObject },
                    condition: { userParticipantsId: { eq: currVal.user.id }, contestParticipantsId: { eq: currVal.contestParticipantsId } }
                }
            ));
            console.log(creationDetails.data.updateParticipant);
            participantDetails.value = creationDetails.data.updateParticipant;


        } catch (error) {
            console.log("cannot contest stock", error);
        }
    }

    const calculateInvestedAmount = computed(() => {
        try {
            console.log("someeee", participantDetails.value.stockUnitBuyPrice, participantDetails.value.stockUnits)
            const currVal = participantDetails.value;
            let balanceAmount = 0;

            balanceAmount = calculateProfitOrLoss(currVal.betType,  currVal.stockUnitBuyPrice,(currVal.stockCode == 'BTC' ?
            CRYPTO_BTC.value : currVal.stockCode == 'ETH' ?
                CRYPTO_ETH.value : currVal.stockCode == 'SOL' ?
                    CRYPTO_SOL.value : currVal.stockCode == 'XRP' ?
                        CRYPTO_XRP.value : CRYPTO_DOGE.value), currVal.stockUnits)

            return formatAmount(balanceAmount);
        } catch (error) {
            console.log("unable to calculate stock price", error);
            return "0"
        }
    })

    return { contestId, joinedStatus, participantDetails, contestDetails, getActiveContest, calculateInvestedAmount, CRYPTO_BTC, CRYPTO_DOGE, CRYPTO_ETH, CRYPTO_SOL, CRYPTO_XRP, joinGame, investOrWithdraw }
})
