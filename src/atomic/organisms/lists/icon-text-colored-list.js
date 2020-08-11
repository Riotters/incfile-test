import React from "react";
import styled from "styled-components";
import IconTextColorBox from "../../molecules/text-blocks/icon-h4-text-color";
import { color } from "../../atoms/styles/colors";
import CircleOr from "../../molecules/circles/circle-or";

const Wrapper = styled.ul`
    width: 100%;
    list-style: none;
    margin-bottom: 48px;
`;

const Item = styled.li`
    display: block;
    position: relative;

    .box {
        border-radius: 5px;
        overflow: hidden;
    }
    
    &:first-child {
        .box {
            border-radius: 20px 20px 5px 5px;
            background-color: ${props => props.lightFirst ? color.orange3 : ""};
        }
    }

    &:last-child {
        .box {
            border-radius: 5px 5px 20px 20px;
        }
    }

    &:not(:last-child) {
        margin-bottom: 8px;
    }

    .circle-or {
        position: absolute;
        top: 0;
        right: 32px;
        transform: translateY(-52px);
    }
`;

const IconTextColoredList = ({ className, content, color, Icon, withOr, lightFirst }) => {
  const contentLen = content.length;

  return (
    <Wrapper className={className}>
            {content.map((item, id) => (
                <Item lightFirst={lightFirst}>
                    <IconTextColorBox color={color} Icon={Icon} content={item} />
                    {withOr && id === contentLen - 1 && (
                        <CircleOr className="circle-or"/>
                    )}
                </Item>
            ))}
    </Wrapper>
  )
}

export default IconTextColoredList;
