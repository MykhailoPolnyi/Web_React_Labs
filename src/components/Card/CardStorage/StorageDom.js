import React from "react";
import {FishCard} from "../FishCard";
import swordfish from "../../../images/swordfish.jpg";
import clownfish from "../../../images/coolfish.jpg";
import shark from "../../../images/shark.jpg";


export const createFishCard = (fish, addOns=undefined) => {
    let image;
    if (fish.animal_type.toString().toLocaleLowerCase().search("shark") !== -1) {
        image = shark;
    }
    else if (fish.animal_type.toString().toLocaleLowerCase().search("swordfish") !== -1) {
        image = swordfish;
    }
    else {
        image = clownfish;
    }
    return (
        <FishCard key={fish.id}
                  image = {image}
                  name = {fish.name}
                  lifetime={fish.lifetime_years}
                  type={fish.animal_type}
                  id={fish.id}
                  price={fish.price}
                  addOns={addOns}
        />
    )
}

export const getFishCards = (fishList, addOnCallback = () => undefined) => {
    return fishList.map((fish) => createFishCard(fish, addOnCallback(fish)));
}
