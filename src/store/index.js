import { configureStore } from "@reduxjs/toolkit";
import userReducer from '@/store/userSlice';
import hotelsReducer from "@/store/hotelsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    hotels: hotelsReducer,
  }
})
