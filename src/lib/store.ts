import { combineReducers, configureStore } from "@reduxjs/toolkit";
import clickSlice from './features/clickSlice'

const rootReducer = combineReducers({
   click: clickSlice,
});

const store = configureStore({
   reducer: rootReducer,
});

export const makeStore = () => {
   return store
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];