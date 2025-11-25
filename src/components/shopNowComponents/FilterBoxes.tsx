import React from "react";
import { useFormContext } from "react-hook-form";

interface FilterBoxProps {
    label: string;
    type: string;
    value: string;
}

const FilterBox: React.FC<FilterBoxProps> = ({ label, type, value }) => {
    const { register, watch, setValue } = useFormContext();
    const values = watch(type) || [];
    const isSelected = values.includes(value);

    const toggleValue = () => {
        if (isSelected) {
            setValue(
                type,
                values.filter((v: string) => v !== value)
            );
        } else {
            setValue(type, [...values, value]);
        }
    };

    return (
        <div className="flex flex-col items-center m-0.5 bg-gray-100 rounded text-sm shadow">
            <input
                type="checkbox"
                {...register(type)}
                value={value}
                className="hidden"
                checked={isSelected}
                readOnly
            />

            <div
                onClick={toggleValue}
                className={`cursor-pointer p-1
          ${isSelected ? " text-[#dc6767]" : "text-gray-700 "}
        `}
            >
                {label}
            </div>
        </div>
    );
};

export default FilterBox;
