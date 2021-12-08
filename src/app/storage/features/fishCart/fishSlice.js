import {createSlice} from "@reduxjs/toolkit";

export const fishSlice = createSlice({
    name: "fish",
    initialState: {
        value: []
    },
    reducers: {
        addFish: (state, fish) => {
            state.value.push(fish.payload)
        },
        removeFish: (state, id) => {
            state.value = state.value.filter((fish) => fish.id !== id.payload)
        },
        clearCart: state => {
            state.value = []
        }
    }
})

export const {addFish, removeFish, clearCart} = fishSlice.actions;

export default fishSlice.reducer;
