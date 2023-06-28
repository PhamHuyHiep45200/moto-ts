import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    notifyControllerGetNotify: build.query<
      NotifyControllerGetNotifyApiResponse,
      NotifyControllerGetNotifyApiArg
    >({
      query: () => ({ url: `/notify` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as motoApi };
export type NotifyControllerGetNotifyApiResponse = unknown;
export type NotifyControllerGetNotifyApiArg = void;
export const { useNotifyControllerGetNotifyQuery } = injectedRtkApi;
