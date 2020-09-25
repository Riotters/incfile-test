import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

import { Paragraph } from '../../../atoms/typography/paragraph';
import Image from '../../../atoms/image/image_nobase64';
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Whitebox from '../../../atoms/boxes/white-box';
import ArrowLink from '../../../molecules/buttons/text';
import PositiveIncfileReviews from './positive-incfile-reviews';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 100px 0;
    text-align: center;
    background-image: linear-gradient(to bottom, #f2f6ff, #ffffff);
`

const Improvement = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1em;
    align-items: center;
    margin-top: 110px;

    @media screen and (min-width: 850px) {
        grid-template-columns: repeat(auto-fit, minmax(470px, 1fr));
    }

    .improvement__item{
        padding: 20px;
        align-items: flex-start;
        flex-direction: column;
        text-align: left;

        @media screen and (min-width: 769px) {
            padding: 40px;
            width: 470px;

            &:nth-child(2) {
                grid-column: 2 /4;
                grid-row: 1/3;
            }
        }

        .gatsby-image-wrapper{
            width: 157px;
            align-self: center;
            margin-bottom: 20px;
        }
    }
`

const ImprovementToCustomerServices = ({ content }) => (
    <Wrapper>
        <Oval className="oval" height="720" width="720" top="8" right="0" y="0">
            <OvalSVG />
        </Oval>

        <HeadingCenter
            className="heading"
            headline={content.header}
            headlineWidth="770"
            text={content.text1}
        /> 

        <ContentCenter contentWidth="770">
            <Improvement>
                {content.items.map(item => (
                    <Whitebox flex className="improvement__item">
                        <Image filename={item.image} alt={item.title} />
                        <Paragraph big mixed={true} style={{  fontWeight: `bold` }} bottomMargin="16">{item.title}</Paragraph>
                        <Paragraph mixed={true}>{parse(item.desc)}</Paragraph>
                        <ArrowLink bottomMargin="0" content={item.link}/>
                    </Whitebox>
                ))}
            </Improvement>
        </ContentCenter>
        
        <PositiveIncfileReviews />
    </Wrapper>   
)

export default ImprovementToCustomerServices;