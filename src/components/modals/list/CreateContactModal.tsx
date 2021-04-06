/* eslint-disable no-unused-expressions */
import { ChangeEvent, FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import ModalWrapper from '../ModalWrapper'
import Form from '../../Form'
import Input from '../../Input'
import { addContact } from '../../../redux/contacts'

interface CreateContactModalType {
  visible: boolean
  onVisible: (data: boolean) => void
}

const CreateContactModal: FC<CreateContactModalType> = ({
  visible,
  onVisible,
}: CreateContactModalType) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    image: 'https://picsum.photos/id/200/300',
    name: '',
    phone: '',
  })

  const onSubmit = () => {
    dispatch(addContact(formData))
  }

  const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <ModalWrapper visible={visible} onVisible={onVisible}>
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
