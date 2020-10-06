import React from "react";
import styled from "styled-components";
import {Paragraph} from "../../atoms/typography/paragraph";
import {color} from "../../atoms/styles/colors";

const CompanyNameInfoBox = ({companyName, designator}) => (
    <Wrapper>
        <Paragraph bottomMargin={16}>Please confirm that this is exactly how your company name is filed with the state.</Paragraph>
        <InfoBox>{companyName} {designator}</InfoBox>
    </Wrapper>
);

const Wrapper = styled.div`
    width: 100%;
`

const InfoBox = styled.div`
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: ${color.blue1};
    color: white;
    font-size: 16px;
    font-family: Avenir-Heavy;
`;
export default CompanyNameInfoBox;
