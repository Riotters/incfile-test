import React from "react"
import styled from "styled-components"
import ContentCenter from "../../../partials/content-center"
import { Heading } from "../../../atoms/typography/heading"
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green3.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBoxed from "../../../molecules/static-check/circle-checkmark-text-boxed";
import Button from "../../../../atomic/molecules/buttons/button";

const Section = styled.section`
  position: relative;
  padding: 100px 0 120px;
  
  .oval:not(.small) {
        max-width: 100%;
        overflow: hidden;
    }
`;

const EnjoyHighestPayouts = ({ className, content }) => (
    <Section className={className}>
        <Oval className="oval" height="570" width="570" top="0" left="0">
            <OvalSVG />
        </Oval>
        <ContentCenter>
            <Heading size="2" maxWidth="770" bottomMargin="24">{content.header}</Heading>

            <Paragraph>{content.text}</Paragraph>

            <GridContainer>
                {
                    content.items.map((item) => {
                        return (
                            <TextBoxed>
                                <Paragraph bottomMargin={0}>{item.text}</Paragraph>
                            </TextBoxed>
                        );
                    })
                }
            </GridContainer>

            <Button className="sign-up-btn" content={content.button} theme="primary56" arrow />
        </ContentCenter>
    </Section>
);

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 30px;
    
    padding-top: 72px;
    
    & + .sign-up-btn {
        align-self: center;
        display: flex;
        margin-top: 64px;
    }
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 100%;
    }
`;

export default EnjoyHighestPayouts;