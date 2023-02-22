import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./call.action.creator"

const initialState = {
  number: "",
  status: "idle",
  isKeyboardEnabled: true
};

const phoneReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ac.addNumber, (state, action) => {
      if (state.isKeyboardEnabled) {
        state.number += action.payload;
      }
    })
    .addCase(ac.clearNumber, (state) => {
      if (state.isKeyboardEnabled) {
        state.number = "";
      }
    })
    .addCase(ac.startCall, (state) => {
      state.status = "calling";
      state.isKeyboardEnabled = false;
    })
    .addCase(ac.endCall, (state) => {
      state.status = "idle";
      state.number = "";
      state.isKeyboardEnabled = true;
    });
});

export default phoneReducer;
