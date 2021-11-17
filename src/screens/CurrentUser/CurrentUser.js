import { LoadingOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import css from './currentUser.module.scss'

export default function CurrentUser({ isOpen }) {
  // планував переробити, вставити в юзефекті на старт сторінці фетч запит із датою куррент юзера і з відти вставити інфу сюди, але не встиг
  // тому запит відправляється по кліку і ава відразу не відтворюється.
  // не можу тут використати тут експортовану функцію через необх очистки юзефекта
  useEffect(() => {
    let controller = new AbortController()
    fetch('https://tiktok33.p.rapidapi.com/user/info/dave.xp', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
      },
      signal: controller.signal,
    })
      .then((res) => res.json())
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
    <div
      className={css.container}
      style={{
        width: `${isOpen ? 'calc(100% - 320px)' : '100%'}`,
      }}
    >
      {error && !isLoading ? (
        <div className={css.errorMessege}>Something go wrong...</div>
      ) : null}
      {isLoading ? (
        <div className={css.loading}>
          <LoadingOutlined style={{ fontSize: '25px' }} />
        </div>
      ) : !error ? (
        <div className={css.startScreen}>
          <div className={css.contentBlock}>
            {/* не знаю що всередині об'єкта. Щось із запитами({killed: false, code: 1, signal: null, cmd: 'python ./scripts/getUserFeed.py dave.xp 10.10.40.6:38003'}) */}
            {/* вставити і налаштувати - не проблема. */}
            <div className={css.title}>TitleName</div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
