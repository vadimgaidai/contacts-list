/* eslint-disable no-unused-expressions */
import { ChangeEvent, FC, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addContact } from '../../../redux/contacts'
import { ContactType } from '../../../redux/contacts/types'

import ModalWrapper from '../ModalWrapper'
import Form from '../../Form'
import Input from '../../Input'

const CreateContactModal: FC = () => {
  const history = useHistory()
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState<ContactType>({
    name: '',
    phone: '',
    image: 'https://picsum.photos/id/200/300',
  })

  const onVisible = (isVisible: boolean) => {
    history.push(isVisible ? '/new' : '/')
  }

  const onSubmit = () => {
    dispatch(addContact(formData))
    onVisible(false)
  }

  const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <ModalWrapper visible={pathname === '/new'} onVisible={onVisible}>
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

export default CreateContactModal
