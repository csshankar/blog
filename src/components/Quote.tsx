export const Quote = () => {
    return (
        <div className="bg-slate-50 h-screen flex justify-center flex-col p-12 lg:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full -ml-32 -mb-32 opacity-50 blur-3xl"></div>
            
            <div className="flex justify-center relative z-10">
                <div className="max-w-xl">
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8">
                        "The customer support I received was exceptional. The support team went above and beyond to address my concerns."
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-1 w-12 bg-black"></div>
                        <div>
                            <div className="text-xl font-bold text-gray-900">
                                Jules Winnfield
                            </div>
                            <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                                CEO, Acme Inc
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}