import React from "react";
import styled from "styled-components";
import Circle from "../../atoms/icons/circle";
import { color } from "../../atoms/styles/colors";
import { Paragraph } from "../../atoms/typography/paragraph";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 178px;

    .circle {
        margin-bottom: 24px;
    }

    p {
        text-align: center;

        &:nth-child(3) {
            color: ${color.black};
            font-weight: 900;
        }
    }
`;

const CircleIconText = ({ content, Icon, color }) => (
    <Wrapper>
        <Circle className="circle" height="80" width="80" circleColor={color} >
            <Icon />
        </Circle>
        {(typeof content === "object" ? (
            <>
                <Paragraph bottomMargin="0">{content.text}</Paragraph>
                <Paragraph bottomMargin="0">
                        {content.tax}
                </Paragraph>
            </>
        ) : (
            <Paragraph bottomMargin="0">{content}</Paragraph>
        ))}

    </Wrapper>
)

export default CircleIconText;
