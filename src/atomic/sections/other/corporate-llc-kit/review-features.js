import styled from "styled-components";
import {color, gradient} from "../../../../components/styles/colors";
import {Paragraph} from "../../../atoms/typography/paragraph";
import {Heading} from "../../../atoms/typography/heading";
import GenericTable from "../../../organisms/tables/generic-table";
import React from "react";
import ContentCenter from "../../../partials/content-center";
import Container from "../../../container";
import ImageContent from "../../../partials/left-image-right-content";
import Accordion from "../../../organisms/accordion/accordion";
import Oval from "../../../atoms/icons/oval";
import OvalSVG2 from "../../../../images/ovals/corporate-llc-kit-faq-top-right.inline.svg";
import OvalSVG from "../../../../images/ovals/corporate-llc-kit-review-features-top-left.inline.svg";

const Wrapper = styled.section`
    padding: 100px 0;
    background: ${gradient.orange3};
    position: relative;
`;

const ReviewFeaturesKitSection = ({ className, content, settings }) => (
    <Wrapper>
        <Container>
            <ContentCenter contentWidth={1170}>
                <Heading size={2} maxWidth={770}>{content.header}</Heading>
                <Paragraph big maxWidth={770} bottomMargin={104} style={{"text-align": "center"}}>
                    {content.text}
                </Paragraph>
                <GenericTable responsive={true} content={content.table} settings={settings} className={content.tableScheme} style={{width: "1170px"}} />
            </ContentCenter>
            <ImageContent image="standard-kit-5602" contentCenter paddingTop="48">
                <Heading size={3}>{content.standard.header}</Heading>
                <Heading size={4}>{content.standard.header2}</Heading>
                <Paragraph big>{content.standard.text}</Paragraph>
            </ImageContent>
            <ContentCenter contentWidth={770} style={{"padding-top": "151px"}}>
                <Heading size={2} bottomMargin={104}>{content.faq.header}</Heading>
                <Accordion tab content={content.faq} curveLeft="0" curve curveColor={color.green1} />
            </ContentCenter>
        </Container>
        <Oval height="570" width="570" top={10} left="0">
            <OvalSVG />
        </Oval>
        <Oval height="570" width="570" top={70} right="0">
            <OvalSVG2 />
        </Oval>
    </Wrapper>
);

export default ReviewFeaturesKitSection;