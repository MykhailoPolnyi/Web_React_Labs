import React from "react";
import {PageStyled} from "../Page.styled";
import {CardStorage} from "../../../components/Card/CardStorage";
import {getFishCards} from "./CatalogDom";
import {ActionPanel} from "../../../components/ActionPannel/ActionPanel";

const fishes = [
    {name:"Dori", lifetime_years: 1, animal_type: "BabyShark", weight_in_kg: 10},
    {name:"Andrew", lifetime_years: 1, animal_type: "SwordFish", weight_in_kg: 3},
    {name:"Lorem", lifetime_years: 0.5, animal_type: "Clownfish", weight_in_kg: 3},
    {name:"Tormentor", lifetime_years: 8, animal_type: "Gray Shark", weight_in_kg: 50},
    {name:"Patric", lifetime_years: 4, animal_type: "Fish", weight_in_kg: 3},
    {name:"Lary", lifetime_years: 1, animal_type: "Guppi", weight_in_kg: 0.3},
    {name:"Hu", lifetime_years: 4, animal_type: "SwordFish", weight_in_kg: 5},
    {name:"Chunk", lifetime_years: 2, animal_type: "Catfish", weight_in_kg: 2},
    {name:"Olive", lifetime_years: 4, animal_type: "SwordFish", weight_in_kg: 5},
    {name:"Giddy", lifetime_years: 0.8, animal_type: "Gold fish", weight_in_kg: 0.1},
]

export const Catalog = () => (
    <PageStyled>
        <ActionPanel />
        <CardStorage id="catalog">
            {
                getFishCards(fishes)
            }
        </CardStorage>
    </PageStyled>
)
