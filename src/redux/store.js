import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import postReducer from "./postSlice";

export default configureStore({
  reducer: {
    user: useReducer,
    post: postReducer,
  },
});
