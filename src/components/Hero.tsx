import React from "react";
import Chart from "./Chart";
import Carousel from "./Carousel";

const Hero = () => {
    return (
        <div className="h-fit flex flex-row">
            <Chart />
            <Carousel />
        </div>
    );
};

export default Hero;
