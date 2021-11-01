

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
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import phonebookReducer from './phonebook/phonebook-reducer';
import { contactsApi } from './phonebook/phonebookSlice'
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
// import { useReducer } from "react";


// const persistConfig = {
//     key: 'contact',
//     storage,
//     blacklist:['filter']
// }

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];
export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]:contactsApi.reducer
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),contactsApi.middleware
  ],
  devtools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);
setupListeners(store.dispatch);