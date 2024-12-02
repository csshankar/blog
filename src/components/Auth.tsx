import { ChangeEvent, useState } from "react";
import { Link,useNavigate } from "react-router-dom"
import { SignupInput } from "@100xdevs/medium-common";
import axios from "axios";
import {BACKEND_URL} from "../config"


export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })
    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"?"signup": "signin"}`,postInputs);
            const jwt = response.data;
            //const jwt =JSON.stringify(response.data);
          localStorage.setItem("token",jwt);
          console.log("frontend"+ jwt);
            navigate("/blogs");
        }catch(e){
                return ("Authorization failed")
        }
    }
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-bold ">
                        Create Account
                    </div>
                    <div> Already have an account?<Link className="underline pl-1" to={type === "signup" ? "/signin": "/signup"}>{type === "signup" ? "Signin": "Signup"}</Link> </div>
                    <div >
                        {type ==="signup"?
                         <LabelledInput label="Name" placeholder="name" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                name: e.target.value
                            })
                        }} /> :null}
                        <LabelledInput label="Email" placeholder="email" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                username: e.target.value
                            })
                        }} />
                        <LabelledInput label="Password" type={"password"} placeholder="password" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            })
                        }} />
                    </div>
                    <div className="pt-4">
                    <button onClick={sendRequest} className="relative inline-block px-4 py-2 font-medium group">
    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
    <span className="relative text-black group-hover:text-white">{type=== "signup"?"Singup":"Singin"}</span>
</button></div>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <div className="pt-5">
            <label className="block mb-2 text-sm font-semibold text-black dark:text-black text-left">{label}</label>
            <input onChange={onChange} type={type || "text"} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block min-w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-700 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>


    </div>


}