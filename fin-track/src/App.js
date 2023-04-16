import Home from "./pages/home/Home";
import Education from "../src/pages/Education/Education.jsx";
import SavingsTracker from '/Users/aarowolaju/Projects/FinTrack/fin-track/src/components/savings/SavingsTracker.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/savings" element={<SavingsTracker/>}/>
      {/* <Route path="/" element={<Home/>}/>  */}
      {/* <Route path="/" element={<FinancialLiteracy/>}/> */}
    </Routes>
     
  );

  
}

export default App;
