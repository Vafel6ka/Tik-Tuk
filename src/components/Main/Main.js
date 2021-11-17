import React, { useState } from 'react'
import FirstView from '../../screens/FirstView/FirstView'
import Menu from '../Menu/Menu'
import css from './main.module.scss'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import News from '../../screens/News/News'
import User from '../../screens/User/User'
import CurrentUser from '../../screens/CurrentUser/CurrentUser'

export default function Main({ isOpen, setOpen }) {
  const [userData, setUserData] = useState([])
  return (
    <div className={css.container}>
      <Menu isOpen={isOpen} setOpen={setOpen} />
      <Routes>
        <Route exact path="/" element={<FirstView isOpen={isOpen} />} />
        <Route
          exact
          path="/news"
          element={<News setUserData={setUserData} />}
        />
        <Route
          exact
          path="/user"
          element={<User nickName={userData[0]?.nickName} />}
        />
        <Route
          exact
          path="/currentUser"
          element={<CurrentUser isOpen={isOpen} />}
        />
      </Routes>
    </div>
  )
}
