import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    categoryControllerGetCategoryAll: build.query<
      CategoryControllerGetCategoryAllApiResponse,
      CategoryControllerGetCategoryAllApiArg
    >({
      query: (queryArg) => ({
        url: `/category/all`,
        params: { name: queryArg.name },
      }),
    }),
    categoryControllerGetCategory: build.query<
      CategoryControllerGetCategoryApiResponse,
      CategoryControllerGetCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/category`,
        params: { name: queryArg.name },
      }),
    }),
    categoryControllerCreateCategory: build.mutation<
      CategoryControllerCreateCategoryApiResponse,
      CategoryControllerCreateCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/category`,
        method: "POST",
        body: queryArg.createCategoryDto,
      }),
    }),
    categoryControllerGetCategoryById: build.query<
      CategoryControllerGetCategoryByIdApiResponse,
      CategoryControllerGetCategoryByIdApiArg
    >({
      query: (queryArg) => ({ url: `/category/${queryArg.id}` }),
    }),
    categoryControllerUpdateCategoryById: build.mutation<
      CategoryControllerUpdateCategoryByIdApiResponse,
      CategoryControllerUpdateCategoryByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/category/update/${queryArg.idCategory}`,
        method: "PUT",
        body: queryArg.updateCategoryDto,
      }),
    }),
    categoryControllerDeleteCategoryById: build.mutation<
      CategoryControllerDeleteCategoryByIdApiResponse,
      CategoryControllerDeleteCategoryByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/category/delete/${queryArg.idCategory}`,
        method: "PUT",
      }),
    }),
    categoryControllerUnDeleteCategoryById: build.mutation<
      CategoryControllerUnDeleteCategoryByIdApiResponse,
      CategoryControllerUnDeleteCategoryByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/category/un-delete/${queryArg.idCategory}`,
        method: "PUT",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as motoApi };
export type CategoryControllerGetCategoryAllApiResponse = unknown;
export type CategoryControllerGetCategoryAllApiArg = {
  name?: string;
};
export type CategoryControllerGetCategoryApiResponse = unknown;
export type CategoryControllerGetCategoryApiArg = {
  name?: string;
};
export type CategoryControllerCreateCategoryApiResponse = unknown;
export type CategoryControllerCreateCategoryApiArg = {
  createCategoryDto: CreateCategoryDto;
};
export type CategoryControllerGetCategoryByIdApiResponse = unknown;
export type CategoryControllerGetCategoryByIdApiArg = {
  id: number;
};
export type CategoryControllerUpdateCategoryByIdApiResponse = unknown;
export type CategoryControllerUpdateCategoryByIdApiArg = {
  idCategory: number;
  updateCategoryDto: UpdateCategoryDto;
};
export type CategoryControllerDeleteCategoryByIdApiResponse = unknown;
export type CategoryControllerDeleteCategoryByIdApiArg = {
  idCategory: number;
};
export type CategoryControllerUnDeleteCategoryByIdApiResponse = unknown;
export type CategoryControllerUnDeleteCategoryByIdApiArg = {
  idCategory: number;
};
export type CreateCategoryDto = {
  name: string;
  thumnail: string;
  deleteFlg: boolean;
};
export type UpdateCategoryDto = {
  name: string;
  thumnail: string;
};
export const {
  useCategoryControllerGetCategoryAllQuery,
  useCategoryControllerGetCategoryQuery,
  useCategoryControllerCreateCategoryMutation,
  useCategoryControllerGetCategoryByIdQuery,
  useCategoryControllerUpdateCategoryByIdMutation,
  useCategoryControllerDeleteCategoryByIdMutation,
  useCategoryControllerUnDeleteCategoryByIdMutation,
} = injectedRtkApi;
