import { CommentOutlined, HeartFilled, SendOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import convert from '../../utils/convert'
import { getUser } from '../../utils/featchFunctions'
import css from './newsCard.module.scss'
import { Link } from 'react-router-dom'

export default function NewsCard({
  author,
  description,
  videoContent,
  img,
  likesCounts,
  comentsCounts,
  shareCount,
  setUserData,
  id,
}) {
  const hendler = () => {
    console.log(id, 'userId')
    getUser()
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.filter((item) => item.id === id)) //тут фільтер мав би повертати
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className={css.contaner}>
      <div className={css.titleBlock}>
        <div className={css.ava}>
          <img src={img} alt="ava" />
        </div>
        <div className={css.columnBlock}>
          <div className={css.title} onClick={() => hendler()}>
            <Link to="/user">{author}</Link>
          </div>
          <div>{description}</div>
        </div>
      </div>
      <video
        //poster="loading.gif"
        className={css.mediaContent}
        autoPlay
        muted
        controls
      >
        <source src={videoContent} type="video/webm" />
      </video>
      <div className={css.likesIcon}>
        <HeartFilled style={{ fontSize: '25px' }} />
      </div>
      <div className={css.likesCounts}>{convert(likesCounts)}</div>
      <div className={css.comentsIcon}>
        <CommentOutlined style={{ fontSize: '25px' }} />
      </div>
      <div className={css.comentsCounts}>{convert(comentsCounts)}</div>
      <div className={css.sendIcon}>
        <SendOutlined style={{ fontSize: '25px' }} />
      </div>
      <div className={css.shareCount}>{convert(shareCount)}</div>
    </div>
  )
}
