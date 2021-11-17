export function getTreadingFeed() {
  return fetch('https://tiktok33.p.rapidapi.com/trending/feed', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
    },
  })
}

export function getUser() {
  return fetch('https://tiktok33.p.rapidapi.com/trending/feed', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
    },
  })
}

export function getCurrentUser() {
  return fetch('https://tiktok33.p.rapidapi.com/user/info/dave.xp', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
    },
  })
}
