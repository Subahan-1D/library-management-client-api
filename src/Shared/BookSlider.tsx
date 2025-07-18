import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/features/api/libraryApi";

import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Link, useNavigate } from "react-router";

const BookSlider = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useGetBooksQuery({ limit: 10 });
    const books = data?.data || [];

    // Genre styling


    const genreColors = {
        SCIENCE: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
        HISTORY: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
        FICTION: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
        BIOGRAPHY: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        TECHNOLOGY: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
        PHILOSOPHY: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200",
        default: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    };
    const getGenreStyle = (genre: string) => {
        return genreColors[genre as keyof typeof genreColors] || genreColors.default;
    };

    return (
        <section className="py-8 md:py-12 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                        Featured Books by Genre
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">
                        Discover books from different categories
                    </p>
                </div>

                {isLoading ? (
                    <div className="flex justify-center gap-4 sm:gap-6">
                        {[...Array(3)].map((_, index) => (
                            <Skeleton
                                key={index}
                                className="h-64 sm:h-80 w-40 sm:w-64 rounded-xl"
                            />
                        ))}
                    </div>
                ) : (
                    <div className="relative px-2 sm:px-12">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            slidesPerView={1.1}  // Show 1.1 slides to indicate scrollability
                            spaceBetween={16}
                            centeredSlides={false}
                            navigation={{
                                nextEl: ".custom-next",
                                prevEl: ".custom-prev",
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            breakpoints={{
                                400: { slidesPerView: 1.3, spaceBetween: 16 },
                                500: { slidesPerView: 1.5, spaceBetween: 16 },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                            }}
                            className="w-full p-10"
                        >
                            {books.map((book) => (
                                <SwiperSlide key={book._id} className="!h-auto !flex justify-center">
                                    <div className="bg-white border rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all h-full dark:bg-gray-800 dark:border-gray-700 w-[280px] sm:w-full sm:max-w-xs">
                                        <div className={`absolute -top-2 -right-2 sm:top-1 sm:-right-3 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold ${getGenreStyle(book.genre)}`}>
                                            {book.genre}
                                        </div>
                                        <div className="h-36 sm:h-48 mb-3 sm:mb-4 bg-gray-100 rounded-lg flex items-center justify-center dark:bg-gray-700">
                                            <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 dark:text-gray-500" />
                                        </div>
                                        <h3 className="font-bold text-base sm:text-lg line-clamp-1 dark:text-white">
                                            {book.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 mt-1">
                                            {book.author}
                                        </p>
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                                            {book.description}
                                        </p>
                                        <Button
                                            size="sm"
                                            className="mt-3 sm:mt-4 w-full text-xs sm:text-sm"
                                            onClick={() => navigate(`/details/${book._id}`)}
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                        <button className="custom-prev hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all transform hover:scale-110">
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
                        </button>
                        <button className="custom-next hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all transform hover:scale-110">
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
                        </button>
                    </div>
                )}

                <div className="text-center mt-6 sm:mt-8">
                    <Link
                        to="/books"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        📖 Browse All Books
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BookSlider;