import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/top-left-transparent-pink.inline.svg";

const AirBnbOwners = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <Container>
            <TextCenterLayout headline="Groups and Forums for Airbnb Owners"
                              text="Here are some useful places where you can connect with other Airbnb entrepreneurs."/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Airhosts forum
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Airbnb official community discussions
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Airbnb subreddit
                    </PathLink>
                </LinkItem>

            </LinksContainer>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 100px;
    position: relative;
   
`;

const LinksContainer = styled.div`
    width: 100%;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (min-width: 1000px) {
        width: 1000px;
    }
`;

const LinkItem = styled.div`
    margin: 0 auto;
    padding: 28px 40px 28px 40px;
    background-color: white;
    box-shadow: ${shadow.white1};
    width: 100%;
    margin-bottom: 30px;
    position: relative;
    
    @media (min-width: 470px) {
        width: 470px;
    }
    
    @media (min-width: 1000px) {
        margin-left: 15px;
        margin-right: 15px;
    }
`;

const AbsoluteCurve = styled.div`
    position: absolute;
    right: -25px;
    top: -25px;
    transform: rotate(0deg);
`;

const Oval = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 420px;
    display: none;
  
    @media (min-width: 720px){
       display: block;
    }
`;

export default AirBnbOwners;
