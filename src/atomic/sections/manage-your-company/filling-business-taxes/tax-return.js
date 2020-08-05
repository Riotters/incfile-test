import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import TaxReturnTable from "../../../organisms/tables/tax-return-table";

const TaxReturn = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  &:before {
    content: '';
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
        <HeadingCenter headline={content.header} />
        <ContentCenter>
          <TaxReturnTable content={content.table} />
        </ContentCenter>
    </TaxReturn>
  );
  
  export default TaxReturnSection;