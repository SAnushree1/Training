import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { Product } from '../../stores/cartStore';

const ProductSpecification: React.FC = () => {
    const product = useOutletContext<Product>();
    const { longDescription } = product;

    return (
        <div className='p-5'>
            <section>
                <h3 className='text-gray-500 text-xl font-semibold my-5'>Product Specification</h3>
                <table>
                    <tbody>
                        {Object.entries(longDescription.productSpecification).map(
                            ([key, value]) => (
                                <tr key={key} className='border-b-2 border-gray-300'>
                                    <td className='p-3'>{key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}</td>
                                    <td>{value}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
                <p className='my-5'>{longDescription.loremIpsum}</p>
            </section>
        </div>
    )
}

export default ProductSpecification;
