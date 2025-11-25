import React from 'react'
import NavBar from '../components/shopNowComponents/NavBar'
import ProductHome from '../components/shopNowComponents/ProductHome'
import ProductsList from '../components/shopNowComponents/ProductsList'


const shopNow: React.FC = () => {
    return (
        <div>
            <NavBar />
            <ProductHome />
            <ProductsList />
        </div>
    )
}

export default shopNow
