import React from 'react'
import { Link } from 'react-router-dom'

import '../Grid.css'
import ItemTable from './ItemTable'
//import Listofscientist from './Listofscientist'

function Admin() {
  return (
    <div className='AdminDashboard'>
       <Link to='/addproject'><button>Add New &#43;</button></Link>
       <ItemTable/>

    </div>
  )
}

export default Admin