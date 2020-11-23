import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import ContentCenter from "../../../partials/content-center";
import Image from "../../../atoms/image/image";
import Button from "../../../molecules/buttons/button";
import Buttonsbox from "../../../../atomic/atoms/boxes/top-buttons-box";
import LeftContentRightImage from "../../../partials/left-content-right-image";
import OvalSVG from "../../../../images/ovals/top-left-transparent-reverse-big-red3.inline.svg";
import OvalTopLeftFourTypesSVG from "../../../../images/ovals/business-entity-quiz-four-types-top-left.inline.svg";
import OvalTopRightFourTypesSVG from "../../../../images/ovals/business-entity-quiz-top-right.inline.svg";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";


const Wrapper = styled.section`
   background: linear-gradient(180deg, rgba(255,255,255,0.00) 4%, #FEF6ED 99%);
   position: relative;
   @media (max-width: 575px) {
      padding-bottom: 50px;
   }
   
   .main-top-content p, h1, h2 {
        text-align: center;
   }
   
   .imagebox {
        width: 100%;
   }
   
   .oval {
    overflow: hidden;
   }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto 50%;
    grid-gap: 30px;
    position: relative;
    
    @media screen and (max-width: 768px) {
        grid-template-columns: auto;
    }
`;

const GridCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 24px 20px 20px;
    box-shadow: ${shadow.white1};
    border-radius: 5px;
    background-color: ${color.white};
    
    p {
        background: ${props => props.color ?? "#fff"};
        padding: 15px;
        border-radius: 20px;
        margin-bottom: 0;
        
        @media (min-width: 576px) {
            padding: 30px;
        }
    }
    
    @media (min-width: 576px) {
        padding: 48px 40px 40px;
    }
`;

const ImageWrapper = styled.div`
    width: 160px;
    margin-bottom: 30px;
`;

const ChooseEntitySection = ({ className, content }) => (
    <Wrapper>
        <Container>
            <ContentCenter contentWidth={970} className="main-top-content">
                <Heading size={2} bottomMargin={24} maxWidth={770}>{content.header}</Heading>
                <Paragraph big bottomMargin={80} maxWidth={770}>{content.text}</Paragraph>

                <GridContainer>
                    <Curve top="-105" left="-105" color={color.purple2}>
                        <CurveSVG />
                    </Curve>
                    {content.types.map((type) => (
                        <GridCard color={type.color}>
                            <ImageWrapper>
                                <Image filename={type.image} />
                            </ImageWrapper>
                            <Heading size={4} bottomMargin={32}>{type.header}</Heading>
                            <Paragraph>{type.text}</Paragraph>
                        </GridCard>
                    ))}
                </GridContainer>
            </ContentCenter>
        </Container>
        <Oval className="oval" height="720" width="720" bottom="17" left="0">
            <OvalTopLeftFourTypesSVG />
        </Oval>
        <Oval className="oval" height="570" width="409" bottom="0" right="0">
            <OvalTopRightFourTypesSVG />
        </Oval>
        <Container style={{"padding-top": "26px"}}>
            <LeftContentRightImage image={content.image} contentWidth={1150} contentPadding="29px">
                <Heading size={2} bottomMargin={24} maxWidth={520}>{content.header2}</Heading>
                <Paragraph big bottomMargin={32} maxWidth={530}>{content.text2}</Paragraph>
                <Buttonsbox>
                    <Button content={content.button} theme="primary56" arrow />
                </Buttonsbox>
            </LeftContentRightImage>
        </Container>
    </Wrapper>
);

export default ChooseEntitySection;