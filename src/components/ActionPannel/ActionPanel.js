import React from "react";
import {Input, Select} from "antd";
import {ActionPanelStyled} from "./ActionPanel.styled";

export const ActionPanel = () => (
    <ActionPanelStyled>
        <div>
            <label htmlFor="filter">Filter by:</label>
            <Select id="filter" defaultValue="name" style={{width: "400px", margin: "0 10px"}}>
                <Select.Option value="name">Name</Select.Option>
                <Select.Option value="lifetime">Lifetime</Select.Option>
                <Select.Option value="type">Type</Select.Option>
                <Select.Option value="weight">Weight</Select.Option>
            </Select>
            <Input allowClear
                   placeholder="Search for..."
                   style={{width: "400px"}}
                   id="search"/>
        </div>
    </ActionPanelStyled>
)
