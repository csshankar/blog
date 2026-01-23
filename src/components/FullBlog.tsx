import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Appbar />
            <div className="flex justify-center w-full py-12">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <article className="lg:col-span-8">
                            <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12">
                                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                                    {blog.title}
                                </h1>
                                <div className="flex items-center gap-3 text-gray-500 mb-8 pb-6 border-b border-gray-200">
                                    <span className="text-sm">Posted on 2nd December 2023</span>
                                    <span className="text-gray-300">·</span>
                                    <span className="text-sm">{Math.ceil(blog.content.length / 100)} min read</span>
                                </div>
                                <div className="prose prose-lg max-w-none">
                                    <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-base lg:text-lg">
                                        {blog.content}
                                    </div>
                                </div>
                            </div>
                        </article>
                       
                        <aside className="lg:col-span-4">
                            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                                <div className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-4">
                                    Author
                                </div>
                                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                                    <div className="mb-4">
                                        <Avatar size={12} name={blog.author.name || "Anonymous"} />
                                    </div>
                                    <div className="w-full">
                                        <div className="text-xl font-bold text-gray-900 mb-2">
                                            {blog.author.name || "Anonymous"}
                                        </div>
                                        <div className="text-sm text-gray-500 leading-relaxed">
                                            Writer and storyteller sharing thoughts and experiences.
                                        </div>
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