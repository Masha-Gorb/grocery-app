import React, {FC} from 'react';
import s from './ShoppingCart.module.css'
import {Link} from "react-router-dom";

const ShoppingCart:FC<any> = () => {
  return (
    <div className={s.container}>
      <h1>Корзина с покупками</h1>
      <button><Link to="/">к продуктам</Link>
      </button>
    </div>
  );
};

export default ShoppingCart;