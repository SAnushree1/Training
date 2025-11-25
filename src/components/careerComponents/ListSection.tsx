import React from 'react'

interface ListSectionProps {
    title: string;
    items: string[];
}

const ListSection: React.FC<ListSectionProps> = ({ title, items }) => {
    if (!items.length) return null;
    return (
        <>
            <h3 className='font-bold my-3'>{title}</h3>
            <ul className="list-disc list-inside">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default ListSection
