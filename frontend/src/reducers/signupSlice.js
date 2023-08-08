import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "user",
  initialState: {
    usernameError: "",
    passwordError: "",
  },
  reducers: {
    createUserSubmitted: (state) => {
      state.usernameError = "";
      state.passwordError = "";
      state.isSubmitted = true;
    },
    createUserError: (state, action) => {
      console.log(action.payload);
      const errorState = {
        usernameError: "",
        passwordError: "",
      };
      if (action.payload.hasOwnProperty("username")) {
        errorState.usernameError = action.payload["username"];
      }
      if (action.payload.hasOwnProperty("password")) {
        errorState.passwordError = action.payload["password"];
      }
      state.usernameError = errorState.usernameError;
      state.passwordError = errorState.passwordError;
      state.isSubmitted = errorState.isSubmitted;
    },
    createUserSuccess: (state) => {
      state.usernameError = "";
      state.passwordError = "";
    },
  },
  // Async reducer
  //   extraReducers: (builder) => {
  //     builder.addCase(signupNewUser.fulfilled, (state, action) => {

  //     })
  //   }
});

// Action creators are generated for each case reducer function
export const { createUserSubmitted, createUserError, createUserSuccess } =
  signupSlice.actions;

export default signupSlice.reducer;
