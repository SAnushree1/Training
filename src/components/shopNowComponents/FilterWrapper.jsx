import React, { useState } from "react";
import Filters from "./Filters";

const FiltersWrapper = ({ setFilters, onReset, filteredProducts }) =>{
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="md:hidden p-2 text-gray-700 text-2xl"
        onClick={() => setOpen(!open)}
      >
        <img src="assets/hamburgerIcon.png" alt="hamburger icon" className="w-5 h-5" />
      </button>
      <div
        className={`${open ? "block" : "hidden"} md:block md:static absolute top-full left-0 w-full bg-white shadow-md md:shadow-none z-50`}>
        <div>
          <Filters
            setFilters={setFilters}
            onReset={onReset}
            filteredProducts={filteredProducts.length}
          />
        </div>
      </div>
    </div>
  );
}

export default FiltersWrapper;