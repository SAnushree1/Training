import React from "react";
import { useNavigate } from "react-router-dom";
import { productDetail } from '../../stores/productDetail'
import { Product } from "../../stores/cartStore";

interface FilteredProductsProps {
    products: Product[];
}

const FilteredProducts: React.FC<FilteredProductsProps> = ({ products }) => {
    const setSelectedProduct = productDetail((s) => s.setSelectedProduct);

    const navigate = useNavigate();
    const viewProduct = (product: Product) => {
        setSelectedProduct(product);
        console.log(product)
        console.log(product.id);
        navigate(`/product/${product.id}`);
    };
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 " >
                {products.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => viewProduct(product)}
                        className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center cursor-pointer"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-40 h-40 object-contain mb-4"
                        />
                        <p className="text-lg font-semibold mb-1">
                            {product.brand} {product.name}
                        </p>
                        <p className="text-gray-800 text-base mb-2">
                            ₹ {product.price}{" "}
                            <span className="text-gray-500 line-through text-sm">
                                ₹ {product.originalPrice}
                            </span>
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="flex text-yellow-400">
                                {'★'.repeat(Math.floor(parseFloat(product.rating)))}
                                {'☆'.repeat(5 - Math.floor(parseFloat(product.rating)))}
                            </div>
                            <p className="text-gray-500 text-sm">({product.rating})</p>
                        </div>
                    </div>

                ))}
            </div>
            {products.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                    <p className="text-gray-400 text-sm mt-2">Try adjusting your filter criteria.</p>
                </div>
            )}
        </div>
    );
};

export default FilteredProducts;
