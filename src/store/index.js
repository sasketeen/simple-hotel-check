import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'

import mySaga from "../sagas";

import userReducer from '@/store/userSlice';
import hotelsReducer from "@/store/hotelsSlice";

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
  reducer: {
    user: userReducer,
    hotels: hotelsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

sagaMiddleware.run(mySaga)
