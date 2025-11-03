import React from 'react'

const CareerHome = ({ seeOpenings }) => {
  return (
    <div className='flex flex-col bg-pale-green sm:flex-row'>
      <div className='flex-1'>
        <img src="assets/home-img.png" alt="A man with binocular image" />
      </div>
      <div className=' flex flex-1 items-center m-5'>
        <div className='w-xl'>
          <h2 className='text-xl font-bold'>Talented and Enthusiastic?<br/> It’s a match</h2>
          <p className='my-5'>We are as passionate about our employees as we are about our customers. If working on innovative solutions along with a dynamic team excites you then jump below to apply for a place for yourself.</p>
          <button onClick={seeOpenings} className='underline cursor-pointer'>See Positions Available</button>
        </div>
      </div>
    </div>
  )
}

export default CareerHome