import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [
      {
        id: 1,
        title: "First Post",
        decription: "This is my first post...!",
        tag: 2,
      },
      {
        id: 2,
        title: "Second Post",
        decription: "You can do it, happy forever...!",
        tag: 3,
      },
      {
        id: 3,
        title: "Three Post",
        decription: "News post sended...!",
        tag: 4,
      },
    ],
    updatePosts: [],
  },
  reducers: {
    createPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      state.updatePosts = state.posts.filter(
        (post) => post.id === action.payload
      );
    },
    savePost: (state, action) => {
      const index = state.posts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
      return state;
    },
    removeTextFiel: (state, action) => {
      state.updatePosts = action.payload;
    },
  },
});

export const { createPost, deletePost, updatePost, savePost, removeTextFiel } =
  postSlice.actions;
export default postSlice.reducer;
