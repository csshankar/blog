import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () =>{
    return (<div className="border-b flex justify-between ">
        <div className="flex pb-2">
           <Link to="/blogs"> Medium </Link>
        </div>
       
        <div className="flex justify-around">
        <Link to="/publish">    
            <Avatar name="Naomi Sora" size={4} />
        </Link>
        </div>




    </div>)
} 