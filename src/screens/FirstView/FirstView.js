import React from 'react'
import css from './firstView.module.scss'

export default function FirstView({ isOpen }) {
  return (
    <div
      className={css.container}
      style={{
        width: `${isOpen ? 'calc(100% - 320px)' : '100%'}`,
      }}
    >
      <h1>News</h1>
      <div className={css.startScreen}>
        <div className={css.contentBlock}>
          <div className={css.leftBlock}>
            <p className={css.title}>Fjkflskjsd</p>
            <p className={css.contentLeftBlock}>
              «Сделать учителей страны известными и узнаваемыми, усилить их
              влияние на школьников и популяризировать успешные практики ведения
              социальных сетей – такие цели мы ставили перед нашим первым,
              совместным с TikTok, Всероссийским конкурсом #УчителяТикТок. Нам
              было важно показать учителям, что, помимо занятий в школе, у них
              есть возможность делиться своими знаниями и полезными навыками с
              многомиллионным сообществом пользователей соцсетей по всему миру,
              создавая уникальный образовательный видеоконтент. Результаты нас,
              безусловно, поразили: тысячи учителей начали создавать
              образовательный контент, и их видео посмотрели свыше 220 млн
              раз!».
            </p>
          </div>
          <div className={css.rightBlock}>
            <figure className={css.figure} />
          </div>
        </div>
      </div>
    </div>
  )
}
