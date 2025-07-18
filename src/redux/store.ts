import { configureStore } from "@reduxjs/toolkit";
import { libraryApiSlice } from "./features/api/libraryApi";
import bookReducer from "./features/bookSlice/bookSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    [libraryApiSlice.reducerPath]: libraryApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(libraryApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
