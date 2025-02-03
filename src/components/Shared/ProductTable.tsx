import { FaEdit, FaTrash } from "react-icons/fa";
import {
  useDeleteAProductMutation,
  useGetProductsQuery,
} from "../../redux/features/Product/productApi";
import { NavLink } from "react-router-dom";

const ProductTable = () => {
  const [deleteProduct] = useDeleteAProductMutation();
  const { data: product, isLoading, error } = useGetProductsQuery({});

  const products = product?.data;

  if (isLoading)
    return <p className="text-center text-gray-500">Loading products...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load products</p>;

  return (
    <div className=" p-6 ml-12 md:ml-32 lg:ml-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        All Products
      </h2>

      {/* Scrollable Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-900 text-left">
              <th className="p-3 text-sm font-semibold text-gray-700 dark:text-orange-500">
                Title
              </th>
              <th className="p-3 text-sm font-semibold text-gray-700 dark:text-orange-500">
                Author
              </th>
              <th className="p-3 text-sm font-semibold text-gray-700 dark:text-orange-500">
                Category
              </th>
              <th className="p-3 text-sm font-semibold text-gray-700 dark:text-orange-500">
                Price
              </th>
              <th className="p-3 text-sm font-semibold text-gray-700 dark:text-orange-500">
                Stock
              </th>
              <th className="p-3 text-sm font-semibold text-gray-700 dark:text-orange-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {products?.map((product: any) => (
              <tr
                key={product._id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="p-3 text-sm text-gray-700 dark:text-gray-300">
                  {product.title}
                </td>
                <td className="p-3 text-sm text-gray-700 dark:text-gray-300">
                  {product.author}
                </td>
                <td className="p-3 text-sm text-gray-700 dark:text-gray-300">
                  {product.category}
                </td>
                <td className="p-3 text-sm text-gray-700 dark:text-gray-300">
                  ${product.price}
                </td>
                <td className="p-3 text-sm">
                  {product.inStock ? (
                    <span className="text-green-500">In Stock</span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </td>
                <td className="p-3 flex space-x-3">
                  <NavLink to={`dashBoard/products/update/${product._id}`}>
                    <button className="text-blue-500 hover:text-blue-600 transition">
                      <FaEdit size={18} />
                    </button>
                  </NavLink>
                  <button
                    className="text-red-500 hover:text-red-600 transition"
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this product?")) {
                        deleteProduct(product._id);
                      }
                    }}
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {products?.length === 0 && (
        <p className="text-center text-gray-400 mt-4">No products available.</p>
      )}
    </div>
  );
};

export default ProductTable;


