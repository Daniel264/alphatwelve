
import Events from "./components/Events";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Pagination from "./components/Pagination";
import Summary from "./components/Summary";
import "./globals.css";

function App() {
    return (
        <div className="flex w-full min-h-[100vh] bg-white text-black">
            <div className="hidden lg:flex lg:flex-col  lg:min-h-[100vh] lg:w-fit lg:bg-[#fff]">
                <Menu />
            </div>
            <div className="w-full min-h-[100vh] p-4 md:p-8 flex-col items-center flex">
                <Summary />
                <Hero />
                {/* <EventHistory /> */}
                <Events />
                <Pagination />
            </div>
        </div>
    );
}

export default App;
