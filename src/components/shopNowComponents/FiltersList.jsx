import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import { useFormContext } from "react-hook-form";
import FilterBoxes from "./FilterBoxes";

const FiltersList = ({ filters, type }) => {

  if (type === "subCategory2") {
    return (
    <div className="my-5">
      <h3 className="my-2 font-semibold text-sm capitalize">
        {type}
      </h3>
      <div className="grid grid-cols-3">
        {filters?.map((filter) => (
          <FilterBoxes
            key={filter.id}
            label={filter.label}
            value={filter.value}
            type={type}
          />
        ))}
      </div>
    </div>
    )
  }

  return (
    <div className="my-5">
      <h3 className="my-2 font-semibold text-sm capitalize">
        {type}
      </h3>
      <div className="space-y-3">
        {filters?.map((filter) => (
          <FilterCheckbox
            key={filter.id}
            label={filter.label}
            value={filter.value}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};

export default FiltersList;
