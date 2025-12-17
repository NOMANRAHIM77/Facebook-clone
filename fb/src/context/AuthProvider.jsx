import { createContext, useContext, useReducer, useState } from "react";
import AuthReducer from "../reducer/AuthReducer";


const defaultValue={
    firstName:"",
    lastName:"",
    email:"",
    gender:"",
    dateOfBirth:"",
    isUserLogin:false,
    token:"",
    post:[],
    profile:{}
}

 export const AuthContext =  createContext(null)

const AuthProvider=({children})=>{

    // const [userDetails,setUserDetails] = useState(defaultValue)

    const [state,dispatch] = useReducer(AuthReducer,defaultValue)
   
// console.log(state)
    return(
        <AuthContext.Provider  value={{state,dispatch}} >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider

export const useAuthContext = () =>{
  return useContext(AuthContext)
}