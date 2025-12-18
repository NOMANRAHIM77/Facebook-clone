import CreatePost from "./CreatePost"
import Leftbar from "./Leftbar"
import Rightbar from "./Rightbar"

const Home=()=>{

    return(
      <>
      <div  className="flex justify-between" >
        <Leftbar/>
       <CreatePost/>
      <Rightbar/>
      </div>
      </>
    )

}

export default Home