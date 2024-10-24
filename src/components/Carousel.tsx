import React from "react";
import slideOne from "../assets/images/Slide1.svg";
import slideTwo from "../assets/images/Slide2.svg";
import slideThree from "../assets/images/Slide3.svg";

 const text = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quam vel ratione aspernatur impedit molestias maiores ducimus itaque architecto ipsum tempora ab officiis at, est porro quibusdam reiciendis hic, consequuntur rerum, voluptas doloremque veritatis eos? Culpa, architecto aliquam? Enim, dolore!";


const Carousel = () => {
    return (
        <div className="w-full md:w-[50%] pb-8 lg:pb-0">
            <div className="carousel w-full lg:h-[400px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slideOne} className="w-full" />
                    <p className="font-normal text-xs absolute bottom-0 w-[600px] text-center text-white">{text}</p>
                    <div className="absolute left-20 right-20 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a
                            href="#slide1"
                            className="btn btn-circle bg-white border-none"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide2"
                            className="btn btn-circle bg-white border-none"
                        >
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slideTwo} className="w-full" />
                    <p className="font-normal text-sm absolute bottom-0 w-[600px] text-center text-white">{text}</p>
                    <div className="absolute left-20 right-20 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a
                            href="#slide2"
                            className="btn btn-circle bg-white border-none"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide3"
                            className="btn btn-circle bg-white border-none"
                        >
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slideThree} className="w-full" />
                    <p className="font-normal text-sm absolute bottom-0 w-[600px] text-center text-white">{text}</p>
                    <div className="absolute left-20 right-20 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a
                            href="#slide3"
                            className="btn btn-circle bg-white border-none"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide1"
                            className="btn btn-circle bg-white border-none"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
