import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Summary from "./components/Summary";
import "./globals.css";

function App() {
    return (
        <div className="flex h-[100vh] ">
            <div>
                <Menu />
            </div>
            <div className="w-full h-[100vh] p-4 md:p-8 flex-col justify-center items-center flex">
                <Summary />
                <Hero />
            </div>
        </div>
    );
}

export default App;
