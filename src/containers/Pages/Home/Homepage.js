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
            <FishCard title="Gary">
                <img src={sword_fish} alt={"Swordfish"}/>
                <div>
                    <p>Lifetime: 3 years</p>
                    <p>Weight 100 kg</p>
                    <p>Type: Swordfish </p>
                </div>
            </FishCard>
            <FishCard title="Pov">
                <img src={clownfish} alt={"Swordfish"}/>
                <div>
                    <p>Lifetime: 1 year</p>
                    <p>Weight 3 kg</p>
                    <p>Type: Clownfish </p>
                </div>
            </FishCard>
            <FishCard title="Nemo">
                <img src={clownfish} alt={"Swordfish"}/>
                <div>
                    <p>Lifetime: 2 years</p>
                    <p>Weight 1 kg</p>
                    <p>Type: Clownfish </p>
                </div>
            </FishCard>
        </CardStorage>
    </HomepageStyled>
)