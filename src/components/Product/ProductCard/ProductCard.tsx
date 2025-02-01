import { Parallax } from "react-scroll-parallax";
import { Button } from "../../ui/button";
import { Product } from "../../../types/TProduct";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, author, image, price, category, description, inStock } = product;

  return (
    <Parallax speed={-5}>
      <div className="bg-white dark:bg-gray-800 mt-12 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        {/* Image */}
        <div className="w-full h-56 md:h-64 bg-gray-200 dark:bg-gray-700">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Category */}
          <span className="text-sm text-orange-500 font-semibold uppercase">
            {category}
          </span>

          {/* Title */}
          <h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 mt-1">
            {title}
          </h2>

          {/* Author */}
          <p className="text-sm text-gray-500 dark:text-gray-400">By {author}</p>

          {/* Description */}
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
            {description}
          </p>

          {/* Price & Stock */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              ${price}
            </span>
            {inStock ? (
              <span className="text-green-500 text-sm">In Stock</span>
            ) : (
              <span className="text-red-500 text-sm">Out of Stock</span>
            )}
          </div>

          {/* Order Button */}
          <Button className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white py-2">
            Order Now
          </Button>
        </div>
      </div>
    </Parallax>
  );
};

export default ProductCard;