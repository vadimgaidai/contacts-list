import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserStateType, UserType } from './types'

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: {
    user: null,
  } as UserStateType,
  reducers: {
    setUser(state: UserStateType, { payload }: PayloadAction<UserType>) {
      state.user = payload
    },
  },
})

export const { setUser } = actions
export default reducer
