import { useNavigate } from "react-router-dom";

import Banner from "../Banner/Banner";
import { useGetProductsQuery } from "../../../redux/features/Product/productApi";
import ProductCard from "../../../components/Shared/ProductCard/ProductCard.tsx";
import { Product as TProduct } from "../../../types/TProduct.ts";
import Upcoming from "../Upcoming/Upcoming.tsx";
const Home = () => {
  const navigate = useNavigate();

  // Fetch up to 6 featured products
  const {
    data: response,
    isLoading,
    error,
  } = useGetProductsQuery({ limit: 6 });

  const featuredProducts = response?.data;

  if (isLoading) return <p>Loading featured products...</p>;
  if (error) return <p>Error fetching featured products!</p>;

  return (
    <div>
      {/* //banner */}
      <Banner />
      {/* //featured product */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center my-8 dark:text-gray-100">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts?.map((product: TProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center my-8">
          <button
            onClick={() => navigate("/product-details")} // Redirect to the All Products page
            className="mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded"
          >
            View All Products
          </button>
        </div>
      </div>
      {/* //upcomingManga */}
      <Upcoming></Upcoming>
    </div>
  );
};

export default Home;
