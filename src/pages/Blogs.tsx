import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks";

export const Blogs = () =>{

    const {loading,blogs} = useBlogs();
    if(loading){
        return<div>
            loading....
        </div>
    }
    return(
        <div>
            <Appbar/>
        <div className="flex justify-center pt-5">
            <div className="max-w-xl">
            {blogs.map(blog=><BlogCard
            id ={blog.id}
                authorName={blog.author.name}
                title ={blog.title}
                content={blog.content}
                publishedDate="21st March 2023"
            />)}
           
           
            </div>
        </div>
        </div>
    )
    }