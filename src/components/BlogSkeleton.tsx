export const BlogSkeleton = () => {
    return (
        <div role="status" className="animate-pulse bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-900 rounded-3xl p-6 flex flex-col md:flex-row gap-6 w-full max-w-full">
            <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                    <div className="h-3 w-24 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                    <div className="h-3 w-3 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                    <div className="h-3 w-16 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                </div>
                <div className="space-y-2">
                    <div className="h-6 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                    <div className="h-3 w-full bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                    <div className="h-3 w-5/6 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="h-4 w-16 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                    <div className="h-4 w-20 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                </div>
            </div>
            <div className="w-full md:w-48 h-32 bg-zinc-200 dark:bg-zinc-800 rounded-2xl shrink-0"></div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}