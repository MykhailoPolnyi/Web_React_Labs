import {configureStore} from "@reduxjs/toolkit";
import fishReducer from "./features/fishCart/fishSlice";

export default configureStore({
    reducer: {
        fishInCart: fishReducer
    },
})
