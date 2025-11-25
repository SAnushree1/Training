import React from 'react'
import { NavLink } from 'react-router-dom';

const navBarContent = [
    {
        link: '/',
        text: 'All categories'
    },
    {
        link: '/',
        text: 'Hair Care'
    },
    {
        link: '/',
        text: 'Skin Care'
    },
    {
        link: '/',
        text: 'Personal Care'
    },
    {
        link: '/',
        text: 'Baby & Momcare'
    },
    {
        link: '/',
        text: 'Accessories'
    }
]

const NavBar: React.FC = () => {
    return (
        <>
            <div className='hidden sm:flex gap-5 bg-black text-white'>
                {navBarContent.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.link}
                        end
                        className='p-3 border-b-5 border-b-transparent hover:text-amber-300 hover:border-b-amber-300'
                    >
                        {item.text}
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default NavBar
