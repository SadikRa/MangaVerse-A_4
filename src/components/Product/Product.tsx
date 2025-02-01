import { useGetProductsQuery } from "../../redux/features/Product/productApi";
import { Product as TProduct } from "../../types/TProduct";
import ProductCard from "./ProductCard/ProductCard";

const Product = () => {
  const { data: response, isLoading, error } = useGetProductsQuery(undefined);

  console.log("API Response:", response); // Log the full response

  const products = response?.data; // Access the nested data

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products!</p>;

  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="my-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: TProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
