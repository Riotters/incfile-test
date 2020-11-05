import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Form from "../../../organisms/forms/business-name-search-form";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-orange.inline.svg";

const Care = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 104px;
  background-color: ${color.orange3};
`;

const CareSection = ({ className, content, id }) => {
    return (
        <Care className={className} id={id}>
            <Oval className="oval" height="720" width="720" top="0" right="0">
                <OvalSVG />
            </Oval>
            <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} textWidth="770" bottomMargin="80" />
            <ContentCenter>
                <Form content={content.form} />
            </ContentCenter>
        </Care>
    );
};

export default CareSection;
