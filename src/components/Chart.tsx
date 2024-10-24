import ChartImage from "../assets/images/chart.svg";

const Chart = () => {
    return (
        <div>
            <img src={ChartImage} className="md:h-[400px]" alt="image of a chart" />
        </div>
    );
};

export default Chart;
