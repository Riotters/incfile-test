import React from "react";
import styled from "styled-components";
import Container from "../../../atomic/container";
import TextCenterLayout from "../../../components/partials/blocks/heading-center";
import {Paragraph} from "../../../atomic/atoms/typography/paragraph";

const AirbnbTaxes = () => (
    <BabyBlueContainer>
        <Container>
            <TextCenterLayout headline="Airbnb Taxes"/>

            <TextWrapper>
                <Paragraph big>
                    Even though you’re running an Airbnb business, you can’t escape real-world licenses, permits and
                    regulations. You will need to explore local, state and federal licenses and permits, and <span className="big blue">we can also
                    help out with researching your business licensing needs.</span>
                </Paragraph>
                <Paragraph big>
                    It’s also very important to consider local zoning laws, ordinances and permits. Some
                    municipalities don’t allow just anyone to set themselves up as an Airbnb host, and if you do, you
                    could
                    be fined. Check with your local and regional authorities what their requirements are for Airbnb
                    hosts.
                </Paragraph>
            </TextWrapper>

            <TextCenterLayout headline="Maintaining Your Airbnb Business" text="There are certain forms and legalities you need to follow to keep your Airbnb business in good standing."/>
        </Container>
    </BabyBlueContainer>
);

const BabyBlueContainer = styled.div`
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(240,248,255,1) 100%);
padding-bottom: 100px;
padding-top: 100px;
`;

const TextWrapper = styled.div`
    width: 100%;
    
    @media (min-width: 750px) {
        width: 750px;
        margin: 48px auto 100px;
    }
`;

export default AirbnbTaxes;
