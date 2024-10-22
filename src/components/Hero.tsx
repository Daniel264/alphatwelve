import React from "react";
import Chart from "./Chart";
import Carousel from "./Carousel";

const Hero = () => {
    return (
        <div className="h-fit flex flex-col w-full justify-center">
            <div className="w-[50%] flex justify-center pb-4">
                <h2>Event registrations per month</h2>
            </div>
            <div className="h-fit flex flex-row w-full justify-center">
                <Chart />
                <Carousel />
            </div>
        </div>
    );
};

export default Hero;
