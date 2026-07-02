import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const FullBlog = ({ blog: initialBlog }: { blog: Blog }) => {
    const [blog, setBlog] = useState(initialBlog);
    const [isLiking, setIsLiking] = useState(false);

    const handleLike = async () => {
        if (isLiking) return;
        setIsLiking(true);
        try {
            await axios.post(`${BACKEND_URL}/api/v1/blog/like`, {
                blogId: blog.id
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            
            setBlog(prev => ({
                ...prev,
                isLiked: !prev.isLiked,
                likesCount: (prev.likesCount || 0) + (prev.isLiked ? -1 : 1)
            }));
        } catch (e) {
            console.error(e);
        } finally {
            setIsLiking(false);
        }
    }

    return (
        <div className="min-h-screen bg-white dark:bg-[#0d1511] text-black dark:text-zinc-100 transition-colors duration-200">
            <Appbar />
            <div className="flex justify-center w-full py-12">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <article className="lg:col-span-8">
                            <div className="max-w-3xl mx-auto">
                                <div className="mb-4">
                                    {blog.category && (
                                        <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
                                            {blog.category.name}
                                        </span>
                                    )}
                                </div>
                                <h1 className="text-4xl lg:text-5xl font-black text-black dark:text-white leading-tight mb-6">
                                    {blog.title}
                                </h1>
                                {blog.description && (
                                    <p className="text-xl text-zinc-650 dark:text-zinc-400 mb-8 font-serif leading-relaxed italic">
                                        {blog.description}
                                    </p>
                                )}
                                <div className="flex items-center justify-between mb-10 pb-8 border-b border-zinc-200 dark:border-zinc-850">
                                    <div className="flex items-center gap-4">
                                        <Avatar size={10} name={blog.author.name || "Anonymous"} />
                                        <div>
                                            <div className="font-bold text-black dark:text-white">{blog.author.name || "Anonymous"}</div>
                                            <div className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                                                <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                <span>·</span>
                                                <span>{Math.ceil(blog.content.length / 1000) || 1} min read</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                        <button 
                                            onClick={handleLike}
                                            disabled={isLiking}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${blog.isLiked ? 'bg-red-500/10 text-red-500' : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-250 dark:hover:bg-zinc-800'}`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill={blog.isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                            </svg>
                                            <span className="font-medium">{blog.likesCount || 0}</span>
                                        </button>
                                    </div>
                                </div>
                                {blog.thumbnail && (
                                    <div className="mb-10">
                                        <img src={blog.thumbnail} alt={blog.title} className="w-full h-auto rounded-xl shadow-md border border-zinc-100 dark:border-zinc-900" />
                                    </div>
                                )}
                                <div className="prose prose-zinc dark:prose-invert max-w-none">
                                    <div className="text-zinc-800 dark:text-zinc-200 leading-loose whitespace-pre-wrap text-lg font-serif">
                                        {blog.content}
                                    </div>
                                </div>
                            </div>
                        </article>
                       
                        <aside className="lg:col-span-4 border-l border-zinc-200 dark:border-zinc-850 pl-12 hidden lg:block">
                            <div className="sticky top-24 text-left">
                                <div className="text-zinc-500 dark:text-zinc-400 text-sm font-bold uppercase tracking-widest mb-6">
                                    About the Author
                                </div>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <Avatar size={12} name={blog.author.name || "Anonymous"} />
                                    </div>
                                    <div className="w-full">
                                        <div className="text-xl font-bold text-black dark:text-white mb-2">
                                            {blog.author.name || "Anonymous"}
                                        </div>
                                        <div className="text-base text-zinc-650 dark:text-zinc-400 leading-relaxed mb-6">
                                            Passionately writing about technology, life, and the future. Join me on this journey of discovery and learning.
                                        </div>
                                        <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full font-bold hover:opacity-85 transition-opacity">
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}