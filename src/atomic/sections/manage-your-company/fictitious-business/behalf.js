import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import Button from "../../../molecules/buttons/button";
import ContentCenter from "../../../partials/content-center";
import BehalfCards from "../../../organisms/cards/behalf-cards";

const Behalf = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
`;

const BehalfSection = ({ className, content }) => (
    <Behalf className={className}>
        <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} textWidth="770" />
        <ContentCenter>
            <BehalfCards content={content.cards} paragraphHeaders />
            <Button content={content.button} theme="primary56" arrow />
        </ContentCenter>
    </Behalf>
  );
  
  export default BehalfSection;