import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    // Get All the products (Reading)
    getAllProducts: builder.query({
      query: () => `/products`
    })
  }),
});

export const { useGetAllProductsQuery } = productsApi;