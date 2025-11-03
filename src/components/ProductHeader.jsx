import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import CartButton from './CartButton';

const Header = () => {

  const [menu, setMenu] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row bg-black text-white p-5 gap-5 items-center sm:justify-between'>
      
      {/*LOGO SECTION*/}
      <div className='flex justify-between w-full sm:w-auto'>
          <img src="/assets/MESKYLogo.png" alt="Mesky Logo" className='h-8 ' />
          <button onClick={ () => setMenu(!menu)} className='sm:hidden'>
              <img src="/assets/hamburgerIcon.png" alt="hamburger icon" className="w-5 h-5" />
          </button>
      </div>

      {/* ICON */}
      <div className={`${menu ? 'flex' : 'hidden'} flex-col sm:flex-row sm:flex gap-5 items-center`}>
        <Link to="/">Feed</Link>
        <Link to="/shopNow">Shop</Link>
        <Link to="/product/orders">Orders</Link>
        <CartButton/>
        <img src="/assets/ProfileIcon.png" alt="profile icon" />
      </div>
    </div>
  )
}

export default Header