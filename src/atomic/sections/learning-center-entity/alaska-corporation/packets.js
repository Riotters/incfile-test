import React from "react";
import styled from "styled-components";
import ContentCenter from "../../../partials/content-center";
import Container from "../../../container";
import Cards from "../../../organisms/cards/variants-cards2";
import OvalSVG from "../../../../images/ovals/incorporate-top-left-packets.inline.svg";
import Oval from "../../../atoms/icons/oval";

import Curve from "../../../../atomic/atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-right-babyblue1.inline.svg";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../../atomic/partials/heading-center";
import { packagePrice } from "../../../../helpers/global-variables";
import { shortState } from "../../../../helpers/utils";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 100px;

  @media screen and (max-width: 512px) {
    .oval {
      max-width: 100vw;
      overflow: hidden;
    }
  }

  @media (min-width: 992px) {
    height: ${(props) => (props.heightSM ? props.heightSM : "100vh")};
  }

  .curve-left {
    transform: rotate(270deg);
  }
`;

const PacketsSection = ({ className, fullInfo, data, compacted = false }) => {
  let stateFee = data?.prices ? data.prices.statefee : 0;
  let entityState = data?.prices ? data.prices.state : "";
  let header = `Select the package that works best for you`;

  const priceOptions = [
    {
      header: "Silver",
      variant: "",
      text: "",
      price: `${packagePrice.silver + stateFee}`,
      image: "",
      button: {
        text: "Get the Silver package",
        url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=${shortState(entityState)}`,
      },
      fees: [
        {
          text: "Package fee",
          price: `${packagePrice.silver}`,
        },
        {
          text: "State fee",
          price: `${stateFee}`,
        },
      ],
      include: "The Silver Services includes:",
      list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
      fee: "",
      savings: "",
    },
    {
      header: "Gold",
      variant: "most popular",
      text: "Everything from sliver+",
      price: `${packagePrice.gold + stateFee}`,
      image: "",
      button: {
        text: "Get the Gold package",
        url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=${shortState(entityState)}`,
      },
      fees: [
        {
          text: "Package fee",
          price: `${packagePrice.gold}`,
        },
        {
          text: "State fee",
          price: `${stateFee}`,
        },
      ],
      include: "The Gold Services includes:",
      list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
      fee: "",
      savings: "SAVE $468",
    },
    {
      header: "Platinum",
      variant: "Best value",
      text: "Everything from sliver & gold+",
      price: `${packagePrice.platinum + stateFee}`,
      image: "",
      button: {
        text: "Get the Platinum package",
        url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&entityState=${shortState(entityState)}`,
      },
      fees: [
        {
          text: "Package fee",
          price: `${packagePrice.platinum}`,
        },
        {
          text: "State fee",
          price: `${stateFee}`,
        },
      ],
      include: "The Platinum Services includes:",
      list: ["Preparing & Filing the Articles \n" + "of Organization", "Unlimited Name Searches", "FREE Registered Agent Service for \n" + "a year!"],
      fee: "",
      savings: "SAVE $908",
    },
  ];

  return (
    <>
      <Wrapper className={className} heightSM="unset">
        <HeadingCenter headline={header} textWidth="770" />
        <Oval className="oval" height="420" width="420" top="0" left="0" y={95}>
          <OvalSVG />
        </Oval>
        <ContentCenter>
          <div style={{ position: "relative" }}>
            <Curve top="53" left="-35" color={color.purple1} className="curve-left">
              <CurveSVG />
            </Curve>
            <Cards content={priceOptions} fullInfo={fullInfo} compacted={compacted} />
          </div>
        </ContentCenter>
      </Wrapper>
    </>
  );
};

export default PacketsSection;
