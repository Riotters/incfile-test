import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Whitebox from "../../atoms/boxes/white-box-li";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowLink from "../../molecules/buttons/text";
import ArrowSVG from "../../../images/arrow.inline.svg";
import BoxedButton from "../../molecules/buttons/boxed";
import Circle from "../../atoms/icons/circle";
import TaxesSVG from "../../../images/icons/taxes.inline.svg";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/top-left-bottom-right.inline.svg";

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

const GeneralQuestionsList = ({ className, content }) => {
  return (
    <Wrapper className={className}>
      <Curve top="-25" right="-29" color={color.purple1}>
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

export default GeneralQuestionsList;
