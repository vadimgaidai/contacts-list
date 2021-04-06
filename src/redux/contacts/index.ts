import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContactType, ContactsStateType } from './types'

const { actions, reducer } = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  } as ContactsStateType,
  reducers: {
    setContacts(
      state: ContactsStateType,
      { payload }: PayloadAction<ContactType[]>
    ) {
      state.contacts = payload
    },
  },
})

export const { setContacts } = actions
export default reducer
