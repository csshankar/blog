import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50">
            <Appbar />
            <div className="flex justify-center w-full pt-8 pb-16"> 
                <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-8">Create a new post</h1>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Title
                                </label>
                                <input 
                                    onChange={(e) => {
                                        setTitle(e.target.value)
                                    }} 
                                    type="text" 
                                    className="w-full bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 block p-4 placeholder-gray-400 transition-all" 
                                    placeholder="Enter your post title..." 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Content
                                </label>
                                <TextEditor onChange={(e) => {
                                    setDescription(e.target.value)
                                }} />
                            </div>
                            
                            <div className="flex justify-end pt-4">
                                <button 
                                    onClick={async () => {
                                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                                            title,
                                            content: description
                                        }, {
                                            headers: {
                                                Authorization: localStorage.getItem("token")
                                            }
                                        });
                                        navigate(`/blog/${response.data.id}`)
                                    }} 
                                    type="submit" 
                                    disabled={!title.trim() || !description.trim()}
                                    className="px-6 py-3 text-sm font-semibold text-white bg-green-600 rounded-lg focus:ring-4 focus:ring-green-200 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 shadow-sm hover:shadow-md"
                                >
                                    Publish post
                                </button>
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
                rows={16} 
                className="focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 block w-full px-4 py-4 text-base text-gray-800 bg-white border border-gray-300 rounded-lg placeholder-gray-400 resize-none transition-all" 
                placeholder="Write your article here..." 
                required 
            />
        </div>
    )
}