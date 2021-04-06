import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'

import user from './user'

const reducer = combineReducers({ user })

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: true,
      thunk: false,
    }).concat(save()),
  preloadedState: load(),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export default store
