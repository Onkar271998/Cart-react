import React,{createContext, useReducer} from "react";

export const Authcontext=createContext()

const authreducer=(state,action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":{
            return {
                ...state,
                isAuth:true,
                token:action.payload.token
            }
        }
        case "LOGOUT_SUCCESS":{
            return {
                ...state,
                isAuth:false,
                token:null
            }
        }
        default:{
            return state
        }
    }
}

export  const AuthcontextProvider=({children})=>{
    const [state,dispatch]=useReducer(authreducer,{isAuth:false,token:null})
    return (
        <Authcontext.Provider value={{state,dispatch}}>{children}</Authcontext.Provider>
    )
}