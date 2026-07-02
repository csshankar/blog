import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { useCategories } from "../hooks";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [categoryId, setCategoryId] = useState<number | undefined>();
    const { categories } = useCategories();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white dark:bg-[#0d1511] text-black dark:text-zinc-100 transition-colors duration-200">
            <Appbar />
            <div className="flex justify-center w-full pt-8 pb-16"> 
                <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
                    <div className="p-4 md:p-8">
                        <div className="flex items-center justify-between mb-12">
                            <h1 className="text-3xl font-black text-black dark:text-white">Write a story</h1>
                            <div className="flex items-center gap-4">
                                <select 
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setCategoryId(val === "" ? undefined : Number(val));
                                    }}
                                    className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm rounded-full block p-2 px-4 focus:outline-none focus:border-black dark:focus:border-white font-medium"
                                >
                                    <option value="">Select Category</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                                <button 
                                    onClick={async () => {
                                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                                            title,
                                            content,
                                            description,
                                            thumbnail,
                                            categoryId
                                        }, {
                                            headers: {
                                                Authorization: `Bearer ${localStorage.getItem("token")}`
                                            }
                                        });
                                        navigate(`/blog/${response.data.id}`)
                                    }} 
                                    type="submit" 
                                    disabled={!title.trim() || !content.trim()}
                                    className="px-5 py-2 text-sm font-semibold text-white dark:text-black bg-black dark:bg-white rounded-full hover:opacity-85 disabled:bg-zinc-150 dark:disabled:bg-zinc-900 disabled:text-zinc-400 dark:disabled:text-zinc-650 disabled:cursor-not-allowed transition-all duration-200"
                                >
                                    Publish
                                </button>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <input 
                                onChange={(e) => setTitle(e.target.value)} 
                                type="text" 
                                className="w-full bg-transparent border-l-2 border-transparent focus:border-zinc-200 dark:focus:border-zinc-800 text-4xl lg:text-5xl font-bold text-black dark:text-white focus:outline-none placeholder-zinc-300 dark:placeholder-zinc-700 transition-all py-2" 
                                placeholder="Title" 
                            />

                            <div className="space-y-4">
                                <input 
                                    onChange={(e) => setDescription(e.target.value)} 
                                    type="text" 
                                    className="w-full bg-transparent border-b border-zinc-100 dark:border-zinc-900 focus:border-zinc-300 dark:focus:border-zinc-750 text-xl text-zinc-700 dark:text-zinc-300 focus:outline-none placeholder-zinc-300 dark:placeholder-zinc-700 transition-all py-2" 
                                    placeholder="Subtitle or short description..." 
                                />
                                <input 
                                    onChange={(e) => setThumbnail(e.target.value)} 
                                    type="text" 
                                    className="w-full bg-transparent border-b border-zinc-100 dark:border-zinc-900 focus:border-zinc-300 dark:focus:border-zinc-750 text-sm text-zinc-500 dark:text-zinc-400 focus:outline-none placeholder-zinc-300 dark:placeholder-zinc-700 transition-all py-2" 
                                    placeholder="Thumbnail image URL (optional)..." 
                                />
                            </div>

                            <div className="pt-4">
                                <TextEditor onChange={(e) => {
                                    setContent(e.target.value)
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return (
        <div className="w-full text-left">
            <textarea 
                onChange={onChange} 
                id="editor" 
                rows={20} 
                className="focus:outline-none block w-full text-xl text-zinc-850 dark:text-zinc-200 bg-transparent placeholder-zinc-300 dark:placeholder-zinc-700 resize-none transition-all font-serif leading-relaxed" 
                placeholder="Tell your story..." 
                required 
            />
        </div>
    )
}