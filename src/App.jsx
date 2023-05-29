import "./App.css";
import { Calculator } from "./components/Calculator";
import { CarContextProvider } from "./context/provider";
import { BrowserRouter } from "react-router-dom";

import { RouteComponent } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <CarContextProvider>
        <RouteComponent />
      </CarContextProvider>
    </BrowserRouter>
  );
}

export default App;
