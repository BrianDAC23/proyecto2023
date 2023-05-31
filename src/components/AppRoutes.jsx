import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Home} from './Home';
import Contacto from './Contacto';
import Post from './Post/PostH'
import {Login} from './Login'
import Register from './Register'

function AppRoutes() {


  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
  )

}

export default AppRoutes;
