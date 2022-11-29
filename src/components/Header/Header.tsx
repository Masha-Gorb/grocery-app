import React from 'react';
import s from './Header.module.css'


export const Header = () => {
  return (
    <div className={s.container}>
      <h1 className={s.logo}>Самокрад</h1>
      <input className={s.input}
             type="text"
             placeholder='Search'/>
    </div>
  )
}