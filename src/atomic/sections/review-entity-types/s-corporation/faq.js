import React from "react";
import styled from "styled-components";

import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Accordion from "../../../organisms/accordion/accordion";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import Button from "../../../molecules/buttons/button-action";
import { Paragraph } from "../../../atoms/typography/paragraph";

const Faq = styled.section`
  position: relative;
  padding-top: 75px;
`;

const FaqSection = ({ className, content, onClick }) => (
    <Faq className={className}>
        <Oval className="oval" height="570" width="570" top="0" left="0">
            <OvalSVG />
        </Oval>
        <Oval className="oval" height="570" width="570" bottom="0" right="0" y="142" opacity="0.6">
            <Oval2SVG />
        </Oval>
        <HeadingCenter className="headline" headline={content.header} headlineWidth="640" linkText={content.link.text} linkUrl={content.link.url} />
        <ContentCenter>
            <Accordion content={content.faq} bottomMargin="48" />

            <Button content={{ text: `Download our Completed Guide to S Corp`, url: `/` }} onClick={onClick} theme="primary56" margin="72px auto 40px" />
            <Paragraph big maxWidth="770" style={{ textAlign: "center" }}>
                From developing your business idea to measuring success, our free guide has
                all the info you need to get your business off the ground.
            </Paragraph>
        </ContentCenter>
    </Faq>
);

export default FaqSection;
