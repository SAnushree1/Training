import React, { useState } from "react";
import Filters, { FilterState } from "./Filters";

interface FiltersWrapperProps {
    setFilters: (filters: FilterState) => void;
    onReset?: () => void;
    filteredProducts: any[]; // Or Product[] if imported
}

const FiltersWrapper: React.FC<FiltersWrapperProps> = ({ setFilters, onReset, filteredProducts }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="relative">
            <button
                className="md:hidden p-2 text-gray-700 text-2xl"
                onClick={() => setOpen(!open)}
            >
                <img src="/assets/hamburgerIcon.png" alt="hamburger icon" className="w-5 h-5" />
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
