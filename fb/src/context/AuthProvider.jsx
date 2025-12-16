import { createContext, useContext, useState } from "react";


const defaultValue={
    firstName:"",
    lastName:"",
    email:"",
    gender:"",
    dateOfBirth:""
}

 export const AuthContext =  createContext(null)

const AuthProvider=({children})=>{

    const [userDetails,setUserDetails] = useState(defaultValue)
   

    return(
        <AuthContext.Provider  value={{userDetails,setUserDetails}} >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider

export const useAuthContext = () =>{
  return useContext(AuthContext)
}