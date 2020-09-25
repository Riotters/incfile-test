import React from "react";
import styled from "styled-components";
import {Paragraph} from "../../../atoms/typography/paragraph";

const SummaryTextBlock = ({Icon, title, text}) => (
    <Wrapper>
        <IconBox>
            <Icon />
        </IconBox>

        <ContentBox>
            <Title big>
                {title}
            </Title>
            <Content>
                {text}
            </Content>
        </ContentBox>
    </Wrapper>
);

const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 32px;
    display: flex;
    align-items: flex-start;
`;

const IconBox = styled.div`
    width: 32px;
    height: 32px;
    margin-right: 32px;
`;

const ContentBox = styled.div``;

const Title = styled(Paragraph)`
    font-family: Avenir-Heavy;
    color: #1d1d1d;
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 24px;
`;

const Content = styled(Paragraph)`
    margin-bottom: 0;
`;

export default SummaryTextBlock;
