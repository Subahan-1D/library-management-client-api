import { useGetBookByIdQuery } from "@/redux/features/api/libraryApi";


import { ArrowLeft, BookOpen, User, Hash, Layers, Check, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import Modal from "@/components/Modal";
import { useState } from "react";
import Banner from "./Banner";


const DetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [openBorrowModal, setOpenBorrowModal] = useState(false);
    const navigate = useNavigate();


    const {
        data: book,
        isLoading,
        isError,
    } = useGetBookByIdQuery(id!);

    if (isLoading) return <div className="text-center py-10">
        <span className="loading loading-infinity loading-xs"></span>
        <span className="loading loading-infinity loading-sm"></span>
        <span className="loading loading-infinity loading-md"></span>
        <span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-infinity loading-xl"></span>
    </div>
    if (isError) return <div className="text-center py-10 text-red-500">Failed to load books.</div>





    return (
        <div className="mx-auto w-full ">
            <div>
                <Banner title="Book Details"></Banner>
            </div>
            <div className="max-w-4xl mx-auto my-8 px-4 sm:px-6 lg:px-8">

                <Button
                    onClick={() => navigate(-1)}
                    variant="ghost"
                    className="mb-6 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Books
                </Button>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    {isLoading ? (
                        <div className="p-6 space-y-4">
                            <Skeleton className="h-8 w-3/4" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                                <Skeleton className="h-4 w-4/5" />
                            </div>
                            <Skeleton className="h-32 w-full" />
                        </div>
                    ) : (
                        <>
                            <div className="p-6 sm:p-8">
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                                        <div className="w-48 h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                            <BookOpen className="h-16 w-16 text-gray-400" />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                                            {book?.title}
                                        </h1>
                                        <p className="mt-1 text-lg text-gray-600 dark:text-gray-300">
                                            by {book?.author}
                                        </p>

                                        <div className="mt-6 space-y-3">
                                            <div className="flex items-center">
                                                <User className="h-5 w-5 text-gray-500 mr-2" />
                                                <span className="text-gray-700 dark:text-gray-300">
                                                    {book?.author}
                                                </span>
                                            </div>

                                            <div className="flex items-center">
                                                <Hash className="h-5 w-5 text-gray-500 mr-2" />
                                                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm font-medium">
                                                    {book?.genre}
                                                </span>
                                            </div>

                                            <div className="flex items-center">
                                                <BookOpen className="h-5 w-5 text-gray-500 mr-2" />
                                                <span className="text-gray-700 dark:text-gray-300">
                                                    ISBN: {book?.isbn}
                                                </span>
                                            </div>

                                            <div className="flex items-center">
                                                <Layers className="h-5 w-5 text-gray-500 mr-2" />
                                                <span className="text-gray-700 dark:text-gray-300">
                                                    {book?.copies} {book?.copies === 1 ? 'copy' : 'copies'} available
                                                </span>
                                            </div>

                                            <div className="flex items-center">
                                                {book?.available ? (
                                                    <>
                                                        <Check className="h-5 w-5 text-blue-500 mr-2" />
                                                        <span className="text-blue-600 dark:text-blue-400">
                                                            Available for borrowing
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <X className="h-5 w-5 text-red-500 mr-2" />
                                                        <span className="text-red-600 dark:text-red-400">
                                                            Currently unavailable
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {book?.description && (
                                    <div className="mt-8">
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                            Description
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                                            {book.description}
                                        </p>
                                    </div>
                                )}

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Button onClick={() => setOpenBorrowModal(true)} className="bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-b;ie-700 text-white">
                                        Borrow Book
                                    </Button>

                                </div>
                            </div>


                        </>
                    )}
                </div>
                {book && (
                    <Modal
                        book={book}
                        open={openBorrowModal}
                        setOpen={setOpenBorrowModal}
                    />
                )}
            </div>
        </div>
    );
};

export default DetailsPage;