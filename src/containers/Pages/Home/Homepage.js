import React from "react";
import {HomepageStyled} from "./Homepage.styled";
import {WelcomeSection} from "../../../components/WelcomeSection/WelcomeSection";
import {CardStorage} from "../../../components/Card/CardStorage";
import {FishCard} from "../../../components/Card/FishCard";
import sword_fish from "../../../images/swordfish.jpg";
import clownfish from "../../../images/coolfish.jpg";


export const Homepage = () => (
    <HomepageStyled>
        <WelcomeSection />
        <CardStorage>
            <FishCard image={sword_fish}
                      name="Gary"
                      lifetime="3 years"
                      type="Swordfish"
                      weight="40 kg"
            />
            <FishCard image={clownfish}
                      name="Gary"
                      lifetime="1 year"
                      type="Clownfish"
                      weight="3 kg"
            />
            <FishCard image={clownfish}
                      name="Lorem"
                      lifetime="2 years"
                      type="Clownfish"
                      weight="1 kg"
            />
        </CardStorage>
    </HomepageStyled>
);
