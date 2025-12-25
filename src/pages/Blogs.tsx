import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () =>{
    const {loading, blogs, error, page, setPage, totalPages} = useBlogs();
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
            <p>Error: {typeof error === 'string' ? error : 'An unexpected error occurred'}</p>
          </div>
        );
      }
    return(
        <div>
            <Appbar/>
            <div className="flex md:justify-around pt-8">
                <div className="max-w-2xl w-full px-4">
                    {blogs.map(blog => (
                        <BlogCard
                            key={blog.id}
                            id={blog.id}
                            authorName={blog.author.name}
                            title={blog.title}
                            content={blog.content}
                            publishedDate="21st March 2023"
                        />)
                    )}
                    
                    <div className="flex justify-center items-center gap-4 mt-8 mb-8">
                        <button 
                            onClick={() => setPage(page - 1)} 
                            disabled={page <= 1}
                            className={`px-4 py-2 rounded ${page <= 1 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                        >
                            Previous
                        </button>
                        <span className="text-gray-700">
                            Page {page} of {totalPages}
                        </span>
                        <button 
                            onClick={() => setPage(page + 1)} 
                            disabled={page >= totalPages}
                            className={`px-4 py-2 rounded ${page >= totalPages ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
    }