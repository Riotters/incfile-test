import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import Button from "../../../../atomic/molecules/buttons/button";
import Buttonsbox from "../../../../atomic/atoms/boxes/top-buttons-box";

const BusinessFormationSection = styled.section`
  position: relative;
  padding: 100px 0 104px;
  overflow: hidden;
  
  h2 {
    text-align: left;
  }
`;

const BusinessFormation = ({ className, content }) => (
    <BusinessFormationSection className={className}>
        <ImageContent image="mrs-review-stars-5481" contentCenter={true}>
            <Heading size={2} maxWidth={520} bottomMargin="24">{content.header}</Heading>
            <Paragraph bottomMargin="32">{content.text}</Paragraph>
            <Buttonsbox>
                <Button content={content.button[0]} theme="primary56" arrow />
            </Buttonsbox>
        </ImageContent>
    </BusinessFormationSection>
);

export default BusinessFormation;
