/* eslint-disable linebreak-style */
import React from 'react'
import '../home/index.scss'
import HeaderPage from '../../components/headerPage'
import HeaderTopBar from '../../components/headerTopBar'
import MainMenu from '../../components/mainMenu'
import ListPet from '../../components/listPet'

const Pet = (props) => {
  const logout = () => {
    props.store.Auth.logout()
    props.history.push('/')
  }
  return (
    <div className='wrapper' style={{ height: '100%' }}>
      <HeaderTopBar logout={() => logout()} />
      <HeaderPage />
      <MainMenu />
      <ListPet />
    </div>
  )
}

export default Pet
