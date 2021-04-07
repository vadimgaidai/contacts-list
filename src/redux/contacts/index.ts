import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

import { sortByFieldName } from '../../utils/sort'

import { ContactType, ContactsStateType } from './types'

const { actions, reducer } = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  } as ContactsStateType,
  reducers: {
    addContact(
      state: ContactsStateType,
      { payload }: PayloadAction<ContactType>
    ) {
      state.contacts.push({ id: nanoid(), ...payload })
      state.contacts.sort(sortByFieldName<ContactType>('name'))
    },
    editContact(
      state: ContactsStateType,
      { payload }: PayloadAction<ContactType>
    ) {
      const index = state.contacts.findIndex(({ id }) => id === payload.id)
      state.contacts.splice(index, 1, payload)
      state.contacts.sort(sortByFieldName<ContactType>('name'))
    },
  },
})

export const { addContact, editContact } = actions
export default reducer
