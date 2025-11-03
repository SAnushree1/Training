import React from 'react'

const cardContent = [
    {
        colour: "bg-blue-400",
        title: "Freedom",
        content: "We believe in an open and transparent culture and are flexible with the way you manage your work"
    },
    {
        colour: "bg-red-400",
        title: "Everyone is a boss",
        content: "Our bosses don’t sit in cabins, no one does. Our diaries are open so everyone can see what the other is doing"
    },
    {
        colour: "bg-green-400",
        title: "No Monday Blues",
        content: "The thought of going to work everyday keeps us energised. We are driven by Jobs To Be Done philosophy"
    }
]

const CultureCards = () => {
  return (
    <div className='flex flex-col gap-2 sm:flex-row'>
        {cardContent.map((item,index) => (
            <div key={index} className={`${item.colour} rounded-2xl p-5`}>
                <h1 className='font-bold mb-3'>{item.title}</h1>
                <p>{item.content}</p>
            </div>
        ))}
    </div>
  );
};

export default CultureCards