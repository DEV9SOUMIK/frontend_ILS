import React from 'react'
import '../Grid.css'
//import Listofscientist from './Listofscientist'

import ItemTable from './ItemTable'
import { Link } from 'react-router-dom'

function Superadmin() {
  return (
    <div className='SuperAdminDashboard'>
     <Link to='/addproject'><button>Add New &#43;</button></Link>
     <ItemTable/>

    </div>
  )
}

export default Superadmin
