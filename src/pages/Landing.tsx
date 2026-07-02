import { Link } from "react-router-dom";

export const Landing = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0d1511] text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-[#fabc2c] selection:text-black">
            
            {/* Elegant Header with Backdrop Blur */}
            <nav className="border-b border-slate-200/50 dark:border-emerald-950/20 py-4 sticky top-0 bg-white/80 dark:bg-[#0d1511]/80 backdrop-blur-md z-50 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="text-2xl font-black tracking-tight text-emerald-950 dark:text-white flex items-center gap-2">
                        <span className="bg-emerald-950 dark:bg-white text-white dark:text-emerald-950 px-2 py-0.5 rounded transition-colors">C</span>
                        Chronicle
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link to="/signin" className="text-sm font-semibold text-slate-655 dark:text-slate-350 hover:text-emerald-950 dark:hover:text-white transition-colors">Sign In</Link>
                        <Link to="/signup" className="bg-[#fabc2c] text-black px-5 py-2 rounded-full text-sm font-bold shadow-sm hover:opacity-90 transition-opacity">Get Started</Link>
                    </div>
                </div>
            </nav>

            {/* Split Screen Hero Section */}
            <header className="relative border-b border-slate-200/50 dark:border-emerald-950/20 py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-[#112419] dark:to-[#0d1511]">
                <div className="absolute inset-0 bg-[radial-gradient(#fabc2c_1px,transparent_1px)] opacity-5 [background-size:32px_32px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                    <div className="lg:col-span-7 space-y-8 text-left">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 border border-emerald-200/30 dark:border-emerald-700/30 text-[#e4a81b] dark:text-[#fabc2c] text-xs font-bold uppercase tracking-wider">
                            Welcome to Chronicle
                        </span>
                        <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight tracking-tight text-emerald-950 dark:text-white font-sans">
                            Stay curious. Explore <span className="text-[#fabc2c] underline decoration-wavy decoration-[#fabc2c]/40 underline-offset-8">creative</span> ideas.
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                            Chronicle is an open workspace where writers, engineers, and designers publish articles, travel logs, and software tutorials.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link to="/signup" className="inline-block bg-emerald-950 dark:bg-white text-white dark:text-emerald-950 px-8 py-3 rounded-full text-lg font-bold shadow-md hover:opacity-90 transition-opacity">
                                Start reading
                            </Link>
                            <Link to="/signup" className="inline-block bg-white dark:bg-transparent border border-slate-200 dark:border-emerald-900 text-emerald-950 dark:text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-slate-50 dark:hover:bg-emerald-950/20 transition-all">
                                Write a story
                            </Link>
                        </div>
                    </div>
                    
                    {/* Beautiful generated graphic from Dribbble model */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200/80 dark:border-emerald-800/20 shadow-2xl bg-slate-100 dark:bg-[#122319]/40 p-1">
                            <img src="/hero.jpg" alt="Chronicle Illustration Workspace" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Core Features Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-200/50 dark:border-emerald-950/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white dark:bg-[#122319]/10 border border-slate-200 dark:border-emerald-900/20 rounded-3xl text-left space-y-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-800 dark:text-[#fabc2c] font-black">
                            1
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Curated Categories</h3>
                        <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed">
                            Discover stories indexed under diverse categories such as Travel logs, Tech tutorials, Science updates, and Lifestyle guides.
                        </p>
                    </div>
                    <div className="p-6 bg-white dark:bg-[#122319]/10 border border-slate-200 dark:border-emerald-900/20 rounded-3xl text-left space-y-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-800 dark:text-[#fabc2c] font-black">
                            2
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Open Writer Network</h3>
                        <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed">
                            Anyone can register, start writing, and publish beautiful stories. Engage with likes and customize descriptions.
                        </p>
                    </div>
                    <div className="p-6 bg-white dark:bg-[#122319]/10 border border-slate-200 dark:border-emerald-900/20 rounded-3xl text-left space-y-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-800 dark:text-[#fabc2c] font-black">
                            3
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Unified Dark Strategy</h3>
                        <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed">
                            A highly optimized, eye-strain-friendly monochrome UI palette that switches seamlessly between white and forest green themes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Trending / Popular Articles Grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex items-center gap-2 mb-10 uppercase tracking-widest text-xs font-bold text-emerald-800/80 dark:text-slate-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.375.375m3.375-.375l-.375 3.375" />
                    </svg>
                    Trending on Chronicle
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    <TrendingCard 
                        index="01" 
                        author="Alex Rivera" 
                        category="Technology"
                        title="The Future of AI: What to expect in 2026" 
                        date="Jan 20" 
                        readTime="6 min read" 
                    />
                    <TrendingCard 
                        index="02" 
                        author="Sarah Jenkins" 
                        category="Lifestyle"
                        title="Why slow living is the new luxury" 
                        date="Jan 18" 
                        readTime="4 min read" 
                    />
                    <TrendingCard 
                        index="03" 
                        author="Michael Chen" 
                        category="Mindset"
                        title="Mastering the art of focus in a digital age" 
                        date="Jan 15" 
                        readTime="8 min read" 
                    />
                    <TrendingCard 
                        index="04" 
                        author="Elena Gilbert" 
                        category="Career"
                        title="The hidden costs of remote work" 
                        date="Jan 12" 
                        readTime="5 min read" 
                    />
                    <TrendingCard 
                        index="05" 
                        author="David Smith" 
                        category="Literature"
                        title="10 books that changed my perspective on life" 
                        date="Jan 10" 
                        readTime="12 min read" 
                    />
                    <TrendingCard 
                        index="06" 
                        author="Maya Angel" 
                        category="Habits"
                        title="The beauty of morning rituals" 
                        date="Jan 05" 
                        readTime="3 min read" 
                    />
                </div>
            </main>

            {/* Newsletter CTA Panel */}
            <section className="bg-emerald-950 dark:bg-[#122319]/20 text-white border-t border-emerald-900/30 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Get the best of Chronicle in your inbox</h2>
                    <p className="text-slate-350 max-w-lg mx-auto text-sm leading-relaxed">
                        Sign up for our curated digest of trending guides, journals, and developer columns. No spam. Unsubscribe anytime.
                    </p>
                    <div className="max-w-md mx-auto pt-4 flex flex-col sm:flex-row gap-3">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full bg-[#0d1511] border border-emerald-800/80 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#fabc2c] placeholder-emerald-900/50"
                        />
                        <button className="bg-[#fabc2c] text-black px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Grouped Footer */}
            <footer className="border-t border-slate-200/50 dark:border-emerald-950/20 py-16 bg-white dark:bg-[#0a120d]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-left mb-12">
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#fabc2c]">Chronicle</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            Exploring concepts, software tutorials, creative travel guides, and creative writing.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-white">Product</h4>
                        <ul className="text-xs text-slate-550 dark:text-slate-400 space-y-2">
                            <li><a href="#" className="hover:text-[#fabc2c]">Write</a></li>
                            <li><a href="#" className="hover:text-[#fabc2c]">Read</a></li>
                            <li><a href="#" className="hover:text-[#fabc2c]">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-white">Community</h4>
                        <ul className="text-xs text-slate-550 dark:text-slate-400 space-y-2">
                            <li><a href="#" className="hover:text-[#fabc2c]">Writers</a></li>
                            <li><a href="#" className="hover:text-[#fabc2c]">Guidelines</a></li>
                            <li><a href="#" className="hover:text-[#fabc2c]">Status</a></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-white">Company</h4>
                        <ul className="text-xs text-slate-550 dark:text-slate-400 space-y-2">
                            <li><a href="#" className="hover:text-[#fabc2c]">About</a></li>
                            <li><a href="#" className="hover:text-[#fabc2c]">Careers</a></li>
                            <li><a href="#" className="hover:text-[#fabc2c]">Privacy & Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/50 dark:border-emerald-950/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 dark:text-slate-400 gap-4">
                    <p>© 2026 Chronicle Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-black dark:hover:text-white">Twitter</a>
                        <a href="#" className="hover:text-black dark:hover:text-white">GitHub</a>
                        <a href="#" className="hover:text-black dark:hover:text-white">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

interface TrendingCardProps {
    index: string;
    author: string;
    category: string;
    title: string;
    date: string;
    readTime: string;
}

const TrendingCard = ({ index, author, category, title, date, readTime }: TrendingCardProps) => (
    <div className="flex gap-5 group cursor-pointer p-4 bg-white dark:bg-[#122319]/10 border border-slate-200 dark:border-emerald-900/20 rounded-2xl hover:border-emerald-350 dark:hover:border-emerald-800 transition-all hover:shadow-md">
        <div className="text-4xl font-extrabold text-[#fabc2c]/85 dark:text-emerald-900/60 transition-colors shrink-0">
            {index}
        </div>
        <div className="space-y-1 min-w-0">
            <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-[#fabc2c]">{category}</span>
                <span className="text-[10px] font-bold text-slate-650 dark:text-slate-300 truncate">{author}</span>
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white leading-snug group-hover:text-emerald-800 dark:group-hover:text-[#fabc2c] transition-colors line-clamp-2">
                {title}
            </h3>
            <div className="text-[10px] text-slate-500 dark:text-slate-450 flex items-center gap-2 pt-1">
                <span>{date}</span>
                <span>·</span>
                <span>{readTime}</span>
            </div>
        </div>
    </div>
);
