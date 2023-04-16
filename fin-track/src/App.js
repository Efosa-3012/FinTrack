import Home from "./pages/home/Home";
import Education from "../src/pages/Education/Education.jsx";
import SavingsTracker from '/Users/aarowolaju/Projects/FinTrack/fin-track/src/components/savings/SavingsTracker.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarketPlace from "./pages/marketplace/MarketPlace";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/education" element={<Education/>}/>
<<<<<<< HEAD
      <Route path="/marketplace" element={<MarketPlace/>}/> 
=======
      <Route path="/savings" element={<SavingsTracker/>}/>
      {/* <Route path="/" element={<Home/>}/>  */}
>>>>>>> 916cea926fb3172459805c0354d9b0e888639591
      {/* <Route path="/" element={<FinancialLiteracy/>}/> */}
    </Routes>
     
  );

  
}

export default App;
