import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { color } from "../../../atoms/styles/colors"
import { shadow } from "../../../atoms/styles/shadows"
import ContentCenter from "../../../partials/content-center"
import Image from "../../../atoms/image/image"
import ArrowCircleOrangeSVG from "../../../../images/icons/arrow-circle-orange.inline.svg"
import { Heading } from "../../../atoms/typography/heading"
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import { Paragraph } from '../../../atoms/typography/paragraph';
import ShapeCurve from "../../../atoms/shapes/curve";
import AbsoluteShapCure from '../../../elements/absolute-shape-curve-e';

import GridTwoColsSVG from '../../../../images/icons/grid-2-cols.inline.svg';
import GridThreeColsSVG from '../../../../images/icons/grid-3-cols.inline.svg';
import ArrowLeft from '../../../../images/arrow-circle.inline.svg';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`

const DisplayOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    margin-bottom: 32px;

    .display_option_icon{
        width: 18px;
        height: 18px;
        cursor: pointer;
    }
`

const Grid = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr;
    grid-template-rows: max-content;

    @media screen and (min-width: 769px) {
        grid-template-columns: ${props => (props.display === 'twoCol' ? "1fr 1fr" : "repeat(3, minmax(370px, 1fr))")};
    }
`

const ResultItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.colorProperies.bg};
    border-radius: 5px;
    box-shadow: ${shadow.white2};
    height: 300px;
    position: relative;
    overflow: hidden;

    p{
        font-size: 32px;
        color: ${props => props.colorProperies.color}
    }

    .result__item-btn-action{
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        align-items: center;
        height: 90px;
        background: #fff;
        justify-content: center;
        position: absolute;
        bottom: 0;
        border-radius: 0 0 5px 5px;
        transform: translateY(90px);
        transition: all .3s ease;
        
        span{
            font-family: 'Avenir', san-serif;
            font-weight: bold;
            &:nth-child(1) {
                font-size: 16px;
                color: #1d1d1d;
            }
            &:nth-child(2) {
                font-size: 12px;
                color: #7a7a7a;
            }
        }

        .arrow{
            position: absolute;
            top: 50%;
            right: 36px;
            transform: translate(50%,-50%) rotate(90deg);
        }
    }

    &:hover .result__item-btn-action{
        transform: translateY(0);
    }
`

const arrayColor = [
    {
        bg: `#29183c`,
        color: `#caa748`,
    },
    {
        bg: `#fff`,
        color: `#349d60`
    },
    {
        bg: `#f56b25`,
        color: `#ffdb87`
    },
    {
        bg: `#fff`,
        color: `#bb6bd9`
    },
    {
        bg: `#f05c41`,
        color: `#fff`
    },
    {
        bg: `#2D9CDB`,
        color: `#fff`,
    },
    {
        bg: `#903213`,
        color: `#F2C94C`
    }
];

const ResultSection = ({ content }) => {
    const [display, setDisplay] = useState('threeCol');

    const handleDisplayOption = option => {
        setDisplay(option);
    }

    return (
        <Wrapper>
            <Paragraph big mixed={true} style={{ textAlign: `center`, fontWeight: `bold` }} bottomMargin={30} topMargin={80}>
            {content.results.length} business name results with keyword "apple"
            </Paragraph>

            <DisplayOption>
                <span>{content.text2}</span>
                <span onClick={() => handleDisplayOption('twoCol')} className="display_option_icon"><GridTwoColsSVG /></span>
                <span onClick={() => handleDisplayOption('threeCol')} className="display_option_icon"><GridThreeColsSVG /></span>
            </DisplayOption>

            <Grid display={display}>
                <Fragment>
                    {content.results.map(item => (
                        <ResultItem className="result__item" colorProperies={arrayColor[Math.floor(Math.random() * arrayColor.length)]}>
                            <Paragraph>{item}</Paragraph>
                            <Link to="/" className="result__item-btn-action">
                                <span>Search Name Availability</span>
                                <span>{item}</span>
                                <span className="arrow">
                                    <ArrowLeft />
                                </span>
                            </Link>
                        </ResultItem>
                    ))}
                </Fragment>
            </Grid>
        </Wrapper>
    );
};

export default ResultSection;