import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
    description?: string;
    thumbnail?: string;
    likesCount?: number;
    category?: string;
}


export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
    description,
    thumbnail,
    likesCount = 0,
    category


}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="p-6 border-b border-gray-100 hover:bg-gray-50/50 transition-all duration-300 cursor-pointer group flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <Avatar name={authorName} size={6} />
                        <span className="font-semibold text-gray-900">{authorName}</span>
                        <span className="text-gray-400">·</span>
                        <span className="text-gray-500">{new Date(publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="mb-2">
                        <h2 className="font-bold text-xl md:text-2xl text-gray-900 group-hover:text-black transition-colors line-clamp-2 leading-tight">
                            {title}
                        </h2>
                    </div>
                    <div className="mb-4">
                        <p className="text-base text-gray-600 line-clamp-2 leading-relaxed font-serif">
                            {description || content.slice(0, 150) + (content.length > 150 ? "..." : "")}
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-4">
                            {category && (
                                <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                                    {category}
                                </span>
                            )}
                            <span className="text-gray-500 text-xs">
                                {Math.ceil(content.length / 1000) || 1} min read
                            </span>
                            <div className="flex items-center gap-1.5 text-gray-400 group-hover:text-gray-600 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <span className="text-xs">{likesCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {thumbnail && (
                    <div className="w-full md:w-48 h-32 md:h-32 flex-shrink-0">
                        <img src={thumbnail} alt={title} className="w-full h-full object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow" />
                    </div>
                )}
            </div>
        </Link>
    )
}
export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({ name, size = 5 }: { name: string, size?: number }) {
    const sizeClasses: Record<number, string> = {
        4: "w-4 h-4 text-[10px]",
        5: "w-5 h-5 text-xs",
        6: "w-6 h-6 text-sm",
        8: "w-8 h-8 text-base",
        10: "w-10 h-10 text-lg",
        12: "w-12 h-12 text-xl"
    };

    const sizeClass = sizeClasses[size] || sizeClasses[5];

    return (
        <div className={`relative inline-flex items-center justify-center ${sizeClass.split(' ')[0]} ${sizeClass.split(' ')[1]} overflow-hidden bg-gray-100 rounded-full text-gray-600 font-medium border border-gray-200 shadow-sm`}>
            <span>{name[0].toUpperCase()}</span>
        </div>
    )
}