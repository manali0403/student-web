import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';
import Plans from './components/Plans';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='flex flex-col bg-[#2e2d2d] '>

      {/* <Navbar /> */}
      {/* <FirstPage/> */}
      {/* <Plans /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
