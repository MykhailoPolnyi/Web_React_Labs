import React, {useState} from "react";
import {PageStyled} from "../Page.styled";
import {Loader} from "../../../components/loader/Loader";
import {Counter} from "../../../app/storage/features/fishCart/Counter";

export const Cart = (props) => {
    const [isLoaded, setLoaded] = useState(true);
    if (!isLoaded) {
        return <Loader />
    }

    return (
        <PageStyled>
            <Counter />
        </PageStyled>
    )
}
