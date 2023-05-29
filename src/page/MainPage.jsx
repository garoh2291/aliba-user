import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg from "../assets/bg0.jpg";
import { Calculator } from "../components/Calculator";

export const MainPage = () => {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <ToastContainer autoClose={1500} />
      <Calculator />
    </div>
  );
};
