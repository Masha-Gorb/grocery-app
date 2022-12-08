import React from 'react';
import s from './Header.module.css'
import {Link} from "react-router-dom";


export const Header = () => {
  return (
    <div className={s.container}>

      <h1 className={s.logo}>Самокрад</h1>
      <input className={s.input}
             type="text"
             placeholder='Search'/>
      <div>

        <button className={s.button} data-title=" ваша корзина">
          <Link to="/shoppingCart">🛒</Link>
        </button>

      </div>
    </div>
  )
}