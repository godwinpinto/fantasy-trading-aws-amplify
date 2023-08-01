/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  profileImage: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  profileImage: string,
  participants?: ModelParticipantConnection | null,
  leaderboard?: ModelLeaderboardConnection | null,
  message?: ModelMessageConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelParticipantConnection = {
  __typename: "ModelParticipantConnection",
  items:  Array<Participant | null >,
  nextToken?: string | null,
};

export type Participant = {
  __typename: "Participant",
  id: string,
  user?: User | null,
  contest?: Contest | null,
  balanceAmount: number,
  stockCode?: string | null,
  stockUnitBuyPrice?: number | null,
  betType?: string | null,
  stockUnits?: number | null,
  createdAt: string,
  updatedAt: string,
  userParticipantsId?: string | null,
  contestParticipantsId?: string | null,
};

export type Contest = {
  __typename: "Contest",
  id: string,
  name: string,
  description: string,
  status: string,
  maxParticipants?: number | null,
  participants?: ModelParticipantConnection | null,
  leaderboard?: ModelLeaderboardConnection | null,
  contestDate?: string | null,
  contestStock?: ModelContestStockConnection | null,
  contestStockFeed?: ModelContestStockFeedConnection | null,
  message?: ModelMessageConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLeaderboardConnection = {
  __typename: "ModelLeaderboardConnection",
  items:  Array<Leaderboard | null >,
  nextToken?: string | null,
};

export type Leaderboard = {
  __typename: "Leaderboard",
  id: string,
  rank?: number | null,
  amount?: number | null,
  user?: User | null,
  contest?: Contest | null,
  createdAt: string,
  updatedAt: string,
  userLeaderboardId?: string | null,
  contestLeaderboardId?: string | null,
};

export type ModelContestStockConnection = {
  __typename: "ModelContestStockConnection",
  items:  Array<ContestStock | null >,
  nextToken?: string | null,
};

export type ContestStock = {
  __typename: "ContestStock",
  id: string,
  stockCode: string,
  stockDescription: string,
  stockImage: string,
  stockPrice?: number | null,
  contest?: Contest | null,
  createdAt: string,
  updatedAt: string,
  contestContestStockId?: string | null,
};

export type ModelContestStockFeedConnection = {
  __typename: "ModelContestStockFeedConnection",
  items:  Array<ContestStockFeed | null >,
  nextToken?: string | null,
};

export type ContestStockFeed = {
  __typename: "ContestStockFeed",
  id: string,
  stockFeed: string,
  contest?: Contest | null,
  createdAt: string,
  updatedAt: string,
  contestContestStockFeedId?: string | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  message: string,
  user?: User | null,
  contest?: Contest | null,
  msgDateTime?: string | null,
  createdAt: string,
  updatedAt: string,
  userMessageId?: string | null,
  contestMessageId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  profileImage?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateContestInput = {
  id?: string | null,
  name: string,
  description: string,
  status: string,
  maxParticipants?: number | null,
  contestDate?: string | null,
};

export type ModelContestConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  maxParticipants?: ModelIntInput | null,
  contestDate?: ModelStringInput | null,
  and?: Array< ModelContestConditionInput | null > | null,
  or?: Array< ModelContestConditionInput | null > | null,
  not?: ModelContestConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateContestInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  status?: string | null,
  maxParticipants?: number | null,
  contestDate?: string | null,
};

export type DeleteContestInput = {
  id: string,
};

export type CreateParticipantInput = {
  id?: string | null,
  balanceAmount: number,
  stockCode?: string | null,
  stockUnitBuyPrice?: number | null,
  betType?: string | null,
  stockUnits?: number | null,
  userParticipantsId?: string | null,
  contestParticipantsId?: string | null,
};

export type ModelParticipantConditionInput = {
  balanceAmount?: ModelFloatInput | null,
  stockCode?: ModelStringInput | null,
  stockUnitBuyPrice?: ModelFloatInput | null,
  betType?: ModelStringInput | null,
  stockUnits?: ModelFloatInput | null,
  and?: Array< ModelParticipantConditionInput | null > | null,
  or?: Array< ModelParticipantConditionInput | null > | null,
  not?: ModelParticipantConditionInput | null,
  userParticipantsId?: ModelIDInput | null,
  contestParticipantsId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateParticipantInput = {
  id: string,
  balanceAmount?: number | null,
  stockCode?: string | null,
  stockUnitBuyPrice?: number | null,
  betType?: string | null,
  stockUnits?: number | null,
  userParticipantsId?: string | null,
  contestParticipantsId?: string | null,
};

export type DeleteParticipantInput = {
  id: string,
};

export type CreateContestStockInput = {
  id?: string | null,
  stockCode: string,
  stockDescription: string,
  stockImage: string,
  stockPrice?: number | null,
  contestContestStockId?: string | null,
};

export type ModelContestStockConditionInput = {
  stockCode?: ModelStringInput | null,
  stockDescription?: ModelStringInput | null,
  stockImage?: ModelStringInput | null,
  stockPrice?: ModelFloatInput | null,
  and?: Array< ModelContestStockConditionInput | null > | null,
  or?: Array< ModelContestStockConditionInput | null > | null,
  not?: ModelContestStockConditionInput | null,
  contestContestStockId?: ModelIDInput | null,
};

export type UpdateContestStockInput = {
  id: string,
  stockCode?: string | null,
  stockDescription?: string | null,
  stockImage?: string | null,
  stockPrice?: number | null,
  contestContestStockId?: string | null,
};

export type DeleteContestStockInput = {
  id: string,
};

export type CreateLeaderboardInput = {
  id?: string | null,
  rank?: number | null,
  amount?: number | null,
  userLeaderboardId?: string | null,
  contestLeaderboardId?: string | null,
};

export type ModelLeaderboardConditionInput = {
  rank?: ModelIntInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelLeaderboardConditionInput | null > | null,
  or?: Array< ModelLeaderboardConditionInput | null > | null,
  not?: ModelLeaderboardConditionInput | null,
  userLeaderboardId?: ModelIDInput | null,
  contestLeaderboardId?: ModelIDInput | null,
};

export type UpdateLeaderboardInput = {
  id: string,
  rank?: number | null,
  amount?: number | null,
  userLeaderboardId?: string | null,
  contestLeaderboardId?: string | null,
};

export type DeleteLeaderboardInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  message: string,
  msgDateTime?: string | null,
  userMessageId?: string | null,
  contestMessageId?: string | null,
};

export type ModelMessageConditionInput = {
  message?: ModelStringInput | null,
  msgDateTime?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  userMessageId?: ModelIDInput | null,
  contestMessageId?: ModelIDInput | null,
};

export type UpdateMessageInput = {
  id: string,
  message?: string | null,
  msgDateTime?: string | null,
  userMessageId?: string | null,
  contestMessageId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateContestStockFeedInput = {
  id?: string | null,
  stockFeed: string,
  contestContestStockFeedId?: string | null,
};

export type ModelContestStockFeedConditionInput = {
  stockFeed?: ModelStringInput | null,
  and?: Array< ModelContestStockFeedConditionInput | null > | null,
  or?: Array< ModelContestStockFeedConditionInput | null > | null,
  not?: ModelContestStockFeedConditionInput | null,
  contestContestStockFeedId?: ModelIDInput | null,
};

export type UpdateContestStockFeedInput = {
  id: string,
  stockFeed?: string | null,
  contestContestStockFeedId?: string | null,
};

export type DeleteContestStockFeedInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelContestFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  maxParticipants?: ModelIntInput | null,
  contestDate?: ModelStringInput | null,
  and?: Array< ModelContestFilterInput | null > | null,
  or?: Array< ModelContestFilterInput | null > | null,
  not?: ModelContestFilterInput | null,
};

export type ModelContestConnection = {
  __typename: "ModelContestConnection",
  items:  Array<Contest | null >,
  nextToken?: string | null,
};

export type ModelParticipantFilterInput = {
  id?: ModelIDInput | null,
  balanceAmount?: ModelFloatInput | null,
  stockCode?: ModelStringInput | null,
  stockUnitBuyPrice?: ModelFloatInput | null,
  betType?: ModelStringInput | null,
  stockUnits?: ModelFloatInput | null,
  and?: Array< ModelParticipantFilterInput | null > | null,
  or?: Array< ModelParticipantFilterInput | null > | null,
  not?: ModelParticipantFilterInput | null,
  userParticipantsId?: ModelIDInput | null,
  contestParticipantsId?: ModelIDInput | null,
};

export type ModelContestStockFilterInput = {
  id?: ModelIDInput | null,
  stockCode?: ModelStringInput | null,
  stockDescription?: ModelStringInput | null,
  stockImage?: ModelStringInput | null,
  stockPrice?: ModelFloatInput | null,
  and?: Array< ModelContestStockFilterInput | null > | null,
  or?: Array< ModelContestStockFilterInput | null > | null,
  not?: ModelContestStockFilterInput | null,
  contestContestStockId?: ModelIDInput | null,
};

export type ModelLeaderboardFilterInput = {
  id?: ModelIDInput | null,
  rank?: ModelIntInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelLeaderboardFilterInput | null > | null,
  or?: Array< ModelLeaderboardFilterInput | null > | null,
  not?: ModelLeaderboardFilterInput | null,
  userLeaderboardId?: ModelIDInput | null,
  contestLeaderboardId?: ModelIDInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  msgDateTime?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  userMessageId?: ModelIDInput | null,
  contestMessageId?: ModelIDInput | null,
};

export type ModelContestStockFeedFilterInput = {
  id?: ModelIDInput | null,
  stockFeed?: ModelStringInput | null,
  and?: Array< ModelContestStockFeedFilterInput | null > | null,
  or?: Array< ModelContestStockFeedFilterInput | null > | null,
  not?: ModelContestStockFeedFilterInput | null,
  contestContestStockFeedId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  profileImage?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionContestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  maxParticipants?: ModelSubscriptionIntInput | null,
  contestDate?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContestFilterInput | null > | null,
  or?: Array< ModelSubscriptionContestFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionParticipantFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  balanceAmount?: ModelSubscriptionFloatInput | null,
  stockCode?: ModelSubscriptionStringInput | null,
  stockUnitBuyPrice?: ModelSubscriptionFloatInput | null,
  betType?: ModelSubscriptionStringInput | null,
  stockUnits?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionParticipantFilterInput | null > | null,
  or?: Array< ModelSubscriptionParticipantFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionContestStockFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  stockCode?: ModelSubscriptionStringInput | null,
  stockDescription?: ModelSubscriptionStringInput | null,
  stockImage?: ModelSubscriptionStringInput | null,
  stockPrice?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionContestStockFilterInput | null > | null,
  or?: Array< ModelSubscriptionContestStockFilterInput | null > | null,
};

export type ModelSubscriptionLeaderboardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  rank?: ModelSubscriptionIntInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionLeaderboardFilterInput | null > | null,
  or?: Array< ModelSubscriptionLeaderboardFilterInput | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  msgDateTime?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionContestStockFeedFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  stockFeed?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContestStockFeedFilterInput | null > | null,
  or?: Array< ModelSubscriptionContestStockFeedFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    profileImage: string,
    participants?:  {
      __typename: "ModelParticipantConnection",
      items:  Array< {
        __typename: "Participant",
        id: string,
        balanceAmount: number,
        stockCode?: string | null,
        stockUnitBuyPrice?: number | null,
        betType?: string | null,
        stockUnits?: number | null,
        createdAt: string,
        updatedAt: string,
        userParticipantsId?: string | null,
        contestParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderboard?:  {
      __typename: "ModelLeaderboardConnection",
      items:  Array< {
        __typename: "Leaderboard",
        id: string,
        rank?: number | null,
        amount?: number | null,
        createdAt: string,
        updatedAt: string,
        userLeaderboardId?: string | null,
        contestLeaderboardId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        msgDateTime?: string | null,
        createdAt: string,
        updatedAt: string,
        userMessageId?: string | null,
        contestMessageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    profileImage: string,
    participants?:  {
      __typename: "ModelParticipantConnection",
      items:  Array< {
        __typename: "Participant",
        id: string,
        balanceAmount: number,
        stockCode?: string | null,
        stockUnitBuyPrice?: number | null,
        betType?: string | null,
        stockUnits?: number | null,
        createdAt: string,
        updatedAt: string,
        userParticipantsId?: string | null,
        contestParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderboard?:  {
      __typename: "ModelLeaderboardConnection",
      items:  Array< {
        __typename: "Leaderboard",
        id: string,
        rank?: number | null,
        amount?: number | null,
        createdAt: string,
        updatedAt: string,
        userLeaderboardId?: string | null,
        contestLeaderboardId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        msgDateTime?: string | null,
        createdAt: string,
        updatedAt: string,
        userMessageId?: string | null,
        contestMessageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    profileImage: string,
    participants?:  {
      __typename: "ModelParticipantConnection",
      items:  Array< {
        __typename: "Participant",
        id: string,
        balanceAmount: number,
        stockCode?: string | null,
        stockUnitBuyPrice?: number | null,
        betType?: string | null,
        stockUnits?: number | null,
        createdAt: string,
        updatedAt: string,
        userParticipantsId?: string | null,
        contestParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderboard?:  {
      __typename: "ModelLeaderboardConnection",
      items:  Array< {
        __typename: "Leaderboard",
        id: string,
        rank?: number | null,
        amount?: number | null,
        createdAt: string,
        updatedAt: string,
        userLeaderboardId?: string | null,
        contestLeaderboardId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        msgDateTime?: string | null,
        createdAt: string,
        updatedAt: string,
        userMessageId?: string | null,
        contestMessageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContestMutationVariables = {
  input: CreateContestInput,
  condition?: ModelContestConditionInput | null,
};

export type CreateContestMutation = {
  createContest?:  {
    __typename: "Contest",
    id: string,
    name: string,
    description: string,
    status: string,
    maxParticipants?: number | null,
    participants?:  {
      __typename: "ModelParticipantConnection",
      items:  Array< {
        __typename: "Participant",
        id: string,
        balanceAmount: number,
        stockCode?: string | null,
        stockUnitBuyPrice?: number | null,
        betType?: string | null,
        stockUnits?: number | null,
        createdAt: string,
        updatedAt: string,
        userParticipantsId?: string | null,
        contestParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderboard?:  {
      __typename: "ModelLeaderboardConnection",
      items:  Array< {
        __typename: "Leaderboard",
        id: string,
        rank?: number | null,
        amount?: number | null,
        createdAt: string,
        updatedAt: string,
        userLeaderboardId?: string | null,
        contestLeaderboardId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    contestDate?: string | null,
    contestStock?:  {
      __typename: "ModelContestStockConnection",
      items:  Array< {
        __typename: "ContestStock",
        id: string,
        stockCode: string,
        stockDescription: string,
        stockImage: string,
        stockPrice?: number | null,
        createdAt: string,
        updatedAt: string,
        contestContestStockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    contestStockFeed?:  {
      __typename: "ModelContestStockFeedConnection",
      items:  Array< {
        __typename: "ContestStockFeed",
        id: string,
        stockFeed: string,
        createdAt: string,
        updatedAt: string,
        contestContestStockFeedId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        msgDateTime?: string | null,
        createdAt: string,
        updatedAt: string,
        userMessageId?: string | null,
        contestMessageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContestMutationVariables = {
  input: UpdateContestInput,
  condition?: ModelContestConditionInput | null,
};

export type UpdateContestMutation = {
  updateContest?:  {
    __typename: "Contest",
    id: string,
    name: string,
    description: string,
    status: string,
    maxParticipants?: number | null,
    participants?:  {
      __typename: "ModelParticipantConnection",
      items:  Array< {
        __typename: "Participant",
        id: string,
        balanceAmount: number,
        stockCode?: string | null,
        stockUnitBuyPrice?: number | null,
        betType?: string | null,
        stockUnits?: number | null,
        createdAt: string,
        updatedAt: string,
        userParticipantsId?: string | null,
        contestParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderboard?:  {
      __typename: "ModelLeaderboardConnection",
      items:  Array< {
        __typename: "Leaderboard",
        id: string,
        rank?: number | null,
        amount?: number | null,
        createdAt: string,
        updatedAt: string,
        userLeaderboardId?: string | null,
        contestLeaderboardId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    contestDate?: string | null,
    contestStock?:  {
      __typename: "ModelContestStockConnection",
      items:  Array< {
        __typename: "ContestStock",
        id: string,
        stockCode: string,
        stockDescription: string,
        stockImage: string,
        stockPrice?: number | null,
        createdAt: string,
        updatedAt: string,
        contestContestStockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    contestStockFeed?:  {
      __typename: "ModelContestStockFeedConnection",
      items:  Array< {
        __typename: "ContestStockFeed",
        id: string,
        stockFeed: string,
        createdAt: string,
        updatedAt: string,
        contestContestStockFeedId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        msgDateTime?: string | null,
        createdAt: string,
        updatedAt: string,
        userMessageId?: string | null,
        contestMessageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContestMutationVariables = {
  input: DeleteContestInput,
  condition?: ModelContestConditionInput | null,
};

export type DeleteContestMutation = {
  deleteContest?:  {
    __typename: "Contest",
    id: string,
    name: string,
    description: string,
    status: string,
    maxParticipants?: number | null,
    participants?:  {
      __typename: "ModelParticipantConnection",
      items:  Array< {
        __typename: "Participant",
        id: string,
        balanceAmount: number,
        stockCode?: string | null,
        stockUnitBuyPrice?: number | null,
        betType?: string | null,
        stockUnits?: number | null,
        createdAt: string,
        updatedAt: string,
        userParticipantsId?: string | null,
        contestParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderboard?:  {
      __typename: "ModelLeaderboardConnection",
      items:  Array< {
        __typename: "Leaderboard",
        id: string,
        rank?: number | null,
        amount?: number | null,
        createdAt: string,
        updatedAt: string,
        userLeaderboardId?: string | null,
        contestLeaderboardId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    contestDate?: string | null,
    contestStock?:  {
      __typename: "ModelContestStockConnection",
      items:  Array< {
        __typename: "ContestStock",
        id: string,
        stockCode: string,
        stockDescription: string,
        stockImage: string,
        stockPrice?: number | null,
        createdAt: string,
        updatedAt: string,
        contestContestStockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    contestStockFeed?:  {
      __typename: "ModelContestStockFeedConnection",
      items:  Array< {
        __typename: "ContestStockFeed",
        id: string,
        stockFeed: string,
        createdAt: string,
        updatedAt: string,
        contestContestStockFeedId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        msgDateTime?: string | null,
        createdAt: string,
        updatedAt: string,
        userMessageId?: string | null,
        contestMessageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateParticipantMutationVariables = {
  input: CreateParticipantInput,
  condition?: ModelParticipantConditionInput | null,
};

export type CreateParticipantMutation = {
  createParticipant?:  {
    __typename: "Participant",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    balanceAmount: number,
    stockCode?: string | null,
    stockUnitBuyPrice?: number | null,
    betType?: string | null,
    stockUnits?: number | null,
    createdAt: string,
    updatedAt: string,
    userParticipantsId?: string | null,
    contestParticipantsId?: string | null,
  } | null,
};

export type UpdateParticipantMutationVariables = {
  input: UpdateParticipantInput,
  condition?: ModelParticipantConditionInput | null,
};

export type UpdateParticipantMutation = {
  updateParticipant?:  {
    __typename: "Participant",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    balanceAmount: number,
    stockCode?: string | null,
    stockUnitBuyPrice?: number | null,
    betType?: string | null,
    stockUnits?: number | null,
    createdAt: string,
    updatedAt: string,
    userParticipantsId?: string | null,
    contestParticipantsId?: string | null,
  } | null,
};

export type DeleteParticipantMutationVariables = {
  input: DeleteParticipantInput,
  condition?: ModelParticipantConditionInput | null,
};

export type DeleteParticipantMutation = {
  deleteParticipant?:  {
    __typename: "Participant",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    balanceAmount: number,
    stockCode?: string | null,
    stockUnitBuyPrice?: number | null,
    betType?: string | null,
    stockUnits?: number | null,
    createdAt: string,
    updatedAt: string,
    userParticipantsId?: string | null,
    contestParticipantsId?: string | null,
  } | null,
};

export type CreateContestStockMutationVariables = {
  input: CreateContestStockInput,
  condition?: ModelContestStockConditionInput | null,
};

export type CreateContestStockMutation = {
  createContestStock?:  {
    __typename: "ContestStock",
    id: string,
    stockCode: string,
    stockDescription: string,
    stockImage: string,
    stockPrice?: number | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    contestContestStockId?: string | null,
  } | null,
};

export type UpdateContestStockMutationVariables = {
  input: UpdateContestStockInput,
  condition?: ModelContestStockConditionInput | null,
};

export type UpdateContestStockMutation = {
  updateContestStock?:  {
    __typename: "ContestStock",
    id: string,
    stockCode: string,
    stockDescription: string,
    stockImage: string,
    stockPrice?: number | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    contestContestStockId?: string | null,
  } | null,
};

export type DeleteContestStockMutationVariables = {
  input: DeleteContestStockInput,
  condition?: ModelContestStockConditionInput | null,
};

export type DeleteContestStockMutation = {
  deleteContestStock?:  {
    __typename: "ContestStock",
    id: string,
    stockCode: string,
    stockDescription: string,
    stockImage: string,
    stockPrice?: number | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    contestContestStockId?: string | null,
  } | null,
};

export type CreateLeaderboardMutationVariables = {
  input: CreateLeaderboardInput,
  condition?: ModelLeaderboardConditionInput | null,
};

export type CreateLeaderboardMutation = {
  createLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    rank?: number | null,
    amount?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userLeaderboardId?: string | null,
    contestLeaderboardId?: string | null,
  } | null,
};

export type UpdateLeaderboardMutationVariables = {
  input: UpdateLeaderboardInput,
  condition?: ModelLeaderboardConditionInput | null,
};

export type UpdateLeaderboardMutation = {
  updateLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    rank?: number | null,
    amount?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userLeaderboardId?: string | null,
    contestLeaderboardId?: string | null,
  } | null,
};

export type DeleteLeaderboardMutationVariables = {
  input: DeleteLeaderboardInput,
  condition?: ModelLeaderboardConditionInput | null,
};

export type DeleteLeaderboardMutation = {
  deleteLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    rank?: number | null,
    amount?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userLeaderboardId?: string | null,
    contestLeaderboardId?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    msgDateTime?: string | null,
    createdAt: string,
    updatedAt: string,
    userMessageId?: string | null,
    contestMessageId?: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    msgDateTime?: string | null,
    createdAt: string,
    updatedAt: string,
    userMessageId?: string | null,
    contestMessageId?: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    msgDateTime?: string | null,
    createdAt: string,
    updatedAt: string,
    userMessageId?: string | null,
    contestMessageId?: string | null,
  } | null,
};

export type CreateContestStockFeedMutationVariables = {
  input: CreateContestStockFeedInput,
  condition?: ModelContestStockFeedConditionInput | null,
};

export type CreateContestStockFeedMutation = {
  createContestStockFeed?:  {
    __typename: "ContestStockFeed",
    id: string,
    stockFeed: string,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    contestContestStockFeedId?: string | null,
  } | null,
};

export type UpdateContestStockFeedMutationVariables = {
  input: UpdateContestStockFeedInput,
  condition?: ModelContestStockFeedConditionInput | null,
};

export type UpdateContestStockFeedMutation = {
  updateContestStockFeed?:  {
    __typename: "ContestStockFeed",
    id: string,
    stockFeed: string,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    contestContestStockFeedId?: string | null,
  } | null,
};

export type DeleteContestStockFeedMutationVariables = {
  input: DeleteContestStockFeedInput,
  condition?: ModelContestStockFeedConditionInput | null,
};

export type DeleteContestStockFeedMutation = {
  deleteContestStockFeed?:  {
    __typename: "ContestStockFeed",
    id: string,
    stockFeed: string,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    contestContestStockFeedId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    profileImage: string,
    participants?:  {
      __typename: "ModelParticipantConnection",
      items:  Array< {
        __typename: "Participant",
        id: string,
        balanceAmount: number,
        stockCode?: string | null,
        stockUnitBuyPrice?: number | null,
        betType?: string | null,
        stockUnits?: number | null,
        createdAt: string,
        updatedAt: string,
        userParticipantsId?: string | null,
        contestParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderboard?:  {
      __typename: "ModelLeaderboardConnection",
      items:  Array< {
        __typename: "Leaderboard",
        id: string,
        rank?: number | null,
        amount?: number | null,
        createdAt: string,
        updatedAt: string,
        userLeaderboardId?: string | null,
        contestLeaderboardId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        msgDateTime?: string | null,
        createdAt: string,
        updatedAt: string,
        userMessageId?: string | null,
        contestMessageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContestQueryVariables = {
  id: string,
};

export type GetContestQuery = {
  getContest?:  {
    __typename: "Contest",
    id: string,
    name: string,
    description: string,
    status: string,
    maxParticipants?: number | null,
    participants?:  {
      __typename: "ModelParticipantConnection",
      items:  Array< {
        __typename: "Participant",
        id: string,
        balanceAmount: number,
        stockCode?: string | null,
        stockUnitBuyPrice?: number | null,
        betType?: string | null,
        stockUnits?: number | null,
        createdAt: string,
        updatedAt: string,
        userParticipantsId?: string | null,
        contestParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderboard?:  {
      __typename: "ModelLeaderboardConnection",
      items:  Array< {
        __typename: "Leaderboard",
        id: string,
        rank?: number | null,
        amount?: number | null,
        createdAt: string,
        updatedAt: string,
        userLeaderboardId?: string | null,
        contestLeaderboardId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    contestDate?: string | null,
    contestStock?:  {
      __typename: "ModelContestStockConnection",
      items:  Array< {
        __typename: "ContestStock",
        id: string,
        stockCode: string,
        stockDescription: string,
        stockImage: string,
        stockPrice?: number | null,
        createdAt: string,
        updatedAt: string,
        contestContestStockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    contestStockFeed?:  {
      __typename: "ModelContestStockFeedConnection",
      items:  Array< {
        __typename: "ContestStockFeed",
        id: string,
        stockFeed: string,
        createdAt: string,
        updatedAt: string,
        contestContestStockFeedId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        msgDateTime?: string | null,
        createdAt: string,
        updatedAt: string,
        userMessageId?: string | null,
        contestMessageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContestsQueryVariables = {
  filter?: ModelContestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContestsQuery = {
  listContests?:  {
    __typename: "ModelContestConnection",
    items:  Array< {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetParticipantQueryVariables = {
  id: string,
};

export type GetParticipantQuery = {
  getParticipant?:  {
    __typename: "Participant",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    balanceAmount: number,
    stockCode?: string | null,
    stockUnitBuyPrice?: number | null,
    betType?: string | null,
    stockUnits?: number | null,
    createdAt: string,
    updatedAt: string,
    userParticipantsId?: string | null,
    contestParticipantsId?: string | null,
  } | null,
};

export type ListParticipantsQueryVariables = {
  filter?: ModelParticipantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParticipantsQuery = {
  listParticipants?:  {
    __typename: "ModelParticipantConnection",
    items:  Array< {
      __typename: "Participant",
      id: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        profileImage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      contest?:  {
        __typename: "Contest",
        id: string,
        name: string,
        description: string,
        status: string,
        maxParticipants?: number | null,
        contestDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      balanceAmount: number,
      stockCode?: string | null,
      stockUnitBuyPrice?: number | null,
      betType?: string | null,
      stockUnits?: number | null,
      createdAt: string,
      updatedAt: string,
      userParticipantsId?: string | null,
      contestParticipantsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContestStockQueryVariables = {
  id: string,
};

export type GetContestStockQuery = {
  getContestStock?:  {
    __typename: "ContestStock",
    id: string,
    stockCode: string,
    stockDescription: string,
    stockImage: string,
    stockPrice?: number | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    contestContestStockId?: string | null,
  } | null,
};

export type ListContestStocksQueryVariables = {
  filter?: ModelContestStockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContestStocksQuery = {
  listContestStocks?:  {
    __typename: "ModelContestStockConnection",
    items:  Array< {
      __typename: "ContestStock",
      id: string,
      stockCode: string,
      stockDescription: string,
      stockImage: string,
      stockPrice?: number | null,
      contest?:  {
        __typename: "Contest",
        id: string,
        name: string,
        description: string,
        status: string,
        maxParticipants?: number | null,
        contestDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      contestContestStockId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLeaderboardQueryVariables = {
  id: string,
};

export type GetLeaderboardQuery = {
  getLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    rank?: number | null,
    amount?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userLeaderboardId?: string | null,
    contestLeaderboardId?: string | null,
  } | null,
};

export type ListLeaderboardsQueryVariables = {
  filter?: ModelLeaderboardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLeaderboardsQuery = {
  listLeaderboards?:  {
    __typename: "ModelLeaderboardConnection",
    items:  Array< {
      __typename: "Leaderboard",
      id: string,
      rank?: number | null,
      amount?: number | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        profileImage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      contest?:  {
        __typename: "Contest",
        id: string,
        name: string,
        description: string,
        status: string,
        maxParticipants?: number | null,
        contestDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      userLeaderboardId?: string | null,
      contestLeaderboardId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    msgDateTime?: string | null,
    createdAt: string,
    updatedAt: string,
    userMessageId?: string | null,
    contestMessageId?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      message: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        profileImage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      contest?:  {
        __typename: "Contest",
        id: string,
        name: string,
        description: string,
        status: string,
        maxParticipants?: number | null,
        contestDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      msgDateTime?: string | null,
      createdAt: string,
      updatedAt: string,
      userMessageId?: string | null,
      contestMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContestStockFeedQueryVariables = {
  id: string,
};

export type GetContestStockFeedQuery = {
  getContestStockFeed?:  {
    __typename: "ContestStockFeed",
    id: string,
    stockFeed: string,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    contestContestStockFeedId?: string | null,
  } | null,
};

export type ListContestStockFeedsQueryVariables = {
  filter?: ModelContestStockFeedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContestStockFeedsQuery = {
  listContestStockFeeds?:  {
    __typename: "ModelContestStockFeedConnection",
    items:  Array< {
      __typename: "ContestStockFeed",
      id: string,
      stockFeed: string,
      contest?:  {
        __typename: "Contest",
        id: string,
        name: string,
        description: string,
        status: string,
        maxParticipants?: number | null,
        contestDate?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      contestContestStockFeedId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    profileImage: string,
    participants?:  {
      __typename: "ModelParticipantConnection",
      items:  Array< {
        __typename: "Participant",
        id: string,
        balanceAmount: number,
        stockCode?: string | null,
        stockUnitBuyPrice?: number | null,
        betType?: string | null,
        stockUnits?: number | null,
        createdAt: string,
        updatedAt: string,
        userParticipantsId?: string | null,
        contestParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderboard?:  {
      __typename: "ModelLeaderboardConnection",
      items:  Array< {
        __typename: "Leaderboard",
        id: string,
        rank?: number | null,
        amount?: number | null,
        createdAt: string,
        updatedAt: string,
        userLeaderboardId?: string | null,
        contestLeaderboardId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        msgDateTime?: string | null,
        createdAt: string,
        updatedAt: string,
        userMessageId?: string | null,
        contestMessageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    profileImage: string,
    participants?:  {
      __typename: "ModelParticipantConnection",
      items:  Array< {
        __typename: "Participant",
        id: string,
        balanceAmount: number,
        stockCode?: string | null,
        stockUnitBuyPrice?: number | null,
        betType?: string | null,
        stockUnits?: number | null,
        createdAt: string,
        updatedAt: string,
        userParticipantsId?: string | null,
        contestParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderboard?:  {
      __typename: "ModelLeaderboardConnection",
      items:  Array< {
        __typename: "Leaderboard",
        id: string,
        rank?: number | null,
        amount?: number | null,
        createdAt: string,
        updatedAt: string,
        userLeaderboardId?: string | null,
        contestLeaderboardId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        msgDateTime?: string | null,
        createdAt: string,
        updatedAt: string,
        userMessageId?: string | null,
        contestMessageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    profileImage: string,
    participants?:  {
      __typename: "ModelParticipantConnection",
      items:  Array< {
        __typename: "Participant",
        id: string,
        balanceAmount: number,
        stockCode?: string | null,
        stockUnitBuyPrice?: number | null,
        betType?: string | null,
        stockUnits?: number | null,
        createdAt: string,
        updatedAt: string,
        userParticipantsId?: string | null,
        contestParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderboard?:  {
      __typename: "ModelLeaderboardConnection",
      items:  Array< {
        __typename: "Leaderboard",
        id: string,
        rank?: number | null,
        amount?: number | null,
        createdAt: string,
        updatedAt: string,
        userLeaderboardId?: string | null,
        contestLeaderboardId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        msgDateTime?: string | null,
        createdAt: string,
        updatedAt: string,
        userMessageId?: string | null,
        contestMessageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContestSubscriptionVariables = {
  filter?: ModelSubscriptionContestFilterInput | null,
};

export type OnCreateContestSubscription = {
  onCreateContest?:  {
    __typename: "Contest",
    id: string,
    name: string,
    description: string,
    status: string,
    maxParticipants?: number | null,
    participants?:  {
      __typename: "ModelParticipantConnection",
      items:  Array< {
        __typename: "Participant",
        id: string,
        balanceAmount: number,
        stockCode?: string | null,
        stockUnitBuyPrice?: number | null,
        betType?: string | null,
        stockUnits?: number | null,
        createdAt: string,
        updatedAt: string,
        userParticipantsId?: string | null,
        contestParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderboard?:  {
      __typename: "ModelLeaderboardConnection",
      items:  Array< {
        __typename: "Leaderboard",
        id: string,
        rank?: number | null,
        amount?: number | null,
        createdAt: string,
        updatedAt: string,
        userLeaderboardId?: string | null,
        contestLeaderboardId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    contestDate?: string | null,
    contestStock?:  {
      __typename: "ModelContestStockConnection",
      items:  Array< {
        __typename: "ContestStock",
        id: string,
        stockCode: string,
        stockDescription: string,
        stockImage: string,
        stockPrice?: number | null,
        createdAt: string,
        updatedAt: string,
        contestContestStockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    contestStockFeed?:  {
      __typename: "ModelContestStockFeedConnection",
      items:  Array< {
        __typename: "ContestStockFeed",
        id: string,
        stockFeed: string,
        createdAt: string,
        updatedAt: string,
        contestContestStockFeedId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        msgDateTime?: string | null,
        createdAt: string,
        updatedAt: string,
        userMessageId?: string | null,
        contestMessageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContestSubscriptionVariables = {
  filter?: ModelSubscriptionContestFilterInput | null,
};

export type OnUpdateContestSubscription = {
  onUpdateContest?:  {
    __typename: "Contest",
    id: string,
    name: string,
    description: string,
    status: string,
    maxParticipants?: number | null,
    participants?:  {
      __typename: "ModelParticipantConnection",
      items:  Array< {
        __typename: "Participant",
        id: string,
        balanceAmount: number,
        stockCode?: string | null,
        stockUnitBuyPrice?: number | null,
        betType?: string | null,
        stockUnits?: number | null,
        createdAt: string,
        updatedAt: string,
        userParticipantsId?: string | null,
        contestParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderboard?:  {
      __typename: "ModelLeaderboardConnection",
      items:  Array< {
        __typename: "Leaderboard",
        id: string,
        rank?: number | null,
        amount?: number | null,
        createdAt: string,
        updatedAt: string,
        userLeaderboardId?: string | null,
        contestLeaderboardId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    contestDate?: string | null,
    contestStock?:  {
      __typename: "ModelContestStockConnection",
      items:  Array< {
        __typename: "ContestStock",
        id: string,
        stockCode: string,
        stockDescription: string,
        stockImage: string,
        stockPrice?: number | null,
        createdAt: string,
        updatedAt: string,
        contestContestStockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    contestStockFeed?:  {
      __typename: "ModelContestStockFeedConnection",
      items:  Array< {
        __typename: "ContestStockFeed",
        id: string,
        stockFeed: string,
        createdAt: string,
        updatedAt: string,
        contestContestStockFeedId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        msgDateTime?: string | null,
        createdAt: string,
        updatedAt: string,
        userMessageId?: string | null,
        contestMessageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContestSubscriptionVariables = {
  filter?: ModelSubscriptionContestFilterInput | null,
};

export type OnDeleteContestSubscription = {
  onDeleteContest?:  {
    __typename: "Contest",
    id: string,
    name: string,
    description: string,
    status: string,
    maxParticipants?: number | null,
    participants?:  {
      __typename: "ModelParticipantConnection",
      items:  Array< {
        __typename: "Participant",
        id: string,
        balanceAmount: number,
        stockCode?: string | null,
        stockUnitBuyPrice?: number | null,
        betType?: string | null,
        stockUnits?: number | null,
        createdAt: string,
        updatedAt: string,
        userParticipantsId?: string | null,
        contestParticipantsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderboard?:  {
      __typename: "ModelLeaderboardConnection",
      items:  Array< {
        __typename: "Leaderboard",
        id: string,
        rank?: number | null,
        amount?: number | null,
        createdAt: string,
        updatedAt: string,
        userLeaderboardId?: string | null,
        contestLeaderboardId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    contestDate?: string | null,
    contestStock?:  {
      __typename: "ModelContestStockConnection",
      items:  Array< {
        __typename: "ContestStock",
        id: string,
        stockCode: string,
        stockDescription: string,
        stockImage: string,
        stockPrice?: number | null,
        createdAt: string,
        updatedAt: string,
        contestContestStockId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    contestStockFeed?:  {
      __typename: "ModelContestStockFeedConnection",
      items:  Array< {
        __typename: "ContestStockFeed",
        id: string,
        stockFeed: string,
        createdAt: string,
        updatedAt: string,
        contestContestStockFeedId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    message?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        msgDateTime?: string | null,
        createdAt: string,
        updatedAt: string,
        userMessageId?: string | null,
        contestMessageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateParticipantSubscriptionVariables = {
  filter?: ModelSubscriptionParticipantFilterInput | null,
};

export type OnCreateParticipantSubscription = {
  onCreateParticipant?:  {
    __typename: "Participant",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    balanceAmount: number,
    stockCode?: string | null,
    stockUnitBuyPrice?: number | null,
    betType?: string | null,
    stockUnits?: number | null,
    createdAt: string,
    updatedAt: string,
    userParticipantsId?: string | null,
    contestParticipantsId?: string | null,
  } | null,
};

export type OnUpdateParticipantSubscriptionVariables = {
  filter?: ModelSubscriptionParticipantFilterInput | null,
};

export type OnUpdateParticipantSubscription = {
  onUpdateParticipant?:  {
    __typename: "Participant",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    balanceAmount: number,
    stockCode?: string | null,
    stockUnitBuyPrice?: number | null,
    betType?: string | null,
    stockUnits?: number | null,
    createdAt: string,
    updatedAt: string,
    userParticipantsId?: string | null,
    contestParticipantsId?: string | null,
  } | null,
};

export type OnDeleteParticipantSubscriptionVariables = {
  filter?: ModelSubscriptionParticipantFilterInput | null,
};

export type OnDeleteParticipantSubscription = {
  onDeleteParticipant?:  {
    __typename: "Participant",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    balanceAmount: number,
    stockCode?: string | null,
    stockUnitBuyPrice?: number | null,
    betType?: string | null,
    stockUnits?: number | null,
    createdAt: string,
    updatedAt: string,
    userParticipantsId?: string | null,
    contestParticipantsId?: string | null,
  } | null,
};

export type OnCreateContestStockSubscriptionVariables = {
  filter?: ModelSubscriptionContestStockFilterInput | null,
};

export type OnCreateContestStockSubscription = {
  onCreateContestStock?:  {
    __typename: "ContestStock",
    id: string,
    stockCode: string,
    stockDescription: string,
    stockImage: string,
    stockPrice?: number | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    contestContestStockId?: string | null,
  } | null,
};

export type OnUpdateContestStockSubscriptionVariables = {
  filter?: ModelSubscriptionContestStockFilterInput | null,
};

export type OnUpdateContestStockSubscription = {
  onUpdateContestStock?:  {
    __typename: "ContestStock",
    id: string,
    stockCode: string,
    stockDescription: string,
    stockImage: string,
    stockPrice?: number | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    contestContestStockId?: string | null,
  } | null,
};

export type OnDeleteContestStockSubscriptionVariables = {
  filter?: ModelSubscriptionContestStockFilterInput | null,
};

export type OnDeleteContestStockSubscription = {
  onDeleteContestStock?:  {
    __typename: "ContestStock",
    id: string,
    stockCode: string,
    stockDescription: string,
    stockImage: string,
    stockPrice?: number | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    contestContestStockId?: string | null,
  } | null,
};

export type OnCreateLeaderboardSubscriptionVariables = {
  filter?: ModelSubscriptionLeaderboardFilterInput | null,
};

export type OnCreateLeaderboardSubscription = {
  onCreateLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    rank?: number | null,
    amount?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userLeaderboardId?: string | null,
    contestLeaderboardId?: string | null,
  } | null,
};

export type OnUpdateLeaderboardSubscriptionVariables = {
  filter?: ModelSubscriptionLeaderboardFilterInput | null,
};

export type OnUpdateLeaderboardSubscription = {
  onUpdateLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    rank?: number | null,
    amount?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userLeaderboardId?: string | null,
    contestLeaderboardId?: string | null,
  } | null,
};

export type OnDeleteLeaderboardSubscriptionVariables = {
  filter?: ModelSubscriptionLeaderboardFilterInput | null,
};

export type OnDeleteLeaderboardSubscription = {
  onDeleteLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    rank?: number | null,
    amount?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userLeaderboardId?: string | null,
    contestLeaderboardId?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    msgDateTime?: string | null,
    createdAt: string,
    updatedAt: string,
    userMessageId?: string | null,
    contestMessageId?: string | null,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    msgDateTime?: string | null,
    createdAt: string,
    updatedAt: string,
    userMessageId?: string | null,
    contestMessageId?: string | null,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      profileImage: string,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    msgDateTime?: string | null,
    createdAt: string,
    updatedAt: string,
    userMessageId?: string | null,
    contestMessageId?: string | null,
  } | null,
};

export type OnCreateContestStockFeedSubscriptionVariables = {
  filter?: ModelSubscriptionContestStockFeedFilterInput | null,
};

export type OnCreateContestStockFeedSubscription = {
  onCreateContestStockFeed?:  {
    __typename: "ContestStockFeed",
    id: string,
    stockFeed: string,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    contestContestStockFeedId?: string | null,
  } | null,
};

export type OnUpdateContestStockFeedSubscriptionVariables = {
  filter?: ModelSubscriptionContestStockFeedFilterInput | null,
};

export type OnUpdateContestStockFeedSubscription = {
  onUpdateContestStockFeed?:  {
    __typename: "ContestStockFeed",
    id: string,
    stockFeed: string,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    contestContestStockFeedId?: string | null,
  } | null,
};

export type OnDeleteContestStockFeedSubscriptionVariables = {
  filter?: ModelSubscriptionContestStockFeedFilterInput | null,
};

export type OnDeleteContestStockFeedSubscription = {
  onDeleteContestStockFeed?:  {
    __typename: "ContestStockFeed",
    id: string,
    stockFeed: string,
    contest?:  {
      __typename: "Contest",
      id: string,
      name: string,
      description: string,
      status: string,
      maxParticipants?: number | null,
      participants?:  {
        __typename: "ModelParticipantConnection",
        nextToken?: string | null,
      } | null,
      leaderboard?:  {
        __typename: "ModelLeaderboardConnection",
        nextToken?: string | null,
      } | null,
      contestDate?: string | null,
      contestStock?:  {
        __typename: "ModelContestStockConnection",
        nextToken?: string | null,
      } | null,
      contestStockFeed?:  {
        __typename: "ModelContestStockFeedConnection",
        nextToken?: string | null,
      } | null,
      message?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    contestContestStockFeedId?: string | null,
  } | null,
};
