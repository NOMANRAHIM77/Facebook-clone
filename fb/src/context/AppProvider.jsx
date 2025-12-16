import { createContext, useContext } from "react";

export const AppContext = createContext(null)

 const AppProvider=({children})=>{

    return(
<AppContext  value={"dark"} >
{children}
</AppContext>
    )
}

export default AppProvider

export const UseAppContext = ()=>{
    return useContext(AppContext)
}