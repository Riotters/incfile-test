import {Heading} from "../atoms/typography/heading";
import {Paragraph} from "../atoms/typography/paragraph";
import Button from "../molecules/buttons/button";
import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    background-color: #fff;
    border-radius: 5px;
    max-width: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 56px;
`;

export const ThankYouContent = ({ content, modalExit }) => (
  <Wrapper>
      <Heading size={2}>{content.header}</Heading>
      <Paragraph bottomMargin={56}>{content.text}</Paragraph>
      <Button arrow theme="primary56" className="modal-close" onClick={modalExit} content={content.button} />
  </Wrapper>
);

