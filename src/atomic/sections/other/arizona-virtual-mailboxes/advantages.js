import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentObject from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-left-right-orange2-big.inline.svg";
import Cards from "../../../organisms/cards/entity-search-adventages";

const AdvantagesSection = styled.section`
  position: relative;
  padding: 100px 0;
  background-color: ${color.blue3};
  overflow: hidden;
`;
const CardsWrapper = styled.div`
    position: relative;
    padding-top: 48px;
    
    & > div[class*='entity-search'] {
        padding-bottom: 0;
    }
`

const InnerSection = styled.div`
    width: 100%;
    height: auto;
    position: relative
`

const ArizonaStreetAddrVirtualMXAdvantages = ({ className, content }) => (
    <AdvantagesSection className={className}>
        <InnerSection>
            <ContentObject contentWidth="970" contentCenter>
                <Heading size="2">{content.header}</Heading>
                <Paragraph big bottomMargin="0">
                    {content.text}
                </Paragraph>

                <CardsWrapper>
                    <Curve top="30" left="-115" color={color.blue1}>
                        <CurveSVG />
                    </Curve>
                    <Cards content={content.cards} />
                </CardsWrapper>
            </ContentObject>

            <Oval className="oval" height="570" width="570" top="0" left="0">
                <OvalSVG />
            </Oval>
        </InnerSection>
    </AdvantagesSection>
);

export default ArizonaStreetAddrVirtualMXAdvantages;
