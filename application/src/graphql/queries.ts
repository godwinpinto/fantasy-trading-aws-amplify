/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      profileImage
      participants {
        items {
          id
          balanceAmount
          stockCode
          stockUnitBuyPrice
          betType
          stockUnits
          createdAt
          updatedAt
          userParticipantsId
          contestParticipantsId
          __typename
        }
        nextToken
        __typename
      }
      leaderboard {
        items {
          id
          rank
          amount
          createdAt
          updatedAt
          userLeaderboardId
          contestLeaderboardId
          __typename
        }
        nextToken
        __typename
      }
      message {
        items {
          id
          message
          msgDateTime
          createdAt
          updatedAt
          userMessageId
          contestMessageId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        profileImage
        participants {
          nextToken
          __typename
        }
        leaderboard {
          nextToken
          __typename
        }
        message {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getContest = /* GraphQL */ `
  query GetContest($id: ID!) {
    getContest(id: $id) {
      id
      name
      description
      status
      maxParticipants
      participants {
        items {
          id
          balanceAmount
          stockCode
          stockUnitBuyPrice
          betType
          stockUnits
          createdAt
          updatedAt
          userParticipantsId
          contestParticipantsId
          __typename
        }
        nextToken
        __typename
      }
      leaderboard {
        items {
          id
          rank
          amount
          createdAt
          updatedAt
          userLeaderboardId
          contestLeaderboardId
          __typename
        }
        nextToken
        __typename
      }
      contestDate
      contestStock {
        items {
          id
          stockCode
          stockDescription
          stockImage
          stockPrice
          createdAt
          updatedAt
          contestContestStockId
          __typename
        }
        nextToken
        __typename
      }
      contestStockFeed {
        items {
          id
          stockFeed
          createdAt
          updatedAt
          contestContestStockFeedId
          __typename
        }
        nextToken
        __typename
      }
      message {
        items {
          id
          message
          msgDateTime
          createdAt
          updatedAt
          userMessageId
          contestMessageId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContests = /* GraphQL */ `
  query ListContests(
    $filter: ModelContestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        status
        maxParticipants
        participants {
          nextToken
          __typename
        }
        leaderboard {
          nextToken
          __typename
        }
        contestDate
        contestStock {
          nextToken
          __typename
        }
        contestStockFeed {
          nextToken
          __typename
        }
        message {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getParticipant = /* GraphQL */ `
  query GetParticipant($id: ID!) {
    getParticipant(id: $id) {
      id
      user {
        id
        username
        email
        profileImage
        participants {
          nextToken
          __typename
        }
        leaderboard {
          nextToken
          __typename
        }
        message {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      contest {
        id
        name
        description
        status
        maxParticipants
        participants {
          nextToken
          __typename
        }
        leaderboard {
          nextToken
          __typename
        }
        contestDate
        contestStock {
          nextToken
          __typename
        }
        contestStockFeed {
          nextToken
          __typename
        }
        message {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      balanceAmount
      stockCode
      stockUnitBuyPrice
      betType
      stockUnits
      createdAt
      updatedAt
      userParticipantsId
      contestParticipantsId
      __typename
    }
  }
`;
export const listParticipants = /* GraphQL */ `
  query ListParticipants(
    $filter: ModelParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParticipants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          username
          email
          profileImage
          createdAt
          updatedAt
          __typename
        }
        contest {
          id
          name
          description
          status
          maxParticipants
          contestDate
          createdAt
          updatedAt
          __typename
        }
        balanceAmount
        stockCode
        stockUnitBuyPrice
        betType
        stockUnits
        createdAt
        updatedAt
        userParticipantsId
        contestParticipantsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getContestStock = /* GraphQL */ `
  query GetContestStock($id: ID!) {
    getContestStock(id: $id) {
      id
      stockCode
      stockDescription
      stockImage
      stockPrice
      contest {
        id
        name
        description
        status
        maxParticipants
        participants {
          nextToken
          __typename
        }
        leaderboard {
          nextToken
          __typename
        }
        contestDate
        contestStock {
          nextToken
          __typename
        }
        contestStockFeed {
          nextToken
          __typename
        }
        message {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      contestContestStockId
      __typename
    }
  }
`;
export const listContestStocks = /* GraphQL */ `
  query ListContestStocks(
    $filter: ModelContestStockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContestStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        stockCode
        stockDescription
        stockImage
        stockPrice
        contest {
          id
          name
          description
          status
          maxParticipants
          contestDate
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        contestContestStockId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLeaderboard = /* GraphQL */ `
  query GetLeaderboard($id: ID!) {
    getLeaderboard(id: $id) {
      id
      rank
      amount
      user {
        id
        username
        email
        profileImage
        participants {
          nextToken
          __typename
        }
        leaderboard {
          nextToken
          __typename
        }
        message {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      contest {
        id
        name
        description
        status
        maxParticipants
        participants {
          nextToken
          __typename
        }
        leaderboard {
          nextToken
          __typename
        }
        contestDate
        contestStock {
          nextToken
          __typename
        }
        contestStockFeed {
          nextToken
          __typename
        }
        message {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userLeaderboardId
      contestLeaderboardId
      __typename
    }
  }
`;
export const listLeaderboards = /* GraphQL */ `
  query ListLeaderboards(
    $filter: ModelLeaderboardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeaderboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rank
        amount
        user {
          id
          username
          email
          profileImage
          createdAt
          updatedAt
          __typename
        }
        contest {
          id
          name
          description
          status
          maxParticipants
          contestDate
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userLeaderboardId
        contestLeaderboardId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      message
      user {
        id
        username
        email
        profileImage
        participants {
          nextToken
          __typename
        }
        leaderboard {
          nextToken
          __typename
        }
        message {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      contest {
        id
        name
        description
        status
        maxParticipants
        participants {
          nextToken
          __typename
        }
        leaderboard {
          nextToken
          __typename
        }
        contestDate
        contestStock {
          nextToken
          __typename
        }
        contestStockFeed {
          nextToken
          __typename
        }
        message {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      msgDateTime
      createdAt
      updatedAt
      userMessageId
      contestMessageId
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        user {
          id
          username
          email
          profileImage
          createdAt
          updatedAt
          __typename
        }
        contest {
          id
          name
          description
          status
          maxParticipants
          contestDate
          createdAt
          updatedAt
          __typename
        }
        msgDateTime
        createdAt
        updatedAt
        userMessageId
        contestMessageId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getContestStockFeed = /* GraphQL */ `
  query GetContestStockFeed($id: ID!) {
    getContestStockFeed(id: $id) {
      id
      stockFeed
      contest {
        id
        name
        description
        status
        maxParticipants
        participants {
          nextToken
          __typename
        }
        leaderboard {
          nextToken
          __typename
        }
        contestDate
        contestStock {
          nextToken
          __typename
        }
        contestStockFeed {
          nextToken
          __typename
        }
        message {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      contestContestStockFeedId
      __typename
    }
  }
`;
export const listContestStockFeeds = /* GraphQL */ `
  query ListContestStockFeeds(
    $filter: ModelContestStockFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContestStockFeeds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        stockFeed
        contest {
          id
          name
          description
          status
          maxParticipants
          contestDate
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        contestContestStockFeedId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
