import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/features/Product/productApi";
import { Button } from "../../components/ui/button";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data: product, isLoading, error } = useGetProductByIdQuery(id!);

  if (isLoading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching product</p>;

  if (!product) return <p className="text-center text-gray-500">Product not found</p>;

  const { title, author, image, price, category, description, inStock } = product;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-[400px] md:h-[600px] object-cover rounded-lg shadow-lg dark:shadow-gray-700"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Category */}
          <span className="text-sm text-orange-500 font-semibold uppercase">
            {category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
            {title}
          </h1>

          {/* Author */}
          <p className="text-lg text-gray-600 dark:text-gray-400">
            By <span className="font-semibold">{author}</span>
          </p>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          {/* Price & Stock */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              ${price}
            </span>
            {inStock ? (
              <span className="text-green-500 font-semibold">In Stock</span>
            ) : (
              <span className="text-red-500 font-semibold">Out of Stock</span>
            )}
          </div>

          {/* Buy Now Button */}
          <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold transition-transform transform hover:scale-105">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;