import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./authentication/Login"
import Signup from "./authentication/Signup";
import PrivateRoute from "./routes/PrivateRoute";
import Layout from "./components/Layout";
import { HomeRoutes } from "./routes/HomeRoutes";

const App=()=>{

return(
<>
<Routes>
<Route  path="/" element={<Login/>}  /> 
<Route  path="/login" element={<Login/>}  />   
<Route  path="/signup" element={<Signup/>}  />

{
    HomeRoutes.map((route)=>{
       return(
          
<Route  path={route.path} element={
   <PrivateRoute>
         <Layout>
             {route.element}
         </Layout>
   </PrivateRoute>
}  />
        
       )
      
    })
}


</Routes>

</>
)
}

export default App