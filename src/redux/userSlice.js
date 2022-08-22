import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Kelly",
    age: 16,
    about: `Hi guys, my name is Kelly..!!`,
    avatar:
      "https://toigingiuvedep.vn/wp-content/uploads/2021/01/avatar-dep-cute.jpg",
    theme: "#ee82ee",
  },
  reducers: {
    //handle action ở đây...
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avatar = action.payload.url;
      state.theme = action.payload.theme;
    },
  },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
