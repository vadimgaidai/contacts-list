import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
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
    },
    editContact(
      state: ContactsStateType,
      { payload }: PayloadAction<ContactType>
    ) {
      const index = state.contacts.findIndex(({ id }) => id === payload.id)
      state.contacts.splice(index, 1, payload)
    },
  },
})

export const { addContact, editContact } = actions
export default reducer
