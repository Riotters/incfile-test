import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import Curve from "../../../../images/green-curve.inline.svg";

const AmazonLinks = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>

        <Oval2>
            <OvalSvg2 />
        </Oval2>

        <Oval3>
            <OvalSvg2 />
        </Oval3>
        <Container>
            <TextCenterLayout headline="Social Media Groups for Your Amazon Business"
                              text="Connecting with other business owners in your industry can be incredibly helpful. Here are some of the best social media groups:"/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="https://www.facebook.com/groups/190482421294295/243189902690213/?notif_t=group_activity" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Amazon FBA Rockstars
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.facebook.com/groups/673668379421814/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Amazon FBA Competitive Edge (Junglescout)
                    </PathLink>
                    <AbsoluteCurve>
                        <Curve/>
                    </AbsoluteCurve>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.facebook.com/groups/720303524721628/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        FBA Masters
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.facebook.com/groups/TAS.Private.Group/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        The Amazing Seller
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.facebook.com/groups/amazon.sellers.group/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Amazon Seller Group
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.linkedin.com/groups/8487171/profile" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Amazon professional Seller Central
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.linkedin.com/groups/8345666/profile" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        eCommerce SMBs
                    </PathLink>
                </LinkItem>

            </LinksContainer>
        </Container>

        <Container>
            <TextCenterLayout headline="Social Media and Discussion Groups for Your Etsy Business"
                              text="Connecting with other business owners in your industry can be incredibly helpful. Here are some of the best social media and discussion groups:"/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="https://sellercentral.amazon.com/forums/index.jspa" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Seller Central — Amazon’s dedicated seller forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.ampmpodcast.com/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        AM/PM Podcast from Amazon seller Manny Coats
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="http://community.daxdeegan.com/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Dax’s Amazon Community
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://forums.digitalpoint.com/forums/ecommerce.115/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Digital Point eCommerce forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://community.amztracker.com/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        AMZTracker forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.warriorforum.com/tags/fba.html" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Warrior Forums — Fulfillment by Amazon
                    </PathLink>
                </LinkItem>

            </LinksContainer>
        </Container>

        <Container>
            <TextCenterLayout headline="Social Media and Discussion Groups for Your Etsy Business"
                              text="Connecting with other business owners in your industry can be incredibly helpful. Here are some of the best social media and discussion groups:"/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="http://thesellersconference.com/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        The Sellers’ Conference
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.prospershow.com/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Prosper Show
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://internetretailingexpo.com/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Internet Retailing Expo
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.retailx.com/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        IRCE
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://sellerssummit.com/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Seller Summit
                    </PathLink>
                </LinkItem>

            </LinksContainer>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 100px;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, #f2f6ff);
    padding-bottom: 100px;
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

const Oval = styled.div`
    position: absolute;
    top: 217px;
    left: 0;
    width: 720px;
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;


const Oval2 = styled.div`
    position: absolute;
    top: 847px;
    right: 0;
    width: 720px;
    transform: rotate(-180deg);
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;


const Oval3 = styled.div`
    position: absolute;
    bottom: 251px;
    left: 0;
    width: 420px;
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

const AbsoluteCurve = styled.div`
    position: absolute;
    top: -101px;
    right: -115px;
    width: 115px;
    display: none;
    transform: rotate(-90deg);
  
    @media (min-width: 1200px){
        display: block;
    }
    
    svg {
        path{
            fill: #fce7d0;
        }
    }
`;

export default AmazonLinks;
