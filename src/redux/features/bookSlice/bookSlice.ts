import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [0],
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export const {} = bookSlice.actions;
export default bookSlice.reducer;
