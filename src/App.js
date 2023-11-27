import MainComponents from "./Components/MainComponents"
import './App.css';
import { BrowserRouter } from "react-router-dom";
import myStore from "./Redux/Store";
import { Provider } from "react-redux";


function App() {
  console.log("app.js", myStore.getState())
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponents />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
