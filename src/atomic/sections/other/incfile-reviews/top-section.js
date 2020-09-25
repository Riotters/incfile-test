import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

import { Heading } from '../../../atoms/typography/heading';
import { Paragraph } from '../../../atoms/typography/paragraph';
import ContentCenter from '../../../partials/content-center';
import Oval from "../../../atoms/icons/oval";
import { color } from '../../../../components/styles/colors';
import OvalSVG from "../../../../images/ovals/top-right-transparent-dark-blue.inline.svg";
import OvalSVG2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import ShapeCurve from "../../../atoms/shapes/curve";
import RelativeElement from '../../../elements/relative-e';
import AbsoluteShapCure from '../../../elements/absolute-shape-curve-e';
import Button from '../../../../components/button';


const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 0 80px 0;
    text-align: center;
`

const TopSection = ({ content }) => (
    <Wrapper>
        <Oval className="oval" height="122" width="330" top="8" right="0" y="0">
            <OvalSVG />
        </Oval>

        <Oval className="oval" height="420" width="420" bottom="0" left="0" y="0">
            <OvalSVG2 />
        </Oval>
        
        <ContentCenter contentWidth="770">
                <Heading size={1} style={{ marginTop: `180px` }}>{content.header}</Heading>
                <Paragraph big mixed={true}>
                    {parse(content.text1)}
                </Paragraph>
                
                <RelativeElement style={{ marginTop: `75px` }}>
                    <AbsoluteShapCure right="-20px" top="-10px" rotate={0}>
                        <ShapeCurve color={color.blue1}/>
                    </AbsoluteShapCure>

                    <Paragraph big mixed={true}>
                    {parse(content.text2)}
                    </Paragraph>
                    <Paragraph big mixed={true}>
                    {parse(content.text3)}
                    </Paragraph>
                </RelativeElement>

                <Button to={`/`} theme="primary56" width="300px" arrow margin="15px 0 0 0">See our customer review</Button>

            </ContentCenter>
    </Wrapper>    
)

export default TopSection;