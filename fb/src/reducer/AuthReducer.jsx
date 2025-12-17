const AuthReducer=(state,action)=>{
 switch (action.type){
    case "REGISTER_USER":
       console.log("working")
       return{
        ...state,
        email:action.payload.email,
        firstName:action.payload.firstName,
        lastName:action.payload.lastName
       }
    default:
      return state
           
 }
}

export default AuthReducer