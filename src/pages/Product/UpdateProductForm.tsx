import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useUpdateAProductMutation,
} from "../../redux/features/Product/productApi";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";

const UpdateProductForm = () => {
  const { id } = useParams<{ id: string }>(); // Explicitly type `id` as string
  const navigate = useNavigate();

  const { data: product, isLoading } = useGetProductByIdQuery(id as string);
  const [updateProduct, { isLoading: isUpdating }] =
    useUpdateAProductMutation();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      price: 0,
      quantity: 0,
    },
  });

  // Pre-fill form when product data is available
  useEffect(() => {
    if (product) {
      setValue("price", product.price);
      setValue("quantity", product.quantity);
    }
  }, [product, setValue]);

  const onSubmit = async (data: any) => {
    if (!id) {
      toast.error("Product ID is missing");
      return;
    }

    const productData = {
      ...data,
      price: Number(data.price),
      quantity: Number(data.quantity),
    };

    try {
      await updateProduct({ id, data: productData }).unwrap();
      toast.success("Product updated successfully!");
      navigate("/dashboard/");
    } catch (error) {
      toast.error("Failed to update product");
    }
  };

  if (isLoading) return <p>Loading product details...</p>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Price */}
        <label className="block mb-2">Price</label>
        <input
          {...register("price")}
          className="w-full p-2 mb-4 text-black"
          type="number"
          step="0.01"
          required
        />

        {/* Quantity */}
        <label className="block mb-2">Quantity</label>
        <input
          {...register("quantity")}
          className="w-full p-2 mb-4 text-black"
          type="number"
          required
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600"
        >
          {isUpdating ? "Updating..." : "Update Product"}
        </Button>
      </form>
    </div>
  );
};

export default UpdateProductForm;
