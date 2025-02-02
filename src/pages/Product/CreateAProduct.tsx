import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useAddAProductMutation } from "../../redux/features/Product/productApi";
import { Product } from "../../types/TProduct";
import { toast } from "sonner";

const CreateAProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Product>();

  const [createProduct, { isLoading }] = useAddAProductMutation();

  const onSubmit: SubmitHandler<Product> = async (data) => {
    const productData = {
      ...data,
      price: Number(data.price),
      quantity: Number(data.quantity),
    };

    console.log(productData);

    try {
      await createProduct(productData).unwrap();
      toast.success("Product created successfully!");
    } catch (error) {
      toast.error("Failed to create product.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-all duration-300">
      <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-400 text-center mb-6">
        Add New Manga
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            {...register("title", { required: "Title is required" })}
            placeholder="Enter manga title"
            className="dark:bg-gray-800 dark:text-white"
          />
          {errors.title && (
            <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            {...register("author", { required: "Author is required" })}
            placeholder="Enter author name"
            className="dark:bg-gray-800 dark:text-white"
          />
          {errors.author && (
            <p className="text-sm text-red-500 mt-1">{errors.author.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            {...register("image", { required: "Image URL is required" })}
            placeholder="Enter image URL"
            className="dark:bg-gray-800 dark:text-white"
          />
          {errors.image && (
            <p className="text-sm text-red-500 mt-1">{errors.image.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            type="number"
            {...register("price", {
              required: "Price is required",
              min: { value: 0, message: "Price must be at least 0" },
            })}
            placeholder="Enter price"
            className="dark:bg-gray-800 dark:text-white"
          />
          {errors.price && (
            <p className="text-sm text-red-500 mt-1">{errors.price.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Select
            onValueChange={(value) =>
              setValue("category", value as Product["category"])
            }
          >
            <SelectTrigger className="dark:bg-gray-800 dark:text-white">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="dark:bg-gray-800 dark:text-white">
              {[
                "Shonen",
                "Shojo",
                "Seinen",
                "Slice of life",
                "Sports manga",
                "Josei",
                "Isekai",
                "Mecha",
                "Fantasy",
                "Sci-Fi",
                "Horror",
                "Psychological",
                "Mystery",
                "Thriller",
                "Romance",
                "Supernatural",
                "Historical",
                "Adventure",
                "Comedy",
                "Drama",
              ].map((genre) => (
                <SelectItem key={genre} value={genre}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.category && (
            <p className="text-sm text-red-500 mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Enter manga description"
            className="dark:bg-gray-800 dark:text-white"
          />
          {errors.description && (
            <p className="text-sm text-red-500 mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            {...register("quantity", {
              required: "Quantity is required",
              min: { value: 0, message: "Quantity must be at least 0" },
            })}
            placeholder="Enter quantity"
            className="dark:bg-gray-800 dark:text-white"
          />
          {errors.quantity && (
            <p className="text-sm text-red-500 mt-1">
              {errors.quantity.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="inStock">In Stock</Label>
          <Select
            onValueChange={(value) => setValue("inStock", value === "true")}
          >
            <SelectTrigger className="dark:bg-gray-800 dark:text-white">
              <SelectValue placeholder="Select stock status" />
            </SelectTrigger>
            <SelectContent className="dark:bg-gray-800 dark:text-white">
              <SelectItem value="true">In Stock</SelectItem>
              <SelectItem value="false">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
          {errors.inStock && (
            <p className="text-sm text-red-500 mt-1">
              {errors.inStock.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 transition-all"
        >
          {isLoading ? "Creating..." : "Create Product"}
        </Button>
      </form>
    </div>
  );
};

export default CreateAProduct;
