import { createContext,useState } from "react";
export const Datacontext=createContext()
export const DataProvider =({children})=>{
    const [value, setvalue] = useState("")
   
    
    const show=(e)=>{
        setvalue(e)
        // console.log('value:', value)
    }

    return(
        <Datacontext.Provider value={{show,value}}>{children}</Datacontext.Provider>
    )
}