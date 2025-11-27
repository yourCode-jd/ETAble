import React from 'react'
import Image from 'next/image'
function Upgrades() {
    return (
        <section className='container-xl'>
            {/* outer */}
            <div className='md:py-24 py-10 pt-20 relative '>
                {/* <ArcGradient /> */}
                <div className='absolute inset-0 -top-10  md:-top-30 lg:-top-64 z-0 w-full h-full'>
                    <Image
                        src="/images/footer-bg.svg"
                        alt="footer gradient"
                        width={1920}
                        height={220}
                        className="w-full h-auto"
                    />
                </div>
                <div className='relative z-10'>
                    <h2 className='text-center mb-4'>This isn’t a minor upgrade.</h2>
                    <p className='text-center max-w-xl mx-auto md:text-[22px]! leading-8'>ETAbleAI transforms how restaurants prepare, serve,
                        and experience dining — through intelligent arrival timing.</p>
                    <div className='md:mt-10 max-w-[1360px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start py-8 bg-light rounded-3 gap-10'>
                        {/* IconCard */}
                        <div className='text-center'>
                            <div className='border border-[#FFC900]/30 rounded-full w-[70px] h-[70px] md:w-[90px] md:h-[90px] flex items-center justify-center mx-auto md:mb-6 mb-3'>
                                <img src='/icons/icon01.svg' alt='icon-1' width={34} height={34} className='mx-auto ' />
                            </div>
                            <h3 className='mb-2'>Smart ETA Prediction</h3>
                            <p className='max-w-xs mx-auto'>Real-time arrival tracking that aligns guest timing with kitchen preparation — so restaurants know exactly when to start cooking and guests know exactly when their table and meal will be ready. Perfect timing, zero guesswork.</p>
                        </div>
                        <div className='text-center'>
                            <div className='border border-[#FFC900]/30 rounded-full w-[70px] h-[70px] md:w-[90px] md:h-[90px] flex items-center justify-center mx-auto md:mb-6 mb-3'>
                                <img src='/icons/icon02.svg' alt='icon-1' width={34} height={34} className='mx-auto ' />
                            </div>
                            <h3 className='mb-2'>Faster Table Turnover</h3>
                            <p className='max-w-xs mx-auto'>Optimize seating flow with perfectly timed arrivals and departures — freeing tables faster, serving more guests, and maximizing revenue without rushing the experience.</p>
                        </div>
                        <div className='text-center'>
                            <div className='border border-[#FFC900]/30 rounded-full w-[70px] h-[70px] md:w-[90px] md:h-[90px] flex items-center justify-center mx-auto md:mb-6 mb-3'>
                                <img src='/icons/icon01.svg' alt='icon-1' width={34} height={34} className='mx-auto ' />
                            </div>
                            <h3 className='mb-2'>Better Guest Experience</h3>
                            <p className='max-w-xs mx-auto'>A smooth, stress-free dining journey where guests arrive to ready tables and freshly prepared meals — no long waits, no uncertainty, just seamless luxury service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Upgrades