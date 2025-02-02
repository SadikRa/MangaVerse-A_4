import ProductCard from "../../components/Shared/ProductCard/ProductCard";
import { useGetProductsQuery } from "../../redux/features/Product/productApi";
import { Product as TProduct } from "../../types/TProduct";

const Product = () => {
  const { data: response, isLoading, error } = useGetProductsQuery({});

  const products = response?.data;

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products!</p>;

  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center my-8 dark:text-gray-100">
        All Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: TProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
