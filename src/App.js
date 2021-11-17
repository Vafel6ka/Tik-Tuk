import React, { useState } from 'react'
import css from './App.module.scss'
import Main from './components/Main/Main'
import Header from './components/Header/Header'

function App() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className={css.app}>
      <Header isOpen={isOpen} setOpen={setOpen} />
      <Main isOpen={isOpen} setOpen={setOpen} />
    </div>
  )
}

export default App
