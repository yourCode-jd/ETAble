import Image from 'next/image'

export default function TopRestaurants({ imageSrc = '/images/dashboard.png', imageAlt = 'dashboard image', imageSrc2 = '/images/mobile.png' }) {
    return (
        <section className="w-full bg-black text-amber-300 pb-16">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 space-y-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* Left content */}
                    <div className="">
                        <h2 className="mb-10 leading-tight">
                            Why Top Restaurants
                            <br />
                            Choose ETAbleAI
                        </h2>

                        <ul className="space-y-8">
                            <li className="flex items-start gap-5">
                                <div className="shrink-0 w-14 h-14 rounded-full border border-[#FFC900]/30 flex items-center justify-center bg-black/40 shadow-[0_6px_30px_rgba(255,183,77,0.06)]">
                                    {/* simple revenue icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h4l3 8 4-16 3 6h4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-amber-200">Increase Revenue</h3>
                                    <p className="mt-2 text-amber-300/80 max-w-xl">Turn empty waiting time into profitable seating and serve more guests without expanding space.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-5">
                                <div className="shrink-0 w-14 h-14 rounded-full border border-[#FFC900]/30 flex items-center justify-center bg-black/40 shadow-[0_6px_30px_rgba(255,183,77,0.06)]">
                                    {/* rush hours icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12A9 9 0 1112 3v0" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-amber-200">Handle Rush Hours Smoothly</h3>
                                    <p className="mt-2 text-amber-300/80 max-w-xl">Synchronize guest arrivals with kitchen flow to eliminate congestion, delays, and dining chaos.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-5">
                                <div className="shrink-0 w-14 h-14 rounded-full border border-[#FFC900]/30 flex items-center justify-center bg-black/40 shadow-[0_6px_30px_rgba(255,183,77,0.06)]">
                                    {/* insights icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3v18h18" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 13l3-3 4 4 5-5" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-amber-200">Real‑Time Insights & Performance Tracking</h3>
                                    <p className="mt-2 text-amber-300/80 max-w-xl">Monitor guest flow, table usage, and service efficiency through a live operational dashboard.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Right image */}
                    <div className="">
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                            <div className="px-8 lg:p-12">
                                {/* Use next/image
                    Pass imageSrc prop from parent or place your asset at /public/images/dashboard-mock.png
                */}
                                <Image src={imageSrc} alt="ETAbleAI dashboard preview" width={720} height={420} className="rounded-xl border border-amber-900/30 shadow-inner object-cover" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* Left content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="mb-10 leading-tight">
                            Why Top Restaurants
                            <br />
                            Choose ETAbleAI
                        </h2>

                        <ul className="space-y-8">
                            <li className="flex items-start gap-5">
                                <div className="shrink-0 w-14 h-14 rounded-full border border-[#FFC900]/30 flex items-center justify-center bg-black/40 shadow-[0_6px_30px_rgba(255,183,77,0.06)]">
                                    {/* simple revenue icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h4l3 8 4-16 3 6h4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-amber-200">Increase Revenue</h3>
                                    <p className="mt-2 text-amber-300/80 max-w-xl">Turn empty waiting time into profitable seating and serve more guests without expanding space.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-5">
                                <div className="shrink-0 w-14 h-14 rounded-full border border-[#FFC900]/30 flex items-center justify-center bg-black/40 shadow-[0_6px_30px_rgba(255,183,77,0.06)]">
                                    {/* rush hours icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12A9 9 0 1112 3v0" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-amber-200">Handle Rush Hours Smoothly</h3>
                                    <p className="mt-2 text-amber-300/80 max-w-xl">Synchronize guest arrivals with kitchen flow to eliminate congestion, delays, and dining chaos.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-5">
                                <div className="shrink-0 w-14 h-14 rounded-full border border-[#FFC900]/30 flex items-center justify-center bg-black/40 shadow-[0_6px_30px_rgba(255,183,77,0.06)]">
                                    {/* insights icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3v18h18" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 13l3-3 4 4 5-5" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-amber-200">Real‑Time Insights & Performance Tracking</h3>
                                    <p className="mt-2 text-amber-300/80 max-w-xl">Monitor guest flow, table usage, and service efficiency through a live operational dashboard.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Right image */}
                    <div className="">
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">

                            <div className="px-8 lg:p-12">
                                {/* Use next/image
                    Pass imageSrc prop from parent or place your asset at /public/images/dashboard-mock.png
                */}
                                <Image src={imageSrc2} alt="ETAbleAI dashboard preview" width={720} height={420} className="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
