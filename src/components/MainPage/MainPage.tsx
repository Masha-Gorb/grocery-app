import React from 'react';
import s from './MainPage.module.css'
import {ProductCard} from "../ProductCard/ProductCard";
import {ProductsType} from "../../types";

export const MainPage = (props: ProductsType) => {

  return (
    <div className={s.container}>
      <div className={s.productsContainer}>
        {props.state.map(m => {
          return <ProductCard
            key={m.id}
            title={m.title}
            weight={m.weight}
            img={m.img}
          />
        })}
      </div>

    </div>
  )
}