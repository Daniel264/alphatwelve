
const Pagination = () => {
    return (
        <div className="pt-10 w-full">
            <div className="join">
                <button className="join-item btn bg-[#E2E8F0] text-black border-none"> ❮ </button>
                <button className="join-item btn bg-white text-black border-none"><span className="bg-[#8576FF] text-white flex justify-center items-center w-6 h-6 rounded-full">1</span></button>
                <button className="join-item btn bg-white text-black px-[23px] border-none">2</button>
                <button className="join-item btn bg-white text-black px-[23px] border-none">3</button>
                <button className="join-item btn bg-white text-black"> ❯</button>
            </div>
        </div>
    );
};

export default Pagination;
