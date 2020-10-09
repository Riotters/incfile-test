import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import TaxReturnTable from "../../../organisms/tables/tax-return-table";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green2.inline.svg";

const TaxReturn = styled.section`
  position: relative;
  padding-top: 75px;

  &:before {
    content: "";
    height: 1900px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: ${gradient.green3};
  }
`;

const TaxReturnSection = ({ className, content }) => (
  <TaxReturn className={className}>
    <Oval className="oval" height="720" width="720" top="0" left="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} />
    <ContentCenter>
      <TaxReturnTable content={content.table} />
    </ContentCenter>
  </TaxReturn>
);

export default TaxReturnSection;
