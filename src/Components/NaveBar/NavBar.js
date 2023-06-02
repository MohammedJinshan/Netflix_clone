import React from 'react' ;
import { BsFillBellFill, BsFillHeartFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';


import './NaveBar.css';


function NavBar() {
  return (
    <div className='navbar-top '>
      <div className='fade_top'>
  
      </div>
    <div className="navbar pt-3">
      <div>
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
      </div>
        <div className='txt'> HOME</div>
        <div className='txt'>TV SHOWS</div>
        <div className='txt'>MOVIES</div>
        <div className='txt'>NEW & POPULAR </div>
      
     
    </div>
    <div className='right' >
        <div className='log'>< FaSearch/></div>
        <div className='my'> 
          <div className=''><BsFillHeartFill size={14} /></div> 
          <div className='list'>MY LIST</div>
        </div>
        <div className='bel'><BsFillBellFill/></div>
        <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
    </div>
  )
}

export default NavBar
