import React from 'react'
import CultureCards from './CultureCards';

const CareerCulture = () => {
  return (
    <div className="relative flex justify-end bg-dark-green">
      <div className="absolute h-full w-3/5 z-10 top-0 right-0">
        <img src="assets/culture-img.png" alt="an office party image" className=" hidden sm:block h-full w-full object-cover" />
      </div>

      <div className="relative z-20 p-16 w-full flex flex-col bg-[rgba(0,72,63,0.6)] text-white">
        <h2 className="text-3xl font-bold my-5">Our Culture</h2>
        <CultureCards/>
      </div>
    </div>
  )
}

export default CareerCulture