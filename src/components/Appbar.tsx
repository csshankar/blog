import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { useUser } from "../hooks"
import { useState, useEffect, useRef } from "react"

export const Appbar = () => {
    const { user } = useUser();
    const navigate = useNavigate();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    }

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    }

    return (
        <div className="border-b border-zinc-200 dark:border-emerald-950/40 bg-white dark:bg-[#0d1511] text-black dark:text-white sticky top-0 z-50 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-4">
                        <Link to="/blogs" className="text-2xl font-black tracking-tight flex items-center gap-2">
                            <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 rounded transition-colors">C</span>
                            <span className="hidden sm:inline font-sans uppercase tracking-widest text-lg">Chronicle</span>
                        </Link>
                    </div>
                   
                    <div className="flex items-center gap-3 sm:gap-6">
                        {/* Theme Changer Toggle */}
                        <button 
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m-9-9h1.5m16.5 0H21m-1.5-6.75-1.07 1.07m-11.23 11.23-1.07 1.07m16.5 0-1.07-1.07M6.75 6.75 5.68 5.68m6.07 11.82a4.5 4.5 0 1 1-6.36-6.36 4.5 4.5 0 0 1 6.36 6.36ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            )}
                        </button>

                        <Link 
                            to="/publish" 
                            className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors text-sm font-semibold"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            <span className="hidden sm:inline">Write</span>
                        </Link>
                        
                        {/* Interactive Profile Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button 
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="cursor-pointer focus:outline-none hover:opacity-80 transition-opacity flex items-center"
                                aria-expanded={menuOpen}
                                aria-haspopup="true"
                            >
                                <Avatar name={user?.name || "Anonymous"} size={8} />
                            </button>
                            
                            {menuOpen && (
                                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden z-50 text-left divide-y divide-zinc-150 dark:divide-zinc-850 animate-fadeIn">
                                    <div className="p-4">
                                        <p className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Signed in as</p>
                                        <p className="font-bold text-sm text-black dark:text-white truncate mt-1">{user?.name || "Anonymous"}</p>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-450 truncate mt-0.5">{user?.username || ""}</p>
                                    </div>
                                    <div className="py-2">
                                        <Link 
                                            to="/publish" 
                                            onClick={() => setMenuOpen(false)}
                                            className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                            Write a story
                                        </Link>
                                    </div>
                                    <div className="py-2">
                                        <button 
                                            onClick={() => {
                                                setMenuOpen(false);
                                                handleLogout();
                                            }}
                                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-650 dark:text-red-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                            </svg>
                                            Sign out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}