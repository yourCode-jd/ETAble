import React from 'react'

function Upgrades() {
    return (
        <section className='container-xl'>
            {/* outer */}
            <div className='absolute -z-10 gradient-gold-bg blur-3xl w-full h-full rounded-full left-0 top-0 opacity-20'></div>
            <div className='py-24 '>
                <h2 className='text-center'>This isn’t a minor upgrade.</h2>
                <p className='text-center max-w-lg mx-auto'>ETAbleAI transforms how restaurants prepare, serve,
                    and experience dining — through intelligent arrival timing.</p>
                <div className='mt-10 max-w-[1360px] mx-auto grid grid-cols-3 items-center py-8 bg-light rounded-3 gap-10'>
                    {/* IconCard */}
                    <div className='text-center'>
                        <div className='border border-[#FFC900]/30 rounded-full w-[90px] h-[90px] flex items-center justify-center mx-auto mb-6'>
                            <img src='/icons/icon01.svg' alt='icon-1' width={34} height={34} className='mx-auto ' />
                        </div>
                        <h3 className='mb-2'>Smart ETA Prediction</h3>
                        <p className='px-5'>Real-time arrival tracking that aligns guest timing with kitchen preparation — so restaurants know exactly when to start cooking and guests know exactly when their table and meal will be ready. Perfect timing, zero guesswork.</p>
                    </div>
                    <div className='text-center'>
                        <div className='border border-[#FFC900]/30 rounded-full w-[90px] h-[90px] flex items-center justify-center mx-auto mb-6'>
                            <img src='/icons/icon02.svg' alt='icon-1' width={34} height={34} className='mx-auto ' />
                        </div>
                        <h3 className='mb-2'>Faster Table Turnover</h3>
                        <p className='px-5'>Optimize seating flow with perfectly timed arrivals and departures — freeing tables faster, serving more guests, and maximizing revenue without rushing the experience.</p>
                    </div>
                    <div className='text-center'>
                        <div className='border border-[#FFC900]/30 rounded-full w-[90px] h-[90px] flex items-center justify-center mx-auto mb-6'>
                            <img src='/icons/icon01.svg' alt='icon-1' width={34} height={34} className='mx-auto ' />
                        </div>
                        <h3 className='mb-2'>Better Guest Experience</h3>
                        <p className='px-5'>A smooth, stress-free dining journey where guests arrive to ready tables and freshly prepared meals — no long waits, no uncertainty, just seamless luxury service.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Upgrades