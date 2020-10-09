import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import GridTableRow from "../../molecules/blocks/form-an-llc-table-row";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/bottom-left-top-right.inline.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 970px;
  position: relative;
  margin-bottom: ${(props) => (props.bottomMargin ? `${props.bottomMargin}px` : "")};

  .table-row {
    @media (min-width: 769px) {
      grid-template-columns: 250px 1fr;
    }

    @media (min-width: 992px) {
      grid-template-columns: 300px 1fr;
    }

    & > div {
      min-width: 122px;

      p {
        color: ${color.black};
      }
    }
  }
`;

const FormAnLLCTable = ({ className, content, bottomMargin }) => (
  <Wrapper className={className} bottomMargin={bottomMargin}>
    {content.rows.map((row) => (
      <GridTableRow className="table-row" content={row} noSeparator />
    ))}
  </Wrapper>
);

export default FormAnLLCTable;
