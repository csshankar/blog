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
    return (<Link to={`/blog/${id}`}><div className="p-2 border-b-2 border-slate-200">
        <div className="text-xs flex text-gray-500">
            <Avatar name={authorName}  /><div className="pl-1"> {authorName} . {publishedDate}</div>
        </div>
        <div className="font-bold flex">
            {title}
        </div>
        <div className=" flex text-sm text-slate-600 pb-1">
            {content.slice(0, 100) + "..."}
        </div>
        <div className="text-xs  flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 pr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            {`${Math.ceil(content.length / 100) } minutes read`}
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
    return (
        <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 `}>
            <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
        </div>)
}