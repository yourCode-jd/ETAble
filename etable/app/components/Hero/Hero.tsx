import React from 'react'
import Image from 'next/image'
import GradientButton from '../ui/GradientButton'

function Hero() {
    return (
        <section className='container-xl'>
            {/* outer */}

            <div className='grid lg:grid-cols-2 grid-cols-1 items-center md:py-14 py-8 md:pb-14 pb-8 bg-light rounded-3 lg:gap-0 gap-8 relative z-10'>
                {/* left */}
                <div className='text-left'>
                    <h1 className='hero-title md:mb-7 mb-3'>The Future <br></br> of Dining</h1>
                    <p className='mb-6 hero-para md:pr-18'>Long wait times, stressed staff, confused guests, cold food, and lost revenue have become the norm in restaurants — especially during peak hours when everything feels rushed, chaotic, and disconnected. Customers grow impatient, teams burn out, and great meals are ruined by poor timing and broken communication. ETAbleAI changes that by linking a guest’s arrival time directly to the kitchen, ensuring food starts at the right moment so tables and meals are ready the instant guests arrive. No more wasted time. No more frustration. Just smooth, stress-free dining that respects everyone’s time.</p>

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

            <div className='md:pt-5 pt-2 md:pb-20 pb-5 max-w-4xl mx-auto'>
                <p className='italic font-light text-center relative'>
                    {/* Quote */}
                    <Image src="/icons/quotes.svg" alt="quote icon" width={24} height={24} className="relative  inline-block rotate-180 -top-3 w-6 h-6 mr-2" />
                    Time is the most valuable currency we have. You can’t refund it or replace it.ETAbleAI was built to protect that currency by turning wasted waiting into seamless, stress-free dining.
                    <Image src="/icons/quotes.svg" alt="quote icon" width={24} height={24} className="relative inline-block -bottom-2 w-6 h-6 ml-2" />
                </p>
            </div>
        </section >
    )
}

export default Hero