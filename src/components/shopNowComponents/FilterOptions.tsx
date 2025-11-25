import React from "react";
import FiltersList from "./FiltersList";
import filterOptions from '../../data/filterOptions.json'
import RangeSlider from "./RangeSlider";
import { useFormContext } from "react-hook-form";

interface FilterOptionsProps {
    onReset?: () => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onReset }) => {
    const { reset } = useFormContext();

    const handleReset = () => {
        reset();
        onReset?.();
    };

    return (
        <div className="mt-5 shadow-lg rounded-lg p-5 bg-white">
            <div className="flex justify-between">
                <h3 className="text-lg font-bold">Filters</h3>
                <button
                    type="button"
                    onClick={handleReset}
                    className="text-amber-400 "
                >
                    RESET
                </button>
            </div>
            <p className="text-gray-400 my-2 text-sm">Premium Collections from Designers, Brands and exclusive</p>

            {Object.entries(filterOptions).map(([key, value]) => (
                <FiltersList key={key} type={key} filters={value} />
            ))}
            <RangeSlider />
        </div>
    );
};

export default FilterOptions;
