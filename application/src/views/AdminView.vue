<script setup lang="ts">
import { createContestStock, createContestStockFeed, createContest, updateContest, updateContestStockFeed } from '@/graphql/mutations';
import { listContestStockFeeds, listContests } from '@/graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import type { UpdateContestInput } from '../API'
import { ref } from 'vue';
const websocketUrl =
  'wss://streamer.cryptocompare.com/v2?api_key=95a83ef747b3841332a82e17a3075f37ea258aa3f12dde100d0c2e5260492d3d';

const stockData = new Map<string, number>();
stockData.set('BTC', 0);
stockData.set('ETH', 0);
stockData.set('XRP', 0);
stockData.set('DOGE', 0);
stockData.set('SOL', 0);

let webSocket: WebSocket;

const onMessage = (event: MessageEvent) => {
  const data: any = JSON.parse(event.data);
  if (data.TYPE === '0') {
    stockData.set(data.FSYM, data.P);
  }
}

const onOpen = () => {
  const firstRequest = {
    action: 'SubAdd',
    subs: [
      '0~Coinbase~BTC~USD',
      '0~Coinbase~ETH~USD',
      '0~Coinbase~XRP~USD',
      '0~Coinbase~DOGE~USD',
      '0~Coinbase~SOL~USD',
    ],
  };
  webSocket.send(JSON.stringify(firstRequest));
}

const onError = (error: Event) => {
  console.error('WebSocket error:', error);
}

const onClose = (event: CloseEvent) => {
  console.log('WebSocket connection closed:', event);
  setTimeout(() => {
    connectWebSocket();
  }, 10000);
}

const connectWebSocket = () => {
  webSocket = new WebSocket(websocketUrl);
  webSocket.onmessage = onMessage;
  webSocket.onopen = onOpen;
  webSocket.onerror = onError;
  webSocket.onclose = onClose;
}

connectWebSocket();

setInterval(() => {
  if (feedId.value) {
    const stockDataObject = Object.fromEntries(stockData);
    //console.log("stockDataObject", stockDataObject);
    updateFeedData(JSON.stringify(stockDataObject), contestIdOverall.value, feedId.value);
  }

}, 5000);

const addStocks = async (stockCode: string, stockDescription: string, stockImage: string, stockPrice: number, contestId: string) => {
  try {
    const variables = {
      "stockCode": stockCode,
      "stockDescription": stockDescription,
      "stockImage": stockImage,
      "stockPrice": stockPrice,
      "contestContestStockId": contestId
    };
    const creationDetails: any = await API.graphql({
      query: createContestStock,
      variables: { input: variables }
    });
  } catch (error) {
    console.log("cannot add stocks", error);
  }
}


const addFeedData = async (stockFeedJson: string, contestId: string) => {
  try {
    const variables = {
      "stockFeed": stockFeedJson,
      "contestContestStockFeedId": contestId
    };
    const creationDetails: any = await API.graphql({
      query: createContestStockFeed,
      variables: { input: variables }
    });
    feedId.value = creationDetails.data.createContestStockFeed.id;

  } catch (error) {
    console.log("cannot create feeds", error);
  }
}

const contestIdOverall = ref('');
const feedId = ref('');

const updateFeedData = async (stockFeedJson: string, contestId: string, feedUniqueId: string) => {
  try {
    const updatedObject = {
      "id": feedUniqueId,
      "stockFeed": stockFeedJson,
      "contestContestStockFeedId": contestId
    };
    const creationDetails: any = await API.graphql(graphqlOperation(
      updateContestStockFeed,
      {
        input: { ...updatedObject },
        condition: { contestContestStockFeedId: { eq: contestId } }
      }
    ));

  } catch (error) {
    console.log("cannot update feed", error);
  }
}


const createNewContest = async (contestName: string, contestDescription: string): Promise<any> => {

  const currentUTCDate = new Date();
  currentUTCDate.setDate(currentUTCDate.getDate() + 7);
  const updatedUTCDate = currentUTCDate.toISOString();

  try {
    const variables = {
      "name": contestName,
      "description": contestDescription,
      "status": "A",
      "maxParticipants": 20,
      "contestDate": updatedUTCDate
    };
    const creationDetails: any = await API.graphql({
      query: createContest,
      variables: { input: variables }
    });
    return creationDetails.data.createContest;

  } catch (error) {
    console.log("cannot create contest", error);
  }
  return '';
}

