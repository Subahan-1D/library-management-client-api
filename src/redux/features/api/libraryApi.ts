import type { IBook } from "@/redux/interfeces/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const libraryApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
  }),
  tagTypes: ["Books", "Borrows"],
  endpoints: (builder) => ({
    // create book api
    addBook: builder.mutation<IBook, Partial<IBook>>({
      query: (body) => ({
        url: "/books",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddBookMutation } = libraryApiSlice;
