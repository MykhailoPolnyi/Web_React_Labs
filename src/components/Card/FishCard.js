import React from "react";
import 'antd/dist/antd.css';
import {Card} from "antd";

export const FishCard = (props) => (
    <Card
        style={{width: "200px"}}
        hoverable
        cover={<img src={props.image} alt="example" style={{width:'200px'}}  />}>
        <Card.Meta
            title={props.title}
            description={
                <div>
                    <p>Lifetime: {props.lifetime}</p>
                    <p>Type: {props.type}</p>
                    <p>Weight: {props.weight}</p>
                </div>
            }
        />
    </Card>
);
