import SummaryComponent from "./SummaryComponent";

const Summary = () => {
    return (
        <section className="flex flex-row gap-10 w-full">
            <SummaryComponent
                title={"Total Events"}
                price={100000}
                percentagePositive={true}
            />
            <SummaryComponent
                title={"Active Speakers"}
                price={25}
                percentagePositive={false}
            />
            <SummaryComponent
                title={"Total Registrations"}
                price={300}
                percentagePositive={true}
            />
            <SummaryComponent
                title={"Total Revenue"}
                price={500000}
                percentagePositive={true}
            />
        </section>
    );
};

export default Summary;
