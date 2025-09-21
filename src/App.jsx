import React from 'react';
import './App.css'
import { NavBar } from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Search } from './components/Search/Search';
import { Home } from './components/Home/Home';
import { Favourites } from './components/pages/Favourites';





 function App() { 
  

  return (
    <>
    <NavBar/>
      <Routes>   
    <Route path='/' element={<Home/>} />
   <Route path='/search' element={<Search/>}/>
     <Route path='/favourites' element={<Favourites/>}/>
     </Routes>

    </>
  )
}

export default App
