import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => ({
        url: "/products",
        method: "GET",
        params: query,
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

export const { useGetProductsQuery } = authApi;