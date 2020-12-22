import React from "react";
import styled from "styled-components";
import Colorbox from "../../atoms/boxes/color-box";
import { color } from "../../atoms/styles/colors";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/top-left-bottom-right.inline.svg";

const dotColor = (circleColor) => {
  switch (circleColor) {
    case color.blue3: {
      return color.blue1;
    }
    case color.orange3: {
      return color.orange1;
    }
    case color.green3: {
      return color.green1;
    }
    case color.purple3: {
      return color.purple1;
    }
    case color.babyblue3: {
      return color.babyblue1;
    }
    case color.yellow3: {
      return color.yellow1;
    }
    default:
      return "";
  }
};

const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${(props) => (props.bottomMargin ? `${props.bottomMargin}px` : "")};

  .box {
    padding: 40px;
    border-radius: ${(props) => (props.rounded ? "5px 50px 50px 5px" : "")};

    @media (min-width: 576px) {
      padding: 40px 40px 40px 112px;
    }

    .icon-wrapper svg {
      display: none;
      position: absolute;
      top: 40px;
      left: 40px;

      @media (min-width: 576px) {
        display: block;
      }
    }
  }

  p {
    color: ${color.grey1} !important;
  }
`;

const IconChildrenColorBox = ({ className, Icon, color, children, bottomMargin, rounded, curve, curveColor }) => {
  return (
    <Wrapper className={className} rounded={rounded} bottomMargin={bottomMargin}>
      {curve && (
        <Curve top="-15" right="-15" color={curveColor ? curveColor : dotColor(color)}>
          <CurveSVG />
        </Curve>
      )}
      <Colorbox className="box" color={color}>
        <div className="icon-wrapper">
          <Icon />
        </div>
        {children}
      </Colorbox>
    </Wrapper>
  );
};

export default IconChildrenColorBox;
