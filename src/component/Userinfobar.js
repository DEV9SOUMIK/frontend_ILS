import React from 'react'

import './Components.css';
import '../Grid.css'

import isLogin from '../assets/Home';

function Userinfobar() {
  return (
    <div className='sideBar'>
      <p>
        Userame:
      </p>
      <p>
        Email:
      </p>
      <p>
        Login As:{isLogin}
      </p>
    </div>
  )
}

export default Userinfobar
