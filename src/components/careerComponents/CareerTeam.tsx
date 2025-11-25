import React from 'react'
import JobOpenings from './JobOpenings'

const CareerTeam: React.FC = () => {
    return (
        <div className='bg-[rgba(32,32,32,1)] text-white p-10 sm:p-20'>
            <h2 className='text-3xl font-bold'>We are building our Team</h2>
            <p className='text-gray-400'>We are actively recruiting at all levels. Open positions are mentioned below</p>
            <JobOpenings />
            <p className='text-gray-400'>Not able to find a position relevant to you? Don't sweat! Reach out to us at <a href='mailto:careers@mesky.com' className='text-amber-300 underline'>careers@mesky.com</a> and we'll take it up from there. </p>
        </div>
    )
}

export default CareerTeam
