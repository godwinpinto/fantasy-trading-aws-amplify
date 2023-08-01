/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateContest = /* GraphQL */ `
  subscription OnCreateContest($filter: ModelSubscriptionContestFilterInput) {
    onCreateContest(filter: $filter) {
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
export const onUpdateContest = /* GraphQL */ `
  subscription OnUpdateContest($filter: ModelSubscriptionContestFilterInput) {
    onUpdateContest(filter: $filter) {
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
export const onDeleteContest = /* GraphQL */ `
  subscription OnDeleteContest($filter: ModelSubscriptionContestFilterInput) {
    onDeleteContest(filter: $filter) {
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
export const onCreateParticipant = /* GraphQL */ `
  subscription OnCreateParticipant(
    $filter: ModelSubscriptionParticipantFilterInput
  ) {
    onCreateParticipant(filter: $filter) {
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
export const onUpdateParticipant = /* GraphQL */ `
  subscription OnUpdateParticipant(
    $filter: ModelSubscriptionParticipantFilterInput
  ) {
    onUpdateParticipant(filter: $filter) {
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
export const onDeleteParticipant = /* GraphQL */ `
  subscription OnDeleteParticipant(
    $filter: ModelSubscriptionParticipantFilterInput
  ) {
    onDeleteParticipant(filter: $filter) {
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
export const onCreateContestStock = /* GraphQL */ `
  subscription OnCreateContestStock(
    $filter: ModelSubscriptionContestStockFilterInput
  ) {
    onCreateContestStock(filter: $filter) {
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
export const onUpdateContestStock = /* GraphQL */ `
  subscription OnUpdateContestStock(
    $filter: ModelSubscriptionContestStockFilterInput
  ) {
    onUpdateContestStock(filter: $filter) {
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
export const onDeleteContestStock = /* GraphQL */ `
  subscription OnDeleteContestStock(
    $filter: ModelSubscriptionContestStockFilterInput
  ) {
    onDeleteContestStock(filter: $filter) {
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
export const onCreateLeaderboard = /* GraphQL */ `
  subscription OnCreateLeaderboard(
    $filter: ModelSubscriptionLeaderboardFilterInput
  ) {
    onCreateLeaderboard(filter: $filter) {
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
export const onUpdateLeaderboard = /* GraphQL */ `
  subscription OnUpdateLeaderboard(
    $filter: ModelSubscriptionLeaderboardFilterInput
  ) {
    onUpdateLeaderboard(filter: $filter) {
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
export const onDeleteLeaderboard = /* GraphQL */ `
  subscription OnDeleteLeaderboard(
    $filter: ModelSubscriptionLeaderboardFilterInput
  ) {
    onDeleteLeaderboard(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateContestStockFeed = /* GraphQL */ `
  subscription OnCreateContestStockFeed(
    $filter: ModelSubscriptionContestStockFeedFilterInput
  ) {
    onCreateContestStockFeed(filter: $filter) {
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
export const onUpdateContestStockFeed = /* GraphQL */ `
  subscription OnUpdateContestStockFeed(
    $filter: ModelSubscriptionContestStockFeedFilterInput
  ) {
    onUpdateContestStockFeed(filter: $filter) {
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
export const onDeleteContestStockFeed = /* GraphQL */ `
  subscription OnDeleteContestStockFeed(
    $filter: ModelSubscriptionContestStockFeedFilterInput
  ) {
    onDeleteContestStockFeed(filter: $filter) {
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
