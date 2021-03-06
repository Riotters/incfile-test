import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import Path from "../../../molecules/blocks/research-topics-path";
import LightBoxVideo from "../../../../components/LightBox";

const About = styled.section`
  position: relative;
  padding-bottom: 32px;

  @media (min-width: 992px) {
    padding-bottom: 104px;
  }
`;

const AboutSection = ({ className, content }) => (
    <About className={className} id="answers">
        <Oval className="oval" height="570" width="570" y="-40">
            <OvalSVG />
        </Oval>
        <ImageContent image="web-address-search" imageAlt="forming an llc">
            <Path content={content.links} />
            <Heading size={1} template={3} bottomMargin="32">
                {content.header}
            </Heading>
            <Paragraph big bottomMargin="24">
                {content.text}
            </Paragraph>
            <LightBoxVideo
                thumbnailVideo="comparison-chart-video-3611"
                alt="business entity comparison"
                videoID="R_oIgzYh7NU"
                bottomMargin="48"
            />
        </ImageContent>
    </About>
);

export default AboutSection;
