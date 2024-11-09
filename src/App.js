
import React from 'react';
import {Routes,Route } from 'react-router-dom';

//css styles
import './App.css';
import './Grid.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//pages
import Login from './assets/Login';
import Projects from './assets/Projects';
import Home from './assets/Home';
import Signin from './assets/Signin';


//component
import Navbar from './component/Navbar';
import { Layout } from './component/common/Layout';
import ExpenseForm from './component/ExpenseForm';
import Project from './component/Project';



function App() {
  return (
    <div className='App'>

   <Navbar/>
   <Routes className='Dashboard'>
      <Route path='/' element={<Layout><Home/></Layout>}/>
      <Route path='/projrctmanager' element={<Projects/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/addproject' element={<ExpenseForm/>}/>
      <Route path='/project/:id' element={<Project/>}/>
      
      
      
   </Routes>
   
  
   </div>
  );
}

export default App;
