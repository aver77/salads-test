import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    error: false,
    loading: false,
    molecules: []
}

const moleculeReducer = createSlice({
    name: "moleculeReducer",
    initialState,
    reducers: {
        moleculesRequested(state) {
            state.loading = true;
            state.error = false;
        },
        moleculesError(state) {
            state.loading = false;
            state.error = true;
        },
        moleculesLoaded(state, action) {
            state.error = false;
            state.error = false;
            state.molecules = action.payload;
        }
    }
})
export const {moleculesRequested, moleculesError, moleculesLoaded} = moleculeReducer.actions;
export default moleculeReducer.reducer;