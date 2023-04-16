import Home from "./pages/home/Home";
import Parse from "parse/dist/parse.min.js"
import Education from "../src/pages/Education/Education.jsx";
// import SavingsTracker from '/Users/aarowolaju/Projects/FinTrack/fin-track/src/components/savings/SavingsTracker.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarketPlace from "./pages/marketplace/MarketPlace";
import Savings from "./pages/savings/Savings";

const PARSE_APPLICATION_ID = 'UiIZ76hvB6Vkbc8p5jIoKL1zdO0gWCo9JFO5HDfi';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = '6XonWQKkI1ZWBStdpBcYUt2bxoZNX0MzFX09ufo4';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/marketplace" element={<MarketPlace/>}/> 
      <Route path="/savings" element={<Savings/>}/> 
      {/* <Route path="/" element={<FinancialLiteracy/>}/> */}
    </Routes>
     
  );

  
}

export default App;
