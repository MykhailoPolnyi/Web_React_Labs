import {createSlice} from "@reduxjs/toolkit";

export const fishSlice = createSlice({
    name: "fish",
    initialState: {
        value: []
    },
    reducers: {
        addFish: (state, payloadFish) => {
            state.value.push(payloadFish.payload)
        },
        removeFish: (state, payloadId) => {
            state.value = state.value.filter((fish) => fish.id !== payloadId.payload)
        },
        clearCart: state => {
            state.value = []
        }
    }
})

export const {addFish, removeFish, clearCart} = fishSlice.actions;

export default fishSlice.reducer;
