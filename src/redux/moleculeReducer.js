import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    error: false,
    loading: false,
    molecules: [],
    choosedMolecules: [],
    moleculesInBasket: []
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
            state.loading = false;
            state.molecules = action.payload;
        },
        moleculeChose(state, action) {
            const id = action.payload;
            const moleculeIndex = state.molecules.findIndex(item => item._id === id);
            state.choosedMolecules.push(state.molecules[moleculeIndex]);
            state.molecules.splice(moleculeIndex, 1);
        },
        moleculeAddToCart(state) {
            state.moleculesInBasket.push(state.choosedMolecules);
            state.choosedMolecules = []
        },
        moleculeOrderComplete(state) {
            state.molecules = [];
            state.choosedMolecules = [];
            state.moleculesInBasket = [];
        }
    }
})
export const {moleculesRequested, moleculesError, moleculesLoaded, moleculeChose, moleculeAddToCart} = moleculeReducer.actions;
export default moleculeReducer.reducer;