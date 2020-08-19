import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box-li";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowLink from "../../molecules/buttons/text";
import ArrowSVG from "../../../images/arrow.inline.svg"
import BoxedButton from "../../molecules/buttons/boxed"
import Circle from "../../atoms/icons/circle";
import TaxesSVG from "../../../images/icons/taxes.inline.svg";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;

    .article-link {
        &:not(:last-child) {
            margin-bottom: 8px;
        }
    }
`;

const RelatedQuestionsList = ({ className, content, icon, color }) => {
  return (
    <Wrapper className={className}>
        <List>
            {content.buttons.map(button => (
                <BoxedButton className="article-link" content={button} />
            ))}
        </List>
    </Wrapper>
  )
}

export default RelatedQuestionsList;
