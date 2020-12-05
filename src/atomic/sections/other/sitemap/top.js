import React from "react";
import styled from "styled-components";
import { color } from "../../../../components/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";

const Wrapper = styled.div`
  padding: 120px 0;
  position: relative;

  .oval {
    top: 36%;
    left: 36%;
  }

  .heading {
    padding-top: 136px;
  }
`;

function Top({ content }) {
  return (
    <Wrapper>
      <Curve className="oval" rotate="-5" color={color.orange1}>
        <CurveSVG />
      </Curve>
      <HeadingCenter className="heading" headline={content.header} headlineWidth="770" />
    </Wrapper>
  );
}

export default Top;
