

import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';
import Plans from './components/Plans';

function App() {
  return (
    <div className='flex flex-col bg-[#2e2d2d] '>

      <Navbar />
      {/* <FirstPage/> */}
      <Plans />
    </div>
  );
}

export default App;
