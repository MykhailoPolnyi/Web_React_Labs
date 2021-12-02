import {createSlice} from "@reduxjs/toolkit";

export const fishSlice = createSlice({
    name: "fish",
    initialState: {
        value: 0
    },
    reducers: {
        addFish: (state) => {
            state.value += 1
        },
        removeFish: state => {
            state.value -= 1
        },
        clearCart: state => {
            state.value = 0
        }
    }
})

export const {addFish, removeFish, clearCart} = fishSlice.actions;

export default fishSlice.reducer;
