import * as actionTypes from "./ActionTypes"
import {combineReducers} from "redux"
// const initialState = {
//   blogs: BLOGS,
// };

const blogsReducer = (state={blogs: []}, action) => {
  switch (actionTypes) {
    case actionTypes.LOAD_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
   default: return state
  }
};


const reducer = combineReducers({
  BLOGS: blogsReducer
})

export default reducer;
