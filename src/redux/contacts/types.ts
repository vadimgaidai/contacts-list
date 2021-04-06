export interface ContactType {
  name: string
  phone: string
  image: string
}

export interface ContactsStateType {
  contacts: ContactType[]
}
