import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs, useCategories } from "../hooks";

export const Blogs = () =>{
    const {loading, blogs, error, page, setPage, totalPages, selectedCategory, setSelectedCategory} = useBlogs();
    const {categories} = useCategories();

    if (loading) {
        return (
          <div className="min-h-screen bg-white">
            <Appbar />
            <div className="flex justify-center pt-8 pb-16">
                <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4">
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                    </div>
                </div>
            </div>
          </div>
        );
      }
    
      if (error) {
        return (
          <div className="min-h-screen bg-white">
            <Appbar />
            <div className="flex justify-center items-center h-[calc(100vh-64px)]">
                <div className="text-center">
                    <div className="text-red-600 text-xl font-semibold mb-2">Error</div>
                    <p className="text-gray-600">{typeof error === 'string' ? error : 'An unexpected error occurred'}</p>
                </div>
            </div>
          </div>
        );
      }
    return(
        <div className="min-h-screen bg-white">
            <Appbar/>
            <div className="flex justify-center pt-8 pb-16">
                <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
                    <div className="flex-1 max-w-3xl">
                        <div className="mb-8 border-b border-gray-100 pb-4">
                            <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-2">
                                <button 
                                    onClick={() => setSelectedCategory(null)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${selectedCategory === null ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                >
                                    For you
                                </button>
                                {categories.map(cat => (
                                    <button 
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${selectedCategory === cat.id ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            {blogs.length > 0 ? (
                                blogs.map(blog => (
                                    <BlogCard
                                        key={blog.id}
                                        id={blog.id}
                                        authorName={blog.author.name || "Anonymous"}
                                        title={blog.title}
                                        content={blog.content}
                                        description={blog.description}
                                        thumbnail={blog.thumbnail}
                                        publishedDate={blog.createdAt}
                                        // @ts-expect-error: Prisma count for likes is not typed in common
                                        likesCount={blog._count?.likes || 0}
                                        category={blog.category?.name}
                                    />)
                                )
                            ) : (
                                <div className="p-12 text-center text-gray-500 font-serif text-xl italic">
                                    No stories found in this category.
                                </div>
                            )}
                        </div>
                        
                        {blogs.length > 0 && (
                            <div className="flex justify-center items-center gap-4 mt-12 pt-8 border-t border-gray-100">
                                <button 
                                    onClick={() => setPage(page - 1)} 
                                    disabled={page <= 1}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                                        page <= 1 
                                            ? 'text-gray-300 cursor-not-allowed' 
                                            : 'text-gray-900 hover:bg-gray-100 border border-gray-200'
                                    }`}
                                >
                                    Previous
                                </button>
                                <span className="text-gray-500 text-sm font-medium">
                                    Page {page} of {totalPages}
                                </span>
                                <button 
                                    onClick={() => setPage(page + 1)} 
                                    disabled={page >= totalPages}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                                        page >= totalPages
                                            ? 'text-gray-300 cursor-not-allowed' 
                                            : 'text-gray-900 hover:bg-gray-100 border border-gray-200'
                                    }`}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </div>

                    <aside className="hidden lg:block w-80">
                        <div className="sticky top-24 space-y-8">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Discover more of what matters to you</h3>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map(cat => (
                                        <button 
                                            key={cat.id}
                                            onClick={() => setSelectedCategory(cat.id)}
                                            className="px-3 py-1.5 bg-gray-50 rounded-full text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                                        >
                                            {cat.name}
                                        </button>
                                    ))}
                                </div>
                                <button className="mt-4 text-sm text-green-600 hover:text-green-700 font-medium">See more topics</button>
                            </div>
                            <div className="pt-8 border-t border-gray-100">
                                <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                                    <a href="#" className="hover:text-black">Help</a>
                                    <a href="#" className="hover:text-black">Status</a>
                                    <a href="#" className="hover:text-black">About</a>
                                    <a href="#" className="hover:text-black">Careers</a>
                                    <a href="#" className="hover:text-black">Privacy</a>
                                    <a href="#" className="hover:text-black">Terms</a>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}