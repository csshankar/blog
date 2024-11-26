import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin = () =>{
return(
    <div>
        <div className="grid md:grid-cols-2  ">
            <div> <Auth type={"signin"}/></div>
            <div className="invisible lg:visible"> <Quote/></div>
         
        </div>
    </div>
)
}