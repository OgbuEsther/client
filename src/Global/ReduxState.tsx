import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../interfaces/userInterfaces";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const initialState = {
  currentUser: {} as userData | null,
};

const ReduxState = createSlice({
  name: "piggyvest",
  initialState,
  reducers: {
    registerUser: (state, { payload }: PayloadAction<userData>) => {
      state.currentUser = payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { registerUser, logout } = ReduxState.actions;

export default ReduxState.reducer;
