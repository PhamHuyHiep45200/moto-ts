import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    motoControllerGetMotoAll: build.query<
      MotoControllerGetMotoAllApiResponse,
      MotoControllerGetMotoAllApiArg
    >({
      query: (queryArg) => ({ url: `/moto`, params: { name: queryArg.name } }),
    }),
    motoControllerCreateMoto: build.mutation<
      MotoControllerCreateMotoApiResponse,
      MotoControllerCreateMotoApiArg
    >({
      query: (queryArg) => ({
        url: `/moto`,
        method: "POST",
        body: queryArg.createMotoDto,
      }),
    }),
    motoControllerGetMotoSearch: build.query<
      MotoControllerGetMotoSearchApiResponse,
      MotoControllerGetMotoSearchApiArg
    >({
      query: (queryArg) => ({
        url: `/moto/search`,
        params: { name: queryArg.name },
      }),
    }),
    motoControllerGetMotoById: build.query<
      MotoControllerGetMotoByIdApiResponse,
      MotoControllerGetMotoByIdApiArg
    >({
      query: (queryArg) => ({ url: `/moto/${queryArg.id}` }),
    }),
    motoControllerUpdateMoto: build.mutation<
      MotoControllerUpdateMotoApiResponse,
      MotoControllerUpdateMotoApiArg
    >({
      query: (queryArg) => ({
        url: `/moto/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateMotoDto,
      }),
    }),
    motoControllerGetMotoByStar: build.query<
      MotoControllerGetMotoByStarApiResponse,
      MotoControllerGetMotoByStarApiArg
    >({
      query: () => ({ url: `/moto/get-star/order` }),
    }),
    motoControllerGetMotoPaid: build.query<
      MotoControllerGetMotoPaidApiResponse,
      MotoControllerGetMotoPaidApiArg
    >({
      query: () => ({ url: `/moto/get-paids/order` }),
    }),
    motoControllerGetMotoNew: build.query<
      MotoControllerGetMotoNewApiResponse,
      MotoControllerGetMotoNewApiArg
    >({
      query: () => ({ url: `/moto/get-moto-new/home` }),
    }),
    motoControllerRateMoto: build.mutation<
      MotoControllerRateMotoApiResponse,
      MotoControllerRateMotoApiArg
    >({
      query: (queryArg) => ({
        url: `/moto/rate/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateRateMotoDto,
      }),
    }),
    motoControllerDeleteMoto: build.mutation<
      MotoControllerDeleteMotoApiResponse,
      MotoControllerDeleteMotoApiArg
    >({
      query: (queryArg) => ({
        url: `/moto/delete/${queryArg.id}`,
        method: "PUT",
      }),
    }),
    motoControllerUnDeleteMoto: build.mutation<
      MotoControllerUnDeleteMotoApiResponse,
      MotoControllerUnDeleteMotoApiArg
    >({
      query: (queryArg) => ({
        url: `/moto/un-delete/${queryArg.id}`,
        method: "PUT",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as motoApi };
export type MotoControllerGetMotoAllApiResponse = unknown;
export type MotoControllerGetMotoAllApiArg = {
  name?: string;
};
export type MotoControllerCreateMotoApiResponse = unknown;
export type MotoControllerCreateMotoApiArg = {
  createMotoDto: CreateMotoDto;
};
export type MotoControllerGetMotoSearchApiResponse = unknown;
export type MotoControllerGetMotoSearchApiArg = {
  name?: string;
};
export type MotoControllerGetMotoByIdApiResponse = unknown;
export type MotoControllerGetMotoByIdApiArg = {
  id: number;
};
export type MotoControllerUpdateMotoApiResponse = unknown;
export type MotoControllerUpdateMotoApiArg = {
  id: number;
  updateMotoDto: UpdateMotoDto;
};
export type MotoControllerGetMotoByStarApiResponse = unknown;
export type MotoControllerGetMotoByStarApiArg = void;
export type MotoControllerGetMotoPaidApiResponse = unknown;
export type MotoControllerGetMotoPaidApiArg = void;
export type MotoControllerGetMotoNewApiResponse = unknown;
export type MotoControllerGetMotoNewApiArg = void;
export type MotoControllerRateMotoApiResponse = unknown;
export type MotoControllerRateMotoApiArg = {
  id: number;
  updateRateMotoDto: UpdateRateMotoDto;
};
export type MotoControllerDeleteMotoApiResponse = unknown;
export type MotoControllerDeleteMotoApiArg = {
  id: number;
};
export type MotoControllerUnDeleteMotoApiResponse = unknown;
export type MotoControllerUnDeleteMotoApiArg = {
  id: number;
};
export type CreateMotoDto = {
  name: string;
  producer: string;
  yearOfManufacture: string;
  listThumbnail: string;
  color: string;
  description: string;
  licensePates: string;
  rentCost: number;
  quantity: number;
  categoryId: number;
  deleteFlg: boolean;
};
export type UpdateMotoDto = {
  name: string;
  yearOfManufacture: string;
  listThumbnail: string;
  color: string;
  description: string;
  licensePates: string;
  rentCost: number;
  quantity: number;
  idCategory: number;
};
export type UpdateRateMotoDto = {
  star: number;
  comment: string;
};
export const {
  useMotoControllerGetMotoAllQuery,
  useMotoControllerCreateMotoMutation,
  useMotoControllerGetMotoSearchQuery,
  useMotoControllerGetMotoByIdQuery,
  useMotoControllerUpdateMotoMutation,
  useMotoControllerGetMotoByStarQuery,
  useMotoControllerGetMotoPaidQuery,
  useMotoControllerGetMotoNewQuery,
  useMotoControllerRateMotoMutation,
  useMotoControllerDeleteMotoMutation,
  useMotoControllerUnDeleteMotoMutation,
} = injectedRtkApi;
