import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Root from "./routes/root"
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./routes/error-page"
import First from "./routes/Projects.jsx"
import Second from "./routes/second"
import Home from "./routes/home"
import Layout from "./layout"
import Messy from "./routes/messy"
/* 
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage />,
  },
  {
    path: "/",
    element: <First />,
    errorElement:<ErrorPage />,
  },
  <Main/>
]);*/

export default function Main(){
  return(
    <div>
     #This method has been moved to App
    </div>
  )

}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
