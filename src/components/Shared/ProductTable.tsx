import { FaEdit, FaTrash } from "react-icons/fa";
import {
  useDeleteAProductMutation,
  useGetProductsQuery,
} from "../../redux/features/Product/productApi";

const ProductTable = () => {
  const [deleteProduct] = useDeleteAProductMutation();
  const { data: product, isLoading, error } = useGetProductsQuery({});

  const products = product?.data;

  if (isLoading)
    return <p className="text-center text-gray-500">Loading products...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load products</p>;

  if (!Array.isArray(products) || products.length === 0) {
    return <p className="text-center text-gray-400">No products found.</p>;
  }

  // Handle delete product
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      await deleteProduct(id);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg overflow-auto">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        All Products
      </h2>

      <table className="w-full border-collapse">
        {/* Table Head */}
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

        {/* Table Body */}
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
                {/* Update Button */}
                <button
                  className="text-blue-500 hover:text-blue-600 transition"
                  onClick={() => console.log("Update", product._id)}
                >
                  <FaEdit size={18} />
                </button>
                {/* Delete Button */}
                <button
                  className="text-red-500 hover:text-red-600 transition"
                  onClick={() => handleDelete(product._id)}
                >
                  <FaTrash size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* If no products are found */}
      {products?.length === 0 && (
        <p className="text-center text-gray-400 mt-4">No products available.</p>
      )}
    </div>
  );
};

export default ProductTable;
