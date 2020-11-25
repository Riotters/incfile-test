import React from "react"
import styled from "styled-components"
import ContentCenter from "../../../partials/content-center"
import { Heading } from "../../../atoms/typography/heading"
import Oval from "../../../atoms/icons/oval";
import OvalSVG2 from "../../../../images/ovals/affiliates-enjoy-highest-payouts-top-left.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBoxed from "../../../molecules/static-check/circle-checkmark-text-boxed";
import ExternalLink from "../../../../atomic/molecules/buttons/external-link";
import Curve from "../../../../atomic/atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-reverse.inline.svg";
import {color} from "../../../atoms/styles/colors";

const Section = styled.section`
  position: relative;
  padding: 50px 0 0;
  
  .oval:not(.small) {
        max-width: 100%;
        overflow: hidden;
    }
    
    @media (min-width: 576px) {
        padding: 100px 0 120px;    
    }
`;

const EnjoyHighestPayouts = ({ className, content }) => (
    <Section className={className}>
        <Oval className="oval" height="570" width="570" top="0" left="0">
            <OvalSVG2 />
        </Oval>
        <ContentCenter>
            <Heading size="2" maxWidth="770" bottomMargin="24">{content.header}</Heading>
            <Paragraph big>{content.text}</Paragraph>
            <GridContainer>
                {
                    content.items.map((item, index) => {
                        return (
                            <TextBoxed key={index}>
                                <Paragraph bottomMargin={0}>{item.text}</Paragraph>
                            </TextBoxed>
                        );
                    })
                }
                <Curve bottom="-25" right="-55" color={color.green2} className="curve-left">
                    <CurveSVG />
                </Curve>
            </GridContainer>

            <ExternalLink className="sign-up-btn" content={content.button} theme="primary56" arrow />
        </ContentCenter>
    </Section>
);

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 30px;
    width: 770px;
    padding-top: 72px;
    position: relative;
    
    & + .sign-up-btn {
        align-self: center;
        display: flex;
        margin-top: 64px;
    }
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 100%;
       
    }
    
    
    @media screen and (max-width: 768px) {
       width: 100%;
    }
`;

export default EnjoyHighestPayouts;