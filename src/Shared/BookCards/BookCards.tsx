import Modal from "@/components/Modal";
// import { useDeleteBookMutation } from "@/redux/features/api/libraryApi";
import type { IBook } from "@/redux/interfeces/interfaces";


import { BookOpen, User, Hash, LibraryBig, Edit, Trash2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
// import Swal from "sweetalert2";

interface Props {
  book: IBook;
}

const BookCard = ({ book }: Props) => {
  // const [deleteBook] = useDeleteBookMutation();
  const [openBorrowModal, setOpenBorrowModal] = useState(false);



  // const handleDelete = () => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "This book will be permanently deleted!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#d33',
  //     cancelButtonColor: '#3085d6',
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'Cancel'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       deleteBook(book._id)
  //         .unwrap()
  //         .then(() => {
  //           Swal.fire(
  //             'Deleted!',
  //             'The book has been deleted.',
  //             'success'
  //           );
  //         })
  //         .catch(() => {
  //           Swal.fire(
  //             'Error!',
  //             'Something went wrong.',
  //             'error'
  //           );
  //         });
  //     }
  //   });
  // };
  return (
    <div className="container mx-auto group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full">
      {/* Status Ribbon */}
      <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-semibold rounded-bl-lg
        ${book.available ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
        {book.available ? `${book.copies} available` : "Out of stock"}
      </div>

      {/* Book Cover Placeholder */}
      <div className="bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 h-48 flex items-center justify-center">
        <BookOpen className="h-16 w-16 text-gray-400 dark:text-gray-500" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {/* Title and Author */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white line-clamp-1">
            {book.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 flex items-center mt-1">
            <User className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="line-clamp-1">{book.author}</span>
          </p>
        </div>

        {/* Metadata */}
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
          <div className="flex items-center">
            <Hash className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0" />
            <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 rounded-md text-xs">
              {book.genre}
            </span>
          </div>
          <div className="flex items-center">
            <LibraryBig className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0" />
            <span>ISBN: {book.isbn}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/details/${book._id}`}
              className="py-2 px-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-sm rounded-md transition-all duration-300 flex items-center justify-center"
            >
              <ArrowRight className="h-4 w-4 mr-1" />
              View
            </Link>

            <Link
              to={`/edit/${book._id}`}
              className="py-2 px-3 border border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-gray-700 text-sm rounded-md transition-all duration-300 flex items-center justify-center"
            >
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setOpenBorrowModal(true)}
              disabled={!book.available}
              className={`py-2 px-3 text-sm rounded-md transition-all duration-300 flex items-center justify-center
                ${book.available
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed'}`}
            >
              Borrow
            </button>

            <button 

              className="py-2 px-3 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white text-sm rounded-md transition-all duration-300 flex items-center justify-center"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete
            </button>
          </div>
        </div>
      </div>
      <Modal
        book={book}
        open={openBorrowModal}
        setOpen={setOpenBorrowModal}
      />
    </div>
  );
};

export default BookCard;