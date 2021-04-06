/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'

import { required } from '../../utils/validation'

import Form from '../../components/Form'
import Input from '../../components/Input'
import { setUser } from '../../redux/user'
import { UserType } from '../../redux/user/types'

import style from './login.module.scss'

const Main: FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      name: '',
    },
    validate({ name }) {
      if (required(name)) {
        return {
          name: required(name),
        }
      }
      return {}
    },
    onSubmit(data) {
      dispatch(setUser(data))
      history.push('/')
    },
  })

  return (
    <main className={style.section}>
      <Form
        title="SignIn"
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
          placeholder="What's your name?"
        />
      </Form>
    </main>
  )
}

export default Main
