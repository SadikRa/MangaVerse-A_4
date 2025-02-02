import { Product } from "../../../types/TProduct";
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all products with pagination
    getProducts: builder.query({
      query: (queryParams?: { limit?: number; page?: number }) => ({
        url: "/products",
        method: "GET",
        params: queryParams,
      }),
      transformResponse: (baseQueryReturnValue: any) => {
        if (baseQueryReturnValue?.data) {
          return baseQueryReturnValue.data;
        }
        console.error("Unexpected response structure:", baseQueryReturnValue);
        return [];
      },
      providesTags: ["product"],
    }),

    // Fetch a single product by ID
    getProductById: builder.query({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      transformResponse: (baseQueryReturnValue: any) => {
        if (baseQueryReturnValue?.data) {
          return baseQueryReturnValue.data;
        }
        console.error("Unexpected response structure:", baseQueryReturnValue);
        return null;
      },
      providesTags: ["product"],
    }),

    // Add a new product
    addAProduct: builder.mutation<Product, Partial<Product>>({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["product"],
    }),

    // Update an existing product
    updateAProduct: builder.mutation({
      query: ({ id, data }: { id: string; data: any }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),

    // Delete a product
    deleteAProduct: builder.mutation({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddAProductMutation,
  useUpdateAProductMutation,
  useDeleteAProductMutation,
} = productApi;
