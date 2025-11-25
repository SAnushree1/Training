import React from 'react'

interface TrackButtonsProps {
    buttonText: string;
    bgClass?: string;
    textColor?: string;
}

const TrackButtons: React.FC<TrackButtonsProps> = ({ buttonText, bgClass = "bg-white", textColor = "text-black" }) => {
    return (
        <button className={` p-2 rounded-4xl max-w-70 ${bgClass} ${textColor} hover:bg-gray-200`}>
            {buttonText}
        </button>
    )
}

export default TrackButtons
