import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Home/>}/> */}
      {/* <Route path="/" element={<FinancialLiteracy/>}/> */}
    </Routes>
     
  );

  
}

export default App;
