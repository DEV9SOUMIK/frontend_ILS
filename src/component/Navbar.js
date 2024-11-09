import React from 'react'
import { NavLink } from 'react-router-dom'


//css file
import './Components.css'
import '../Grid.css'

 function Navbar() {
  return (
    
  <div className='navbar'>
    
    <ul>

        <li>
            <NavLink to='/'><h6>Home</h6></NavLink>
        </li>
        <li>
            <NavLink to='/login'><h6>Login</h6></NavLink>
        </li>
        <li>
            <NavLink to='/signin'><h6>Signin</h6></NavLink>
        </li>
    </ul>
   </div>
  )
}
export default Navbar;
