// import myReducer from "./ReduxState";
// import { configureStore } from "@reduxjs/toolkit";
// import { TypedUseSelectorHook } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
// import storage from "redux-persist/lib/storage";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const persistConfig = {
//   key: "myPiggyvestApp",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, myReducer);

// export const Store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const UseAppDispach: () => typeof Store.dispatch = useDispatch;

// export const useAppSelector: TypedUseSelectorHook<
//   ReturnType<typeof Store.getState>
// > = useSelector;

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import myReducer from "./ReduxState";

export const Store = configureStore({
  reducer: {
    myReducer,
  },
});

//this will define your dispatch and selector functions

export const UseAppDispatch: () => typeof Store.dispatch = useDispatch;

export const UseAppSelector: TypedUseSelectorHook<
  ReturnType<typeof Store.getState>
> = useSelector;
