import productData from '../../data/productDetails.json';

export function fetchProductData(productId){
    const productIndex = productData.findIndex((product) => product.id === productId);
    const product = productData[productIndex];
    console.log(product);
    return product;
}