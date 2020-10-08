import React from "react";
import styled from "styled-components";
import ContentCenter from "../../../partials/content-center";
import Container from "../../../container";
import Cards from "../../../organisms/cards/variants-cards2";
import OvalSVG from "../../../../images/ovals/incorporate-top-left-packets.inline.svg"
import Oval from "../../../atoms/icons/oval";

import Curve from "../../../../atomic/atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-right-babyblue1.inline.svg";
import {color} from "../../../atoms/styles/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 36px;
  
  @media screen and (max-width: 512px) {
    .oval {
        max-width: 100vw;
        overflow: hidden;
    }
  }

  @media (min-width: 992px) {
    flex-direction: row;
    height: ${ (props) => (props.heightSM ? props.heightSM : "100vh") };
  }
  
  .curve-left {
    transform: rotate(270deg);
  }
`;

const PacketsSection = ({ className, content, fullInfo }) => {
    return (
        <Wrapper className={className} heightSM="unset">
            <Oval className="oval" height="420" width="420" top="0" left="0" y={95}>
                <OvalSVG />
            </Oval>
            <ContentCenter>
                <div style={{position: "relative"}}>
                    <Curve top="53" left="-35" color={color.purple1} className="curve-left">
                        <CurveSVG />
                    </Curve>
                    <Cards content={content.priceOptions} fullInfo={fullInfo} />
                </div>
            </ContentCenter>
        </Wrapper>
    );
};

export default PacketsSection;
