import AppProvider from "./AppProvider";
import  AuthProvider  from "./AuthProvider";

const Provider=({children})=>{
    return(
        
<AppProvider>
    <AuthProvider>
        {children}
    </AuthProvider>
</AppProvider>

    )
}

export default Provider

