import React from 'react'
import ReactDOM from 'react-dom/client'
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
import Projects from "./routes/Projects"
import Second from "./routes/second"
import Home from "./routes/home"
import Layout from "./layout" 
import Messy from "./routes/messy"
import './App.css'
import TicTacToe from "./routes/TicTacToe"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element = {<Messy/>}/>
        <Route element = {<Layout/>}>
        <Route path='/Projects' element={<Projects/>}/> 
        <Route path='/Second' element={<Second/>}/> 
        <Route path= '/Home' element = {<Home/>}/>
        <Route path= '/Tictack' element = {<TicTacToe/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
