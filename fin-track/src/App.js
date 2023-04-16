import Home from "./pages/home/Home";
import Education from "../src/pages/Education/Education.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarketPlace from "./pages/marketplace/MarketPlace";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/marketplace" element={<MarketPlace/>}/> 
      {/* <Route path="/" element={<FinancialLiteracy/>}/> */}
    </Routes>
     
  );

  
}

export default App;
