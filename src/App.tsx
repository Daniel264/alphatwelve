import Hero from "./components/Hero";
import Summary from "./components/Summary";
import "./globals.css";

function App() {
    return (
        <div className="w-full h-[100vh] p-4 md:p-8 flex-col justify-center items-center flex">
            <Summary />
            <Hero />
        </div>
    );
}

export default App;
