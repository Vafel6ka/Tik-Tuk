import { LoadingOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import NewsCard from '../../components/NewsCard/NewsCard'
import css from './news.module.scss'

export default function News({ setUserData }) {
  useEffect(() => {
    let controller = new AbortController()
    fetch('https://tiktok33.p.rapidapi.com/user/feed/dave.xp', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
      },
      signal: controller.signal,
    })
      .then((res) => {
        console.log(res, 'res!')
        return res.json()
      })
      .then((data) => {
        setLoading(false)
        console.log(data, 'authorMeta')
        setData([...data])
      })
      .catch((err) => {
        console.log(err, 'err')
        setError(true)
      })
    return () => controller?.abort()
  }, [])

  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  return (
    <div className={css.contaner}>
      {error && !isLoading ? (
        <div className={css.errorMessege}>Something go wrong...</div>
      ) : null}
      {isLoading ? (
        <div className={css.loading}>
          <LoadingOutlined style={{ fontSize: '25px' }} />
        </div>
      ) : (
        data?.map((item, i) => (
          <React.Fragment key={i}>
            <NewsCard
              author={item.authorMeta.nickName}
              description={item.text}
              videoContent={item.videoUrl}
              img={item.authorMeta.avatar}
              likesCounts={item.diggCount}
              comentsCounts={item.commentCount}
              shareCount={item.shareCount}
              setUserData={setUserData}
              id={item.authorMeta.id} //по пам'яті
            />
          </React.Fragment>
        ))
      )}
    </div>
  )
}
