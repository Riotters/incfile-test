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
        <HeadingCenter className="heading" headline={content.header} headlineWidth="770" />
        <ContentCenter>
            <Diagram content={content.diagram} />
            <Paragraph maxWidth="970" style={{ textAlign: "center" }}>
                {content.text}
            </Paragraph>
            <Heading size="4" bottomMargin="48" style={{ textAlign: "center" }}>
                {content.header2}
            </Heading>
            <LightBoxVideo thumbnailVideo="what-does-dba-mean-7388" videoID="jPE31BJPUeY" bottomMargin="48" videoSchema={{
                name: "\"What Does DBA Mean?\" by Incfile",
                description: "\n" +
                    "A DBA, which stands for \"doing business as,\" is often used by sole proprietors who want to operate their business under a different name. In some states, a DBA is referred to as a \"fictitious business name,\" an \"assumed name,\" or a \"trade name.\" \n" +
                    "\n" +
                    "In most states, registering a DBA gives your business the ability to use this alternate name—but using a DBA doesn’t give you official rights to your business name or any protections. If you haven’t registered your business as an LLC, anyone who registers a legal business entity can take your chosen DBA name. \n" +
                    "\n" +
                    "To learn more, visit the following link:  https://www.incfile.com/fictitious-business-or-trade-name/.\n",
                uploadDate: "2020-06-19",
                duration: "1:10",
                interactionCount: "247046",
            }} />
            <Button theme="secondary56" content={content.button} arrow />
        </ContentCenter>
    </About>
);

export default AboutSection;
