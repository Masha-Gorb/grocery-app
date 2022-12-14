import React, {useEffect, useState} from "react";
import {CategoriesType, ProductType} from "../../types";
import {getProducts} from "../../helpers/getProducts";
import s from "../ProductPage/ProductPage.module.css";
import n from './MainPage.module.css'
import FilterPanel from "../FilterPanel";
import {ProductPage} from "../ProductPage/ProductPage";
import Layout from "../Layout";

export const MainPage = () => {

  localStorage.setItem('filters', JSON.stringify([]))

  const [filter, setFilter] = useState(['start'])
  const [products, setProducts] = useState<ProductType[]>([])
  const [disabled, setDisable] = useState(true)

  const filterState = (arr: ProductType[], f: CategoriesType[]) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      // let arrCategories = arr[i].categories - можно упростить и показать что ты знаешьь деструктуризацию :3 но это не так важно
      const {categories} = arr[i]
      for (let j = 0; j < categories.length; j++) {
        for (let k = 0; k < f.length; k++) {
          if (f[k] === categories[j]) {
            newArr.push(arr[i])
          }
        }
      }
    }
    const newState = newArr.filter((item, i, ar) => ar.indexOf(item) === i)
    setProducts(newState)
    return newState
  }

  const removeFilterHandler = () => {
    setFilter([])
    localStorage.setItem('filters', JSON.stringify([]))
    setDisable(true)
    setProducts(getProducts())
  }

  const setFilterHandler = (category: string) => {
    // здесь как вариант - при повторном клике на фильтр - убирать его из выбранных
    const newFilters = filter.includes(category) ? filter.filter(el => el !== category) : [category, ...filter]
    setFilter(newFilters)
    localStorage.setItem('filters', JSON.stringify(newFilters))
    // если длина массива фильтров есть - disable убирается
    setDisable(!newFilters.length)
  }

  useEffect(()=>{
    const f = localStorage.getItem('filters')
    if(f){
      setFilter(JSON.parse(f) as string[])
    }
    setProducts(getProducts())
  },[])


  return (
    <div className={n.mainPage}>
      <Layout className={s.layout}>
        <FilterPanel filters={filter} setFilters={setFilterHandler}>
          <br/>
          <button disabled={disabled} className={s.commandButton}
                  onClick={() => filterState(getProducts(), filter)}>
            отфильтровать
          </button>
          <button disabled={disabled} className={s.commandButton}
            // здесь можно сократить
            // onClick={() => removeFilterHandler()}
                  onClick={removeFilterHandler}
          >
            сбросить фильтры
          </button>
        </FilterPanel>

        <ProductPage state={products}/>
      </Layout>

    </div>
  )
}