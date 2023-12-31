import { useEffect, useState } from 'preact/hooks'
import React from 'react'

const useLightDarkMode = () => {

  const [IsDark, setIsDark] = useState(localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : false)

  useEffect(() => {
    localStorage.setItem('theme',JSON.stringify(IsDark))
    document.body.classList.toggle('dark',IsDark)
  }, [IsDark])
  

  function ChangeTheme() {
    document.body.classList.toggle('dark')
    document.body.classList.toggle('hi')
    
    setIsDark(!IsDark)
  }


  return {IsDark,ChangeTheme}
}

export default useLightDarkMode