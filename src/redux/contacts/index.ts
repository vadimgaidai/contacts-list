import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
      state.contacts.push(payload)
    },
  },
})

export const { addContact } = actions
export default reducer
