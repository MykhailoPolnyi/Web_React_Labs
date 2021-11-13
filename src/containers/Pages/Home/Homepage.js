import React from "react";
import {PageStyled} from "../Page.styled";
import {WelcomeSection} from "../../../components/WelcomeSection/WelcomeSection";
import {CardStorage} from "../../../components/Card/CardStorage";
import {FishCard} from "../../../components/Card/FishCard";
import sword_fish from "../../../images/swordfish.jpg";
import clownfish from "../../../images/coolfish.jpg";


export const Homepage = () => (
    <PageStyled>
        <WelcomeSection />
        <CardStorage>
            <FishCard image={sword_fish}
                      
                      name="Gary"
                      lifetime="3"
                      type="Swordfish"
                      weight="40"
            />
            <FishCard image={clownfish}
                      name="Gary"
                      lifetime="1"
                      type="Clownfish"
                      weight="3"
            />
            <FishCard image={clownfish}
                      name="Lorem"
                      lifetime="2"
                      type="Clownfish"
                      weight="1"
            />
        </CardStorage>
    </PageStyled>
);
