import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    bannerControllerCreateBanner: build.mutation<
      BannerControllerCreateBannerApiResponse,
      BannerControllerCreateBannerApiArg
    >({
      query: (queryArg) => ({
        url: `/banner`,
        method: "POST",
        body: queryArg.createBanner,
      }),
    }),
    bannerControllerGetBanner: build.query<
      BannerControllerGetBannerApiResponse,
      BannerControllerGetBannerApiArg
    >({
      query: () => ({ url: `/banner` }),
    }),
    bannerControllerUpdateBanner: build.mutation<
      BannerControllerUpdateBannerApiResponse,
      BannerControllerUpdateBannerApiArg
    >({
      query: (queryArg) => ({
        url: `/banner/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateBanner,
      }),
    }),
    bannerControllerDeleteBanner: build.mutation<
      BannerControllerDeleteBannerApiResponse,
      BannerControllerDeleteBannerApiArg
    >({
      query: (queryArg) => ({
        url: `/banner/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as motoApi };
export type BannerControllerCreateBannerApiResponse = unknown;
export type BannerControllerCreateBannerApiArg = {
  createBanner: CreateBanner;
};
export type BannerControllerGetBannerApiResponse = unknown;
export type BannerControllerGetBannerApiArg = void;
export type BannerControllerUpdateBannerApiResponse = unknown;
export type BannerControllerUpdateBannerApiArg = {
  id: number;
  updateBanner: UpdateBanner;
};
export type BannerControllerDeleteBannerApiResponse = unknown;
export type BannerControllerDeleteBannerApiArg = {
  id: number;
};
export type CreateBanner = {
  link: string;
  thumbnail: string;
};
export type UpdateBanner = {
  link: string;
  thumbnail: string;
};
export const {
  useBannerControllerCreateBannerMutation,
  useBannerControllerGetBannerQuery,
  useBannerControllerUpdateBannerMutation,
  useBannerControllerDeleteBannerMutation,
} = injectedRtkApi;
