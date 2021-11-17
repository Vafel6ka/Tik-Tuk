import React from 'react'
import css from './menu.module.scss'
import { Link } from 'react-router-dom'

export default function Menu({ isOpen, setOpen }) {
  return (
    <div
      className={css.container}
      style={{
        width: `${isOpen ? '320px' : 0}`,
        opacity: `${isOpen ? 1 : 0}`,
        height: `${isOpen ? '137px' : '0px'}`,
      }}
    >
      {' '}
      <div className={css.currentUserBlock}>
        <Link to="/currentUser">
          <div className={css.currentUser} onClick={() => setOpen(false)} />
        </Link>
      </div>
      <div>
        <span className={css.news} onClick={() => setOpen(false)}>
          <Link to="/news">News</Link>
        </span>
      </div>
      <div>
        <span className={css.users}>
          {/* <Link to="/users">Users (disabled)</Link> */}
          Users_(disabled)
        </span>
      </div>
    </div>
  )
}
