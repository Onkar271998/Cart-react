import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios'
import{Link,useSearchParams} from "react-router-dom"
import { Datacontext } from '../context/Datacontext'

const User = () => {
  const [data, setdata] = useState([])

    const [loading, setloading] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams()


    // const [page, setpage] = useState(Number(searchParams.get("page")) ?? 1)
    const [page, setpage] = useState( 1)
    const [limit, setlimit] = useState(6)
    const [total, settotal] = useState(0)
    
    const {value}=useContext(Datacontext)

    useEffect(()=>{
      const get=async()=>{
      setloading(true)
      // setSearchParams({page})
      const r=await axios.get(`http://localhost:8080/${value}?_page=${page}&_limit=${limit}`)
      
        setloading(false)
        setdata(r.data)
        settotal(Number(r.headers["x-total-count"]))
      }
      get()
    },[page,value])
    // console.log('data:', data.data)
    // console.log('total:', total)

 if(loading){
        return <h3>loading...</h3>
    }

let a=data
  // console.log('a:', a)
  return (
    <div>
      <div>
        <button disabled={page<=1} onClick={()=>{if(page>1){setpage(page-1)}}}>-</button>
        <button disabled={total<page*limit} onClick={()=>setpage(page+1)}>+</button>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>

{a?.map((e)=>(
  <div key={e.id} >
    <Link to={`${e.id}`}>
       <img src={e.img} style={{width:"100px",height:"150px"}}/>
       <h4>{e.product}</h4>
    </Link>
  </div>
))}
</div>
    </div>
  )
}

export default User