import SignupSchemas from "../schemas/SignupSchemas";
import Home from "../pages/Home";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { custom } from "zod";
import { useNavigate } from "react-router-dom";
import { UseAppContext } from "../context/AppProvider";
import { useAuthContext } from "../context/AuthProvider";


export default function Signup() {


const {state,dispatch} = useAuthContext()
// console.log(state)

let navigate = useNavigate()

  const months = [
  { value: "Jan", label: "Jan" },
  { value: "Feb", label: "Feb" },
  { value: "Mar", label: "Mar" },
  { value: "Apr", label: "Apr" },
  { value: "May", label: "May" },
  { value: "Jun", label: "Jun" },
  { value: "Jul", label: "Jul" },
  { value: "Aug", label: "Aug" },
  { value: "Sep", label: "Sep" },
  { value: "Oct", label: "Oct" },
  { value: "Nov", label: "Nov" },
  { value: "Dec", label: "Dec" },
];
const years = Array.from({ length: 2025 - 1970 + 1 }, (_, i) => 1970 + i);
const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignupSchemas),
  });

 function onSubmit(data) {
    localStorage.setItem("currentUser",JSON.stringify(data))
// setUserDetails({
//   firstName:data.firstName,
//   lastName:data.lastName,
//   gender:data.gender,
//   email:data.email,
// })

dispatch({
  type:"REGISTER_USER",
  payload:data
})
    if(data.email){
      navigate("/home")
    }
  }


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 px-4">

      {/* Facebook Logo */}
      <h1 className="text-5xl font-bold text-blue-600 mb-4">facebook</h1>

      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        
        <h2 className="text-2xl font-bold text-center">Create a new account</h2>
        <p className="text-center text-gray-600 mb-4">It's quick and easy.</p>
 <form onSubmit={handleSubmit(onSubmit)}>
        {/* First + Last Name */}
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="First name"
            className="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:outline-blue-500"
            {...register("firstName")}
          />
           <p className="text-red-600 text-sm">{errors.firstName?.message}</p>
          <input
            type="text"
            placeholder="Last name"
            className="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:outline-blue-500"
            {...register("lastName")}
          />
          <p className="text-red-600 text-sm">{errors.lastName?.message}</p>
        </div>

        {/* Birthday */}
        <label className="text-sm text-gray-600">Birthday</label>
        <div className="flex gap-3 mb-4">
          <select  {...register("birthdayMonth")}  className="w-1/3 border border-gray-300 rounded-md px-2 py-2 focus:outline-blue-500">
          <option value="" >month</option>
          {months.map((month)=>{
           return  <option value={month.value} >{month.label}</option>
          })}
          </select>

          <select  {...register("birthdayDay")} className="w-1/3 border border-gray-300 rounded-md px-2 py-2 focus:outline-blue-500">
            <option value="" >day</option>
           {
            days.map((day)=>{
              return <option value={day} >{day}</option>
            })
           }
          </select>

          <select  {...register("birthdayYear")} className="w-1/3 border border-gray-300 rounded-md px-2 py-2 focus:outline-blue-500">
             <option value="" >year</option>
            {
              years.map((year)=>{
                 return <option value={year} >{year}</option>
              })
            }
          </select>
        </div>
          <p className="text-red-600 text-sm">
            {errors.birthdayMonth?.message || errors.birthdayDay?.message || errors.birthdayYear?.message}
          </p>
        {/* Gender */}
        <label className="text-sm text-gray-600">Gender</label>
        <div className="flex gap-3 mb-4">
          <label className="flex items-center justify-between w-1/3 border border-gray-300 rounded-md px-3 py-2 cursor-pointer">
            Female
            <input type="radio" value="female" name="gender" className="ml-2"  {...register("gender")} />
          </label>

          <label className="flex items-center justify-between w-1/3 border border-gray-300 rounded-md px-3 py-2 cursor-pointer">
            Male
            <input type="radio"  value="male" name="gender" className="ml-2" {...register("gender")}  />
          </label>

          <label className="flex items-center justify-between w-1/3 border border-gray-300 rounded-md px-3 py-2 cursor-pointer">
            Custom
            <input type="radio"  value="custom" name="gender" className="ml-2"   {...register("gender")} />
          </label>
        </div>
         <p className="text-red-600 text-sm">
          {errors.gender?.message}
          </p>

        {/* Email */}
        <input
          type="text"
          placeholder="Mobile number or email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-blue-500"
          {...register("email")}
        />
          <p  className="text-red-600 text-sm" >{errors.email?.message}</p>
        {/* Password */}
        <input
          type="password"
          placeholder="New password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-blue-500"
          {...register("password")}
        />
        <p className="text-red-600 text-sm" >{errors.password?.message}</p>
        {/* Terms */}
        <p className="text-xs text-gray-600 mb-4">
          People who use our service may have uploaded your contact information to Facebook. 
          <a className="text-blue-600" href="#"> Learn more.</a>
        </p>

        <p className="text-xs text-gray-600 mb-4">
          By clicking Sign Up, you agree to our 
          <a className="text-blue-600" href="#"> Terms</a>, 
          <a className="text-blue-600" href="#"> Privacy Policy</a> and 
          <a className="text-blue-600" href="#"> Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.
        </p>

        {/* Sign Up Button */}
        <button className="w-full bg-green-600 text-white font-bold py-2 rounded-md hover:bg-green-700">
          Sign Up
        </button>

        {/* Footer */}
        <Link  to="/" className="text-center text-blue-600 mt-4 cursor-pointer hover:underline">
          Already have an account?
        </Link>
</form>
      </div>
    </div>
  );
}
