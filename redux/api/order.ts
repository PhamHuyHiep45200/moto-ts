import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    orderControllerGetOrderAll: build.query<
      OrderControllerGetOrderAllApiResponse,
      OrderControllerGetOrderAllApiArg
    >({
      query: () => ({ url: `/order` }),
    }),
    orderControllerCreateOrder: build.mutation<
      OrderControllerCreateOrderApiResponse,
      OrderControllerCreateOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/order`,
        method: "POST",
        body: queryArg.createOrderDto,
      }),
    }),
    orderControllerGetOrderById: build.query<
      OrderControllerGetOrderByIdApiResponse,
      OrderControllerGetOrderByIdApiArg
    >({
      query: (queryArg) => ({ url: `/order/${queryArg.id}` }),
    }),
    orderControllerUpdateOrder: build.mutation<
      OrderControllerUpdateOrderApiResponse,
      OrderControllerUpdateOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/order/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateOrderDto,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as motoApi };
export type OrderControllerGetOrderAllApiResponse = unknown;
export type OrderControllerGetOrderAllApiArg = void;
export type OrderControllerCreateOrderApiResponse = unknown;
export type OrderControllerCreateOrderApiArg = {
  createOrderDto: CreateOrderDto;
};
export type OrderControllerGetOrderByIdApiResponse = unknown;
export type OrderControllerGetOrderByIdApiArg = {
  id: number;
};
export type OrderControllerUpdateOrderApiResponse = unknown;
export type OrderControllerUpdateOrderApiArg = {
  id: number;
  updateOrderDto: UpdateOrderDto;
};
export type CreateOrderDto = {
  rentalStartDate: string;
  numberDateRental: number;
  allMoney: number;
  idCard: string;
  receivingAddress: string;
  statusOrder: string;
  idMoto: number;
  idUserReceiver: number;
};
export type UpdateOrderDto = {
  idUser: number;
  statusOrder: string;
};
export const {
  useOrderControllerGetOrderAllQuery,
  useOrderControllerCreateOrderMutation,
  useOrderControllerGetOrderByIdQuery,
  useOrderControllerUpdateOrderMutation,
} = injectedRtkApi;
