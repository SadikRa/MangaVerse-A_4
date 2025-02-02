import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import SurjoPay from "./SurjoPay";
import { useGetProductsQuery } from "../../redux/features/Product/productApi";


const Checkout = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductsQuery();
  const [quantity, setQuantity] = useState(1);
  const [createOrder, { isLoading: isOrdering }] = useCreateOrderMutation();

  if (isLoading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found</p>;

  const totalPrice = product.price * quantity;

  const handleOrder = async () => {
    if (quantity > product.quantity) {
      alert("Not enough stock available!");
      return;
    }

    const orderData = {
      email: "user@example.com", // Replace with logged-in user's email
      product: product._id,
      quantity,
      totalPrice,
      payment_status: "pending",
      status: "pending",
      isDeleted: false,
    };

    try {
      const response = await createOrder(orderData).unwrap();
      alert("Order placed successfully!");
      console.log("Order Response:", response);
    } catch (error) {
      console.error("Order failed:", error);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      
      {/* Product Info */}
      <div className="flex gap-4">
        <img src={product.image} alt={product.title} className="w-32 h-32 object-cover rounded-lg" />
        <div>
          <h3 className="text-xl font-semibold">{product.title}</h3>
          <p className="text-sm text-gray-400">By {product.author}</p>
          <p className="text-lg font-bold mt-2">${product.price} per unit</p>
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Quantity</label>
        <input
          type="number"
          min="1"
          max={product.quantity}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full p-2 mt-1 bg-gray-700 text-white rounded-md"
        />
      </div>

      {/* Total Price */}
      <p className="mt-4 text-lg font-semibold">Total: ${totalPrice}</p>

      {/* Payment Integration */}
      <SurjoPay amount={totalPrice} onSuccess={handleOrder} />

      {/* Order Now Button */}
      <Button
        className="w-full bg-orange-600 hover:bg-orange-700 mt-4"
        onClick={handleOrder}
        disabled={isOrdering}
      >
        {isOrdering ? "Processing..." : "Order Now"}
      </Button>
    </div>
  );
};

export default Checkout;
