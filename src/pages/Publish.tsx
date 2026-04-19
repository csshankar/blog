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
        <div className="min-h-screen bg-white">
            <Appbar />
            <div className="flex justify-center w-full pt-8 pb-16"> 
                <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
                    <div className="p-4 md:p-8">
                        <div className="flex items-center justify-between mb-12">
                            <h1 className="text-3xl font-bold text-gray-900">Write a story</h1>
                            <div className="flex items-center gap-4">
                                <select 
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setCategoryId(val === "" ? undefined : Number(val));
                                    }}
                                    className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-full block p-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
                                    className="px-5 py-2 text-sm font-semibold text-white bg-green-600 rounded-full focus:ring-4 focus:ring-green-200 hover:bg-green-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-200"
                                >
                                    Publish
                                </button>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <input 
                                onChange={(e) => setTitle(e.target.value)} 
                                type="text" 
                                className="w-full bg-transparent border-l-2 border-transparent focus:border-gray-200 text-4xl lg:text-5xl font-bold text-gray-900 focus:outline-none placeholder-gray-300 transition-all py-2" 
                                placeholder="Title" 
                            />

                            <div className="space-y-4">
                                <input 
                                    onChange={(e) => setDescription(e.target.value)} 
                                    type="text" 
                                    className="w-full bg-transparent border-b border-gray-100 focus:border-gray-300 text-xl text-gray-600 focus:outline-none placeholder-gray-300 transition-all py-2" 
                                    placeholder="Subtitle or short description..." 
                                />
                                <input 
                                    onChange={(e) => setThumbnail(e.target.value)} 
                                    type="text" 
                                    className="w-full bg-transparent border-b border-gray-100 focus:border-gray-300 text-sm text-gray-500 focus:outline-none placeholder-gray-300 transition-all py-2" 
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
        <div className="w-full">
            <textarea 
                onChange={onChange} 
                id="editor" 
                rows={20} 
                className="focus:outline-none block w-full text-xl text-gray-800 bg-transparent placeholder-gray-300 resize-none transition-all font-serif leading-relaxed" 
                placeholder="Tell your story..." 
                required 
            />
        </div>
    )
}