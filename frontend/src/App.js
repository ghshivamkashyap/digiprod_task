import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BottomNavigation from "./components/BottomNavigation";
import PieChart from "./pages/PieChart";
import LineChart from "./pages/LineChart";

function App() {
  return (
    <div className=" h-[100vh] xs: pt-32  sm:pt-0 w-full bg-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pie-chart" element={<PieChart />} />
        <Route path="line-chart" element={<LineChart />} />
      </Routes>
      <BottomNavigation />
    </div>
  );
}

export default App;
