import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slide/user.slide'
import { api } from './api/emptyApi'

export const store = configureStore({
  reducer: {
    api: api.reducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch