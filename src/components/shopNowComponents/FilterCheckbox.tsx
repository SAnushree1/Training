import React from "react";
import { useFormContext } from "react-hook-form";

interface FilterCheckboxProps {
    label: string;
    type: string;
    value: string;
}

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ label, type, value }) => {
    const { register } = useFormContext();

    return (
        <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                id={`${type}-${value}`}
                {...register(type)}
                value={value}
                className="w-4 h-4 cursor-pointer"
            />
            <label htmlFor={`${type}-${value}`} className="text-sm cursor-pointer">
                {label}
            </label>
        </div>
    );
};

export default FilterCheckbox;
