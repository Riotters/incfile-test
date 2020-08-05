import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Whitebox from "../../atoms/boxes/white-box";
import IconCircle from "../../atoms/icons/circle";

const Wrapper = styled(Whitebox)`
    display: grid;
    grid-template-columns: 50% 50%;

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

const Cell = styled.div`
    display: flex;
    align-items: center;
    padding: 24px;
    
    &:not(:last-child) {
        border-right: 2px solid ${color.grey4};
    }
`;

const ListItem = styled(Paragraph)`
    color: ${color.black};
    padding-left: 26px;
    position: relative;

    &::before {
        content: '';
        height: 4px;
        width: 4px;
        background-color: ${color.purple1};
        border-radius: 50%;
        position: absolute;
        top: 9px;
        left: 6px;
    }
`;

const GridTableRow = ({ className, content, header, list }) => (
    <Wrapper className={className}>
        {content.map(item => (
            <Cell>
                {header && (
                    <Heading size="4" bottomMargin="0">
                        {item}
                    </Heading>
                )}
                {list && item !=="" && (
                    <ListItem bottomMargin="0">
                        {item}
                    </ListItem>
                )}
                {!header && !list && item !=="" && (
                    <Paragraph bottomMargin="0">
                        {item}
                    </Paragraph>
                )}
                {item ==="" && (
                    <IconCircle theme="empty" circleColor="#E7E7E7"/>
                )}

            </Cell>
        ))}
    </Wrapper>
);

export default GridTableRow;
