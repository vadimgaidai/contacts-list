import { RootState } from '../store'
import { UserStateType, UserType } from './types'

export const selectUserState = (state: RootState): UserStateType => state.user

export const selectUser = (state: RootState): UserType | null =>
  selectUserState(state).user

export const selectIsAuth = (state: RootState): boolean =>
  !!selectUserState(state).user
