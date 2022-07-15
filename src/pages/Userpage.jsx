import React, { useState,useEffect, useContext} from 'react'
import axios from "axios"
import {useParams,useLocation} from "react-router-dom"
import { Datacontext } from '../context/Datacontext'

const Userpage = () => {
    const params = useParams()
    const location = useLocation()
    // console.log('location:', location)
    // console.log('params:', params)
  
const [loading, setloading] = useState(false)
const [data, setdata] = useState([])

const {value}=useContext(Datacontext)

    useEffect(()=>{
        setloading(true)
        axios({url:`http://localhost:8080/${value}/${params.user_id}`,
        params:{
            page:1
        }
    })
    .then(res=>{
        setloading(false)
        setdata(res.data)
    })
    .catch((err)=>{
        setloading(false)
        console.log(err)
    })
    },[params.user_id])
    // console.log('data1:', data)
    if(loading){
        return <div>loading...</div>
    }
    let user=data
  return (
    <>
    <div>{value} {user?.id}</div>

    <div style={{display:"flex", width:"60%",margin:"auto"}}>

        <div>
         <div><img src={user?.img} style={{ width:"100%", height:"200px"}}/></div>
        </div>

        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",padding:"80px"}}>
         <div>{user?.product}</div>
         <div><h3>{user?.price}</h3></div>
         <div style={{textDecoration:"line-through"}}>{user?.strike}</div>
         <div>{user?.discount}</div>
         <div>Rating:{user?.rating}</div>
         <button>add to cart</button>
        </div>

    </div>
    </>
  )
}

export default Userpage