import React from "react";
import styled from "styled-components";
import { color } from "../../../../components/styles/colors";
import { states } from "../../../../components/states";
import Dropdown from "../../../molecules/form/dropdown";
import ContentCenter from "../../../partials/content-center";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import Button from "../../../molecules/buttons/button";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import { Heading } from "../../../atoms/typography/heading";

const State = styled.div`
  background-color: ${color.green3};
  padding-bottom: 100px;
  padding-top: 100px;
  position: relative;
`;

const ImageBoxes = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 48px;
  width: 100%;
  
  @media (min-width: 970px) {
    width: 970px;
    margin: 0 auto;
  }

  .box {
      padding: 16px 16px 56px;
      border-radius: 5px;

      @media (min-width: 769px) {
          border-radius: 50px;
      }
      
  
      .top {
          border-radius: 5px;

          @media (min-width: 769px) {
              border-radius: 35px 35px 5px 5px;
          }
      }

    h4 {
        text-align: center;
        padding: 24px 0 0;
    }
  }

  .dropdown {
      max-width: 304px;
      margin: 0 auto;
  }
`;

const dropdownOptions = states.state.map((state) => state.name);

const StateSection = ({ content }) => {
  return (
    <State>
      <Oval height="570" width="570" top="0" left="0">
        <OvalSVG />
      </Oval>
      <ContentCenter>
        <TextCenterLayout headline={content.header} headlineWidth="700" />
        <ImageBoxes>
          <TopImageBox className="box box--left" image="your-state" color={color.blue3}>
            <Heading size="4">{content.card.header}</Heading>
            <Dropdown className="dropdown" placeholder="select" options={dropdownOptions} />
          </TopImageBox>
        </ImageBoxes>
        <Button content={content.button} theme="primary56" arrow />
      </ContentCenter>
    </State>
  );
};

export default StateSection;
