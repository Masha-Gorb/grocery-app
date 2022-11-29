import React from 'react';
import s from './MainPage.module.css'
import {ProductCard} from "../ProductCard/ProductCard";
import {ProductsType} from "../../types";
import {Pagination} from "@mui/material";

export const MainPage = (props: ProductsType) => {

  return (
    <div className={s.container}>
      <div className={s.productsContainer}>
        {props.state.map(m => {
          return <ProductCard
            createdAt={m.createdAt}
            id={m.id}
            description={m.description}
            categories={m.categories}
            calories={m.calories}
            title={m.title}
            price={m.price}
            weight={m.weight}
            img={m.img}
          />
        })}
      </div>

      <Pagination count={10} shape="rounded" />

    </div>
  )
}