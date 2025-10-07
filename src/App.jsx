import React from 'react';
import './App.css'
import { NavBar } from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Search } from './components/Search/Search';
import { Home } from './components/Home/Home';
import { AllCharacters } from './components/AllCharacters/AllCharacters';





 function App() { 
  

  return (
    <>
    <NavBar/>
      <Routes>   
    <Route path='/' element={<Home/>} />
   <Route path='/search' element={<Search/>}/>
     <Route path='/all' element={<AllCharacters/>}/>
     </Routes>

    </>
  )
}

export default App
