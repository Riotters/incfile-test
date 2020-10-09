import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../../components/styles/colors";
import { states } from "../../../../components/states";
import Dropdown from "../../../molecules/form/dropdown";
import ContentCenter from "../../../partials/content-center";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import Button from "../../../molecules/buttons/button";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import { Heading } from "../../../atoms/typography/heading";

const SearchTool = styled.div`
  padding-bottom: 100px;
  padding-top: 100px;
  position: relative;

  &::before {
    content: "";
    height: 1650px;
    width: 100%;
    background-image: ${gradient.orange3};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ImageBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 80px;
  padding-bottom: 48px;
  width: 100%;

  @media(min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 970px) {
    width: 970px;
    margin: 0 auto;
  }

  .box {
      padding: 16px 16px 56px;

    h4 {
        text-align: center;
        padding: 24px 0 0;
    }

    &--left {
        border-radius: 5px;

        @media (min-width: 769px) {
            border-radius: 50px 5px 5px 50px;
        }
        
    
        .top {
            border-radius: 5px;

            @media (min-width: 769px) {
                border-radius: 50px 5px 5px 5px;
            }
        }
    }

    &--right {
        border-radius: 5px;

        @media (min-width: 769px) {
            border-radius: 5px 50px 50px 5px;
        }
    
        .top {
            border-radius: 5px;

            @media (min-width: 769px) {
                border-radius: 5px 50px 5px 5px;
            }
        }
    }
  }

  .dropdown {
      max-width: 304px;
      margin: 0 auto;
`;

const dropdownOptions = states.state.map((state) => state.name);
const dropdownOptionsTwo = ["Option 1", "Option 2", "Option 3"];

const SearchToolSection = ({ content }) => {
  const cards = content.cards;

  return (
    <SearchTool>
      <Oval heigh="720" width="720" top="0" right="0">
        <OvalSVG />
      </Oval>
      <ContentCenter>
        <TextCenterLayout headline={content.header} headlineWidth="700" text={content.text} />
        <ImageBoxes>
          <TopImageBox className="box box--left" image="lcsn-4343" color={color.green3}>
            <Heading size="4">{cards[0]}</Heading>
            <Dropdown className="dropdown" placeholder="Select" options={dropdownOptionsTwo} />
          </TopImageBox>
          <TopImageBox className="box box--right" image="your-state" color={color.blue3}>
            <Heading size="4">{cards[1]}</Heading>
            <Dropdown className="dropdown" placeholder="Select" options={dropdownOptions} />
          </TopImageBox>
        </ImageBoxes>
      </ContentCenter>
    </SearchTool>
  );
};

export default SearchToolSection;
