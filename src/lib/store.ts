import { combineReducers, configureStore } from "@reduxjs/toolkit";
import clickNoteSlice from './features/clickSlice'
import createPostSlice from './features/createPostSlice';
import storage from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import searchNoteSlice from "./features/searchNoteSlice";
import filterNotesSlice from "./features/filterNotesSlice";

const persistConfig = {
   key: 'root',
   storage,
   blacklist: ['searchNotes, filterNotes']
}

const rootReducer = combineReducers({
   clickNote: clickNoteSlice,
   clickPost: createPostSlice,
   searchNotes: searchNoteSlice,
   filterNotes: filterNotesSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
   }),
});

export const makeStore = () => {
   return store
}

export const persistor = persistStore(store);

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];