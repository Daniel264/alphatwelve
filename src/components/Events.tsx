import { useState } from "react";
import { EventDetails } from "../utils/EventDetails";

interface Status {
    isCompleted: boolean;
}

const Events = ({ isCompleted }: Status) => {
    const [completed, setCompleted] = useState(EventDetails);

    const markAsCompleted = () => {
        setCompleted(
            completed.map((complete) =>
                complete.id === 1
                    ? { ...complete, Status: "completed" }
                    : complete,
            ),
        );
        console.log(completed);
        
    };

    return (
        <div className="w-full space-y-10">
            {EventDetails.map((item, index) => (
                <div
                    onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                    }
                    key={index}
                    className="grid grid-cols-4 cursor-pointer text-[#334155] font-medium"
                >
                    <span>{item.name}</span>
                    <span>{item.date}</span>
                    <span>{item.speaker}</span>
                    <span
                        className={`${item.Status === "completed" ? "bg-green-200" : "bg-red-200"} rounded-badge px-3 w-fit`}
                    >
                        {item.Status}
                    </span>
                </div>
            ))}
            <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg">Event Name</h3>
                    <h5>Event Date</h5>
                    <p>Event Description</p>
                    <p className="py-4">
                        3 Guest Speakers: Speaker name A, Speaker name B,
                        Speaker name C.
                    </p>
                    <p>400 Attendees</p>
                    <div className="modal-action">
                        <form method="dialog" className="space-x-2">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-[#F43F5E] outline-none border-none text-white">
                                Close
                            </button>
                            <button
                                onClick={markAsCompleted}
                                className="btn bg-[#8576FF] outline-none border-none text-white"
                            >
                                Mark as completed
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Events;
