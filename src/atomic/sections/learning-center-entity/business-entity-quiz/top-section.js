import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Button from "../../../molecules/buttons/button";
import Container from "../../../container";
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalTopLeftSVG from "../../../../images/ovals/business-entity-quiz-top-left.inline.svg";
import OvalTopRightSVG from "../../../../images/ovals/business-quiz-top-section-right.inline.svg";
import Image from "../../../atoms/image/image";

const Wrapper = styled.section`
   padding: 180px 0 100px;
   position: relative;
   overflow-x: hidden;
   
   @media (min-width: 992px) {
    overflow-x: initial;
   }
   
   .main-top-content p, h1, h2 {
        text-align: center;
   }
   
   h2, p {
        position: relative;
   }
`;

const ImageWrapper = styled.span`
    width: ${props => props.width ?? "13px"};
    height: ${props => props.height ?? "19px"};
    
    position: absolute;
    ${props => props.top ? "top: " + props.top : ""};
    ${props => props.left ? "left: " + props.left : ""};
    ${props => props.bottom ? "bottom: " + props.bottom : ""};
    ${props => props.right ? "right: " + props.right : ""};
`;

const RelativeWrapper = styled.div`
    position: relative;
`;

const TopSection = ({ className, content }) => (
    <Wrapper>
        <Oval className="oval" height="420" width="420" top="35" left="0">
            <OvalTopLeftSVG />
        </Oval>
        <Oval className="oval" height="777" width="824" top="0" right="0">
            <OvalTopRightSVG />
        </Oval>
        <Container>
            <ContentCenter contentWidth={770} className="main-top-content">

                <Heading size={2} bottomMargin={24}>
                    {content.header}
                    <ImageWrapper top="-19px" left="-261px" width="248px" height="377px">
                        <Image filename="folder-golfball-thingies-6991" />
                    </ImageWrapper>
                    <ImageWrapper top="-41px" right="-184px" width="246px" height="253px">
                        <Image filename="megaphone-golfball-thingy-4022" />
                    </ImageWrapper>
                </Heading>
                <RelativeWrapper>
                    <Paragraph big bottomMargin={32}>
                        {content.text}
                    </Paragraph>
                    <ImageWrapper bottom="-136px" right="-236px" width="201px" height="128px">
                        <Image filename="notepad-5491" />
                    </ImageWrapper>
                </RelativeWrapper>

                <Button content={content.button} theme="primary56" arrow />
            </ContentCenter>
        </Container>
    </Wrapper>
);

export default TopSection;