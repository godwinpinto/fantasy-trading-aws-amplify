/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createContest = /* GraphQL */ `
  mutation CreateContest(
    $input: CreateContestInput!
    $condition: ModelContestConditionInput
  ) {
    createContest(input: $input, condition: $condition) {
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
export const updateContest = /* GraphQL */ `
  mutation UpdateContest(
    $input: UpdateContestInput!
    $condition: ModelContestConditionInput
  ) {
    updateContest(input: $input, condition: $condition) {
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
export const deleteContest = /* GraphQL */ `
  mutation DeleteContest(
    $input: DeleteContestInput!
    $condition: ModelContestConditionInput
  ) {
    deleteContest(input: $input, condition: $condition) {
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
export const createParticipant = /* GraphQL */ `
  mutation CreateParticipant(
    $input: CreateParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    createParticipant(input: $input, condition: $condition) {
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
export const updateParticipant = /* GraphQL */ `
  mutation UpdateParticipant(
    $input: UpdateParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    updateParticipant(input: $input, condition: $condition) {
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
export const deleteParticipant = /* GraphQL */ `
  mutation DeleteParticipant(
    $input: DeleteParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    deleteParticipant(input: $input, condition: $condition) {
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
export const createContestStock = /* GraphQL */ `
  mutation CreateContestStock(
    $input: CreateContestStockInput!
    $condition: ModelContestStockConditionInput
  ) {
    createContestStock(input: $input, condition: $condition) {
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
export const updateContestStock = /* GraphQL */ `
  mutation UpdateContestStock(
    $input: UpdateContestStockInput!
    $condition: ModelContestStockConditionInput
  ) {
    updateContestStock(input: $input, condition: $condition) {
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
export const deleteContestStock = /* GraphQL */ `
  mutation DeleteContestStock(
    $input: DeleteContestStockInput!
    $condition: ModelContestStockConditionInput
  ) {
    deleteContestStock(input: $input, condition: $condition) {
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
export const createLeaderboard = /* GraphQL */ `
  mutation CreateLeaderboard(
    $input: CreateLeaderboardInput!
    $condition: ModelLeaderboardConditionInput
  ) {
    createLeaderboard(input: $input, condition: $condition) {
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
export const updateLeaderboard = /* GraphQL */ `
  mutation UpdateLeaderboard(
    $input: UpdateLeaderboardInput!
    $condition: ModelLeaderboardConditionInput
  ) {
    updateLeaderboard(input: $input, condition: $condition) {
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
export const deleteLeaderboard = /* GraphQL */ `
  mutation DeleteLeaderboard(
    $input: DeleteLeaderboardInput!
    $condition: ModelLeaderboardConditionInput
  ) {
    deleteLeaderboard(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createContestStockFeed = /* GraphQL */ `
  mutation CreateContestStockFeed(
    $input: CreateContestStockFeedInput!
    $condition: ModelContestStockFeedConditionInput
  ) {
    createContestStockFeed(input: $input, condition: $condition) {
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
export const updateContestStockFeed = /* GraphQL */ `
  mutation UpdateContestStockFeed(
    $input: UpdateContestStockFeedInput!
    $condition: ModelContestStockFeedConditionInput
  ) {
    updateContestStockFeed(input: $input, condition: $condition) {
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
export const deleteContestStockFeed = /* GraphQL */ `
  mutation DeleteContestStockFeed(
    $input: DeleteContestStockFeedInput!
    $condition: ModelContestStockFeedConditionInput
  ) {
    deleteContestStockFeed(input: $input, condition: $condition) {
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
