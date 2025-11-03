import React from 'react'

const TrackButtons = ({buttonText, bgClass = "bg-white", textColor = "text-black"}) => {
  return (
    <button className={` p-2 rounded-4xl max-w-70 ${bgClass} ${textColor} hover:bg-gray-200`}>
      {buttonText}
    </button>
  )
}

export default TrackButtons