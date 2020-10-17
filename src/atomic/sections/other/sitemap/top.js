import React from 'react';
import styled from 'styled-components';
import { color } from '../../../../components/styles/colors';

import Container from '../../../container';
import HeadingCenter from "../../../partials/heading-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-dark-blue.inline.svg";
import FiveStarSVG from "../../../../images/group-5-stars.inline.svg"
import ShapeCurve from "../../../atoms/shapes/curve";
import AbsoluteShapCure from '../../../elements/absolute-shape-curve-e';

const Wrapper = styled.div`
    padding: 80px 0;
    position: relative;

    .heading{
        padding-top: 100px;
    }
`

const Grid = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-template-rows: minmax(auto-content, 170px);
    grid-gap: .8em;
`

const Box = styled.div`
    padding: 20px;
    background-color: ${props => (props.bgColor ? props.bgColor : "#ccc")};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    &.box__1, &.box__3, &.box__4{
        display: grid;
        grid-template-columns: 1fr;
        align-items: stretch;
        p{
            padding: 15px 0;
            font-weight: bold;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            &:nth-child(1) {
                font-size:40px;
            }
        }
    }

    &.box__1{
        display: grid;
        grid-template-columns: 1fr;
        align-items: stretch;
        padding: 0;

        p{
            &:nth-child(1) {
                background-color:#97e0c7;
                color: #fff;
                border-radius: 5px 5px 0 0;
            }
        }
    }

    &.box__3{
        p{
            &:nth-child(1) {
                color: #1d1d1d;
                font-size: 20px;
            }
        }
    }

    &.box__4{
        p{
            &:nth-child(1) {
                color: #5089fd;
            }
            &:nth-child(2) {
                font-size: 14px;
                color: #4e4e4e;
                font-weight: normal;
                line-height: 1.5;
            }
        }
    }
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1em;
    font-size: 14px;
    color: #4e4e4e;
    font-family: Avenir;
    border-radius: 5px;

    span{
        &:nth-child(2) {
            height: 14px;
            background-color: #fff;
            flex: 1;
            position: relative;
            border-radius: 5px;

            &:before{
                position: absolute;
                height: 100%;
                width: ${props => (props.width ? props.width : "0")}%;
                content: "";
                background-color: #5089fd;
                border-radius: 5px;
            }
        }

        &:nth-child(3){
            width: 37px;
        }
    }
`

function Top({ content }) {
    return (
        <Wrapper>
            <Oval className="oval" height="243" width="330" top="20" right="0" y="-20">
            <OvalSVG />
            </Oval>
            
            <Container>
                <HeadingCenter
                    bottomMargin={100}
                    className="heading"
                    headline={content.header}
                    headlineWidth="770"
                />

                <Grid>
                    <AbsoluteShapCure rotate={-90} left="-25px" top="-25px">
                        <ShapeCurve color={color.green2} />
                    </AbsoluteShapCure>
                    <Box bgColor="#f2f8f3" className="box__1">
                        <p>{content.box1.text1}</p>
                        <p>{content.box1.text2}</p>
                    </Box>
                    <Box bgColor={color.blue3} className="box__2">
                        {content.box2.map(item => (
                            <Item width={item.percent}>
                                <span>{item.name}</span>
                                <span width={item.percent}></span>
                                <span>{item.total}</span>
                            </Item>
                        ))}
                    </Box>
                    <Box bgColor={color.orange3} className="box__3">
                        <p>{content.box3.text1}</p>
                        <p><FiveStarSVG/></p>
                    </Box>
                    <Box bgColor={color.blue3} className="box__4">
                        <p>{content.box4.text1}</p>
                        <p>{content.box4.text2}</p>
                    </Box>
                </Grid>

            </Container>
        </Wrapper>
    )
}

export default Top;