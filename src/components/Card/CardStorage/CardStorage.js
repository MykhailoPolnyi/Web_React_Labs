import React, {useEffect, useState} from 'react';
import {getFishList} from "../../../api/Api";
import {CardStorageStyled} from "./CardStorage.styled";
import {getFishCards} from "../../../containers/Pages/Catalog/CatalogDom";
import {Button} from "antd";

export const
    CardStorage = ({fishNum, fishIncrement= 1, style}) => {
    const [fishListSize, setFishListSize] = useState(fishNum ? fishNum: 0);
    const [fishList, setFishList] = useState([]);
    useEffect (() => {
        getFishList()
            .then(
                receivedFishList => {
                    if (fishListSize >= receivedFishList.length) {
                        setFishListSize(0);
                    }
                    if (fishListSize === 0) {
                        setFishList(receivedFishList)
                    }
                    else setFishList(receivedFishList.slice(0, fishListSize))
                }
            )
            .catch( e =>  {
                console.log("Error occurred during loading data from server");
            })
    }, [fishListSize]);
    return (
        <div style={style}>
            <CardStorageStyled>
                {
                    (fishList.length !== 0) ?
                        getFishCards(fishList) : <h2>Catalog is empty</h2>
                }
            </CardStorageStyled>
            {
                !(fishListSize === 0 || fishListSize > fishList.length) &&
                <Button onClick={() => setFishListSize(fishListSize+fishIncrement)}>Show more...</Button>
            }
        </div>
    );
}
