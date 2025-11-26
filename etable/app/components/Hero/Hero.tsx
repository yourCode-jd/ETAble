import React from 'react'

function Hero() {
    return (
        <section className='container-xl'>
            {/* outer */}
            <div className='absolute -z-10 gradient-gold-bg blur-3xl w-full h-full rounded-full left-0 top-0 opacity-20'></div>
            <div className='grid grid-cols-2 items-center py-8 bg-light rounded-3'>
                {/* left */}
                <div className='text-left'>
                    <h1 className='mb-8 '>The Future <br></br> of Dining</h1>
                    <p className='mb-6 hero-para'>ETAbleAl turns waiting into instant dining by linking your arrival time directly to the kitchen - so your table and your meal are ready the moment you arrive.</p>
                    <small className='italic'>Time is the most valuable currency we have. You can't refund it. You can't replace it. ETAbleAl was built to protect that currency by turning wasted waiting into seamless, stress-free dining.</small>
                </div>
                {/* right */}
                <div className='relative -right-20'>
                    <img src='/images/hero-wrapper.png' alt='hero-wrapper' width={749} height={669} className='' />
                </div>
            </div>
        </section>
    )
}

export default Hero