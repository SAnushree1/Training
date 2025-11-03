import React from "react"
import { NavLink, Outlet } from "react-router-dom"

const MoreDetails = ({product}) => {
  const linkClasses = ({ isActive }) =>
    `px-4 py-2 font-medium ${
      isActive ? "border-b-2  text-black" : "text-gray-500"
    }`

  return (
    <div className="bg-white p-4 mt-4">
      <h2 className="font-bold text-xl">More Details</h2>
      <div className="flex gap-6 border-b ">
        <NavLink to="" end className={linkClasses}>Description</NavLink>
        <NavLink to="usage" className={linkClasses}>How to Use</NavLink>
        <NavLink to="specification" className={linkClasses}>Product Specification</NavLink>
        <NavLink to="ingredients" className={linkClasses}>Ingredients</NavLink>
      </div>

      <div className=" bg-gray-100">
        <Outlet context={product}/>
      </div>
    </div>
  )
}

export default MoreDetails;

