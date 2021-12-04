import React from "react";
import {PageStyled} from "../Page.styled";
import {useSelector, useDispatch} from "react-redux";
import {removeFish, clearCart} from "../../../app/storage/features/fishCart/fishSlice";
import {getFishCards} from "../../../components/Card/CardStorage/StorageDom";
import {DeleteButtonStyled} from "../../../components/Buttons/DeleteButton.styled";
import {ActionPanelStyled} from "../../../components/ActionPannel/ActionPanel.styled";

export const Cart = () => {
    const fishList = useSelector((state) => state.fishInCart.value)
    const totalPrice = useSelector((state) =>
        state.fishInCart.value.reduce((total, fish) => (total + fish.price), 0)
    )
    const dispatch = useDispatch();

    if (fishList.length === 0) {
        return (<h1>Cart is empty</h1>)
    }

    return (
        <PageStyled style={{height:"100%"}}>
            <ActionPanelStyled>
                <h2>Total price: {totalPrice}</h2>
                <DeleteButtonStyled onClick={() => {dispatch(clearCart())}}>
                    Clear cart
                </DeleteButtonStyled>
            </ActionPanelStyled>
            <div style={{display:"flex", flexDirection:"row"}}>
                {

                    getFishCards(fishList, (fish) =>
                        (<DeleteButtonStyled onClick={() => {dispatch(removeFish(fish.id))}}>
                            Remove
                        </DeleteButtonStyled>)
                    )
                }
            </div>
        </PageStyled>
    )
}
