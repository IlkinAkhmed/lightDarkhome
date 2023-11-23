import { useEffect, useState } from 'preact/hooks'
import React from 'react'

const UseLightDarkMode = () => {

  const [IsDark, setIsDark] = useState(localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : false)

  useEffect(() => {
    localStorage.setItem('theme',JSON.stringify(IsDark))
    document.body.classList.toggle('dark',IsDark)
  }, [IsDark])
  

  function ChangeTheme() {
    document.body.classList.toggle('dark')
    setIsDark(!IsDark)
  }


  return {IsDark,ChangeTheme}
}

export default UseLightDarkMode