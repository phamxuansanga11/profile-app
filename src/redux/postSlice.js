import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [
      { title: "First Post", decription: "This is my first post...!", tag: 2 },
      { title: "Second Post", decription: "You can do it...!", tag: 3 },
      { title: "Three Post", decription: "News post sended...!", tag: 4 },
    ],
  },
  reducers: {
    createPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { createPost } = postSlice.actions;
export default postSlice.reducer;
