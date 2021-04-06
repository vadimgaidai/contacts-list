/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'

import { phone, required } from '../../../utils/validation'

import { addContact } from '../../../redux/contacts'

import ModalWrapper from '../ModalWrapper'
import Form from '../../Form'
import Input from '../../Input'

const CreateContactModal: FC = () => {
  const history = useHistory()
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const onVisible = (isVisible: boolean) => {
    history.push(isVisible ? '/new' : '/')
  }

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      name: '',
      phone: '',
      image: `https://picsum.photos/200/300?random=${Math.floor(
        Math.random() * 100
      )}`,
    },
    validate({ name, phone: phoneNumber }) {
      if (required(name) || phone(phoneNumber)) {
        return {
          name: required(name),
          phone: phone(phoneNumber),
        }
      }
      return {}
    },
    onSubmit(data) {
      dispatch(addContact(data))
      onVisible(false)
    },
  })

  return (
    <ModalWrapper visible={pathname === '/new'} onVisible={onVisible}>
      <Form
        title="New contact"
        styleButton="success"
        buttonValue="Submit"
        onSubmit={handleSubmit}
      >
        <Input
          {...getFieldProps('name')}
          id="name"
          type="text"
          name="name"
          errorValue={touched.name && errors.name ? errors.name : ''}
          placeholder="Contact Name"
        />
        <Input
          {...getFieldProps('phone')}
          id="phone"
          type="phone"
          name="phone"
          errorValue={touched.phone && errors.phone ? errors.phone : ''}
          placeholder="Contact Name"
        />
      </Form>
    </ModalWrapper>
  )
}

export default CreateContactModal
