import { api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
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
export type CategoryControllerGetCategoryApiResponse = unknown;
export type CategoryControllerGetCategoryApiArg = {
  name?: string;
};
export type CategoryControllerCreateCategoryApiResponse = unknown;
export type CategoryControllerCreateCategoryApiArg = {
  createCategoryDto: CreateCategoryDto;
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
  useCategoryControllerGetCategoryQuery,
  useCategoryControllerCreateCategoryMutation,
  useCategoryControllerUpdateCategoryByIdMutation,
  useCategoryControllerDeleteCategoryByIdMutation,
  useCategoryControllerUnDeleteCategoryByIdMutation,
} = injectedRtkApi;
