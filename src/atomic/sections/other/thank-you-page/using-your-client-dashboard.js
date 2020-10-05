import React from "react";
import styled from "styled-components";
import {color, gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import ContentCenter from "../../../partials/content-center";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import OrderHistory from "../../../../images/icons/federal-state-sales-and-other-taxes-for-your-california-llc.inline.svg";
import OrderStatus from "../../../../images/icons/online-order-status-tracking.inline.svg";
import SafeAndSecure from "../../../../images/icons/safe-and-secure.inline.svg";
import RegisteredAgent from "../../../../images/icons/california-registered-agents-for-your-llc.inline.svg";
import ApplicationForms from "../../../../images/icons/application-forms.inline.svg";
import CompanyInfo from "../../../../images/icons/company-information-2.inline.svg";
import Accordion from "../../../organisms/accordion/accordion";
import TextBlockWithImage from "../../../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";

import TopRightOvalSVG from "../../../../images/ovals/thank-you-page-using-dashboard-top-right.inline.svg";
import BottomLeftOvalSVG from "../../../../images/ovals/thank-you-page-using-dashboard-bottom-left.inline.svg";
import Oval from "../../../atoms/icons/oval";

const Wrapper = styled.div`
    padding: 100px 0 80px;
    background: ${gradient.orange3};
    position: relative;
    
    .section-content {
        position: relative;
    }
    
    .faq-section {
        padding-top: 100px;
        position: relative;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto 50%;
    
    grid-gap: 70px 30px;
`;

const UsingYourClientDashboardSection = ({ className, content }) => (
    <Wrapper>
        <Oval className="oval" height="570" width="570" top="15" right="0">
            <TopRightOvalSVG />
        </Oval>
        <Oval className="oval" height="720" width="720" bottom="18" left="0">
            <BottomLeftOvalSVG />
        </Oval>
        <Container>
            <ContentCenter contentWidth={770}>
                <Heading size={2} bottomMargin={24} maxWidth={770}>{content.header}</Heading>
                <Paragraph bottomMargin={120} maxWidth={770}>{content.text}</Paragraph>
            </ContentCenter>
            <ContentCenter contentWidth={970} className="dashboard">
                <GridContainer>
                    <TextBlockWithImage SvgImage={OrderHistory}
                                        imageBackgroundColor={content.items[0].backgroundColor}
                                        imageShadowColor={content.items[0].shadowColor}
                                        width={100}
                                        widthUnit="%">
                        <Heading size={4} style={{color: color.blue1}}>
                            {content.items[0].header}
                        </Heading>
                        <Paragraph>
                            {content.items[0].text}
                        </Paragraph>
                    </TextBlockWithImage>
                    <TextBlockWithImage SvgImage={OrderStatus}
                                        imageBackgroundColor={content.items[1].backgroundColor}
                                        imageShadowColor={content.items[1].shadowColor}
                                        width={100}
                                        widthUnit="%">
                        <Heading size={4} style={{color: color.blue1}}>
                            {content.items[1].header}
                        </Heading>
                        <Paragraph>
                            {content.items[1].text}
                        </Paragraph>
                    </TextBlockWithImage>
                    <TextBlockWithImage SvgImage={SafeAndSecure}
                                        imageBackgroundColor={content.items[2].backgroundColor}
                                        imageShadowColor={content.items[2].shadowColor}
                                        width={100}
                                        widthUnit="%">
                        <Heading size={4} style={{color: color.blue1}}>
                            {content.items[2].header}
                        </Heading>
                        <Paragraph>
                            {content.items[2].text}
                        </Paragraph>
                    </TextBlockWithImage>
                    <TextBlockWithImage SvgImage={CompanyInfo}
                                        imageBackgroundColor={content.items[3].backgroundColor}
                                        imageShadowColor={content.items[3].shadowColor}
                                        width={100}
                                        widthUnit="%">
                        <Heading size={4} style={{color: color.blue1}}>
                            {content.items[3].header}
                        </Heading>
                        <Paragraph>
                            {content.items[3].text}
                        </Paragraph>
                    </TextBlockWithImage>
                    <TextBlockWithImage SvgImage={RegisteredAgent}
                                        imageBackgroundColor={content.items[4].backgroundColor}
                                        imageShadowColor={content.items[4].shadowColor}
                                        width={100}
                                        widthUnit="%">
                        <Heading size={4} style={{color: color.blue1}}>
                            {content.items[4].header}
                        </Heading>
                        <Paragraph>
                            {content.items[4].text}
                        </Paragraph>
                    </TextBlockWithImage>
                    <TextBlockWithImage SvgImage={ApplicationForms}
                                        imageBackgroundColor={content.items[5].backgroundColor}
                                        imageShadowColor={content.items[5].shadowColor}
                                        width={100}
                                        widthUnit="%">
                        <Heading size={4} style={{color: color.blue1}}>
                            {content.items[5].header}
                        </Heading>
                        <Paragraph>
                            {content.items[5].text}
                        </Paragraph>
                    </TextBlockWithImage>
                </GridContainer>
            </ContentCenter>
            <ContentCenter contentWidth={770} className="faq-section">
                <Heading size={2} bottomMargin={57}>{content.header2}</Heading>
                <Accordion content={content.faq} curveColor={color.orange1} curveRight={true} curve />
            </ContentCenter>
        </Container>
    </Wrapper>
);

export default UsingYourClientDashboardSection;
