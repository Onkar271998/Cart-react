import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import User from "./User"
import Userpage from './Userpage'
import { Datacontext } from '../context/Datacontext'
import Privateroute from "./Privateroute"

const Allroutes = () => {
  const {value}=useContext(Datacontext)
  return (
    <div>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path={value} element={<Privateroute><User/></Privateroute>}/>
          <Route path={`${value}/:user_id`} element={<Privateroute><Userpage/></Privateroute>} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes