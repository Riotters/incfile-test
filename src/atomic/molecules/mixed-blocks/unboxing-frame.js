import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import Image from "../../atoms/image/image";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Whitebox from "../../atoms/boxes/white-box";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 270px;
    position: absolute;

    & > div {
        position: absolute;
        left: 0;
    }

    &.top {
        & > div {
            top: 0;
        }
    }

    &.bottom {
        & > div {
            bottom: 0;
        }
    }
`

const UnboxingFrame = ({ className, Icon, content, bottom }) => {
  return (
      <Wrapper className={bottom ? `${className} bottom` : `${className} top`}>
          <Icon />
          <Whitebox>
            <h4>{content.header}</h4>
            <p>{content.text}</p>
          </Whitebox>
    </Wrapper>
  )
}

export default UnboxingFrame
