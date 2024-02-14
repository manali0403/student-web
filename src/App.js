import Navbar from "./components/Navbar";
import HeroSection from "./components/FirstPage";
import Plans from "./components/Plans";

function App() {
  return (
    <div className="flex flex-col bg-[#2e2d2d] ">
      <Navbar />
      <HeroSection />
      <Plans />
    </div>
  );
}

export default App;
