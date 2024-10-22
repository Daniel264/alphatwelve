import ChartImage from "../assets/images/chart.svg";

const Chart = () => {
    return (
        <div>
            {/* <h2 className="mb-7">Event Registration per month</h2> */}
            <img src={ChartImage} className="h-[400px]" alt="image of a chart" />
        </div>
    );
};

export default Chart;
