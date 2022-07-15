import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css"
import { Datacontext } from '../context/Datacontext';
import { Authcontext } from '../context/Authcontext';


const Navbar = () => {

  const {show}=useContext(Datacontext)
  const{state}=useContext(Authcontext)

 
   const activeStyle={
        color:"red"
    }
    const style={
        color:"white"
    }
  return (
    <div className={styles.div}>
        <NavLink className={styles.text} style={({isActive})=>(isActive ? activeStyle : style)} to="/">HOME</NavLink>
        <NavLink className={styles.text} style={({isActive})=>(isActive ? activeStyle : style)} to="/about">ABOUT</NavLink>
        <NavLink className={styles.text} style={({isActive})=>(isActive ? activeStyle : style)} to="/men" onClick={()=>show("men")}>MEN</NavLink>
        <NavLink className={styles.text} style={({isActive})=>(isActive ? activeStyle : style)} to="/women" onClick={()=>show("women")}>WOMEN</NavLink>
        <NavLink className={styles.text} style={({isActive})=>(isActive ? activeStyle : style)} to="/kids" onClick={()=>show("kids")}>KIDS</NavLink>
        <NavLink className={styles.text} style={({isActive})=>(isActive ? activeStyle : style)} to="/login" >{state.isAuth ? "LOGOUT" : "LOGIN"}</NavLink>
    </div>
  )
}

export default Navbar