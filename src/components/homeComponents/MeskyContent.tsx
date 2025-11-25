import React from 'react'

const MeskyContent: React.FC = () => {
    return (
        <div className='flex bg-pale-pink flex-col md:flex-row'>
            <div className=' w-full md:w-1/2'>
                <img src="/assets/girl.png" alt="A Girl Image" className='w-full h-auto' />
            </div>
            <div className='m-10 md:m-15 md:w-1/2'>
                <h1 className='text-4xl'>Hi,</h1>
                <h1 className='text-3xl font-bold'>I'm Mesky</h1>
                <p className='pt-5 pb-5'>My life has been a constant search for the best products and brands to use for myself and my family. Products that give us toxic free, healthier and cleaner consumption and living. A search that has taken me around India, back to our roots, across cultures and to new learnings.</p>
                <p className='pb-5'>It is this search for foods, skincare and home products that I am sharing with you through Mesky, a site and app named after me (Mesky is my pet name). Each of the products chosen in this upcoming site have been personally curated by me and my team, for the values that I recognise are important to me: clean, healthy, nutritious and natural.</p>
                <p>Join me soon as I bring Mesky to you, on a journey to discover the new</p>
            </div>
        </div>
    )
}

export default MeskyContent
