import React from "react";
import {WelcomeStyled, TextSection} from "./Welcome.styled";
import titleImage from "../../images/home_page_aq.png"

export const WelcomeSection = (props) => (
    <WelcomeStyled style={props.style}>
        <img src={titleImage} alt="Aquarium"/>
        <TextSection>
            <h2>Welcome to our zoo magazine!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem eos incidunt iste, iure nam neque
                quisquam sequi tempore vel. Eaque, iure quasi. Dolor doloremque eveniet explicabo! Autem, cumque, sed.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquam animi cumque
                dignissimos laboriosam magnam pariatur possimus quaerat rem rerum similique, sit tempore ut, velit?
                Assumenda iste placeat sunt.
            </p>
        </TextSection>
    </WelcomeStyled>
);