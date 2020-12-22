import React from 'react';
import styled from 'styled-components';
import { color } from '../../../components/styles/colors';

import ContentCenter from "../../partials/content-center";
import Oval from "../../atoms/icons/oval";
import OvalSVG from "../../../images/ovals/top-right-transparent-blue2.inline.svg";
import OvalSVG2 from "../../../images/ovals/top-left-transparent-blue3.inline.svg";
import ShapeCurve from "../../atoms/shapes/curve";
import RelativeElement from '../../elements/relative-e';
import AbsoluteShapCure from '../../elements/absolute-shape-curve-e';
import AccordionWithCounting from '../../states-llc/tab-acccordion-with-counting';
import {PHeading} from "../../atoms/typography/p-to-heading";

const Wrapper = styled.div`
    position: relative;
    padding: 100px 0 50px 0;
`

const ChooseLists = ({ content }) => (
    <Wrapper>
        <Oval className="oval" height="420" width="420" top="0" right="0" y="-35">
            <OvalSVG />
        </Oval>

        <Oval className="oval" height="720" width="720" bottom="0" left="0" y="-10">
            <OvalSVG2 />
        </Oval>

        <ContentCenter contentWidth="970">
            <PHeading size={3} maxWidth={670} bottomMargin="80" style={{ marginTop: `50px` }}>{content.header}</PHeading>
            
            <RelativeElement>
                <AbsoluteShapCure rotate={-90} left="-25px" top="-25px">
                    <ShapeCurve color={color.green1} />
                </AbsoluteShapCure>
                <AccordionWithCounting content={content.items} tab />
            </RelativeElement>

        </ContentCenter>
    </Wrapper>
)

export default ChooseLists;