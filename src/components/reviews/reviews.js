import React from "react";
import styled from "styled-components";
import Ratings from "./ratings";
import Container from "../container";
import Comments from "./comments";
import BackgroundImageSVG from "../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import CurveSVG from "../../images/curves/top-left-bottom-right.inline.svg";
import Curve from "../../atomic/atoms/icons/curve";
import {color} from "../../atomic/atoms/styles/colors";

const Background = styled.div`
    background-color: #f2f6ff;
    position: relative;
`;

const BackgroundImage1 = styled(BackgroundImageSVG)`
    position: absolute;
    transform: rotate(180deg);
    left: 0;
    top: 0;
    width: 420px;
    height: 420px;
`;

const BackgroundImage2 = styled(BackgroundImageSVG)`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 570px;
    height: 570px;
`;

const Reviews = ({reviews}) => (
    <>
        <Container>
            <div style={{marginBottom: '80px'}}>
                <Ratings ratings={reviews.ratings}/>
            </div>
        </Container>
        <Background>
            <BackgroundImage1 />
            <BackgroundImage2 />
            <Container>
                <Curve top="55" right="-5" color={color.blue1}>
                    <CurveSVG />
                </Curve>
                <div style={{padding: '80px 0'}}>
                    <Comments comments={reviews.comments} perPage={5}/>
                </div>
            </Container>
        </Background>
    </>
);

export default Reviews;