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
    return (
        <div className="h-screen flex justify-center flex-col bg-white">
            <div className="flex justify-center">
                <div className="w-full max-w-md">
                    <div className="px-8 py-10">
                        <div className="text-4xl font-bold text-gray-900 mb-2">
                            {type === "signup" ? "Create an account" : "Welcome back"}
                        </div>
                        <div className="text-gray-600 mb-8">
                            {type === "signup" ? (
                                <>Already have an account? <Link className="text-green-600 hover:text-green-700 font-medium underline" to="/signin">Sign in</Link></>
                            ) : (
                                <>Don't have an account? <Link className="text-green-600 hover:text-green-700 font-medium underline" to="/signup">Sign up</Link></>
                            )}
                        </div>
                        <div className="space-y-5">
                            {type === "signup" && (
                                <LabelledInput 
                                    label="Name" 
                                    placeholder="Enter your name" 
                                    onChange={(e) => {
                                        setPostInputs({
                                            ...postInputs,
                                            name: e.target.value
                                        })
                                    }} 
                                />
                            )}
                            <LabelledInput 
                                label="Email" 
                                placeholder="Enter your email" 
                                onChange={(e) => {
                                    setPostInputs({
                                        ...postInputs,
                                        username: e.target.value
                                    })
                                }} 
                            />
                            <LabelledInput 
                                label="Password" 
                                type={"password"} 
                                placeholder="Enter your password" 
                                onChange={(e) => {
                                    setPostInputs({
                                        ...postInputs,
                                        password: e.target.value
                                    })
                                }} 
                            />
                        </div>
                        <div className="pt-6">
                            <button 
                                onClick={sendRequest} 
                                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                            >
                                {type === "signup" ? "Sign up" : "Sign in"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700 text-left">
                {label}
            </label>
            <input 
                onChange={onChange} 
                type={type || "text"} 
                className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 block p-3 placeholder-gray-400 transition-all" 
                placeholder={placeholder} 
                required 
            />
        </div>
    )
}