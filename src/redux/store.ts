import {
  CombinedState,
  AnyAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'

import user from './user'
import contacts from './contacts'
import { currentTypes } from '../currentTypes'
import { ContactsStateType } from './contacts/types'
import { UserStateType } from './user/types'

const appReducer = combineReducers({ user, contacts })

const reducer = (
  state:
    | CombinedState<{ user: UserStateType; contacts: ContactsStateType }>
    | undefined,
  action: AnyAction
) => {
  if (action.type === currentTypes.RESET_STORAGE) {
    return appReducer(undefined, { type: undefined })
  }
  return appReducer(state, action)
}

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
