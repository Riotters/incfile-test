import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import {Paragraph} from "../../../atoms/typography/paragraph";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";

const Links = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>

        <TextCenterLayout headlineWidth={770} textWidth={770} headline="Discussion Groups and Forums for Your Catering Business"
                          text="There are plenty of forums and online discussion groups for catering businesses. Start with these:"/>

        <Container>
            <LinksContainer>

                <LinkItem>
                    <PathLink to="https://cheftalk.com/forums/professional-catering.27/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Chef Talk
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                        A sub-forum dedicated to helping chefs and catering business owners
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.ifsqn.com/forum/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        International Food Safety and Quality Forum
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                        A sub-forum dedicated to helping chefs and catering business owners
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.reddit.com/r/KitchenConfidential/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Kitchen Confidential subreddit
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                        Another reddit discussion forum that lets you peek behind the scenes at food businesses
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.reddit.com/r/foodtrucks/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Food Trucks subreddit
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                        An active discussion forum on the ever-popular reddit
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.tapatalk.com/groups/mobilecatering/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Tapatalk
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                        A forum for mobile caterers and food concession businesses
                    </Paragraph>
                </LinkItem>
            </LinksContainer>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 100px;
    position: relative;
    background: linear-gradient(180deg, rgba(242,246,255,1) 0%, rgba(255,255,255,1) 100%);
`;

const LinksContainer = styled.div`
    width: 100%;
    margin: 100px auto;
    display: flex;
    position: relative;
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

const Oval = styled.div`
    top: 80px;
    left: 0;
    position: absolute;
    width: 100%;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

export default Links;
