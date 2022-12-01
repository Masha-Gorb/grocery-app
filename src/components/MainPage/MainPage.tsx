import React from 'react';
import s from './MainPage.module.css'
import {ProductCard} from "../ProductCard/ProductCard";
import {ProductsType} from "../../types";
import {Pagination} from "@mui/material";
import {usePagination} from "../../hooks/usePagination";

export const MainPage = (props: ProductsType) => {

  const {
    firstContentIndex,
    lastContentIndex,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 4,
    count: props.state.length,
  });

  return (
    <div className={s.container}>
      <div className={s.productsContainer}>
        {props.state
          .slice(firstContentIndex, lastContentIndex)
          .map(m => {
          return <ProductCard
            createdAt={m.createdAt}
            id={m.id}
            description={m.description}
            categories={m.categories}
            calories={m.calories}
            title={m.title}
            price={m.price}
            weight={m.weight>1000 ? m.weight/1000: m.weight}
            img={m.img}
          />
        })}
      </div>

      <div className={s.pagination}>
        <Pagination count={totalPages}
                    page={page}
                    shape="rounded"
                    variant="outlined"
                    color="primary"
                    onChange={(_, num) => setPage(num)}/>
      </div>

    </div>
  )
}