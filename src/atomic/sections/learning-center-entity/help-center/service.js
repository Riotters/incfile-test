import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-pink1.inline.svg";
import BoxedButton from "../../../molecules/buttons/boxed";

const Service = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 120px;
`;

const ServiceSection = ({ className, content }) => (
    <Service className={className}>
        <Oval className="oval" height="652" width="652" top="0" left="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter headline={content.header} textWidth="770" text={content.text} bottomMargin="80" />
        <ContentCenter>

        </ContentCenter>
    </Service>
);
  
export default ServiceSection;