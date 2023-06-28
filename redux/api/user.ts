import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    userControllerGetAllUsers: build.query<
      UserControllerGetAllUsersApiResponse,
      UserControllerGetAllUsersApiArg
    >({
      query: (queryArg) => ({
        url: `/user`,
        params: { name: queryArg.name, email: queryArg.email },
      }),
    }),
    userControllerCreateUser: build.mutation<
      UserControllerCreateUserApiResponse,
      UserControllerCreateUserApiArg
    >({
      query: (queryArg) => ({
        url: `/user`,
        method: "POST",
        body: queryArg.createUserDto,
      }),
    }),
    userControllerGetAdmin: build.query<
      UserControllerGetAdminApiResponse,
      UserControllerGetAdminApiArg
    >({
      query: () => ({ url: `/user/admin` }),
    }),
    userControllerUpdateUser: build.mutation<
      UserControllerUpdateUserApiResponse,
      UserControllerUpdateUserApiArg
    >({
      query: (queryArg) => ({
        url: `/user/update-user/${queryArg.idUser}`,
        method: "PUT",
        body: queryArg.updateUserDto,
      }),
    }),
    userControllerDeleteUser: build.mutation<
      UserControllerDeleteUserApiResponse,
      UserControllerDeleteUserApiArg
    >({
      query: (queryArg) => ({
        url: `/user/delete-user/${queryArg.idUser}`,
        method: "PUT",
      }),
    }),
    userControllerUnDeleteUser: build.mutation<
      UserControllerUnDeleteUserApiResponse,
      UserControllerUnDeleteUserApiArg
    >({
      query: (queryArg) => ({
        url: `/user/un-delete-user/${queryArg.idUser}`,
        method: "PUT",
      }),
    }),
    userControllerUserLogin: build.mutation<
      UserControllerUserLoginApiResponse,
      UserControllerUserLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/user/login`,
        method: "POST",
        body: queryArg.authUserDto,
      }),
    }),
    userControllerGetUserById: build.query<
      UserControllerGetUserByIdApiResponse,
      UserControllerGetUserByIdApiArg
    >({
      query: (queryArg) => ({ url: `/user/${queryArg.id}` }),
    }),
    userControllerChangePassWord: build.mutation<
      UserControllerChangePassWordApiResponse,
      UserControllerChangePassWordApiArg
    >({
      query: (queryArg) => ({
        url: `/user/change-password/${queryArg.id}`,
        method: "PUT",
        body: queryArg.changePassWord,
      }),
    }),
    chatControllerGetAllUserChat: build.query<
      ChatControllerGetAllUserChatApiResponse,
      ChatControllerGetAllUserChatApiArg
    >({
      query: () => ({ url: `/chat/user-chat` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as motoApi };
export type UserControllerGetAllUsersApiResponse = unknown;
export type UserControllerGetAllUsersApiArg = {
  name?: string;
  email?: string;
};
export type UserControllerCreateUserApiResponse = unknown;
export type UserControllerCreateUserApiArg = {
  createUserDto: CreateUserDto;
};
export type UserControllerGetAdminApiResponse = unknown;
export type UserControllerGetAdminApiArg = void;
export type UserControllerUpdateUserApiResponse = unknown;
export type UserControllerUpdateUserApiArg = {
  idUser: number;
  updateUserDto: UpdateUserDto;
};
export type UserControllerDeleteUserApiResponse = unknown;
export type UserControllerDeleteUserApiArg = {
  idUser: number;
};
export type UserControllerUnDeleteUserApiResponse = unknown;
export type UserControllerUnDeleteUserApiArg = {
  idUser: number;
};
export type UserControllerUserLoginApiResponse = unknown;
export type UserControllerUserLoginApiArg = {
  authUserDto: AuthUserDto;
};
export type UserControllerGetUserByIdApiResponse = unknown;
export type UserControllerGetUserByIdApiArg = {
  id: number;
};
export type UserControllerChangePassWordApiResponse = unknown;
export type UserControllerChangePassWordApiArg = {
  id: number;
  changePassWord: ChangePassWord;
};
export type ChatControllerGetAllUserChatApiResponse = unknown;
export type ChatControllerGetAllUserChatApiArg = void;
export type CreateUserDto = {
  name: string;
  phone: string;
  email: string;
  password: string;
  role: string;
  deleteFlg: boolean;
};
export type UpdateUserDto = {
  name: string;
  phone: string;
  email: string;
  password: string;
  role: string;
};
export type AuthUserDto = {
  email: string;
  password: string;
};
export type ChangePassWord = {
  passWord: string;
  newPassWord: string;
};
export const {
  useUserControllerGetAllUsersQuery,
  useUserControllerCreateUserMutation,
  useUserControllerGetAdminQuery,
  useUserControllerUpdateUserMutation,
  useUserControllerDeleteUserMutation,
  useUserControllerUnDeleteUserMutation,
  useUserControllerUserLoginMutation,
  useUserControllerGetUserByIdQuery,
  useUserControllerChangePassWordMutation,
  useChatControllerGetAllUserChatQuery,
} = injectedRtkApi;
