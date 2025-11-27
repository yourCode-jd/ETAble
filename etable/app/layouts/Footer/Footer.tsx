import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="relative w-full bg-black ">
            {/* <ArcGradient /> */}
            <div className='absolute inset-0 lg:-top-full sm:-top-30 -top-18 z-0 w-full h-full'>
                <Image
                    src="/images/footer-bg.svg"
                    alt="footer gradient"
                    width={1920}
                    height={220}
                    className="w-full h-auto"
                />
            </div>
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 md:py-24 py-12 relative z-10">
                <div className="flex flex-col items-center justify-center text-center md:gap-10 gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center">
                            {/* Logo */}
                            <Image
                                src="/images/footer-logo.svg" // replace with your logo path
                                alt="ETableAI Logo"
                                width={312}
                                height={90}
                                className='w-44 md:w-full h-auto'
                            />
                        </div>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-6 text-amber-500/80">
                        <a href="#" aria-label="linkedin" className="hover:text-amber-400 transition">
                            <Image src="/icons/linkedin.svg" alt="linkedin icon" width={24} height={24} className="sm:w-7 w-5 h-6" />
                        </a>
                        <a href="#" aria-label="twitter" className="hover:text-amber-400 transition">
                            <Image src="/icons/twitter.svg" alt="linkedin icon" width={24} height={24} className="sm:w-7 w-5 h-5" />
                        </a>
                        <a href="#" aria-label="youtube" className="hover:text-amber-400 transition">
                            <Image src="/icons/youtube.svg" alt="linkedin icon" width={24} height={24} className="sm:w-7 w-5 h-6" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="md:text-base! text-sm! text-amber-400/60">
                        © 2025 ETAbleAI Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
