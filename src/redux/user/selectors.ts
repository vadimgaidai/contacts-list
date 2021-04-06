import { RootState } from '../store'
import { StateType, UserType } from './types'

export const selectUserState = (state: RootState): StateType => state.user

export const selectUser = (state: RootState): UserType | null =>
  selectUserState(state).user

export const selectIsAuth = (state: RootState): boolean =>
  !!selectUserState(state).user
