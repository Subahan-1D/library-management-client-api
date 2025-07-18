import type { IBook, IBorrow } from "@/redux/interfeces/interfaces";
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
    // GET all books
    getBooks: builder.query<
      {
        data: IBook[];
        meta: {
          total: number;
          page: number;
          limit: number;
          totalPages: number;
        };
      },
      { page?: number; limit?: number }
    >({
      query: ({ page = 1, limit = 6 } = {}) =>
        `/books?page=${page}&limit=${limit}`,
      providesTags: ["Books"],
    }),
     // BORROW book
    borrowBook: builder.mutation<
      IBorrow,
      { book: string; quantity: number; dueDate: string }
    >({
      query: (body) => ({
        url: "/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Books", "Borrows"],
    }),
  }),
});

export const { useAddBookMutation, useGetBooksQuery, useBorrowBookMutation } = libraryApiSlice;
