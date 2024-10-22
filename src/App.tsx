import Hero from "./components/Hero";
import Summary from "./components/Summary";
import "./globals.css";

function App() {
    return (
        <div className="w-full h-[100vh] flex-col justify-center items-center flex">
            <Summary />
            <Hero />
        </div>
    );
}

export default App;
