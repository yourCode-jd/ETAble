import Image from 'next/image'

export default function TopRestaurants({ imageSrc = '/images/dashboard.png', imageAlt = 'dashboard image', imageSrc2 = '/images/mobile.png' }) {
    return (
        <section className="w-full bg-black text-amber-300 lg:pb-28 md:pb-18 pb-6">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 lg:space-y-40 space-y-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-12 items-center">

                    {/* Left content */}
                    <div className="order-2 md:order-0">
                        <h2 className="mb-10 leading-tight">
                            Why Top Restaurants
                            <br />
                            Choose ETAbleAI
                        </h2>

                        <ul className="space-y-8 lg:pr-20">
                            <li className="flex items-start md:gap-5 gap-3">
                                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#FFC900]/30 flex items-center justify-center bg-black/40 shadow-[0_6px_30px_rgba(255,183,77,0.06)]">
                                    {/* simple revenue icon */}
                                    <Image src="/icons/icon03.svg" alt="rush hours icon" width={24} height={24} className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-amber-200">Increase Revenue</h3>
                                    <p className="mt-2 text-amber-300/80 max-w-xl">Turn empty waiting time into profitable seating and serve more guests without expanding space.</p>
                                </div>
                            </li>

                            <li className="flex items-start md:gap-5 gap-3">
                                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#FFC900]/30 flex items-center justify-center bg-black/40 shadow-[0_6px_30px_rgba(255,183,77,0.06)]">
                                    {/* rush hours icon */}
                                    <Image src="/icons/icon04.svg" alt="rush hours icon" width={24} height={24} className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-amber-200">Handle Rush Hours Smoothly</h3>
                                    <p className="mt-2 text-amber-300/80 max-w-xl">Synchronize guest arrivals with kitchen flow to eliminate congestion, delays, and dining chaos.</p>
                                </div>
                            </li>

                            <li className="flex items-start md:gap-5 gap-3">
                                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#FFC900]/30 flex items-center justify-center bg-black/40 shadow-[0_6px_30px_rgba(255,183,77,0.06)]">
                                    {/* insights icon */}
                                    <Image src="/icons/icon05.svg" alt="rush hours icon" width={24} height={24} className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-amber-200">Real‑Time Insights & Performance Tracking</h3>
                                    <p className="mt-2 text-amber-300/80 max-w-xl">Monitor guest flow, table usage, and service efficiency through a live operational dashboard.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Right image */}
                    <div className="w-[80%] md:w-full max-w-full mx-auto">
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                            <div className="">
                                <Image src={imageSrc} alt="ETAbleAI dashboard preview" width={720} height={420} className="mx-auto" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-12 items-center">

                    {/* Left content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="mb-10 leading-tight">
                            A Seamless Dining Experience Powered by Your Arrival Time
                        </h2>

                        <ul className="space-y-10">
                            <li className="flex items-start md:gap-5 gap-3">
                                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#FFC900]/30 flex items-center justify-center bg-black/40 shadow-[0_6px_30px_rgba(255,183,77,0.06)]">
                                    {/* simple revenue icon */}
                                    <Image src="/icons/icon01.svg" alt="rush hours icon" width={24} height={24} className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-amber-200">Join the Queue or Schedule Your Arrival</h3>
                                    <p className="mt-2 text-amber-300/80 max-w-xl">Join the digital waitlist to reserve your place in line, or set your arrival time and pre-order so your meal is perfectly timed to your entrance.</p>
                                </div>
                            </li>

                            <li className="flex items-start md:gap-5 gap-3">
                                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#FFC900]/30 flex items-center justify-center bg-black/40 shadow-[0_6px_30px_rgba(255,183,77,0.06)]">
                                    {/* rush hours icon */}
                                    <Image src="/icons/icon06.svg" alt="rush hours icon" width={24} height={24} className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-amber-200">View Live Wait Times Before You Go</h3>
                                    <p className="mt-2 text-amber-300/80 max-w-xl">See real-time restaurant availability, current queue size, and estimated wait time — so you decide smarter before leaving.</p>
                                </div>
                            </li>

                            <li className="flex items-start md:gap-5 gap-3">
                                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#FFC900]/30 flex items-center justify-center bg-black/40 shadow-[0_6px_30px_rgba(255,183,77,0.06)]">
                                    {/* insights icon */}
                                    <Image src="/icons/icon07.svg" alt="rush hours icon" width={24} height={24} className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-amber-200">Smart ETA Sync with the Kitchen</h3>
                                    <p className="mt-2 text-amber-300/80 max-w-xl">Your arrival time connects directly with the kitchen, allowing food preparation to start at the perfect moment.</p>
                                </div>
                            </li>

                            <li className="flex items-start md:gap-5 gap-3">
                                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#FFC900]/30 flex items-center justify-center bg-black/40 shadow-[0_6px_30px_rgba(255,183,77,0.06)]">
                                    {/* insights icon */}
                                    <Image src="/icons/icon08.svg" alt="rush hours icon" width={24} height={24} className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-amber-200">Real-Time Order & Table Updates</h3>
                                    <p className="mt-2 text-amber-300/80 max-w-xl">Get notified when your order begins preparation, when your table is ready, and when your meal is on the way.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Right image */}
                    <div className="w-[80%] md:w-full max-w-full mx-auto">
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">

                            <div className="">

                                <Image src={imageSrc2} alt="ETAbleAI dashboard preview" width={547} height={589} className="mx-auto" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
