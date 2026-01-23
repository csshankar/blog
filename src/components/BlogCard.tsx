import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id:number;
}


export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate


}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 cursor-pointer group">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Avatar name={authorName} size={6} />
                    <span className="font-medium text-gray-900">{authorName}</span>
                    <span className="text-gray-400">·</span>
                    <span className="text-gray-500">{publishedDate}</span>
                </div>
                <div className="mb-3">
                    <h2 className="font-bold text-2xl text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2">
                        {title}
                    </h2>
                </div>
                <div className="mb-4">
                    <p className="text-base text-gray-600 line-clamp-2 leading-relaxed">
                        {content.slice(0, 150) + (content.length > 150 ? "..." : "")}
                    </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{`${Math.ceil(content.length / 100)} min read`}</span>
                </div>
            </div>
        </Link>
    )
}
export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({ name,size=5 }: { name: string,size?:number }) {
    // Tailwind requires full class names, so we use conditional rendering
    if (size === 4) {
        return (
            <div className="relative inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gradient-to-br from-green-500 to-green-700 rounded-full text-white font-semibold shadow-sm">
                <span className="text-xs">{name[0].toUpperCase()}</span>
            </div>
        )
    }
    if (size === 6) {
        return (
            <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gradient-to-br from-green-500 to-green-700 rounded-full text-white font-semibold shadow-sm">
                <span className="text-sm">{name[0].toUpperCase()}</span>
            </div>
        )
    }
    if (size === 8) {
        return (
            <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gradient-to-br from-green-500 to-green-700 rounded-full text-white font-semibold shadow-sm">
                <span className="text-base">{name[0].toUpperCase()}</span>
            </div>
        )
    }
    if (size === 10) {
        return (
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gradient-to-br from-green-500 to-green-700 rounded-full text-white font-semibold shadow-sm">
                <span className="text-lg">{name[0].toUpperCase()}</span>
            </div>
        )
    }
    if (size === 12) {
        return (
            <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gradient-to-br from-green-500 to-green-700 rounded-full text-white font-semibold shadow-sm">
                <span className="text-xl">{name[0].toUpperCase()}</span>
            </div>
        )
    }
    // Default size 5
    return (
        <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gradient-to-br from-green-500 to-green-700 rounded-full text-white font-semibold shadow-sm">
            <span className="text-sm">{name[0].toUpperCase()}</span>
        </div>
    )
}