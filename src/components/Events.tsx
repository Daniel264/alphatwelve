import { EventDetails } from "../utils/EventDetails";

const Events = () => {
    return (
        <div className="w-full space-y-10">
            {EventDetails.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-row w-full justify-between text-[#334155] font-medium"
                >
                    <span>{item.name}</span>
                    <span>{item.date}</span>
                    <span>{item.speaker}</span>
                    <span>{item.Status}</span>
                </div>
            ))}
        </div>
    );
};

export default Events;
