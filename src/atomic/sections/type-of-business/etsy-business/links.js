import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import {Paragraph} from "../../../atoms/typography/paragraph";

const EtsyLinks = () => (
    <Wrapper>
        <Container>
            <TextCenterLayout headline="Social Media and Discussion Groups for Your Etsy Business"
                              text="Connecting with other business owners in your industry can be incredibly helpful. Here are some of the best social media and discussion groups:"/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        The Etsy Forums
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>Easily the best place to start, the Etsy
                        forums are hosted by Etsy and contain a wealth of information, advice and discussion points for
                        all Etsy entrepreneurs</Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.facebook.com/groups/EtsySellersUnited/about/" target="_BLANK" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Etsy Sellers United (Facebook)
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                        A discussion group for Etsy Sellers to network together and discuss new ideas, share photos, share shop items and more
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.facebook.com/groups/EtsySellersandBuyers/about/" target="_BLANK" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Etsy Sellers and Buyers! (Facebook)
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>A place for Etsy sellers to showcase their items and Etsy buyers to share the items they love</Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.reddit.com/r/Etsy/" target="_BLANK" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Etsy Subreddit (Reddit)
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>A discussion group for all things Etsy</Paragraph>
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

export default EtsyLinks;
