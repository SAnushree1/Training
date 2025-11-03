import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useFormContext } from 'react-hook-form';


const RangeSlider = () => {
  const { watch, setValue } = useFormContext();
  const priceRange = watch('priceRange');

  const handleChange = (event, newValue) => {
    setValue('priceRange', { min: newValue[0], max: newValue[1] });
  };

  return (
    <Box>
      <h3 className="my-2 font-semibold text-sm capitalize">Price Range</h3>
      <p className="text-sm text-gray-600 mt-2">
        ₹ {priceRange.min} – ₹ {priceRange.max}
      </p>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={[priceRange.min, priceRange.max]}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={(v) => `$${v}`}
        min={0}
        max={2500}
        step={10}
        sx={{ color: 'rgba(235,150,150,1)' }}
      />
    </Box>
  );
}

export default RangeSlider