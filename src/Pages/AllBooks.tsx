import { useState } from "react";
import { useGetBooksQuery } from "@/redux/features/api/libraryApi";

import Banner from "./Banner";
import BookCard from "@/Shared/BookCards/BookCards";


const AllBooks = () => {
  const [page, setPage] = useState(1);
  const limit = 8;

  const { data, isLoading, isError } = useGetBooksQuery({ page, limit });

  const books = data?.data || [];
  const totalPages = data?.meta?.totalPages || 1;

  if (isLoading) {
    return <div className="text-center py-10">
      <span className="loading loading-spinner text-primary"></span>
      <span className="loading loading-spinner text-secondary"></span>
      <span className="loading loading-spinner text-accent"></span>
      <span className="loading loading-spinner text-neutral"></span>
      <span className="loading loading-spinner text-info"></span>
      <span className="loading loading-spinner text-success"></span>
      <span className="loading loading-spinner text-warning"></span>
      <span className="loading loading-spinner text-error"></span>
    </div>;
  }

  if (isError) {
    return <div className="text-center py-10 text-red-500">Failed to load books.</div>;
  }

  const handlePageClick = (pageNum: number) => {
    if (pageNum !== page) setPage(pageNum);
  };

  return (
    <div className="w-full">
      <Banner title="All Books"></Banner>
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6">
          All <span className="text-blue-500">Books</span>
        </h2>

        <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-10 space-x-2">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className=" px-4 py-2 bg-emerald-500 text-white rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageClick(pageNum)}
                className={`px-3 py-1 rounded ${pageNum === page ? "bg-emerald-500 text-white" : "bg-gray-500"
                  }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-emerald-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;