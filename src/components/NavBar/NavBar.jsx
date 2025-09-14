import React from 'react'
import './NavBar.css';
import { NavLink } from 'react-router-dom';


export const NavBar = () => {
  return (
  <>
    <nav className='navigation'>
        <ul className='nav-unordered'>        
            <li className='nav-list'>
            <NavLink to ='/'>Home</NavLink>
            </li>
            <li className='nav-list'>
            <NavLink to ='/search'>Search</NavLink>
            </li>
            <li className='nav-list'>
            <NavLink to ='/favourites'>Favourites</NavLink>
            </li>
            {/* <li className='nav-list'>
                <a href="/">Home</a>
            </li>
            <li className='nav-list'>
                <a href="/search">Search</a>
             </li>
            <li className='nav-list'>
                <a href="/favourites">Favourites</a>
            </li> */}

      </ul>
  
    </nav>
   
    </>
  )
}
