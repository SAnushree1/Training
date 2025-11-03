import productDetails from "../../data/productDetails.json";

export function calculateTotalAmount(cart) {
  const totalAmount = cart.reduce((acc, item) => {
    const product = productDetails.find(p => p.id === item.id);
    return acc + (product?.price || 0) * item.quantity;
  }, 0);

  return totalAmount;
}
