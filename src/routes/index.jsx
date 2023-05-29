import { Routes, Route } from "react-router-dom";
import { PrintPage } from "../page/PrintPage";
import { MainPage } from "../page/MainPage";

export const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/result" element={<PrintPage />} />
    </Routes>
  );
};
