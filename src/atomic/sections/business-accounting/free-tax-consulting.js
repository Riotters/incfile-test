import styled from "styled-components";
import {Heading} from "../../atoms/typography/heading";
import React from "react";
import {Paragraph} from "../../atoms/typography/paragraph";
import ContentCenter from "../../partials/content-center";
import BusinessAccountingForm from "../../organisms/forms/business-accounting-form";
import {gradient} from "../../atoms/styles/colors"
import parse from "html-react-parser";

import OvalSVG from "../../../images/ovals/business-accounting-free-tax-consulting-top-left.inline.svg";
import Oval from "../../atoms/icons/oval"

const Wrapper = styled.div`
    position: relative;
    padding: 32px 0 0;
    background: ${gradient.orange3};
    
    @media (min-width: 576px) {
        padding: 120px 0 133px;
    }
    
    p, h2 {
        text-align: center;
    }
    
    .oval {
        overflow: hidden;
    }
`;


const FreeTaxConsulting = ({ content, id }) => (
    <Wrapper id={id}>
        <Oval top="20" left="0" width={570} height={570} className="oval">
            <OvalSVG />
        </Oval>
        <ContentCenter contentWidth={770}>
            <Heading size={2}>{content.header}</Heading>
            <Paragraph big bottomMargin={77} mixed>{parse(content.text)}</Paragraph>

            <BusinessAccountingForm content={content.form} />
        </ContentCenter>
    </Wrapper>
);

export default FreeTaxConsulting;