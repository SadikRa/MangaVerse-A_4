import { baseApi } from '../../api/baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (queryParams: { limit?: number; page?: number }) => ({
        url: "/products",
        method: "GET",
        params: queryParams, // Pass query parameters like limit and page
      }),
      transformResponse: (baseQueryReturnValue: any) => {
        if (baseQueryReturnValue?.data) {
          return baseQueryReturnValue.data;
        }
        console.error("Unexpected response structure:", baseQueryReturnValue);
        return [];
      },
      providesTags: ['product'],
    }),
  }),
});

export const { useGetProductsQuery } = productApi;