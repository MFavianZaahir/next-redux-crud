import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsSlice from "./slices/postSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Menggunakan localStorage

// Konfigurasi persist
const persistConfig = {
  key: "root",
  storage,
};

// Menggabungkan semua reducer
const rootReducer = combineReducers({
  posts: postsSlice,
});

// Menerapkan persistReducer pada rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Membuat store menggunakan persistedReducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Membuat persistor untuk redux-persist
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
