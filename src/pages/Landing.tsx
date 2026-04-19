import { Link } from "react-router-dom";

export const Landing = () => {
    return (
        <div className="min-h-screen bg-white">
            <nav className="border-b border-black py-4 sticky top-0 bg-white z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="text-3xl font-bold tracking-tight text-black flex items-center gap-2">
                        <span className="bg-black text-white px-2 py-0.5 rounded">C</span>
                        Chronicle
                    </div>
                    <div className="flex items-center gap-6">
                        <Link to="/signin" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Sign In</Link>
                        <Link to="/signup" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">Get Started</Link>
                    </div>
                </div>
            </nav>

            <header className="border-b border-black py-24 bg-[#FFC017]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-7xl md:text-8xl font-bold leading-tight tracking-tighter font-serif">
                            Stay curious.
                        </h1>
                        <p className="text-2xl text-black/80 max-w-lg leading-relaxed">
                            Discover stories, thinking, and expertise from writers on any topic.
                        </p>
                        <Link to="/signup" className="inline-block bg-black text-white px-10 py-3 rounded-full text-xl font-medium hover:bg-gray-800 transition-colors">
                            Start reading
                        </Link>
                    </div>
                    <div className="hidden lg:flex justify-center">
                        <div className="text-[20rem] font-bold select-none opacity-10 animate-pulse">
                            C
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center gap-2 mb-8 uppercase tracking-widest text-xs font-bold text-gray-500">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20m0-20l-4 4m4-4l4 4" />
                    </svg>
                    Trending on Chronicle
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TrendingCard 
                        index="01" 
                        author="Alex Rivera" 
                        title="The Future of AI: What to expect in 2026" 
                        date="Jan 20" 
                        readTime="6 min read" 
                    />
                    <TrendingCard 
                        index="02" 
                        author="Sarah Jenkins" 
                        title="Why slow living is the new luxury" 
                        date="Jan 18" 
                        readTime="4 min read" 
                    />
                    <TrendingCard 
                        index="03" 
                        author="Michael Chen" 
                        title="Mastering the art of focus in a digital age" 
                        date="Jan 15" 
                        readTime="8 min read" 
                    />
                    <TrendingCard 
                        index="04" 
                        author="Elena Gilbert" 
                        title="The hidden costs of remote work" 
                        date="Jan 12" 
                        readTime="5 min read" 
                    />
                    <TrendingCard 
                        index="05" 
                        author="David Smith" 
                        title="10 books that changed my perspective on life" 
                        date="Jan 10" 
                        readTime="12 min read" 
                    />
                    <TrendingCard 
                        index="06" 
                        author="Maya Angel" 
                        title="The beauty of morning rituals" 
                        date="Jan 05" 
                        readTime="3 min read" 
                    />
                </div>
            </main>

            <footer className="border-t border-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                    <a href="#" className="hover:text-black">Help</a>
                    <a href="#" className="hover:text-black">Status</a>
                    <a href="#" className="hover:text-black">About</a>
                    <a href="#" className="hover:text-black">Careers</a>
                    <a href="#" className="hover:text-black">Blog</a>
                    <a href="#" className="hover:text-black">Privacy</a>
                    <a href="#" className="hover:text-black">Terms</a>
                </div>
            </footer>
        </div>
    );
};

interface TrendingCardProps {
    index: string;
    author: string;
    title: string;
    date: string;
    readTime: string;
}

const TrendingCard = ({ index, author, title, date, readTime }: TrendingCardProps) => (
    <div className="flex gap-4 group cursor-pointer">
        <div className="text-3xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
            {index}
        </div>
        <div className="space-y-2">
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-[10px] font-bold">
                    {author[0]}
                </div>
                <span className="text-xs font-bold text-gray-900">{author}</span>
            </div>
            <h3 className="font-bold text-gray-900 leading-tight group-hover:underline">
                {title}
            </h3>
            <div className="text-xs text-gray-500 flex items-center gap-2">
                <span>{date}</span>
                <span>·</span>
                <span>{readTime}</span>
            </div>
        </div>
    </div>
);
