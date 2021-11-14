import React from "react";
import {PageStyled} from "../Page.styled";
import {ActionPanel} from "../../../components/ActionPannel/ActionPanel";
import {CardStorage} from "../../../components/Card/CardStorage/CardStorage";
import {FISH_CARD_SIZE} from "../../../const/Constants";

export const Catalog = () => {
    return (
        <PageStyled>
            <ActionPanel/>
            <CardStorage style={{width: FISH_CARD_SIZE*6}}/>
        </PageStyled>
    )
}
