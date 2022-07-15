import axios from 'axios'
import React,{useContext, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Authcontext } from '../context/Authcontext'

const userlogin=({email,password})=>{
    return axios({
        url:"https://reqres.in/api/login",
        method:"POST",
        data:{
            email,
            password
        }
    })
}

const Login = () => {
    const [email, setemail] = useState("eve.holt@reqres.in")
    const [password, setpassword] = useState("cityslicka")
    const{state,dispatch}=useContext(Authcontext)
    const navigate=useNavigate()


const handleform=(e)=>{
    e.preventDefault()
    userlogin({email,password})
    .then(res=>{
        dispatch({
            type:"LOGIN_SUCCESS",
            payload:{
                token:res.data.token
            }
        })
        navigate("/")
    })
}

const logedout=()=>{
     userlogin({email,password})
    .then(res=>{
        dispatch({
            type:"LOGOUT_SUCCESS",
            payload:{
                token:null
            }
        })
        // navigate("/")
    })
}

if(state.isAuth){
    // return <Navigate to="/"/>
    return <div>
        <h3>you are already loged in</h3>
        <button onClick={logedout}>Logout</button>
    </div>
}

  return (
    <div>
        <form onSubmit={handleform}>
            <div>
                <input type="email" value={email} placeholder='email' onChange={e=>setemail(e.target.value)}/>
            </div>
            <div>
                <input type="password" value={password} placeholder='password' onChange={e=>setpassword(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="submit"/>
            </div>
        </form>
    </div>
  )
}

export default Login