import productData from '../../data/productDetails.json';
import { Product } from '../../stores/cartStore';

export function fetchProductData(productId: number): Product | undefined {
    const productIndex = productData.findIndex((product) => product.id === productId);
    const product = productData[productIndex] as Product;
    console.log(product);
    return product;
}
