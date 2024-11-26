import { Avatar } from "./BlogCard"

export const Appbar = () =>{
    return (<div className="border-b flex justify-between ">
        <div className="flex pb-2">
            Medium
        </div>
       
        <div className="flex justify-around">
            <Avatar name="Sorain Sha" size={5} />
        </div>




    </div>)
} 