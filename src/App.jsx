import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./Components/Context/MyContext";
import MainComponents from "./Components/MainComponents";
import { initialState } from "./Data/Data";

function App() {
  return (
    <ContextProvider value={initialState}>
      <BrowserRouter>
        <div className="App">
          <MainComponents />
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
