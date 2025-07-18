import bg from "../assets/images/bookBanner.jpg";

interface BannerProps {
    title: string;
}

const Banner = ({ title }: BannerProps) => {
    return (
        <div
            className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 text-center">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                    {title}
                </h1>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-xl sm:max-w-2xl drop-shadow">
                    Discover thousands of books, grow your knowledge, and enjoy every page
                </p>

            </div>
        </div>
    );
};

export default Banner;