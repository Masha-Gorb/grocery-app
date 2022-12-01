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
  console.log(typeof state)


  let [filter, setFilter] = useState([''])
  let [products, setProducts] = useState(state)

  const filterState = (arr: ProductType[], f: CategoriesType[]) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      let arrCategories = arr[i].categories
      for (let j = 0; j < arrCategories.length; j++) {
        for (let k = 0; k < f.length; k++) {
          if(f[k] === arrCategories[j]) {
            newArr.push(arr[i])
          }
        }
      }
    }

    let newState  = newArr.filter((item, i, ar) => ar.indexOf(item) === i)
    setProducts(newState)
    return newState
  }

  const removeFilterHandler = () => {
    setFilter([])
    setProducts(state)
  }


  return (
    <div className="App">
      <Header/>

      <div className='buttonGroup'>
        <button className={s.button} onClick={() => setFilter(['grocery', ...filter])}>бакалея</button>
        <button className={s.button} onClick={() => setFilter(['vegetables', ...filter])}>овощи и фрукты</button>
        <button className={s.button} onClick={() => setFilter(['meat', ...filter])}>мясо и птица</button>
        <button className={s.button} onClick={() => setFilter(['dairy', ...filter]) }>молочное</button>
        <br/>
        <button className={s.button} onClick={() => setFilter(['sweets', ...filter]) }>сладости</button>
        <button className={s.button} onClick={() => setFilter(['frozen', ...filter]) }>заморозка</button>
        <button className={s.button} onClick={() => setFilter(['eggs', ...filter])}>яйца</button>
        <br/>
        <button onClick={() => filterState(state, filter)}>отфильтровать</button>
        <button onClick={() => alert(filter)}>показать фильтры</button>
        <button onClick={() => removeFilterHandler()}>сбросить фильтры</button>
      </div>

      <MainPage state={products}/>
    </div>
  );
}

export default App;
