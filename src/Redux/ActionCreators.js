import BLOGS from "../Data/Data"
import * as actionTypes from "./ActionTypes"

export const LOAD_BLOGS = (blogs) => ({
  type: actionTypes.LOAD_BLOGS,
  payload: blogs,
});

export const fetchBlogs = dispatch => {
    dispatch(LOAD_BLOGS(BLOGS))
}