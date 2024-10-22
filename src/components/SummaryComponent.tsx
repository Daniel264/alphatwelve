import Information from "../assets/images/information.svg";
import Incline from "../assets/images/arrow-up-right.svg";
import Decline from "../assets/images/arrow-down-right.svg";

interface SummaryProps {
    title: string;
    price: number;
    percentagePositive: boolean;
}

const SummaryComponent = ({
    title,
    price,
    percentagePositive,
}: SummaryProps) => {
    return (
        <div className="w-full">
            <article className="border-2 border-[#ADA9BB]/15 px-4 h-[88px] w-full space-y-3">
                <div className="flex space-x-5">
                    <p className="text-[#64748B] font-semibold">{title}</p>
                    <img src={Information} alt="" />
                </div>
                <div className="flex flex-row space-x-5">
                    <p className="font-medium text-xl">{price}</p>
                    <span className="flex">
                        {percentagePositive ? (
                            <img src={Incline} />
                        ) : (
                            <img src={Decline} />
                        )}
                        <span
                            className={`${percentagePositive ? `text-green-500` : `text-red-500`} font-medium flex text-sm`}
                        >
                            <span className="text-sm">{percentagePositive ? "+" : "-"}</span> 5.0%
                        </span>
                    </span>
                </div>
            </article>
        </div>
    );
};

export default SummaryComponent;
