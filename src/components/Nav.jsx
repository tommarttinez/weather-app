import React from 'react';
import Clima from '../img/elclima2.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link} from 'react-router-dom';


function Nav({onSearch}) {
  return (
  <div className="body">
     {/*Utilizo routing con Link para moverme en diferentes rutas*/}
      <Link to='/'> 
        
          <div className="elclima"> 
            <img id="elclima" src={Clima} width="30" height="30" className="d-inline-block align-top" alt="" />
            <h5 className="titulo">Clima app</h5>
          </div>
        
           
      </Link>  
      <Link to='/about' className='link'>
        <div className="about">
            <h4>About me</h4>
        </div>
      </Link>
      <div className="busqueda"> 
        <SearchBar
          onSearch={onSearch}
        />
      </div>
        
    
  </div>
  );
};

export default Nav;

/*
<nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand">Navbar</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
*/