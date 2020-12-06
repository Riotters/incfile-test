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

        <TextCenterLayout textWidth={770} headlineWidth={770} headline="Groups and Forums for Airbnb Owners"
                          text="Here are some useful places where you can connect with other Airbnb entrepreneurs."/>

        <Container>
            <LinksContainer>

                <LinkItem>
                    <PathLink to="https://airhostsforum.com/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Airhosts forum
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <AbsoluteCurve>
                        <Curve color={color.blue1}/>
                    </AbsoluteCurve>
                    <PathLink to="https://community.withairbnb.com/t5/Community-Center/ct-p/community-center" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Airbnb official community discussions
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.reddit.com/r/AirBnB/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
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
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 30px;
    margin-top: 76px;
    margin-bottom: 76px;; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const LinkItem = styled.div`
    margin: 0 auto;
    padding: 28px 40px 28px 40px;
    background-color: white;
    box-shadow: ${shadow.white1};
    width: 100%;
    position: relative;
`;

const AbsoluteCurve = styled.div`
    position: absolute;
    right: -25px;
    top: -25px;
    transform: rotate(0deg);
    display: none;
    
    @media (min-width: 1100px){
        display: block;
    }
`;

const Oval = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  
    @media (min-width: 420px){
       width: 420px;
    }
`;

export default AirBnbOwners;
