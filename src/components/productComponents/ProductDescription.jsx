import React from 'react';
import { useOutletContext } from 'react-router-dom';

const ProductDescription = () => {
  const product = useOutletContext();
  const { longDescription } = product;
  
  return (
    <div className='p-5'>
        <section>
          <h3 className='text-gray-500 text-xl font-semibold my-5'>Description</h3>
          <p className='mb-2'>{longDescription.overview}</p>
          <p>{longDescription.loremIpsum}</p>
        </section>
    </div>
  )
}

export default ProductDescription