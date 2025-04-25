import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainComponents from "./Components/MainComponents";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainComponents />
      </div>
    </BrowserRouter>
  );
}

export default App;
