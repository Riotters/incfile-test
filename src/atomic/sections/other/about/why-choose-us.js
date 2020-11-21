import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { color } from '../../../../components/styles/colors';
import {shadow} from "../../../../components/styles/shadows";
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import OvalSVG2 from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import ShapeCurve from "../../../atoms/shapes/curve";
import RelativeElement from '../../../elements/relative-e';
import AbsoluteShapCure from '../../../elements/absolute-shape-curve-e';
import Adventages from "../../../../components/adventages";
import TextCenterLayout from '../../../partials/heading-center';

const Wrapper = styled.div`
    position: relative;
    padding: 100px 0;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 25%, #f2f6ff);
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 1em;

    @media screen and (min-width:992px) {
        grid-template-columns: repeat(auto-fit, minmax(470px, 1fr));
    }

    .containerMargin{
        width: auto;
        margin-bottom: 0;
        @media screen and (min-width: 992px) {
            &:nth-child(2) {
                grid-column: 2/3;
            }
    
            &:nth-child(4) {
                grid-column: 2/2;
                margin-top: 100px;
            }
        }
    }
`

const WhyChooseUs = ({ content }) => (
    <Wrapper>
        <Oval className="oval" height="720" width="720" top="5" left="0" y="-20">
            <OvalSVG />
        </Oval>

        <Oval className="oval" height="420" width="420" bottom="0" right="0" y="-10">
            <OvalSVG2 />
        </Oval>

        <ContentCenter contentWidth="970">
            <RelativeElement margin="0 0 80px 0">
                <AbsoluteShapCure rotate={180} right="15px" top="-15px" hiddenXS>
                    <ShapeCurve color={color.orange2} />
                </AbsoluteShapCure>
                <TextCenterLayout headline={content.header} text={content.text} />
            </RelativeElement>

            <RelativeElement>
                <AbsoluteShapCure rotate={5} right="-65px" top="250px" hiddenXS>
                    <ShapeCurve color={color.purple1} />
                </AbsoluteShapCure>

                <Grid>
                {content.items.map(item => (
                    <Adventages
                        className="containerMargin"
                        style={{ textAlign: "left" }}
                        circleText={item.count}
                        headline={item.title}
                        text={item.desc}
                        imageName={item.icon}
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1} />
                ))}
                </Grid>
            </RelativeElement>

        </ContentCenter>
    </Wrapper>
)

export default WhyChooseUs;