import React from "react";
import styled from "styled-components";
import ContentCenter from "../../../partials/content-center";
import {Heading} from "../../../atoms/typography/heading";
import GenericTable from "../../../organisms/tables/generic-table";
import {Paragraph} from "../../../atoms/typography/paragraph";
import BenefitsSection from "./benefits-section";
import {color} from "../../../atoms/styles/colors";
import {gradient} from "../../../../components/styles/colors";
import Cards from "../../../organisms/cards/variants-cards2";

import OvalSVG from "../../../../images/ovals/incorporate-services-top-right.inline.svg";
import OvalSVG2 from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import Curve from "../../../../atomic/atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-right-babyblue1.inline.svg";
import Oval from "../../../../atomic/atoms/icons/oval";
import { Tabs } from "@bumaga/tabs";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 100px;
  padding-top: 80px;
  background: ${gradient.blue3};

  @media (min-width: 992px) {
    flex-direction: row;
  }
  
  .curve-left {
    transform: rotate(270deg);
  }
  
  h3 {
    width: auto;
  }
  
  .oval {
    z-index: -1;
  }
  
  .pricing-options {
    margin-top: 116px;
  }
  
  .section-description {
    text-align: center;
  }
  
  @media screen and (max-width: 512px) {
    .oval {
        max-width: 100vw;
        overflow: hidden;
    }
  }
`;

const Separator = styled(Paragraph)`
    width: 100%;
    height: 1px;
    
    background-color: ${color.grey3};
    margin: 80px 0 ${props => props.bottomMargin ?? 80}px;
`;

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    margin-top: 56px;
    align-items: stretch;
    
    h3 {
        align-self: center;
    }
`;

const SingleService = ({ service, settings, style }) => {
    return (
        <TableWrapper>
            <Heading size={3} bottomMargin={40}>{service.header}</Heading>
            <GenericTable responsive={true} content={service.table} settings={settings} className={service.tableScheme} style={style} />
        </TableWrapper>
    )
};

const ServicesSection = ({ className, content, settings, variants }) => {
    return (
        <Wrapper className={className}>
            <Oval className="oval" height="720" width="720" top="0" right="0" y={75}>
                <OvalSVG />
            </Oval>
            <Oval className="oval" height="420" width="420" top="0" left="0" y={95}>
                <OvalSVG2 />
            </Oval>
            <ContentCenter>
                <Heading size={2}>{content.header}</Heading>
                <Paragraph big className="section-description" maxWidth={770} bottomMargin={84}>{content.text}</Paragraph>
                <BenefitsSection content={content.benefits} />
                <Separator bottomMargin={24} />

                <Tabs>
                    { content.items.map((service) => (
                        <SingleService settings={settings} service={service} style={service.style} />)
                    )}
                </Tabs>

                <div style={{position: "relative"}}>
                    <Curve top="90" left="-35" color={color.purple1} className="curve-left">
                        <CurveSVG />
                    </Curve>
                    <Cards className="pricing-options" content={variants.priceOptions} fullInfo={false} />
                </div>
            </ContentCenter>
        </Wrapper>
    );
};

export default ServicesSection;