import React from "react";
import styled from "styled-components";
import {Heading} from "../../atoms/typography/heading";
import {Paragraph} from "../../atoms/typography/paragraph";
import parse from "html-react-parser";

const InfoCardContent = ({title, content}) => (
    <ContentWrapper>
        <Heading size={5} style={{fontSize: "24px"}}>{title}</Heading>
        <Paragraph mixed>{parse(content)}</Paragraph>
    </ContentWrapper>
);

const ContentWrapper = styled.div`
    padding: 44px 40px 0px 40px;
`;

export default InfoCardContent;
