import styled from "styled-components";
import React from "react";
import Container from "../../container";
import ContentCenter from "../../partials/content-center";
import Accordion from "../../organisms/accordion/accordion";

const Wrapper = styled.section`
    position: relative;
`;

const GlossaryFAQSection = ({ className, content }) => (
    <Wrapper className={className}>
        <Container>
            <ContentCenter contentWidth={970}>
                <Accordion content={content} tab maxWidth={970} noAutoWidth />
            </ContentCenter>
        </Container>
    </Wrapper>
);

export default GlossaryFAQSection;