import { FC, useState } from 'react'
import Button from '../../components/Button'
import CreateContactModal from '../../components/modals/list/CreateContactModal'
import style from './main.module.scss'

const Main: FC = () => {
  const [isOpenContactModal, setIsOpenContactModal] = useState(false)
  return (
    <main className={style.section}>
      <div className={style.wrapper}>
        <Button onClick={() => setIsOpenContactModal(true)}>New Contact</Button>
        <Button> Download CSV</Button>
        <CreateContactModal
          visible={isOpenContactModal}
          onVisible={(isVisible) => setIsOpenContactModal(isVisible)}
        />
      </div>
    </main>
  )
}

export default Main
