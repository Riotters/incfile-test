import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
//import ReactTooltip from "react-tooltip";
import { Heading } from "../../../atoms/typography/heading";
import CheckSVG from "../../../../images/circle-status-check.inline.svg";
import { Paragraph } from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../../atomic/molecules/mixed-blocks/text-block-with-absolute-image";
import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import BenefitsSVG from "../../../../images/icons/icon-homepage-benefits.inline.svg";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  cursor: default;

  svg {
    min-width: 32px;
    transition: transform 0.3s ease;
  }

  &:hover {
    svg {
      transform: scale(1.1);
    }
  }

  h5,
  h4 {
    span {
      color: ${color.orange1};
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;

  grid-gap: 24px 50px;

  @media screen and (max-width: 512px) {
    grid-template-columns: 100%;
  }
`;

// const StyledReactTooltip = styled(ReactTooltip)`
//   padding: 0;

//   &.show {
//     opacity: 1;
//     height: auto;
//     max-width: 560px;
//     overflow: visible;
//     background-color: transparent;
//   }
// `;

const BenefitsSection = ({ className, content }) => {
  // const handleContent = (dataTip) => {
  //   ReactTooltip.rebuild();
  //   if (!dataTip) {
  //     return "";
  //   }
  //   const [header, text] = dataTip.split("|");

  //   return (
  //     <TextBlockWithImage width={100} widthUnit="%" textBackgroundColor={color.white} SvgImage={BenefitsSVG}>
  //       <Heading size={4}>{header}</Heading>
  //       <Paragraph>{text}</Paragraph>
  //     </TextBlockWithImage>
  //   );
  // };

  return (
    <>
      {/*<Grid>*/}
        {/*{content.map((item, i) => {*/}
          {/*return (*/}
            {/*<Flex className="benefit-box" data-for="benefitTooltip" data-event="mouseenter" data-tip={`${item.header}|${item.text}`}>*/}
              {/*<CheckSVG />*/}
              {/*<Heading bottomMargin="0" style={{ "margin-left": "16px" }} size={5}>*/}
                {/*{parse(item.label)}*/}
              {/*</Heading>*/}
            {/*</Flex>*/}
          {/*);*/}
        {/*})}*/}
      {/*</Grid>*/}
      {/*/!* <StyledReactTooltip id="benefitTooltip" getContent={handleContent} effect="solid" place="top" type="light" globalEventOff="click" /> *!/*/}
    </>
  );
};

export default BenefitsSection;
