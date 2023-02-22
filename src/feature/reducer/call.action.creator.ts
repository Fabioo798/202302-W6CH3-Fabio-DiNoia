import { createAction } from "@reduxjs/toolkit";
import { phoneActions } from "./call.actions.types";

export const addNumber = createAction<string>(phoneActions.ADD_NUMBER);

export const clearNumber = createAction<void>(phoneActions.CLEAR_NUMBER);

export const startCall = createAction<void>(phoneActions.START_CALL);

export const endCall = createAction<void>(phoneActions.END_CALL);
