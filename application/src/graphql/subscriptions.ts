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
          price
          createdAt
          updatedAt
          contestContestStockId
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
          price
          createdAt
          updatedAt
          contestContestStockId
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
          price
          createdAt
          updatedAt
          contestContestStockId
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
        createdAt
        updatedAt
        __typename
      }
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
        createdAt
        updatedAt
        __typename
      }
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
        createdAt
        updatedAt
        __typename
      }
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
      price
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
      price
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
      price
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
