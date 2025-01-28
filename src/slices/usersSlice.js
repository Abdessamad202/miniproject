import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name : 'users',
  initialState  : [],
  reducers : {
    getUsers : (state, action) => action.payload
  }
})
export const {getUsers} = usersSlice.actions
export {usersSlice}