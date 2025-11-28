import Image from 'next/image'
import GradientButton from '../ui/GradientButton'
import Link from 'next/link'

export default function Access({ bgImage = '/images/early-access-bg.png' }) {
    return (
        <section className="w-full bg-black text-amber-200 relative sm:py-20 py-10 lg:mb-40 sm:mb-20 mb-10">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
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
                    <div className="lg:px-8">
                        {/* <form className="">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="sr-only" htmlFor="fullName">Full Name</label>
                                    <input id="fullName" name="fullName" type="text" placeholder="Full Name" className="w-full bg-black opacity-100 border border-[#DFA92E]/30 rounded-md px-4 py-3 placeholder-[#FFE7AC] placeholder-font-normal text-[#FFE7AC] outline-none focus:ring-1 focus:ring-[#FFE7AC] " />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="email">Email Address</label>
                                    <input id="email" name="email" type="email" placeholder="Email Address" className="w-full bg-black opacity-100 border border-[#DFA92E]/30 rounded-md px-4 py-3 placeholder-[#FFE7AC] placeholder-font-normal text-[#FFE7AC] outline-none focus:ring-1 focus:ring-[#FFE7AC]" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone Number</label>
                                    <input id="phone" name="phone" type="tel" placeholder="Phone Number" className="w-full bg-black opacity-100 border border-[#DFA92E]/30 rounded-md px-4 py-3 placeholder-[#FFE7AC] placeholder-font-normal text-[#FFE7AC] outline-none focus:ring-1 focus:ring-[#FFE7AC]" />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="role">Role</label>
                                    <select
                                        id="role"
                                        name="role"
                                        className="w-full bg-black opacity-100 border border-[#DFA92E]/30 rounded-md 
                                        px-4 pr-12 py-3 
                                        text-[#FFE7AC] outline-none focus:ring-1 focus:ring-[#FFE7AC] 
                                        cursor-pointer appearance-none
                                        bg-[url('/icons/downArrow.svg')] bg-no-repeat 
                                        bg-position-[right_1rem_center]">
                                        <option className="text-black">Restaurant owner</option>
                                        <option className="text-black">Manager</option>
                                        <option className="text-black">Chef</option>
                                        <option className="text-black">Other</option>
                                    </select>

                                </div>
                            </div>

                            <button type="submit" className="w-full mt-2 inline-flex items-center justify-center rounded-md px-6 py-3 text-black font-medium gradient-gold cursor-pointer hover:opacity-95 transition-shadow shadow-[0_8px_30px_rgba(255,183,77,0.18)]">
                                Join Wishlist
                            </button>
                        </form> */}
                        {/* CTA Button */}
                        <Link href="/WaitListForm" target="_blank">
                            <GradientButton className="md:min-h-11 lg:w-[70%] w-96 max-w-full">Join The Waitlist</GradientButton>
                        </Link>
                    </div>

                </div>
            </div>
            {/* Bottom fade */}
            <div className="absolute inset-x-0  md:h-full pointer-events-none z-0 top-0 lg:-top-full">
                <Image width={1720} height={1124} src="/images/smokeBg.png" alt="footer fade" objectFit="cover" className="relative -top-40 ml-auto" />
            </div>

        </section>
    )
}
