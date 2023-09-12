import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./Components/User";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});