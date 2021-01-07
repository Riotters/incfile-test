import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Image from "../../../atoms/image/image_nobase64";
import BookkeepingSVG from "../../../../images/icons/calculator.inline.svg";
import LicenseSVG from "../../../../images/icons/document.inline.svg";
import BankingSVG from "../../../../images/icons/taxes4.inline.svg";
import DomainSVG from "../../../../images/icons/building.inline.svg";
import TrademarkSVG from "../../../../images/icons/check-circle.inline.svg";
import BusinessSVG from "../../../../images/icons/case-white.inline.svg";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-orange-transparent.inline.svg";

const Essentials = styled.section`
    position: relative;
    padding-top: 112px;
    padding-bottom: 104px;
    background-image: ${gradient.orange3};
`;

const ImageWrapper = styled.div`
    width: 100%;
    margin-bottom: 88px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 100%;
    width: 100%;
    max-width: 670px;
    grid-gap: 8px;

    @media (min-width: 769px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const ColorBox = styled.div`
    display: flex;
    background-color: ${color.blue3};
    border-radius: 5px;
    padding: 35px 35px 35px 88px;
    position: relative;

    @media (min-width: 769px) {
        &:first-child {
            border-radius: 15px 5px 5px 5px;
        }
    
        &:nth-child(2) {
            border-radius: 5px 15px 5px 5px;
        }
    
        &:nth-last-child(2) {
            border-radius: 5px 5px 5px 15px;
        }
    
        &:last-child {
            border-radius: 5px 5px 15px 5px;
        }
    }
`;

const Icon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 80px;
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
`;

const Text = styled.span`
    display: inline;
    font-family: Avenir, sans-serif;
    font-size: 20px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${color.black};
`;

const icons = [<BookkeepingSVG />, <LicenseSVG />, <BankingSVG />, <DomainSVG />, <TrademarkSVG />, <BusinessSVG />]

const EssentialsSection = ({ className, content }) => (
    <Essentials className={className}>
        <Oval className="oval" height="420" width="420" top="0" left="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter className="heading" headline={content.header} headlineWidth="770" text={content.text} bottomMargin="88" />
        <ContentCenter>
            <ImageWrapper>
                <Image filename="ui-6001" alt="your dashboard" />
            </ImageWrapper>
        </ContentCenter>
        <HeadingCenter className="heading" headline={content.header2} headlineWidth="770" text={content.text2} bottomMargin="40" />
        <ContentCenter>
            <Grid>
                {content.boxes.map((box, i) => (
                    <ColorBox key={i}>
                        <Icon>
                            {icons[i]}
                        </Icon>
                        <Text>{box}</Text>
                    </ColorBox>
                ))}
            </Grid>
        </ContentCenter>
    </Essentials>
  );
  
  export default EssentialsSection;