import { useState } from "react";
import { EventDetails } from "../utils/EventDetails";
import modal_image_one from "../assets/images/modal-one.png";
import modal_image_two from "../assets/images/modal-two.png";
import modal_image_three from "../assets/images/modal-three.png";

const Events = () => {
    const [completed, setCompleted] = useState(EventDetails);

    const markAsCompleted = () => {
        setCompleted(
            completed.map((complete) =>
                complete.id === complete.id
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
                    onClick={() => {
                        const modal = document.getElementById(
                            "my_modal_5",
                        ) as HTMLDialogElement;
                        if (modal) {
                            modal.showModal();
                        }
                    }}
                    key={index}
                    className="grid grid-cols-4 cursor-pointer text-[#334155] font-medium"
                >
                    <span>{item.name}</span>
                    <span>{item.date}</span>
                    <span>{item.speaker}</span>
                    <div
                        className={`${item.Status === "completed" ? "bg-[#D1FAE5] text-[#10B981]" : "bg-[#DBEAFE] text-[#3B82F6]"} gap-2 items-center justify-center flex-row h-fit flex rounded-badge px-3 w-fit`}
                    >
                        <div
                            className={`w-2 h-2 rounded-full ${item.Status === "completed" ? "bg-[#10B981]" : "bg-[#3B82F6]"}`}
                        ></div>
                        {item.Status}
                    </div>
                </div>
            ))}
            <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box bg-white h-[380px] space-y-5 rounded">
                    <h3 className="font-bold text-lg">Event Name</h3>
                    <h5>Event Date</h5>
                    <p>Event Description</p>
                    <div className="flex flex-row relative">
                        <img
                            src={modal_image_three}
                            className="absolute z-50 h-12 -top-5 w-12"
                            alt="image of the first modal avatar"
                        />
                        <img
                            src={modal_image_two}
                            className="absolute left-7 z-30 -top-5 h-12 w-12"
                            alt="image of the second modal avatar"
                        />
                        <img
                            src={modal_image_one}
                            className="h-12 w-12 left-14 -top-5 absolute"
                            alt="image of the third modal avatar"
                        />
                    </div>
                    <p className="py-4">
                        3 Guest Speakers: Speaker name A, Speaker name B,
                        Speaker name C.
                    </p>
                    <p>400 Attendees</p>
                    <div className="modal-action">
                        <form
                            method="dialog"
                            className="flex flex-row w-full justify-between"
                        >
                            {/* if there is a button in form, it will close the modal */}
                            <div>
                                <button className="btn bg-inherit border-[1px] border-black rounded outline-none  text-black">
                                    Edit
                                </button>
                            </div>
                            <div className="space-x-3">
                                <button className="btn bg-[#F43F5E] outline-none rounded border-none text-white">
                                    Close
                                </button>
                                <button
                                    onClick={markAsCompleted}
                                    className="btn bg-[#8576FF] outline-none rounded border-none text-white"
                                >
                                    Mark as completed
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Events;
