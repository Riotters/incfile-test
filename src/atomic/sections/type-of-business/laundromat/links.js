import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import {Paragraph} from "../../../atoms/typography/paragraph";

const Links = () => (
    <Wrapper>
        <Container>
            <TextCenterLayout headline="Social Media and Discussion Groups for Your Laundromat Business"
                              text="Connecting with other business owners in your industry can be incredibly helpful. Here are some of the best social media and discussion groups:"/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="https://www.facebook.com/groups/laundromatowners/?ref=br_rs" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Laundromat Owners (Facebook)
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                        A group for laundromat owners to network, get ideas and solve problems
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://community.coinlaundry.org/home" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Coin Laundry Association Open Forum
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                        A helpful community forum from the CLA providing advice on every aspect of owning and running a laundromat
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="http://www.thelaundryforum.com/forums/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        The Laundry Forum
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                        A comprehensive forum for laundry owners, including specific forums for machine manufacturers
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="http://www.coinwash.com/mb/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Coinwash.com Forum
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                        Another forum for laundromat owners
                    </Paragraph>
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
    
    @media (min-width: 470px) {
        width: 470px;
    }
    
    @media (min-width: 1000px) {
        margin-left: 15px;
        margin-right: 15px;
    }
`;

export default Links;
