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


const About = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

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
        <HeadingCenter className="heading" headline={content.header} headlineWidth="770" />
        <ContentCenter>
            <Diagram content={content.diagram} />
            <Paragraph maxWidth="970" style={{textAlign: "center"}}>{content.text}</Paragraph>
            <Heading size="4" bottomMargin="48" style={{textAlign: "center"}}>{content.header2}</Heading>
            <Button theme="secondary56" content={content.button} arrow />
        </ContentCenter>
    </About>
  );
  
  export default AboutSection;