/* eslint-disable react/jsx-props-no-spreading */
import { FC, useMemo } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

import { phone, required } from '../../../utils/validation'

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

  const oneContact = useMemo(
    // @ts-ignore
    (): ContactType => contacts?.find(({ id }) => id === contactId),
    [contactId, contacts]
  )

  const onVisible = (isVisible: boolean) => {
    history.push(isVisible ? '/new' : '/')
  }

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: { ...oneContact },
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
      dispatch(editContact(data))
      onVisible(false)
    },
  })

  return (
    <ModalWrapper visible={!!contactId} onVisible={onVisible}>
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

export default EditContactModal
