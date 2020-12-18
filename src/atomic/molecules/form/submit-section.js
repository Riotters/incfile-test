import React from "react";
import styled from "styled-components";
import Button from "../buttons/button";
import ArrowLink from "../buttons/button";

const SubmitSection = () => (
  <Wrapper>
    <BackButton content={{ url: "/", text: "Back" }} />
    <Button
      theme="primary56"
      width="134px"
      type="submit"
      arrow
      content={{ url: "/", text: "Next" }}
    />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackButton = styled(ArrowLink)`
  margin-bottom: 0 !important;

  svg {
    transform: rotate(180deg);
  }
`;

export default SubmitSection;
