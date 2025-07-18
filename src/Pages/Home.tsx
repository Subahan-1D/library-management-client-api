import BookSlider from "@/Shared/BookSlider";
import Banner from "./Banner";



const Home = () => {
    return (
        <div className="w-full mx-auto ">
            <Banner title="Welcome to Book Library"></Banner>
            <BookSlider></BookSlider>
        </div>
    );
};

export default Home;