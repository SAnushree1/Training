import React from 'react'

interface CardContent {
    title: string;
    content: string;
}

const cardContent: CardContent[] = [
    {
        title: 'Live Healthy',
        content: 'I am determined to help you lead a toxic free, healthier and cleaner consumption lifestyle'
    },
    {
        title: 'Chosen With Care',
        content: 'In a world of innumerable products with mixed grades, I & my team have worked hard to bring you products where the quality is great.'
    },
    {
        title: 'Learn, Engage and Be Heard',
        content: 'Become part of a community of users with similar views, understand from their experience and in return, share your knowledge'
    }
];

const WhyMeskyContentCards: React.FC = () => {
    return (
        <>
            {cardContent.map((item, index) => (
                <div key={index} className="bg-neutral-700 m-2 p-5 rounded-2xl">
                    <h1 className='font-bold'>{item.title}</h1>
                    <p>{item.content}</p>
                </div>
            ))}
        </>
    );
};

export default WhyMeskyContentCards;
