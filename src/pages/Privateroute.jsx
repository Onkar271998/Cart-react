import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Authcontext } from '../context/Authcontext'
 


const Privateroute = ({children}) => {
    const {state}=useContext(Authcontext)

    if(!state.isAuth){
        return <Navigate to="/"/>
    }
  return children
}

export default Privateroute