import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import FiltersList from "./FiltersList";
import RangeSlider from "./RangeSlider";
import filterOptions from "../../data/filterOptions.json";

const Filters = ({ setFilters, onReset, filteredProducts }) => {
  const methods = useForm({
    defaultValues: {
      brands: [],
      subCategory1: [],
      subCategory2: [],
      priceRange: { min: 0, max: 2500 },
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    setFilters(data);
  };

  const handleReset = () => {
    reset();
    onReset?.();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-72">
        <div className="shadow-lg rounded-lg p-5 bg-white">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold">Filters</h3>
            <button
              type="button"
              onClick={handleReset}
              className="text-amber-400 cursor-pointer"
            >
              RESET
            </button>
          </div>
          
          <p className="text-gray-400 my-2 text-sm">
            Premium Collections from Designers, Brands and exclusive
          </p>

          {Object.entries(filterOptions).slice(0, 2).map(([key, value]) => (
            <FiltersList key={key} type={key} filters={value} />
          ))}
          
          
          <RangeSlider />

          {Object.entries(filterOptions).slice(2, 3).map(([key, value]) => (
            <FiltersList key={key} type={key} filters={value} />
          ))}


          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 bg-[#ffdddd] text-black text-sm p-2 rounded-4xl hover:bg-[rgba(235,150,150,1)]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-2 bg-[#ffdddd] text-black text-sm p-2 rounded-4xl hover:bg-[rgba(235,150,150,1)]"
            >
              Show Products({filteredProducts})
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Filters;
