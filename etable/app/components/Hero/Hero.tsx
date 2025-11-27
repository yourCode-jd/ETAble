import React from 'react'
import Image from 'next/image'
import GradientButton from '../ui/GradientButton'

function Hero() {
    return (
        <section className='container-xl'>
            {/* outer */}

            <div className='grid lg:grid-cols-2 grid-cols-1 items-center md:py-14 py-8 md:pb-14 pb-8 bg-light rounded-3 lg:gap-0 gap-8'>
                {/* left */}
                <div className='text-left'>
                    <h1 className='hero-title md:mb-7 mb-3'>The Future <br></br> of Dining</h1>
                    <p className='mb-6 hero-para md:pr-18'>ETAbleAl turns waiting into instant dining by linking your arrival time directly to the kitchen - so your table and your meal are ready the moment you arrive.</p>
                    <small className='italic font-light md:pr-18 inline-block'>Time is the most valuable currency we have. You can't refund it. You can't replace it. ETAbleAl was built to protect that currency by turning wasted waiting into seamless, stress-free dining.</small>
                    <div className='flex items-center md:gap-[30px] gap-4 md:mt-10 mt-5'>
                        <GradientButton className='md:min-w-[175px]'>
                            <Image src='/images/appStore.svg' alt='arrow-right' width={116} height={30} className='mx-auto md:w-full w-24 md:h-full h-6 ' />
                        </GradientButton>
                        <GradientButton className=''>
                            <Image src='/images/googlePlay.svg' alt='arrow-right' width={126} height={40} className='mx-auto md:w-full w-24 md:h-full h-6 ' />
                        </GradientButton>
                    </div>
                </div>
                {/* right */}
                <div className='relative lg:-right-20 lg:w-full w-[80%] max-w-full mx-auto lg:mx-0'>
                    <img src='/images/hero-wrapper.png' alt='hero-wrapper' width={749} height={669} className='' />
                </div>
            </div >
        </section >
    )
}

export default Hero