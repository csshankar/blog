import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () =>{

    const {loading,blogs,error} = useBlogs();
    if(loading){
        return<div>
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
    }
    if (loading) {
        return (
          <div>
            <BlogSkeleton />
          </div>
        );
      }
    
      // Error state
      if (error) {
        return (
          <div>
            <p>Error: {error}</p>
          </div>
        );
      }
    return(
        <div>
            <Appbar/>
        <div className="flex justify-center pt-5">
            <div className="max-w-xl">
            {blogs.map(blog=><BlogCard
             key={blog.id}
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