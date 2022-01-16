import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    error: false,
    loading: false,
    salads: [],
    choosedSalads: [],
    saladsInBasket: []
}

const saladReducer = createSlice({
    name: "saladReducer",
    initialState,
    reducers: {
        saladsRequested(state) {
            state.loading = true;
            state.error = false;
        },
        saladsError(state) {
            state.loading = false;
            state.error = true;
        },
        saladsLoaded(state, action) {
            state.error = false;
            state.loading = false;
            state.salads = action.payload;
        }
    }
})
export const {saladsRequested, saladsError, saladsLoaded} = saladReducer.actions;
export default saladReducer.reducer;