import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar />
        <div className="flex justify-center w-full">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold text-left">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Post on 2nd December 2023

                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
               
                    
                    <div className=" w-full hidden md:block pl-2">
                        <div className="text-slate-600 text-lg  flex jutsify-center">
                        Author
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <Avatar size={8} name={blog.author.name || "Anonymous"} />
                            </div>
                            <div>
                                <div className="text-lg font-bold flex justify-stretch">
                                    {blog.author.name || "Anonymous"}
                                </div>
                            </div>
                            </div>
                            <div>
                                <div className="text-slate-500">
                                    Random catch phrase about the author's
                                </div>
                            </div>
                        </div>
                    
              

            </div>
        </div>
    </div>
}