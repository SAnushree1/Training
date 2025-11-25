import React from 'react'
import WhyMeskyContentCards from './WhyMeskyContentCards'

const WhyMeskyContent: React.FC = () => {
    return (
        <div className='bg-[rgba(32,32,32,1)] text-white'>
            <h2 className='text-3xl font-bold p-10 text-center sm:-ml-70'>Why Mesky</h2>
            <div className='flex flex-col md:flex-row '>
                <div className='flex w-full md:w-1/2'>
                    <div className='w-full md:w-1/2 m-9'>
                        <img src="/assets/detailsText.png" alt="A text image" />
                    </div>
                    <div className=' w-full md:w-1/2 m-9'>
                        {/* <h2 className='text-white text-center text-2xl font-bold m-5'>Why Mesky</h2> */}
                        <img src="/assets/phoneImage.png" alt="A mobile image" />
                    </div>
                </div>
                <div className=' w-full md:w-1/2 flex flex-col justify-center m-1'>
                    <WhyMeskyContentCards />
                </div>
            </div>
        </div>
    )
}

export default WhyMeskyContent
