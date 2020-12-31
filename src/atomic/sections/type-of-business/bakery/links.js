import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";

const Links = () => (
    <Wrapper>
        <Container>
            <TextCenterLayout headline="Groups and Forums for Your Bakery Business"
                              text="Here are some useful places where you can connect with other bakery entrepreneurs."/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="https://www.baking-forums.com/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Baking forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://asbe.org/national-bakery-associations-and-resources/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        National Bakery Associations and Resources
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.bema.org/bif/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        The Baking Industry Forum
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="http://www.thefreshloaf.com/forum" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        The Fresh Loaf
                    </PathLink>
                </LinkItem>

            </LinksContainer>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 100px;
`;

const LinksContainer = styled.div`
    width: 100%;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (min-width: 1100px) {
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
    
    @media (min-width: 470px) {
        width: 470px;
    }
    
    @media (min-width: 1100px) {
        margin-left: 15px;
        margin-right: 15px;
    }
`;

export default Links;
