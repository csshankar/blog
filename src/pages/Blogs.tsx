import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () =>{
    const {loading, blogs, error, page, setPage, totalPages} = useBlogs();
    if (loading) {
        return (
          <div className="min-h-screen bg-gray-50">
            <Appbar />
            <div className="flex justify-center pt-8 pb-16">
                <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                    </div>
                </div>
            </div>
          </div>
        );
      }
    
      // Error state
      if (error) {
        return (
          <div className="min-h-screen bg-gray-50">
            <Appbar />
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <div className="text-red-600 text-xl font-semibold mb-2">Error</div>
                    <p className="text-gray-600">{typeof error === 'string' ? error : 'An unexpected error occurred'}</p>
                </div>
            </div>
          </div>
        );
      }
    return(
        <div className="min-h-screen bg-gray-50">
            <Appbar/>
            <div className="flex justify-center pt-8 pb-16">
                <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">All Posts</h1>
                        <p className="text-gray-600">Discover stories, thinking, and expertise from writers on any topic.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        {blogs.length > 0 ? (
                            blogs.map(blog => (
                                <BlogCard
                                    key={blog.id}
                                    id={blog.id}
                                    authorName={blog.author.name}
                                    title={blog.title}
                                    content={blog.content}
                                    publishedDate="21st March 2023"
                                />)
                            )
                        ) : (
                            <div className="p-8 text-center text-gray-500">
                                No blogs found
                            </div>
                        )}
                    </div>
                    
                    {blogs.length > 0 && (
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button 
                                onClick={() => setPage(page - 1)} 
                                disabled={page <= 1}
                                className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                                    page <= 1 
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 shadow-sm'
                                }`}
                            >
                                Previous
                            </button>
                            <span className="text-gray-700 font-medium px-4">
                                Page {page} {totalPages > 1 && `of ${totalPages}`}
                            </span>
                            <button 
                                onClick={() => setPage(page + 1)} 
                                disabled={blogs.length < 10}
                                className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                                    blogs.length < 10
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 shadow-sm'
                                }`}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
    }