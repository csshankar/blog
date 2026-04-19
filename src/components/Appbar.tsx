import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { useUser } from "../hooks"

export const Appbar = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    }

    return (
        <div className="border-b border-gray-100 bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-4">
                        <Link to="/blogs" className="text-2xl font-bold tracking-tight text-black flex items-center gap-2">
                            <span className="bg-black text-white px-2 py-0.5 rounded">C</span>
                            <span className="hidden sm:inline">Chronicle</span>
                        </Link>
                    </div>
                   
                    <div className="flex items-center gap-3 sm:gap-6">
                        <Link 
                            to="/publish" 
                            className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm font-medium"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            <span className="hidden sm:inline">Write</span>
                        </Link>
                        
                        <div className="flex items-center gap-3">
                            <button 
                                onClick={handleLogout}
                                className="text-sm text-gray-500 hover:text-red-600 transition-colors font-medium"
                            >
                                Sign out
                            </button>
                            <div className="cursor-pointer hover:opacity-80 transition-opacity">
                                <Avatar name={user?.name || "Anonymous"} size={8} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
 