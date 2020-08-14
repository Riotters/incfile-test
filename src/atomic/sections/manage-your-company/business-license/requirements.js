import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import HeadingCenter from "../../../partials/heading-center"
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";
import CircleIcon from "../../../../components/icons/circle";
import ArrowSVG from "../../../../images/arrow-circle.inline.svg";
import { states  } from "../../../../components/states";

const Requirements = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  background-color: ${color.blue3};
`;

const ArrowButton = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 670px;
  padding: 24px 24px 24px 40px;
  border-radius: 5px;
  background-color: ${color.white};
  box-shadow: ${shadow.white1};
  position: relative;
  font-size: 16px;
  line-height: 24px;
  font-weight: 900;
  color: ${color.grey1};
  text-decoration: none;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const States = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  width: 100%;
  position: relative;
  margin-top: 50px;
  padding: 30px;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  & > svg {
    position: absolute;
    top: 5px;
    left: 1px;
    transform: rotate(-90deg);

    path {
      fill: ${color.blue1};
    }
  }
`;

const RequirementsSection = ({ className, content }) => (
    <Requirements className={className}>
        <Oval className="oval" height="570" width="570" top="0" right="0">
            <OvalSVG />
        </Oval>
        <Oval className="oval" height="420" width="420" top="46" left="0">
            <Oval2SVG />
        </Oval>
        <HeadingCenter
            headline="Business License and Permit Requirements by State"
            text="Every state has different licensing needs based on the type of business you've incorporated, where it's located and the government rules in that state. 
                We will research your business license needs for you with our Business License Research Package, but you can also do initial research yourself with the following resources:"
            headlineWidth="700"
            linkText="Business License Research Package"
            linkUrl="#"
        />
        <ContentCenter>
            <States>
                <CurveSVG />
                {states.state.map((state) => (
                <ArrowButton to={state.url}>
                    {state.name}
                    <CircleIcon transform="rotate(90deg)" circleColor={color.orange3} iconColor={color.orange1}>
                    <ArrowSVG />
                    </CircleIcon>
                </ArrowButton>
                ))}
            </States>
        </ContentCenter>
    </Requirements>
);
  
export default RequirementsSection;