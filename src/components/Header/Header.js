import React from 'react'
import css from './Header.module.scss'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import Logo from '../../Icons/logo.svg'
import { Link } from 'react-router-dom'

export default function Header({ isOpen, setOpen }) {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <div
          className={css.options}
          onClick={() => {
            setOpen(!isOpen)
            console.log(isOpen)
          }}
        >
          {!isOpen ? (
            <MenuOutlined style={{ fontSize: '19px' }} />
          ) : (
            <CloseOutlined style={{ fontSize: '19px' }} />
          )}
        </div>
        <div className={css.icon}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={css.title} onClick={() => setOpen(false)}>
          <Link to="/">TikTok</Link>
        </div>
      </div>
    </div>
  )
}
