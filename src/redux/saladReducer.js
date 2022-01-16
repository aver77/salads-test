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
        },
        saladChose(state, action) {
            const id = action.payload;
            const saladIndex = state.salads.findIndex(item => item._id === id);
            state.choosedSalads.push(state.salads[saladIndex]);
            state.salads.splice(saladIndex, 1);
        },
        saladAddToCart(state) {
            state.saladsInBasket.push(state.choosedSalads);
            state.choosedSalads = [];
        }
    }
})
export const {saladsRequested, saladsError, saladsLoaded, saladChose, saladAddToCart} = saladReducer.actions;
export default saladReducer.reducer;