import Image from 'next/image'

export default function Access({ bgImage = '/images/early-access-bg.png' }) {
    return (
        <section className="w-full bg-black text-amber-200 relative py-20 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Image src={bgImage} alt="gold wave background" layout="fill" objectFit="cover" className="opacity-90" />
                <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
            </div>

            <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                    {/* Left: heading + copy */}
                    <div className="">
                        <h2 className="mb-2">
                            Get Early Access
                        </h2>
                        <p className="text-amber-300/80 max-w-xl leading-relaxed">
                            Join the exclusive waitlist and be the first to experience AI dining.
                        </p>
                    </div>

                    {/* Right: form */}
                    <div className="px-8">
                        <form className="">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="sr-only" htmlFor="fullName">Full Name</label>
                                    <input id="fullName" name="fullName" type="text" placeholder="Full Name" className="w-full bg-transparent border border-[#DFA92E]/30 rounded-md px-4 py-3 placeholder-[#FFE7AC] text-[#FFE7AC] outline-none focus:ring-1 focus:ring-[#FFE7AC]" />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="email">Email Address</label>
                                    <input id="email" name="email" type="email" placeholder="Email Address" className="w-full bg-transparent border border-[#DFA92E]/30 rounded-md px-4 py-3 placeholder-[#FFE7AC] text-[#FFE7AC] outline-none focus:ring-1 focus:ring-[#FFE7AC]" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone Number</label>
                                    <input id="phone" name="phone" type="tel" placeholder="Phone Number" className="w-full bg-transparent border border-[#DFA92E]/30 rounded-md px-4 py-3 placeholder-[#FFE7AC] text-[#FFE7AC] outline-none focus:ring-1 focus:ring-[#FFE7AC]" />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="role">Role</label>
                                    <select id="role" name="role" className="w-full bg-transparent border border-[#DFA92E]/30 rounded-md px-4 py-3 placeholder-[#FFE7AC] text-[#FFE7AC] outline-none focus:ring-1 focus:ring-[#FFE7AC] cursor-pointer">
                                        <option className='text-black'>Restaurant owner</option>
                                        <option className='text-black'>Manager</option>
                                        <option className='text-black'>Chef</option>
                                        <option className='text-black'>Other</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="w-full mt-2 inline-flex items-center justify-center rounded-md px-6 py-3 text-black font-medium gradient-gold cursor-pointer hover:opacity-95 transition-shadow shadow-[0_8px_30px_rgba(255,183,77,0.18)]">
                                Join Wishlist
                            </button>
                        </form>
                    </div>

                </div>
            </div>

        </section>
    )
}