const getActiveContest = async (): Promise<any> => {
  try {
    const activeContest: any = await API.graphql(graphqlOperation(listContests, {
      filter: {
        "status": { "eq": "A" }
      },
    }));
    if (activeContest && activeContest.data && activeContest.data.listContests && activeContest.data.listContests.items && activeContest.data.listContests.items.length == 1) {
      contestIdOverall.value = activeContest.data.listContests.items[0].id;
      return activeContest.data.listContests.items[0];
    }
  } catch (error) {
    console.log("error occured in fetching active contest", error);
  }
  return null;
}

const getFeed = async (): Promise<void> => {
  try {
    const activeFeed: any = await API.graphql(graphqlOperation(listContestStockFeeds, {
      filter: {
        "contestContestStockFeedId": { "eq": contestIdOverall.value }
      },
    }));
    if (activeFeed && activeFeed.data && activeFeed.data.listContestStockFeeds && activeFeed.data.listContestStockFeeds.items && activeFeed.data.listContestStockFeeds.items.length == 1) {
      feedId.value = activeFeed.data.listContestStockFeeds.items[0].id;
    }
  } catch (error) {
    console.log("error occured in fetching feed", error);
  }
}

const closePreviousContest = async (contestId: string, contestData: any): Promise<void> => {
  const currentUTCDate = new Date();
  currentUTCDate.setDate(currentUTCDate.getDate() + 7);
  const updatedUTCDate = currentUTCDate.toISOString();

  try {
    contestData.status = 'C';

    //    contestNewDataUpdate='C'

    const updatedObject: UpdateContestInput = {
      "id": contestData.id,
      "name": contestData.name,
      "description": contestData.description,
      "status": "C",
      "maxParticipants": contestData.maxParticipants,
      "contestDate": contestData.contestDate
    };



    const creationDetails: any = await API.graphql(graphqlOperation(
      updateContest,
      {
        input: { ...updatedObject },
        condition: { status: { eq: 'A' } }
      }
    ));
  } catch (error) {
    console.log("cannot contest stock", error);
  }
}
//close contest

const startNewContestCreation = async () => {

  const stockDataObject = Object.fromEntries(stockData);
  const currentContest = await getActiveContest();
  if (currentContest) {
    await closePreviousContest(currentContest.id, currentContest);
  }
  const newContestData = await createNewContest("Crypto wars", "Learn Crypto");
  contestIdOverall.value = newContestData.id;
  addFeedData(JSON.stringify(stockDataObject), newContestData.id);
  addStocks('BTC', 'Bitcoin', 'bitcoin.png', stockData.get('BTC') ?? 0, newContestData.id);
  addStocks('ETH', 'Ethereum', 'ethereum.png', stockData.get('ETH') ?? 0, newContestData.id);
  addStocks('DOGE', 'Dogecoin', 'doge.png', stockData.get('DOGE') ?? 0, newContestData.id);
  addStocks('XRP', 'Ripple', 'xrp.png', stockData.get('XRP') ?? 0, newContestData.id);
  addStocks('SOL', 'Solana', 'solana.png', stockData.get('SOL') ?? 0, newContestData.id);

}

getActiveContest().then(() => {
  getFeed();
});
</script>


<template>
  <main>
    <RouterLink to="/">Home</RouterLink>

    <div class="flex flex-col bg-base-300 min-h-screen">
      <div class="flex-1 flex flex-col sm:flex-row">
        <main class="flex-1">
          <div class="col-span-2 divider font-extrabold"></div>

          <div class="grid grid-cols-2 mx-5 content-center justify-center gap-2">
            <div class="content-center col-span-2">
              <button class="btn btn-accent btn-sm justify-center w-full" @click="startNewContestCreation">Stop Previous
                and Create new contest</button>
            </div>
          </div>
        </main>


        <aside class="sm:w-1/4 ">

          sdads
        </aside>
      </div>

    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
