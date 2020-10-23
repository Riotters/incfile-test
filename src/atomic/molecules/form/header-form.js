import React from "react";
import styled from "styled-components";
import {Heading} from "../../atoms/typography/heading";

const HeaderForm = ({title, Icon}) => (
    <TitleBlock>
        <Icon />
        <HeadingWrapper size={3}>{title}</HeadingWrapper>
    </TitleBlock>
);

const TitleBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 25px 32px 25px 32px;
    border-bottom: 1px solid #F4F4F4;
`;

const HeadingWrapper = styled(Heading)`
    margin-bottom: 0;
    padding-left: 27px;
    font-size: 20px;
    line-height: 24px;
    font-family: Avenir;
    font-weight: 900;
`;

export default HeaderForm;
