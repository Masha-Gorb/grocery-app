import React, {useEffect, useState} from 'react';
import s from './MainPage.module.css'
import {ProductCard} from "../ProductCard/ProductCard";
import {ProductsType, ProductType} from "../../types";
import {Pagination} from "@mui/material";
import {usePagination} from "../../hooks/usePagination";

export const MainPage = (props: ProductsType) => {
  const {state} = props

  const getPaginatedItems = (items: ProductType[], firstIndex: number, lastIndex: number) => {
    return items.length ? items.slice(firstIndex, lastIndex) : []
  }

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
  const [paginatedItems, setPaginatedItems] = useState<ProductType[]>([])

  useEffect(() => {
    setPaginatedItems(getPaginatedItems(state, firstContentIndex, lastContentIndex))
  }, [state, firstContentIndex, lastContentIndex])

  const getWithWeight = (weight: number) => {
    const w = weight > 1000 ? weight / 1000 : weight
    const measure = weight > 1000 ? 'кг' : "гр"
    return {
      weight:w,
      measure
    }
  }

  return (
    <div className={s.container}>
      <div className={s.productsContainer}>
        {!!paginatedItems.length && paginatedItems.map(m => {
          return <ProductCard
            createdAt={m.createdAt}
            id={m.id}
            description={m.description}
            categories={m.categories}
            calories={m.calories}
            title={m.title}
            price={m.price}
            // weight={getWithWeight(m.weight).weight}
            weightWithMeasure={getWithWeight(m.weight)}
            // measure={getWithWeight(m.weight).measure}
            img={m.img}
          />
        })}
        {!paginatedItems.length && <div>Нет таких товаров пока</div>}
      </div>

      {!!paginatedItems.length && (
        <div className={s.pagination}>
          <Pagination count={totalPages}
                      page={page}
                      shape="rounded"
                      variant="outlined"
                      color="primary"
                      onChange={(_, num) => setPage(num)}/>
        </div>
      )}

    </div>
  )
}