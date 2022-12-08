import React, {FC, useState} from 'react';
import s from "./ShoppingCartProductCard.module.css";
import {ProductTypeWithM} from "../../types";

const ShoppingCartProductCard:FC<any> = (props: ProductTypeWithM) => {

  const [count, setCount] = useState<any>(0)
  const addItem = () => {
    setCount(count+1)
  }
  const deleteItem = () => {
    setCount(count-1)
  }

  const {title, img, price} = props
  return (
    <div className={s.mainContainer}>
         <h2>{title}</h2>
      <img className={s.img} src={img} alt={'картинка товара'}/>
      <span>{'цена ' + price + ' руб'}</span>
      <div>
        <p>{'количество ' + count}</p>
        <button onClick={addItem}>+</button>
        <button onClick={deleteItem}>-</button>
      </div>
      <button onClick={() => alert('пока не умею удалять')}>X</button>
    </div>
  );
};

export default ShoppingCartProductCard;