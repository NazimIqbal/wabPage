import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

// ReactDOM.render(
//   <BrowserRouter basename="/wabPage">
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );


createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
)
