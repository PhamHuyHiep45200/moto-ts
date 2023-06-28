import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: 'http://13.211.94.23:5000/api-json',
  apiFile: './redux/api/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFiles: {
    './redux/api/user.ts': {
      filterEndpoints: [/user/i],
    },
    './redux/api/banner.ts': {
      filterEndpoints: [/banner/i],
    },
    './redux/api/category.ts': {
      filterEndpoints: [/category/i],
    },
    './redux/api/moto.ts': {
      filterEndpoints: [/moto/i],
    },
    './redux/api/order.ts': {
      filterEndpoints: [/order/i],
    },
    './redux/api/upload.ts': {
      filterEndpoints: [/upload/i],
    },
    './redux/api/notify.ts': {
      filterEndpoints: [/notify/i],
    },
    './redux/api/chat.ts': {
      filterEndpoints: [/chat/i],
    },
  },
  exportName: 'motoApi',
  hooks: true,
}

export default config