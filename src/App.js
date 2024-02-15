import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';
import Plans from './components/Plans';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './components/Dashboard';
import Information from './components/Information';
import AffiliateLink from './components/AffiliateLink';
import CommunityPage from './components/CommunityPage';
import Overview from './components/Overview';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='flex flex-col bg-[#2e2d2d] '>

      <Navbar />
      <FirstPage />
      <About />
      <Overview/>
      <Information/>
      <Plans />
      <AffiliateLink/>
      <CommunityPage/>
      <Footer/>

      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
