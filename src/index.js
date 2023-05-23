import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./styles.css";
import "./fonts/Swis721_Lt_BT/Swiss721LightBT.ttf"
import "./fonts/Swis721_Lt_BT/Sw721Lt.ttf"
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);

