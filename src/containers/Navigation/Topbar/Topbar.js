import React from "react";
import {TopbarStyled} from "./Topbar.styled";
import {Navbar} from "../../../components/Navbar/Navbar";
import {Logo} from "../../../components/Logo/Logo";

export const Topbar = () => (
    <TopbarStyled>
        <Logo style={{fontSize:'2.5em'}} />
        <Navbar />
    </TopbarStyled>
)
