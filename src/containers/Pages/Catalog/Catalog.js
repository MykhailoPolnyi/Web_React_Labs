import React, {useEffect, useState} from "react";
import {PageStyled} from "../Page.styled";
import {CardStorage} from "../../../components/Card/CardStorage/CardStorage";
import {FISH_CARD_SIZE} from "../../../const/Constants";
import {ActionPanelStyled} from "../../../components/ActionPannel/ActionPanel.styled";
import {FilterInput} from "../../../components/ActionPannel/FilterInput";

export const Catalog = () => {
    const [filterName, setFilterName] = useState("");
    const [filterType, setFilterType] = useState("");
    const [filters, setFilters] = useState({name: ""});

    useEffect(() => {
        setFilters({
            name: filterName,
            type: filterType,
        })
    }, [filterName, filterType])

    return (
        <PageStyled>
            <ActionPanelStyled>
                <FilterInput id="name" placeholder="Enter name..."
                             onSearch={(value) => setFilterName(value)}/>
                <FilterInput id="type" placeholder="Enter type..."
                             onSearch={(value) => setFilterType(value)}/>
            </ActionPanelStyled>
            <CardStorage filters={filters} style={{width: FISH_CARD_SIZE*6}}/>
        </PageStyled>
    )
}
