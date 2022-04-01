import './App.css';
import Dashboard from "./components/Dashboard"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import CareerPage from "./components/CareerPage"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/> }/>
        <Route path="careerpage" element={<CareerPage/> }/>
     </Routes>
    </>
  );
}

export default App;
