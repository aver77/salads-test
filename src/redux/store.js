import { configureStore } from "@reduxjs/toolkit";
import moleculeReducer from './moleculeReducer';
import saladReducer from "./saladReducer";

const store = configureStore({
    reducer: {moleculeReducer, saladReducer},
    devTools: true
})
export default store;