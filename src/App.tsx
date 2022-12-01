import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {MainPage} from "./components/MainPage/MainPage";
import s from "./components/MainPage/MainPage.module.css";
import {CategoriesType, ProductType} from "./types";
import {data} from "./state/scratch";

function App() {

  localStorage.setItem('state', JSON.stringify(data))
  let temporaryState = localStorage.getItem('state')
  // @ts-ignore
  let state = JSON.parse(temporaryState)

  let [filter, setFilter] = useState(['start'])
  let [products, setProducts] = useState(state)
  let [disabled, setDisable] = useState(true)

  const filterState = (arr: ProductType[], f: CategoriesType[]) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      let arrCategories = arr[i].categories
      for (let j = 0; j < arrCategories.length; j++) {
        for (let k = 0; k < f.length; k++) {
          if (f[k] === arrCategories[j]) {
            newArr.push(arr[i])
          }
        }
      }
    }
    let newState = newArr.filter((item, i, ar) => ar.indexOf(item) === i)
    setProducts(newState)
    return newState
  }

  const removeFilterHandler = () => {
    setFilter([])
    setDisable(true)
    setProducts(state)
  }

  const setFilterHandler = (category: string) => {
    setFilter([category, ...filter])
    setDisable(false)
  }

  return (
    <div className="App">
      <Header/>

      <div className='buttonGroup'>
        <button className={filter.includes('grocery') ? s.buttonActive : s.button}
                onClick={() => setFilterHandler('grocery')}>бакалея
        </button>
        <button className={filter.includes('vegetables') ? s.buttonActive : s.button}
                onClick={() => setFilterHandler('vegetables')}>овощи и фрукты</button>
        <button className={filter.includes('meat') ? s.buttonActive : s.button}
                onClick={() => setFilterHandler('meat')}>мясо и птица</button>
        <button className={filter.includes('dairy') ? s.buttonActive : s.button}
                onClick={() => setFilterHandler('dairy')}>молочное</button>
        <br/>
        <button className={filter.includes('sweets') ? s.buttonActive : s.button}
                onClick={() => setFilterHandler('sweets')}>сладости</button>
        <button className={filter.includes('frozen') ? s.buttonActive : s.button}
                onClick={() => setFilterHandler('frozen')}>заморозка</button>
        <button className={filter.includes('eggs') ? s.buttonActive : s.button}
                onClick={() => setFilterHandler('eggs')}>яйца</button>
        <br/>
        <button disabled={disabled} className={s.commandButton} onClick={() => filterState(state, filter)}>отфильтровать</button>
        <button disabled={disabled} className={s.commandButton} onClick={() => removeFilterHandler()}>сбросить фильтры</button>
      </div>

      <MainPage state={products}/>
    </div>
  );
}

export default App;
