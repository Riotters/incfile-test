import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Button from "../../../molecules/buttons/button-action";
import ImageContent from "../../../partials/left-content-right-image";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";

const Guide = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  background-color: ${color.orange3};
  overflow: hidden;
`;

const GuideSection = ({ className, content, onClick }) => (
    <Guide className={className}>
        <Oval className="oval" height="420" width="420" top="0" left="0">
            <OvalSVG />
        </Oval>
        <Oval className="oval" height="570" width="570" bottom="-3" right="-10">
            <Oval2SVG />
        </Oval>
        <ImageContent image="after-formation-cta-7994" alt="forming an llc" imageWidth="515">
            <Heading size="2">
                <Curve top="-20" left="-95" color={color.orange2} rotate="-10">
                    <CurveSVG />
                </Curve>
                {content.header}
            </Heading>
            <Paragraph big>{content.text}</Paragraph>
            <Button content={content.button} theme="primary56" margin="0 auto 0 0" onClick={onClick} />
        </ImageContent>
    </Guide>
);
  
export default GuideSection;