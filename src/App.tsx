import Hero from "./components/Hero";
import SideBar from "./components/SideBar";
import Summary from "./components/Summary";
import "./globals.css";

function App() {
    return (
        <div className="flex h-[100vh] ">
            <div>
                <SideBar />
            </div>
            <div className="w-full h-[100vh] p-4 md:p-8 flex-col justify-center items-center flex">
                <Summary />
                <Hero />
            </div>
        </div>
    );
}

export default App;
