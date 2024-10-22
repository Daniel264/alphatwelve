import { EventDetails } from "../utils/EventDetails";

interface Status {
    isCompleted: boolean;
}

const Events = ({ isCompleted }: Status) => {
    return (
        <div className="w-full space-y-10">
            {EventDetails.map((item, index) => (
                <div
                    onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                    }
                    key={index}
                    className="flex flex-row w-full justify-between cursor-pointer text-[#334155] font-medium"
                >
                    <span>{item.name}</span>
                    <span>{item.date}</span>
                    <span>{item.speaker}</span>
                    <span
                        className={`${isCompleted ? "bg-green-200" : "bg-red-200"} rounded-badge px-3`}
                    >
                        {item.Status}
                    </span>
                </div>
            ))}
            <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle text-white"
            >
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                        Press ESC key or click the button below to close
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Events;
