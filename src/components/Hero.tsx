
import Chart from "./Chart";
import Carousel from "./Carousel";

const Hero = () => {
    return (
        <div className="h-fit flex flex-col w-full justify-center">
            <div className="lg:w-[50%] pt-5 flex justify-center md:pb-4">
                <h2 className="text-xl font-semibold">
                    Event registrations per month
                </h2>
            </div>
            <div className="h-fit flex flex-col space-x-4 lg:flex-row w-full justify-center">
                <Chart />
                <Carousel />
            </div>
        </div>
    );
};

export default Hero;
