import { RootState } from '../store'
import { ContactsStateType, ContactType } from './types'

export const selectContactsState = (state: RootState): ContactsStateType =>
  state.contacts

export const selectContacts = (state: RootState): ContactType[] =>
  selectContactsState(state).contacts

export const selectIsContacts = (state: RootState): boolean =>
  !!selectContacts(state).length
