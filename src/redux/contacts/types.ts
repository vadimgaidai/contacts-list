export interface ContactType {
  id?: string
  name: string
  phone: string
  image: string
}

export interface ContactsStateType {
  contacts: ContactType[]
}
