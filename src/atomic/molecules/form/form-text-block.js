import React from "react";
import {Paragraph} from "../../atoms/typography/paragraph";
import styled from "styled-components";

const FormTextBlock = ({Icon, title, text}) => (
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
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
    margin-bottom: 32px;
    padding: 32px;
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
    font-family: Avenir;
    font-weight: 900;
    color: #1d1d1d;
    margin-bottom: 16px;
`;

const Content = styled(Paragraph)`
    margin-bottom: 0;
`;

export default FormTextBlock;
