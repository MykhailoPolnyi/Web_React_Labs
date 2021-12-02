import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {addFish, removeFish, clearCart} from "./fishSlice";

export const Counter = () => {
    const count = useSelector((state) => state.fishInCart.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <span>{count}</span>
                <button aria-label="Increment value"
                onClick={() => dispatch(addFish())}>
                    Add fish
                </button>
                <button aria-label="Decrement value"
                onClick={() => dispatch(removeFish())}>
                    Remove fish
                </button>
                <button aria-label="Reset value"
                onClick={() => dispatch(clearCart())}>
                    Clear
                </button>
            </div>
        </div>
    )
}
