import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import Button from "../../../../atomic/molecules/buttons/button";
import Buttonsbox from "../../../../atomic/atoms/boxes/top-buttons-box";
import ChooseIncfile from "./choose-incfile";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-left-bottom-right-big.inline.svg";
import BottomLeftOvalSVG from "../../../../images/ovals/home-page-v3-business-formation-bottom-left.inline.svg";
import BottomRightOvalSVG from "../../../../images/ovals/home-page-v3-business-formation-bottom-right.inline.svg";
import Oval from "../../../atoms/icons/oval";

const BusinessFormationSection = styled.section`
  position: relative;
  padding: 42px 0 0;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(255,255,255,0.00) 4%, #FEF6ED 99%);
  
  h2 {
    text-align: left;
  }
  
  .oval {
    overflow: hidden;
  }
`;

const Anchor = styled.div`
    position: relative;
    ${props => props.maxWidth ? ("max-width: " + props.maxWidth + "px") : ""};
`;

const BusinessFormation = ({ className, content }) => (
    <BusinessFormationSection className={className}>
        <Oval className="oval" height="570" width="570" top="-5" left="0">
            <BottomLeftOvalSVG />
        </Oval>
        <Oval className="oval" height="420" width="420" top="26" right="0">
            <BottomRightOvalSVG />
        </Oval>
        <ImageContent image="mrs-review-stars-5481" contentCenter={true}>
            <Anchor maxWidth={520}>
                <Heading size={2} maxWidth={520} bottomMargin="24">{content.header}</Heading>
                <Curve top="-115" right="0" color={color.orange2}>
                    <CurveSVG />
                </Curve>
            </Anchor>

            <Paragraph big bottomMargin="32">{content.text}</Paragraph>
            <Buttonsbox>
                <Button content={content.button[0]} theme="primary56" arrow />
            </Buttonsbox>
        </ImageContent>
        <ChooseIncfile content={content.choose}/>
    </BusinessFormationSection>
);

export default BusinessFormation;
