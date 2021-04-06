import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateType, UserType } from './types'

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: {
    user: null,
  } as StateType,
  reducers: {
    setUser(state: StateType, { payload }: PayloadAction<UserType>) {
      state.user = payload
    },
  },
})

export const { setUser } = actions
export default reducer
