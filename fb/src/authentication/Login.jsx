import { useState } from "react"
import { Link } from "react-router-dom";

import Signup from "./Signup"

const Login=()=>{

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [error,setError] = useState({
        email:false,
        password:false
    })

   function handleEmail(e){
setEmail(e.target.value)
   }

   function handleError(){
    if(!password){
setError(
      (prev)=>({
      ...prev,
       password:true
      })
       
)
    }
    if(!email){
setError(
   (prev)=>({
      ...prev,
       email:true
      })
)
    }

    // if(!email && !password){
    //   setError({
    //     email:true,
    //     password:true
    //   })
    // }

   }

    function handlePassword(e){
setPassword(e.target.value)
   }

   function handleSubmit() {
    handleError()
    setEmail("")
    setPassword("")
   }

    return(
<div className="min-h-screen bg-gray-100 flex flex-col md:flex-row justify-center items-center px-6">
      
      {/* Left Section */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-5xl font-bold text-blue-600">facebook</h1>
        <p className="text-2xl mt-4">
          Connect with friends and the world around you on Facebook.
        </p>
      </div>

      {/* Right Section */}
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <input
          type="text"
          placeholder="Email or phone number"
          className="w-full border border-gray-300 rounded-md px-3 py-3 mb-3 focus:outline-blue-500"
          onChange={handleEmail}
          value={email}
        />
         <div className="h-4 w-full mb-2" >{error.email && <p className="text-red-600" >email must not be empty</p>}</div>

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-3 py-3 mb-3 focus:outline-blue-500"
          onChange={handlePassword}
          value={password}
        />
        <div className="h-4 w-full mb-2" >{error.password && <p className="text-red-600" >password must not be empty</p>}</div>

        <button  onClick={handleSubmit} className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700">
          Login
        </button>

        <p className="text-center text-blue-600 mt-3 cursor-pointer hover:underline">
          Forgotten password?
        </p>

        <hr className="my-4" />

        <Link  to={"/signup"} className="w-20 bg-green-600 text-white font-bold py-3 px-23 rounded-md hover:bg-green-700">
          Create new account
        </Link>
      </div>
    </div>
    )
}
export default Login