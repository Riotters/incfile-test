import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Cards from "../../../organisms/cards/benefits";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-purple2.inline.svg";

const Benefits = styled.section`
  position: relative;
  padding-top: 100px;
  padding-bottom: 64px;
`;

const BenefitsSection = ({ className, content }) => (
    <Benefits className={className}>
        <Oval className="oval" height="340" width="340" bottom="0" right="0" y="140">
            <OvalSVG />
        </Oval>
        <HeadingCenter headline={content.header} />
        <ContentCenter>
          <Cards content={content.cards} />
        </ContentCenter>
    </Benefits>
  );
  
  export default BenefitsSection;