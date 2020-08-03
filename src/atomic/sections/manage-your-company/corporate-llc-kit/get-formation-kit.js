import React from "react";
import styled from "styled-components";
import { gradient } from "../../../atoms/styles/colors";
import TextImage from "../../../partials/left-content-right-image";
import ContentCenter from "../../../partials/content-center";
import Button from "../../../molecules/buttons/button";
import Accordion from "../../../organisms/accordion/accordion"

const GetFormationKit = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  &::before {
      content: '';
      height: 2200px;
      width: 100%;
      background-image: ${gradient.green3};
      position: absolute;
      top: 0;
      left: 0;
  }

  .text-image {
    padding-bottom: 88px;

    .imagebox {
        max-width: 380px;
        margin-left: auto;
    }
  }

  .content-center {
      padding-top: 88px;

      h2 {
          max-width: 770px;
      }

      h3 {
          text-align: center;
          padding: 96px 0 32px;
      }
  }
`;

const GetFormationKitSection = ({ className, content}) => (
    <GetFormationKit className={className}>
        <TextImage className="text-image" image="manage-your-company" imageWidth="400">
            <h2>{content.header}</h2>
            <p>{content.text}</p>
            <Button content={content.button} theme="primary56" margin="0 auto 0 0" arrow />
        </TextImage>
        <ContentCenter className="content-center">
            <h2>{content.header2}</h2>
            <Accordion content={content.faq} />
            <h3>{content.header3}</h3>
            <Button content={content.button2} theme="primary56" margin="0 auto" arrow />
        </ContentCenter>
    </GetFormationKit>
  );
  
  export default GetFormationKitSection;