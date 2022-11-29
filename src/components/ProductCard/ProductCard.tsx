import React from 'react';
import s from './ProductCard.module.css'


export const ProductCard = (props: any) => {

  return (
    <div className={s.container}>
      <h4>{props.title}</h4>
      <img className={s.img} src={props.img} alt='картинка хлеба'/>
      <span>{props.weight}</span>
    </div>
  )
}