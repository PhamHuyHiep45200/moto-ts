import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    chatControllerGetAllUserChat: build.query<
      ChatControllerGetAllUserChatApiResponse,
      ChatControllerGetAllUserChatApiArg
    >({
      query: () => ({ url: `/chat/user-chat` }),
    }),
    chatControllerGetAll: build.query<
      ChatControllerGetAllApiResponse,
      ChatControllerGetAllApiArg
    >({
      query: () => ({ url: `/chat/all` }),
    }),
    chatControllerGetAllChatById: build.query<
      ChatControllerGetAllChatByIdApiResponse,
      ChatControllerGetAllChatByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/chat`,
        params: {
          idPersonSend: queryArg.idPersonSend,
          idPersonRecipient: queryArg.idPersonRecipient,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as motoApi };
export type ChatControllerGetAllUserChatApiResponse = unknown;
export type ChatControllerGetAllUserChatApiArg = void;
export type ChatControllerGetAllApiResponse = unknown;
export type ChatControllerGetAllApiArg = void;
export type ChatControllerGetAllChatByIdApiResponse = unknown;
export type ChatControllerGetAllChatByIdApiArg = {
  idPersonSend: number;
  idPersonRecipient: number;
};
export const {
  useChatControllerGetAllUserChatQuery,
  useChatControllerGetAllQuery,
  useChatControllerGetAllChatByIdQuery,
} = injectedRtkApi;
