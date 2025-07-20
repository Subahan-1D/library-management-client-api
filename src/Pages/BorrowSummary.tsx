import { useState } from "react";
import { useGetBorrowSummaryQuery } from "@/redux/features/api/libraryApi";
import Banner from "./Banner";


const BorrowSummary = () => {
    const [page, setPage] = useState(1);
    console.log(page)
    const limit = 5;

    const { data, isLoading, isError } = useGetBorrowSummaryQuery({ page, limit });

    const books = data?.data || [];
    const totalPages = data?.meta?.totalPages || 1;
    

    if (isLoading) return <div className="text-center py-10"> <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span></div>;
    if (isError) return <div className="text-center py-10 text-red-500">Failed to load books.</div>;

    return (
        <div className="w-full">
            <Banner title="Borrow Summary"></Banner>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">
                    Borrowed <span className="text-blue-500">Books</span> Summary
                </h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-100 dark:border-gray-700  rounded-lg">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ISBN</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Borrowed</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {books.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {item.book.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.book.isbn}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.totalQuantity}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-6 space-x-2">
                    <button
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                    >
                        Prev
                    </button>
                    {[...Array(totalPages)].map((_, i) => {
                        const p = i + 1;
                        return (
                            <button
                                key={p}
                                onClick={() => setPage(p)}
                                className={`px-3 py-1 rounded ${p === page ? "bg-blue-500 text-white" : "bg-gray-500"}`}
                            >
                                {p}
                            </button>
                        );
                    })}
                    <button
                        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={page === totalPages}
                        className="px-4 py-2 bg-blue-500 rounded disabled:opacity-50 text-white"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BorrowSummary;