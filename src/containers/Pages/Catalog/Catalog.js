import React, {useState, useEffect} from "react";
import {PageStyled} from "../Page.styled";
import {CardStorage} from "../../../components/Card/CardStorage";
import {getFishCards} from "./CatalogDom";
import {ActionPanel} from "../../../components/ActionPannel/ActionPanel";
import {getFishList} from "../../../api/Api";
/*
let fishes = [
    {id: 6, name:"Dori", lifetime_years: 1, animal_type: "BabyShark", weight_in_kg: 10},
    {id: 1, name:"Andrew", lifetime_years: 1, animal_type: "SwordFish", weight_in_kg: 3},
    {id: 4, name:"Lorem", lifetime_years: 0.5, animal_type: "Clownfish", weight_in_kg: 3},
    {id: 5, name:"Tormentor", lifetime_years: 8, animal_type: "Gray Shark", weight_in_kg: 50},
    {id: 3, name:"Patric", lifetime_years: 4, animal_type: "Fish", weight_in_kg: 3},
    {id: 9, name:"Lary", lifetime_years: 1, animal_type: "Guppi", weight_in_kg: 0.3},
    {id: 2, name:"Chunk", lifetime_years: 2, animal_type: "Catfish", weight_in_kg: 2},
    {id: 9, name:"Lary", lifetime_years: 1, animal_type: "Guppi", weight_in_kg: 0.3},
    {id: 19, name:"Olive", lifetime_years: 4, animal_type: "SwordFish", weight_in_kg: 5},
    {id: 21, name:"Giddy", lifetime_years: 0.8, animal_type: "Gold fish", weight_in_kg: 0.1},
]
*/
export const Catalog = () => {
    const [fishList, setFishList] = useState([]);

    useEffect (() => {
        getFishList()
            .then(
                fishList => setFishList(fishList)
            )
    }, []);

    return (
        <PageStyled>
            <ActionPanel/>
            <CardStorage id="catalog">
                {
                    getFishCards(fishList)
                }
            </CardStorage>
        </PageStyled>
    )
}
