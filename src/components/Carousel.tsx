import React from "react";
import slideOne from "../assets/images/Slide1.svg";
import slideTwo from "../assets/images/Slide2.svg";
import slideThree from "../assets/images/Slide3.svg";

const Carousel = () => {
    return (
        <div className="w-full md:w-[50%] ">
            <div className="carousel w-full h-[400px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={slideOne}
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={slideTwo}
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={slideThree}
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Carousel;
