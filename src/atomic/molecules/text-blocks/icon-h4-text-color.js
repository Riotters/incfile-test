import React from "react";
import styled from "styled-components";
import Colorbox from "../../atoms/boxes/color-box";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.div`
    position: relative;

    .box {
        padding: 32px 40px 24px 88px;
    }

    svg {
        position: absolute;
        top: 24px;
        left: 32px;
    }

    p {
        color: ${color.grey1} !important;
    }
`

const IconTextColorBox = ({ className, Icon, color, content }) => {

  return (
    <Wrapper className={className}>
        <Colorbox className="box" color={color}>
            <Icon />
            <Heading size="4" bottomMargin="8">{content.header}</Heading>
            <Paragraph bottomMargin="0">{content.text}</Paragraph>
        </Colorbox>
    </Wrapper>
  )
}

export default IconTextColorBox
