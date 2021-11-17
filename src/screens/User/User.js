import React from 'react'
import css from './user.module.scss'
import { CaretRightOutlined } from '@ant-design/icons'

//тут мало б показувати контент юзера на ім'я якого клікнули в новинах
// підставив фейкові дані, але не повністю. Планував доробити коли виправлять запити...
//відкрити можна по адресі /user
export default function User({ nickName }) {
  const fakeData = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    4,
    5,
    6,
    7,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
  ]
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.titleBlock}>
          <div className={css.ava}>
            <img src="" alt="ava" />
          </div>
          <div className={css.nickName}>{nickName}</div>
        </div>
        <div className={css.userInfo}>
          <div className={css.col}>
            <span>406</span> <span>Подписки</span>
          </div>
          <div className={css.col}>
            <span>109.9K</span> <span>Подписчики</span>
          </div>
          <div className={css.col}>
            <span>10</span> <span>Лайки</span>
          </div>
        </div>
        <div className={css.mediaContent}>
          {fakeData.map((item, i) => {
            return (
              <div key={i} className={css.mediaItem}>
                <div className={css.caretRightOutlined}>
                  <CaretRightOutlined />
                </div>
                <div className={css.mediaCount}>5</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
