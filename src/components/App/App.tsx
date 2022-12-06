import React from 'react';
import {Header} from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import ShoppingCart from "../ShoppingCart";
import {MainPage} from "../MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Header/>

        <Routes>
          <Route path="/" element={<MainPage/>}>
          </Route>
          <Route path="/shoppingCart" element={<ShoppingCart/>}>
          </Route>
        </Routes>

    </div>
  );
}

export default App;
