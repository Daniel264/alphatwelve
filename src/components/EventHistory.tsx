
const EventHistory = () => {
    return (
        <div>
            <h2 className="font-semibold text-2xl">Event History</h2>
            <div className="flex gap-10">
                <input
                    type="text"
                    name="search"
                    className="bg-inherit outline outline-[1px] outline-gray-300 px-4 py-2 w-full"
                    id="search"
                    placeholder="Search"
                />
                <input type="date" name="" className="bg-inherit" placeholder="Date" id="" />
            </div>
        </div>
    );
};

export default EventHistory;
