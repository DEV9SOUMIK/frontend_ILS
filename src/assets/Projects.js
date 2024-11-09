import React from 'react'
import { Link } from 'react-router-dom'
//import { Button } from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

 
export default function Projects() {
  return (
   <div>
    <Link to={"/addproject"}><button className='btn btn-primary'>New projects</button></Link>
   </div>
  )
}
