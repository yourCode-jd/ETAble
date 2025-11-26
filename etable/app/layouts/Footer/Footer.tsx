import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="relative w-full bg-black overflow-hidden">


            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-14">
                <div className="flex flex-col items-center justify-center text-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center">
                            {/* Logo */}
                            <Image
                                src="/images/footer-logo.svg" // replace with your logo path
                                alt="ETableAI Logo"
                                width={312}
                                height={90}
                            />
                        </div>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-6 text-amber-500/80">
                        <a href="#" aria-label="LinkedIn" className="hover:text-amber-400 transition">
                            in
                        </a>
                        <span className="">×</span>
                        <a href="#" aria-label="YouTube" className="hover:text-amber-400 transition">
                            ▶
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-amber-400/60">
                        © 2025 ETAbleAI Inc. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black to-transparent pointer-events-none" />
        </footer>
    )
}
