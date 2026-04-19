import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@instructiveagonizing/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config"


export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })
    const [loading, setLoading] = useState(false);

    async function sendRequest() {
        setLoading(true);
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch (e) {
            console.error(e);
            alert("Error while signing up");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 tracking-tight">
                        {type === "signup" ? "Join Medium." : "Welcome back."}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        {type === "signup" ? (
                            <>Already have an account? <Link className="font-medium text-green-600 hover:text-green-500 transition-colors" to="/signin">Sign in</Link></>
                        ) : (
                            <>Don't have an account? <Link className="font-medium text-green-600 hover:text-green-500 transition-colors" to="/signup">Sign up</Link></>
                        )}
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    <div className="space-y-4">
                        {type === "signup" && (
                            <LabelledInput 
                                label="Name" 
                                placeholder="What's your name?" 
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

                    <div>
                        <button 
                            onClick={sendRequest} 
                            disabled={loading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-full text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            {loading ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                type === "signup" ? "Sign up" : "Sign in"
                            )}
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500 uppercase tracking-widest text-xs font-semibold">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        <button className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-full bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Google
                        </button>
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