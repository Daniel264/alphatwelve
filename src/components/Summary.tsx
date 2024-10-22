import Information from "../assets/images/information.svg";
import Incline from "../assets/images/arrow-up-right.svg";
import Decline from "../assets/images/arrow-down-right.svg";

interface SummaryProps {
    title: string;
    price: number;
    percentagePositive: boolean;
}

const Summary = ({ title, price, percentagePositive }: SummaryProps) => {
    return (
        <div>
            <article>
                <div>
                    <p>{title}</p>
                    <img src={Information} alt="" />
                </div>
                <div>
                    <p>{price}</p>
                    <p>
                        {percentagePositive ? (
                            <img src={Incline} />
                        ) : (
                            <img src={Decline} />
                        )}
                    </p>
                </div>
            </article>
        </div>
    );
};

export default Summary;
