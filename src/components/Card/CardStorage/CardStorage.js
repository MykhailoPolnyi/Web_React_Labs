import React, {useEffect, useState} from 'react';
import {getFishList} from "../../../api/Api";
import {CardStorageStyled} from "./CardStorage.styled";
import {getFishCards} from "./StorageDom";
import {Button} from "antd";
import {Loader} from "../../loader/Loader";

export const CardStorage = ({fishNum, fishIncrement= 1, style, filters}) => {
    const [fishListSize, setFishListSize] = useState(fishNum ? fishNum: 0);
    const [fishList, setFishList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [filter, setFilter] = useState({});

    useEffect( () => {
        setFilter(filters ? filters : {})
    }, [filters]);

    useEffect (() => {
        getFishList(filter.type, filter.name)
            .then(
                receivedFishList => {
                    if (fishListSize === 0) {
                        setFishList(receivedFishList)
                    }
                    else setFishList(receivedFishList.slice(0, fishListSize))
                    setIsLoaded(true)

                }
            )
            .catch( () =>  {
                console.log("Error occurred during loading data from server");
            })
    }, [fishListSize, filter]);
    return (
        <div style={style}>
            <CardStorageStyled>
                {
                    (fishList.length !== 0) ?
                        getFishCards(fishList) :
                            isLoaded ? <h2>Nothing found</h2> : <Loader />
                }
            </CardStorageStyled>
            {
                !(fishListSize === 0 || fishListSize > fishList.length) &&
                <Button onClick={() => setFishListSize(fishListSize+fishIncrement)}>Show more...</Button>
            }
        </div>
    );
}
