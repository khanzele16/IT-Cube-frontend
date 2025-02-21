import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const login = createAsyncThunk("auth/login", async ({ email, password }) => {
  const { data } = await axios.post("http://localhost:4444/api/auth/login", { email, password });
  return data;
});

const initialState = {
  UData: null,
  UDataLoading: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.UDataLoading = "loading";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.UData = action.payload;
      state.UDataLoading = "loaded";
    });
    builder.addCase(login.rejected, (state) => {
      state.UData = null;
      state.UDataLoading = "error";
    });
  },
});

export default authSlice.reducer;