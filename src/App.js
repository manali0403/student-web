import Navbar from "./components/Navbar";
import HeroSection from "./components/FirstPage";
import Plans from "./components/Plans";
import { About } from "./components/About";

function App() {
  return (
    <div className="flex flex-col bg-[#2e2d2d] ">
      <Navbar />
      <HeroSection />
      <About />
      <Plans />
    </div>
  );
}

export default App;
