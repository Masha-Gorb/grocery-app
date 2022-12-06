import React from 'react';
import ReactDOM from 'react-dom/client';
// если используешьь module.css - то лучше все файлы сделать такими.
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
);
reportWebVitals();
