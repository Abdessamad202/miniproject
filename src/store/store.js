import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../slices/userSlice";
import { usersSlice } from "../slices/usersSlice";

const store = configureStore({
  reducer : {
    user : userSlice.reducer,
    users : usersSlice.reducer
  }
})
export {store}