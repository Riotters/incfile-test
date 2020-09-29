import React from "react";
import styled from "styled-components";
import ArrowLink from "../../molecules/buttons/text";

const Wrapper = styled.span`
    display: flex;

    a {
    word-break: break-word;
        
    &:not(:first-child) {
        margin-left: 16px;
    }

    &:not(:last-child) {
        display: none;

        @media (min-width: 576px) {
        display: flex;
        }
    }
    }
`;

const ResearchTopicPath = ({ content }) => (
    <Wrapper>
        {content.map((link) => (
          <ArrowLink content={link} />
        ))}
    </Wrapper>
);

export default ResearchTopicPath;
