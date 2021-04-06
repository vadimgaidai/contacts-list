import { ChangeEvent, FC, useEffect, useMemo, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { editContact } from '../../../redux/contacts'
import { ContactType } from '../../../redux/contacts/types'
import { selectContacts } from '../../../redux/contacts/selectors'

import ModalWrapper from '../ModalWrapper'
import Form from '../../Form'
import Input from '../../Input'

const EditContactModal: FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id: contactId } = useParams<{ id: string }>()
  const contacts = useSelector(selectContacts)

  const oneContact = useMemo((): ContactType => {
    const contact = contacts?.find(({ id }) => id === contactId)
    if (contact) {
      return contact
    }
    return {
      image: '',
      name: '',
      phone: '',
    }
  }, [contactId, contacts])

  const [formData, setFormData] = useState<ContactType>({ ...oneContact })
  const onVisible = (isVisible: boolean) => {
    history.push(isVisible ? '/new' : '/')
  }

  const onSubmit = () => {
    dispatch(editContact(formData))
    onVisible(false)
  }

  const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <ModalWrapper visible={!!contactId} onVisible={onVisible}>
      <Form
        title="New contact"
        styleButton="success"
        buttonValue="Submit"
        onSubmit={onSubmit}
      >
        <Input
          name="name"
          value={formData.name}
          placeholder="Contact Name"
          onInput={onInput}
        />
        <Input
          name="phone"
          value={formData.phone}
          placeholder="Contact Phone"
          onInput={onInput}
        />
      </Form>
    </ModalWrapper>
  )
}

export default EditContactModal
