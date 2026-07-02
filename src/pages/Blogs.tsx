import { Appbar } from "../components/Appbar"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs, useCategories } from "../hooks";
import { Link } from "react-router-dom";

export const Blogs = () => {
    const {
        loading, 
        blogs, 
        error, 
        page, 
        setPage, 
        totalPages, 
        selectedCategory, 
        setSelectedCategory,
        searchQuery,
        setSearchQuery
    } = useBlogs();
    const { categories } = useCategories();

    if (loading) {
        return (
          <div className="min-h-screen bg-white dark:bg-[#0d1511] text-black dark:text-white transition-colors duration-200">
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
          <div className="min-h-screen bg-white dark:bg-[#0d1511] text-black dark:text-white transition-colors duration-200">
            <Appbar />
            <div className="flex justify-center items-center h-[calc(100vh-64px)]">
                <div className="text-center px-4">
                    <div className="text-red-500 text-xl font-bold mb-2">Error</div>
                    <p className="text-zinc-600 dark:text-zinc-400">{typeof error === 'string' ? error : 'An unexpected error occurred'}</p>
                </div>
            </div>
          </div>
        );
      }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0d1511] font-sans text-slate-900 dark:text-slate-100 selection:bg-[#fabc2c] selection:text-black transition-colors duration-200">
            <Appbar/>
            
            {/* Elegant Hero header with search and stats - Inspired by x.webp */}
            <div className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-slate-50 dark:from-[#112419] dark:to-[#0d1511] border-b border-emerald-100 dark:border-emerald-950/40 py-16 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-[radial-gradient(#fabc2c_1px,transparent_1px)] opacity-5 [background-size:24px_24px]"></div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    <div className="lg:col-span-7 space-y-6 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/30 text-[#e4a81b] dark:text-[#fabc2c] text-xs font-bold uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#fabc2c] animate-pulse"></span>
                            Chronicle Platform
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-emerald-950 dark:text-white">
                            The <span className="text-[#fabc2c] underline decoration-wavy decoration-[#fabc2c]/40 underline-offset-8">#1 Site</span> for Creative Writing
                        </h1>
                        <p className="text-base md:text-lg text-emerald-900/80 dark:text-slate-300 max-w-xl font-normal leading-relaxed">
                            Discover the world's top articles, expertise, and resources. Search through thousands of curated posts.
                        </p>
                        
                        {/* Stats Section matching x.webp */}
                        <div className="grid grid-cols-3 gap-6 pt-4 border-t border-emerald-200 dark:border-emerald-900/20 max-w-md">
                            <div>
                                <div className="text-2xl font-black text-emerald-900 dark:text-[#fabc2c]">45k+</div>
                                <div className="text-xs text-emerald-800/60 dark:text-slate-450 font-semibold uppercase tracking-wider">Active Readers</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-emerald-900 dark:text-[#fabc2c]">50+</div>
                                <div className="text-xs text-emerald-800/60 dark:text-slate-450 font-semibold uppercase tracking-wider">Mentors</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-emerald-900 dark:text-[#fabc2c]">150+</div>
                                <div className="text-xs text-emerald-800/60 dark:text-slate-450 font-semibold uppercase tracking-wider">Categories</div>
                            </div>
                        </div>
                    </div>

                    {/* Elegant Search Panel matching x.webp's interactive card box - aligned with theme */}
                    <div className="lg:col-span-5 bg-white dark:bg-[#122319] border border-slate-200 dark:border-emerald-800/20 p-6 rounded-3xl shadow-xl dark:shadow-2xl relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#fabc2c]/5 blur-3xl rounded-full"></div>
                        <h3 className="text-emerald-900 dark:text-[#fabc2c] text-sm font-bold uppercase tracking-widest mb-4">Discover Top Stories</h3>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest text-left">Search Keywords</label>
                                <div className="relative">
                                    <input 
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Enter keywords..."
                                        className="w-full bg-slate-50 dark:bg-[#0a120d] border border-slate-200 dark:border-emerald-900/60 rounded-xl py-3 pl-4 pr-10 text-sm focus:outline-none focus:border-[#fabc2c] transition-colors placeholder-slate-400 dark:placeholder-emerald-900 text-slate-800 dark:text-white font-medium"
                                    />
                                    <svg className="w-5 h-5 text-emerald-700 absolute right-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest text-left">Category Filter</label>
                                <select 
                                    value={selectedCategory || ""}
                                    onChange={(e) => setSelectedCategory(e.target.value ? Number(e.target.value) : null)}
                                    className="w-full bg-slate-50 dark:bg-[#0a120d] border border-slate-200 dark:border-emerald-900/60 rounded-xl py-2.5 px-3 text-xs focus:outline-none focus:border-[#fabc2c] text-slate-800 dark:text-slate-300 font-medium"
                                >
                                    <option value="">All Categories</option>
                                    {categories.map(c => (
                                        <option key={c.id} value={c.id}>{c.name}</option>
                                    ))}
                                </select>
                            </div>
                            
                            {(searchQuery || selectedCategory) && (
                                <button 
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedCategory(null);
                                    }}
                                    className="w-full bg-emerald-50 dark:bg-[#fabc2c]/10 text-emerald-900 dark:text-[#fabc2c] border border-emerald-200 dark:border-[#fabc2c]/20 hover:bg-emerald-100 dark:hover:bg-[#fabc2c]/20 py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all"
                                >
                                    Reset Filters
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-8">
                    
                    {/* Topic Selector Category Pill Bar */}
                    <div className="flex items-center justify-between border-b border-emerald-100 dark:border-emerald-950/20 pb-4">
                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                            <button 
                                onClick={() => setSelectedCategory(null)}
                                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${selectedCategory === null ? 'bg-[#fabc2c] text-black shadow-md shadow-[#fabc2c]/10' : 'bg-white dark:bg-[#122319]/40 border border-slate-200 dark:border-emerald-900/30 text-slate-500 dark:text-slate-400 hover:text-emerald-950 dark:hover:text-white hover:border-emerald-200'}`}
                            >
                                All Reviews
                            </button>
                            {categories.map(cat => (
                                <button 
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${selectedCategory === cat.id ? 'bg-[#fabc2c] text-black shadow-md shadow-[#fabc2c]/10' : 'bg-white dark:bg-[#122319]/40 border border-slate-200 dark:border-emerald-900/30 text-slate-500 dark:text-slate-400 hover:text-emerald-950 dark:hover:text-white hover:border-emerald-200'}`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dribbble Premium styled Blog Card List - Taking full width */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.length > 0 ? (
                            blogs.map(blog => (
                                <div key={blog.id} className="bg-white dark:bg-[#122319]/20 border border-slate-200 dark:border-emerald-900/20 hover:border-emerald-300 dark:hover:border-emerald-800/40 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full group">
                                    <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-emerald-950/40 w-full">
                                        {blog.thumbnail ? (
                                            <img src={blog.thumbnail} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-emerald-800/60 font-black text-6xl select-none bg-[radial-gradient(#e2e8f0_2px,transparent_2px)] dark:bg-[radial-gradient(#122319_2px,transparent_2px)] [background-size:16px_16px]">
                                                C
                                            </div>
                                        )}
                                        {blog.category && (
                                            <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-[#fabc2c] text-black text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                                {blog.category.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col justify-between text-left space-y-4 min-w-0">
                                        <div className="space-y-2 min-w-0">
                                            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-555 dark:text-slate-400">
                                                <span className="font-bold text-slate-800 dark:text-white truncate max-w-[120px]">{blog.author.name || "Anonymous"}</span>
                                                <span>·</span>
                                                <span className="shrink-0">{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            </div>
                                            <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-[#fabc2c] transition-colors leading-snug line-clamp-2 break-words">
                                                {blog.title}
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-3 leading-relaxed break-words font-serif">
                                                {blog.description || blog.content.slice(0, 150)}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-emerald-900/10 min-w-0">
                                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#fabc2c]/80 dark:text-[#fabc2c]/80 shrink-0">
                                                {Math.ceil(blog.content.length / 1000) || 1} min read
                                            </span>
                                            <Link to={`/blog/${blog.id}`} className="text-xs font-bold text-slate-900 dark:text-white hover:text-emerald-850 dark:hover:text-[#fabc2c] flex items-center gap-1 group/btn transition-colors shrink-0">
                                                Read Story
                                                <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="md:col-span-2 lg:col-span-3 py-20 bg-white dark:bg-[#122319]/10 border border-slate-200 dark:border-emerald-900/20 rounded-3xl text-center px-4">
                                <div className="w-12 h-12 bg-slate-50 dark:bg-emerald-950/60 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100 dark:border-emerald-900/30">
                                    <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold text-slate-900 dark:text-white">No stories match filters</h3>
                                <p className="text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto text-xs">
                                    Try adjusting your search query, or selecting a different topic.
                                </p>
                            </div>
                        )}
                    </div>
                    
                    {/* Pagination control */}
                    {blogs.length > 0 && (
                        <div className="flex justify-center items-center gap-4 pt-8">
                            <button 
                                onClick={() => setPage(page - 1)} 
                                disabled={page <= 1}
                                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                                    page <= 1 
                                        ? 'text-slate-350 dark:text-emerald-950 border-slate-200 dark:border-emerald-950/20 bg-transparent cursor-not-allowed' 
                                        : 'text-[#e4a81b] dark:text-[#fabc2c] border-[#e4a81b]/30 dark:border-[#fabc2c]/30 hover:bg-emerald-50 dark:hover:bg-[#fabc2c]/10'
                                }`}
                            >
                                Prev
                            </button>
                            <span className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-widest">
                                Page {page} of {totalPages}
                            </span>
                            <button 
                                onClick={() => setPage(page + 1)} 
                                disabled={page >= totalPages}
                                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                                    page >= totalPages
                                        ? 'text-slate-350 dark:text-emerald-950 border-slate-200 dark:border-emerald-950/20 bg-transparent cursor-not-allowed' 
                                        : 'text-[#e4a81b] dark:text-[#fabc2c] border-[#e4a81b]/30 dark:border-[#fabc2c]/30 hover:bg-emerald-50 dark:hover:bg-[#fabc2c]/10'
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