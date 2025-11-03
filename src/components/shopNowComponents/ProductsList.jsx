import React, { useState,useEffect } from 'react'
import FilteredProducts from './FilteredProducts'
import Filters from './Filters'
import productDetails from '../../data/productDetails.json'
import Carousel from './Carosuel';
import FiltersWrapper from './FilterWrapper';

const ProductsList = () => {
  const [filters, setFilters] = useState({
    brands: [],
    subCategory1: [],
    subCategory2: [],
    priceRange: {'min': 0, "max" : 2500}
  });
  
  const [filteredProducts, setFilteredProducts] = useState(productDetails);

  useEffect(() => {
    console.log("Active filters:", filters);
    
    const hasFilters = 
      filters.brands.length > 0 || 
      filters.subCategory1.length > 0 || 
      filters.subCategory2.length > 0 ||
      filters.priceRange.min !== 0 ||
      filters.priceRange.max !== 2500;
    
    if (!hasFilters) {
      setFilteredProducts(productDetails);
      return;
    }

    const filtered = productDetails.filter((product) => {
      // console.log(product);
      
      const brandMatch = 
        filters.brands.length === 0 || 
        filters.brands.includes(product.brand);

      const subCat1Match = 
        filters.subCategory1.length === 0 || 
        filters.subCategory1.some(filter =>
          product.subcategory1.some(sub => sub.toLowerCase() === filter.toLowerCase())
        );
      
      const subCat2Match = 
        filters.subCategory2.length === 0 || 
        filters.subCategory2.some(filter =>
          product.subcategory2.some(sub => sub.toLowerCase() === filter.toLowerCase())
        );

      const priceMatch =
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max;
          
      return brandMatch && subCat1Match && subCat2Match && priceMatch;
    });

    setFilteredProducts(filtered);
  }, [filters]);

  const handleReset = () => {
    setFilters({
      brands: [],
      subCategory1: [],
      subCategory2: [],
      priceRange: {'min': 0, "max" : 2500}
    });
  };

  return (
    
    <div className="flex flex-col lg:flex-row gap-8 p-6 bg-gray-100 min-h-screen">
      <FiltersWrapper setFilters={setFilters} onReset={handleReset} filteredProducts={filteredProducts}/>
      <div className="flex-1">
        <FilteredProducts products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductsList