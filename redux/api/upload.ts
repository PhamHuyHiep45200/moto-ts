import { api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    uploadControllerUploadFile: build.mutation<
      UploadControllerUploadFileApiResponse,
      UploadControllerUploadFileApiArg
    >({
      query: (queryArg) => ({
        url: `/upload`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as motoApi };
export type UploadControllerUploadFileApiResponse = unknown;
export type UploadControllerUploadFileApiArg = {
  body: {
    file?: Blob;
  };
};
export const { useUploadControllerUploadFileMutation } = injectedRtkApi;
