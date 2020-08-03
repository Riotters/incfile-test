import React from "react";
import styled from "styled-components";
import IconTextColorBox from "../../molecules/text-blocks/icon-h4-text-color"

const Wrapper = styled.ul`
    width: 100%;
    list-style: none;
    margin-bottom: 48px;
`;

const Item = styled.li`
    display: block;
    border-radius: 5px;
    overflow: hidden;
    
    &:first-child {
        border-radius: 20px 20px 5px 5px;
    }

    &:last-child {
        border-radius: 5px 5px 20px 20px;
    }

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

const IconTextColoredList = ({ className, content, color, Icon }) => {
  return (
    <Wrapper className={className}>
            {content.map(item => (
                <Item>
                    <IconTextColorBox color={color} Icon={Icon} content={item} />
                </Item>
            ))}
    </Wrapper>
  )
}

export default IconTextColoredList;
