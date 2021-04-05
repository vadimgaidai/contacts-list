import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateType, UserType } from './types'

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isAuth: false,
  } as StateType,
  reducers: {
    setUser(state: StateType, { payload }: PayloadAction<UserType>) {
      state.user = payload
    },
    setIsAuth(state: StateType, { payload }: PayloadAction<boolean>) {
      state.isAuth = payload
    },
  },
})

export const { setUser, setIsAuth } = actions
export default reducer
