import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { Heading } from "../../../atoms/typography/heading";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Button from "../../../molecules/buttons/button";
import Diagram from "../../../organisms/diagrams/fictitious-diagram";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import LightBoxVideo from "../../../../components/LightBox";
import {PHeading} from "../../../atoms/typography/p-to-heading";

const About = styled.section`
  position: relative;
  padding-top: 105px;
  padding-bottom: 64px;

  @media (min-width: 992px) {
    padding-top: 0;
  }

  .heading {
    h2 {
      padding-bottom: 48px;
    }

    p {
      padding-bottom: 48px;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    max-width: 1050px;
  }
`;

const AboutSection = ({ className, content }) => (
    <About className={className}>
        <Oval className="oval" height="570" width="570" y="-40">
            <OvalSVG />
        </Oval>
        <HeadingCenter className="heading" headline={content.header} headlineWidth="770" paragraphHeading />
        <ContentCenter>
            <Diagram content={content.diagram} />
            <Paragraph maxWidth="970" style={{ textAlign: "center" }}>
                {content.text}
            </Paragraph>
            <PHeading size={4} bottomMargin="48" style={{ textAlign: "center" }}>
                {content.header2}
            </PHeading>
            <LightBoxVideo alt="what does dba mean" thumbnailVideo="what-does-dba-mean-7388" videoID="jPE31BJPUeY" bottomMargin="48" />
            <Button externalLink theme="secondary56" content={content.button} arrow />
        </ContentCenter>
    </About>
);

export default AboutSection;
