import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Accordion from "../../../organisms/accordion/accordion";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-reverse-green1.inline.svg";

const Faq = styled.section`
  position: relative;
  padding: 100px 0;
`;

const FaqSection = ({ className, content }) => (
    <Faq className={className}>
        <Oval className="oval" height="420" width="420" top="0" right="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter headline={content.header} headlineWidth="770" bottomMargin={104} />

        <ContentCenter>
            <Accordion content={content.faq} curve curveTopLeft curveLeft="-30" curveColor={color.orange1}/>
        </ContentCenter>
    </Faq>
);

export default FaqSection;