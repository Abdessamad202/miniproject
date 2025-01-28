import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    name: '',
    email: '',
    isLoggedIn: false,
  },
  reducers: {
    In: (state, action) => {
      const { id, name, email,role } = action.payload.user;
      state.id = id;
      state.name = name;
      state.email = email;
      state.role = role;
      state.isLoggedIn = true;
    },
    Out: (state) => {
      state.id = null;
      state.name = '';
      state.email = '';
      state.isLoggedIn = false;
    },
  },
});

export const { In, Out } = userSlice.actions;
export { userSlice };