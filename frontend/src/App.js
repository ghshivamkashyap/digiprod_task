import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BottomNavigation from "./components/BottomNavigation";
import PieChart from "./pages/PieChart";
import LineChart from "./pages/LineChart";
import Map from "./pages/Map";
import Tabs from "./pages/Tabs";
import Button from "./pages/Button";
import Table from "./pages/Table";
import Calander from "./pages/Calander";

function App() {
  return (
    <div className=" h-[100vh] xs: pt-32  sm:pt-0 w-full bg-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pie-chart" element={<PieChart />} />
        <Route path="line-chart" element={<LineChart />} />
        <Route path="map" element={<Map />} />
        <Route path="tabbed-layout" element={<Tabs />} />
        <Route path="button" element={<Button />} />
        <Route path="table" element={<Table />} />
        <Route path="calender" element={<Calander />} />
      </Routes>
      <BottomNavigation />
    </div>
  );
}

export default App;
