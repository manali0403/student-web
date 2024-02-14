



import { New } from './components/Cards/New';



import Navbar from './components/Navbar';

import Plans from './components/Plans';


function App() {
  return (
    <div className='flex flex-col bg-[#2e2d2d] '>

      <Navbar />
      {/* <FirstPage/> */}
      <Plans />
        <New/>
      

      
      
    </div>
  );
}

export default App;
