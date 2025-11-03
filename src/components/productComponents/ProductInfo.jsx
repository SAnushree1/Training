import React,{useState} from 'react'
import AddtoCartButton from './AddtoCartButton';

const sizesAvailable = [50,100,200];

const ProductInfo = ({product}) => {
    const [selectedSize, setSize] = useState(50);

    const calculatePrice = (basePrice, size) => {
        const baseSize = 50;
        return parseInt((basePrice/baseSize) * size);
    };

  return (
    <div className='bg-white rounded p-5 flex flex-col gap-5'>
        <div className='flex items-center gap-1'>
            <img src="assets/singleStar.png" alt="star" className='w-3 h-3' />
            <p className='text-sm font-medium text-gray-700'>{product.rating}</p>
            <p className='text-sm text-gray-500'>(12 Reviews)</p>
        </div>
        
        <div>
            <h2 className='text-xl font-medium '>{product.name}</h2>
            <div className='flex justify-between text-[rgba(34,143,143,1)] my-1'>
                <p>{product.brand}</p>
                <p>Visit Brand Page &gt;</p>
            </div>
        </div>

        <p className='text-gray-600'>{product.description}</p>

        <div className='flex justify-between'>
            <div>
                <p className='text-2xl font-bold'>₹ {calculatePrice(product.price,selectedSize)}</p>
                <p className='text-gray-500 text-sm'>MRP <strike>₹{calculatePrice(product.originalPrice,selectedSize)}</strike></p>
            </div>
            <div>
                <p>Sizes Available</p>
                <div className='flex gap-3 '>
                    {sizesAvailable.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSize(size)}
                            className={` p-2 rounded-4xl ${selectedSize===size ? "bg-gray-400 text-white" : "border-2 text-gray-500 border-[#474747]"}`}
                        >
                            {size} g
                        </button>
                    ))}
                </div>
            </div>
        </div>

        <div className='flex justify-between mb-10'>
            <div>
                <p className='text-sm font-medium'>Check Delivery for your Pincode</p>
                <input type="number" name="pincode" id="pincode" placeholder='Enter 6 Digit PINCODE' className='border-1 rounded text-sm my-2 p-2 border-gray-300'/>
            </div>
            <div className='flex items-center text-white'>
                <AddtoCartButton product={product}/>
            </div>
            
        </div>
    </div>
  )
}

export default ProductInfo