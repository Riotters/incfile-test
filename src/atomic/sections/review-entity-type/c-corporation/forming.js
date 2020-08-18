import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors"
import HeadingCenter from "../../../partials/heading-center"
import ContentCenter from "../../../partials/content-center";
import NumericList from "../../../organisms/lists/numeric-boxed-list";

const Forming = styled.section`
  background-color: ${color.blue3};
  position: relative;
  padding-top: 104px;
  padding-bottom: 112px;
`;

const FormingSection = ({ className, content }) => (
    <Forming className={className}>
        <HeadingCenter className="heading" headline={content.header} headlineWidth="770" text={content.text} />
        <ContentCenter contentWidth="770">
            <NumericList content={content.list} bottomMargin="0" />
        </ContentCenter>
    </Forming>
  );
  
  export default FormingSection;