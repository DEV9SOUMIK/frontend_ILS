import React from 'react'
import Admin from '../component/Admin'
import Superadmin from '../component/Superadmin'
import Scientist from '../component/Scientist'
import { Link } from 'react-router-dom'



function Home() {

  
  var isLogin = 'Super Admin Login'

  if (isLogin === "Admin Login"){
    return (
       <Admin/>
    )

  }else{
     if (isLogin === "Super Admin Login"){
      return (
         <Superadmin/>
      )
     }else{
      if (isLogin === "Scientist Login"){
        return (
           <Scientist/>
        )
      }else{
        return(
          <>
            <Link to='/login'>Login</Link>
            <Link to='/signin'>Create A Account</Link>
          </>
        )
      }
     }
  }
}

export default Home
