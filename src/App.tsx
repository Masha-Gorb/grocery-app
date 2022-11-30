import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {MainPage} from "./components/MainPage/MainPage";
import s from "./components/MainPage/MainPage.module.css";

function App() {
  let state = [
    {
      "createdAt": "2022-11-23T19:50:19.985Z",
      "id": "730718ae-6c31-11ed-a1eb-0242ac120002",
      "categories": ["frozen","meat"],
      "price": 250.19,
      "img": "img/chicken.jpg",
      "description": "Попалась - та, которая клевалась",
      "title": "Курица замороженная",
      "weight": 500,
      "calories": {
        "protein": 32,
        "fat": 10,
        "carbohydrates": 2,
        "amount": 240
      }
    },
    {
      "createdAt": "2022-11-22T19:50:19.985Z",
      "id": "730718ae-6c31-11ed-a1eb-0242ac120003",
      "categories": ["grocery"],
      "price": 59.99,
      "img": "img/pasta.jpg",
      "description": "Самые дешманские",
      "title": "Макароны \"Макфа\"",
      "weight": 400,
      "calories": {
        "protein": 8,
        "fat": 10,
        "carbohydrates": 15,
        "amount": 320
      }
    },
    {
      "createdAt": "2022-10-22T19:50:19.985Z",
      "id": "730718ae-6c31-11ed-a1eb-0242ac120004",
      "categories": ["dairy","sweets"],
      "price": 45.59,
      "img": "img/yogurt.jpg",
      "description": "Лечит от поноса. После чернослива особенно хорош",
      "title": "Йогурт \"Вкусный\"",
      "weight": 400,
      "calories": {
        "protein": 12,
        "fat": 10,
        "carbohydrates": 30,
        "amount": 250
      }
    },
    {
      "createdAt": "2022-11-10T19:50:19.985Z",
      "id": "730718ae-6c31-11ed-a1eb-0242ac120005",
      "categories": ["grocery","vegetables","sweets"],
      "price": 259.0,
      "img": "img/muesli.jpg",
      "description": "С клубничкой, следами арахиса, молочных продуктов и яичного желтка",
      "title": "Мюсли",
      "weight": 350,
      "calories": {
        "protein": 5,
        "fat": 20,
        "carbohydrates": 90,
        "amount": 370
      }
    },
    {
      "createdAt": "2022-09-22T19:50:19.985Z",
      "id": "730718ae-6c31-11ed-a1eb-0242ac120010",
      "categories": ["vegetables"],
      "price": 109.70,
      "img": "img/banana.jpg",
      "description": "Не первой свежести. Зато не зеленые",
      "title": "Бананы",
      "weight": 1200,
      "calories": {
        "protein": 2,
        "fat": 8,
        "carbohydrates": 40,
        "amount": 150
      }
    },
    {
      "createdAt": "2022-09-21T19:50:19.985Z",
      "id": "730718ae-6c31-11ed-a1eb-0242ac120011",
      "categories": ["vegetables","meat","frozen"],
      "price": 385,
      "img": "img/pizza.jpg",
      "description": "Вкуснее чем Dodo",
      "title": "Пицца замороженная",
      "weight": 1200,
      "calories": {
        "protein": 2,
        "fat": 8,
        "carbohydrates": 40,
        "amount": 150
      }
    },
    {
      "createdAt": "2022-10-22T19:50:19.985Z",
      "id": "730718ae-6c31-11ed-a1eb-0242ac120012",
      "categories": ["vegetables"],
      "price": 279.25,
      "img": "img/pancakes.jpg",
      "description": "Как у бабушки",
      "title": "Блины с вишней",
      "weight": 450,
      "calories": {
        "protein": 10,
        "fat": 40,
        "carbohydrates": 90,
        "amount": 350
      }
    },
    {
      "createdAt": "2022-11-22T20:50:19.985Z",
      "id": "730718ae-6c31-11ed-a1eb-0242ac120013",
      "categories": ["grocery"],
      "price": 90,
      "img": "img/rice.jpg",
      "description": "Белый. Но политкорректный",
      "title": "Рис",
      "weight": 850,
      "calories": {
        "protein": 10,
        "fat": 8,
        "carbohydrates": 26,
        "amount": 320
      }
    },
    {
      "createdAt": "2022-10-10T22:50:19.985Z",
      "id": "730718ae-6c31-11ed-a1eb-0242ac120015",
      "categories": ["sweets","frozen"],
      "price": 45.50,
      "img": "img/icecream.jpg",
      "description": "Зимой хуле",
      "title": "Мороженое",
      "weight": 80,
      "calories": {
        "protein": 5,
        "fat": 20,
        "carbohydrates": 40,
        "amount": 340
      }
    },
    {
      "createdAt": "2022-11-15T09:50:19.985Z",
      "id": "730718ae-6c31-11ed-a1eb-0242ac120020",
      "categories": ["meat","dairy"],
      "price": 225.15,
      "img": "img/pork.jpg",
      "description": "Дорого богато. Бешамель",
      "title": "Свинина в сливочном соусе",
      "weight": 150,
      "calories": {
        "protein": 32,
        "fat": 20,
        "carbohydrates": 12,
        "amount": 280
      }
    }
  ]

  let [filter, setFilter] = useState([''])
  let [st, setSt] = useState(state)

  const filterState = (arr:any, f:any) => {
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
    // @ts-ignore
    let newState = [...new Set(newArr)]
    console.log(newState)
    setSt(newState)
    return newState
  }

  const removeFilterHandler = () => {
    setFilter([])
    setSt(state)
  }


  return (
    <div className="App">
      <Header/>

      <div className='buttonGroup'>
        <button className={s.button} onClick={() => setFilter(['grocery', ...filter])}>бакалея</button>
        <button className={s.button} onClick={() => setFilter(['vegetables', ...filter])}>овощи и фрукты</button>
        <button className={s.button} onClick={() => setFilter(['meat', ...filter])}>мясо и птица</button>
        <button className={s.button} onClick={() => setFilter(['diary', ...filter]) }>молочное</button>
        <br/>
        <button className={s.button} onClick={() => setFilter(['sweets', ...filter]) }>сладости</button>
        <button className={s.button} onClick={() => setFilter(['frozen', ...filter]) }>заморозка</button>
        <button className={s.button} onClick={() => setFilter(['eggs', ...filter])}>яйца</button>
        <br/>
        <button onClick={() => filterState(state, filter)}>отфильтровать</button>
        <button onClick={() => alert(filter)}>показать фильтры</button>
        <button onClick={() => removeFilterHandler()}>сбросить фильтры</button>
      </div>

      <MainPage state={st}/>
    </div>
  );
}

export default App;
