import React, {Fragment} from 'react';
import styled from 'styled-components';

import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import ContentCenter from "../../../partials/content-center";
import Image from "../../../atoms/image/image";
import ShapeCurve2 from "../../../../images/curve-babyblue-1.inline.svg";
import PlusSVG from "../../../../images/plus-red.inline.svg"
import MinusSVG from "../../../../images/minus-red.inline.svg"
import { Heading } from "../../../atoms/typography/heading";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/medium-571.inline.svg";
import { Paragraph } from '../../../atoms/typography/paragraph';
import ShapeCurve from "../../../atoms/shapes/curve";
import AbsoluteShapCure from '../../../elements/absolute-shape-curve-e';
import Whitebox from "../../../atoms/boxes/white-box";

const Wrapper = styled.div`
    position: relative;
`

const TextLeftLayout = styled.div`
    padding: 100px 0;
    width: 100%;
    max-width: 700px;
    align-self: flex-start;

    h2, p{
        text-align: left;    
    }
`

const Diagram = styled.div`
    position: relative;
    min-height: 500px;
    width: 100%;
    max-width: 960px;

    .grid__top{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        justify-content: center;
        align-items: center;

        .block{
            height: 80px;
            display: grid;
            justify-content: center;
            align-items: center;
            position: relative;
            font-family: 'Avenir', san-serif;

            &:nth-child(n + 2) {
                border-left: 1px solid #f2f2f2;
            } 
        }
    }

    .group__circle{
        display: grid;
        grid-template-columns: repeat(4, 80px);
        grid-template-rows: 80px;
        justify-content: space-between;
        align-items: center;
        max-width: 800px;
        margin: 75px auto;

        .item{
            position: relative;
            background-color: #fff;
            width: 80px;
            height: 80px;
            border-radius: 50px;
            box-shadow: 0 30px 50px 0 rgba(220, 226, 240, 0.45);

            & > span {
                z-index: 99;
                    position: absolute;
                    width: 42px;
                    height: 1px;
                    border: 2px dashed #5089fd;
                    top: 50%;
                    left: -50%;
                    transform: translate(-150%, -50%);
            }
        }
    }

    .group__oval{
        display: grid;
        grid-template-columns: repeat(4, 124px);
        grid-template-rows: 56px;
        justify-content: space-between;
        align-items: center;
        max-width: 860px;
        margin: 0 auto;
        
        .item{
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            background-color: ${color.orange2};
            width: 124px;
            height: 56px;
            border-radius: 50px;
            color: ${color.orange1};

            &:last-child{
                background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff 50%);
            }

            & > span {
                z-index: 99;
                position: absolute;
                width: 42px;
                height: 1px;
                border: 2px dashed #5089fd;
                top: 50%;
                left: -50%;
                transform: translate(-50%, -50%);
            }
        }
    }
`

const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -15px;
    right: 15px;
    width: 35px;
    height: 35px;
    border-radius: 50px;
    background-color: ${props => props.color};
    box-shadow: ${props => props.shadow};
`

const UniqueSection = ({ content }) => {
    return (
        <Wrapper>
            <Oval className="oval" height="570" width="570" bottom="0" right="0" y="-8">
                <OvalSVG />
            </Oval>
            <ContentCenter>
                <TextLeftLayout>
                    <Heading size={2}>Why Choosing the Right Business Name Is Important</Heading>
                    <Paragraph big mixed={true}>Your business identity, or brand, shapes how customers see you and influences their decision to buy. A short, distinctive name shows confidence and creates excitement around your products and services. Our Business Name Generator will help you create unforgettable, unique, simple business names that showcase your business values in the best possible way.</Paragraph>
                </TextLeftLayout>

                <Diagram>
                    <AbsoluteShapCure rotate={0} right="-105px" top="-150px">
                        <ShapeCurve2 />
                    </AbsoluteShapCure>
                    
                    <Whitebox className="grid__top">
                        <div className="block">Bitcoin</div>
                        <div className="block">
                            Crypto
                            <Circle color={color.orange2} shadow={shadow.orange2}>
                                <PlusSVG />
                            </Circle>
                        </div>
                        <div className="block">
                            Stable
                            <Circle color={color.orange2} shadow={shadow.orange2}>
                                <PlusSVG />
                            </Circle>
                        </div>
                        <div className="block">
                            Coin
                            <Circle color={color.blue2} shadow={shadow.blue2}>
                                <MinusSVG />
                            </Circle>
                        </div>
                    </Whitebox>
                    <div className="group__circle">
                        <div className="item"></div>
                        <div className="item"><span></span></div>
                        <div className="item"><span></span></div>
                        <div className="item"><span></span></div>
                    </div>

                    <div className="group__oval">
                        <div className="item">Exvault</div>
                        <div className="item">AlyCrypt<span></span></div>
                        <div className="item">Zelcrypt<span></span></div>
                        <div className="item">Rocrypt<span></span></div>
                    </div>
                </Diagram>

                

            </ContentCenter>
        </Wrapper>
    )
}

export default UniqueSection;