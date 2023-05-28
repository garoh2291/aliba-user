import "./App.css";
import { Calculator } from "./components/Calculator";
import { CarContextProvider } from "./context/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg from "./assets/bg0.jpg";

function App() {
  return (
    <CarContextProvider>
      <div className="App" style={{ backgroundImage: `url(${bg})` }}>
        <ToastContainer autoClose={1500} />
        <Calculator />
      </div>
    </CarContextProvider>
  );
}

export default App;
