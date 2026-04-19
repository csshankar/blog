export const BlogSkeleton = () => {
    return (
        <div role="status" className="animate-pulse p-6 border-b border-gray-100 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                    <div className="h-6 w-6 bg-gray-100 rounded-full"></div>
                    <div className="h-4 w-24 bg-gray-100 rounded"></div>
                    <div className="h-4 w-4 bg-gray-100 rounded"></div>
                    <div className="h-4 w-20 bg-gray-100 rounded"></div>
                </div>
                <div className="h-8 w-3/4 bg-gray-100 rounded mb-4"></div>
                <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
                <div className="h-4 w-5/6 bg-gray-100 rounded mb-6"></div>
                <div className="flex items-center gap-4">
                    <div className="h-6 w-20 bg-gray-100 rounded-full"></div>
                    <div className="h-4 w-4 bg-gray-100 rounded"></div>
                </div>
            </div>
            <div className="hidden md:block w-48 h-32 bg-gray-100 rounded-lg"></div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}