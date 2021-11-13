import React from "react";
import 'antd/dist/antd.css';
import {Card} from "antd";
import {NavLink} from "react-router-dom";

export const FishCard = ({image, name, lifetime, type, weight, id}) => (
    <NavLink to={`/catalog/fish?id=${id}`}>
        <Card
            style={{width: "150px", margin:"10px"}}
            hoverable
            cover={<img src={image} alt="example" style={{height:'150px'}}  />}>
            <Card.Meta
                title={name}
                description={
                    <div>
                        <p>Lifetime: {lifetime} year(s)</p>
                        <p>Type: {type}</p>
                    </div>
                }
            />
        </Card>
    </NavLink>
);
