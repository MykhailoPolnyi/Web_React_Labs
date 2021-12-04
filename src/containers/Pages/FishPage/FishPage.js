import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getFish} from "../../../api/Api";
import shark from "../../../images/shark.jpg"
import swordfish from "../../../images/swordfish.jpg"
import coolfish from "../../../images/coolfish.jpg"
import {FishPageStyled} from "./FishPage.styled";
import {Loader} from "../../../components/loader/Loader";
import {Button} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import {IconStyled} from "../../../components/Icon/Icon.styled";

import {addFish} from "../../../app/storage/features/fishCart/fishSlice";
import {useDispatch} from "react-redux";


export const FishPage = () => {
    const {fishId} =  useParams();
    const [fish, setFish] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    const dispatch = useDispatch();

    useEffect( () => {
        getFish(fishId)
            .then(receivedFish => {
                setFish(receivedFish);
                setIsLoaded(true)
            })
    }, [fishId] );

    if (fish === undefined) {
        return isLoaded ?  <h1> Not Found </h1> : <Loader />
    }

    let image;
    if (fish.animal_type.toLowerCase().search("shark") !== -1) {
        image = shark;
    }
    else if (fish.animal_type.toLowerCase().search("swordfish") !== -1) {
        image = swordfish;
    }
    else {
        image = coolfish;
    }

    return (
        <FishPageStyled>
            <div className="image-container">
                <img src={image} alt={fish.name}/>
                <Button onClick={() => {dispatch(addFish(fish))}}> To Cart <IconStyled component={ShoppingCartOutlined}/> </Button>
            </div>
            <div className="description">
                <h1>{fish.name}</h1>
                <h3>{fish.animal_type}</h3>
                <h3>Price: {fish.price}$</h3>
                <ul>
                    <li>Lifetime: {fish.lifetime_years} year(s)</li>
                    <li>Weight: {fish.weight_in_kg} kg</li>
                    <li>Required temperature:
                        { fish.required_temperature ? fish.required_temperature + " °C" : " unknown"}
                    </li>
                    <li>Required aquarium capacity:
                        { fish.required_aquarium_capacity_liters ? fish.required_aquarium_capacity_liters + " L" : " unknown"}
                    </li>
                    <li>Required lighting level:
                        { fish.required_lighting_level ? fish.required_lighting_level : " unknown"}
                    </li>
                </ul>
            </div>
        </FishPageStyled>
    );
}
