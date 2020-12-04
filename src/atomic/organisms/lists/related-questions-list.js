import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import BoxedButton from "../../molecules/buttons/boxed-path-btn";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/bottom-left-top-right.inline.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;

  .article-link {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

const RelatedQuestionsList = ({ className, content }) => {
  return (
    <Wrapper className={className}>
      <Curve top="-25" left="-29" color={color.red1}>
        <CurveSVG />
      </Curve>
      <List>
        {content.buttons.map((button) => (
          <BoxedButton className="article-link" content={button} />
        ))}
      </List>
    </Wrapper>
  );
};

export default RelatedQuestionsList;
