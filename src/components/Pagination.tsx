import React from "react";

const Pagination = () => {
    return (
        <div className="pt-10">
            <div className="join">
                <button className="join-item btn bg-white text-black"> ❮ </button>
                <button className="join-item btn bg-white text-black">1</button>
                <button className="join-item btn bg-white text-black">2</button>
                <button className="join-item btn bg-white text-black">3</button>
                <button className="join-item btn bg-white text-black"> ❯</button>
            </div>
        </div>
    );
};

export default Pagination;
