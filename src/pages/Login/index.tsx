import { FC, ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Form from '../../components/Form'
import Input from '../../components/Input'
import { setUser } from '../../redux/user'
import { UserType } from '../../redux/user/types'

import style from './login.module.scss'

const Main: FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState<UserType>({
    name: '',
  })
  const onSubmit = () => {
    dispatch(setUser(formData))
    history.push('/')
  }

  const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      name: event.target.value,
    }))
  }
  return (
    <main className={style.section}>
      <Form
        title="SignIn"
        styleButton="success"
        buttonValue="Submit"
        onSubmit={onSubmit}
      >
        <Input
          value={formData.name}
          placeholder="What's your name?"
          onInput={onInput}
        />
      </Form>
    </main>
  )
}

export default Main
