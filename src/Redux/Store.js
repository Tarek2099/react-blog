import { createStore } from "redux";
import reducer from "./Reducer";

const myStore = createStore(reducer);

export default myStore