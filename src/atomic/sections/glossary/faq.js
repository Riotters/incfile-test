import styled from "styled-components";
import React from "react";
import Container from "../../container";
import ContentCenter from "../../partials/content-center";
import Accordion from "../../organisms/accordion/accordion";
import { glossaryA, glossaryB, glossaryC, glossaryD, glossaryE, glossaryF, glossaryG, glossaryH, glossaryI, glossaryJ, glossaryL, glossaryM, glossaryN, glossaryO, glossaryP, glossaryQ, glossaryR, glossaryS, glossaryT, glossaryU, glossaryV, glossaryW } from "../../../static/glossary";
import { Heading } from "../../atoms/typography/heading";

const Wrapper = styled.section`
    position: relative;

    h3 {
        width: 100%;
        text-align: left;
    }
`;

const GlossaryFAQSection = ({ className }) => (
    <Wrapper className={className}>
        <Container>
            <ContentCenter contentWidth={970}>
                <Heading size="3" bottomMargin="32" style={{textAlign: 'left'}}>A</Heading>
                <Accordion content={glossaryA} tab maxWidth={970} noAutoWidth />
                <Heading size="3" bottomMargin="32">B</Heading>
                <Accordion content={glossaryB} tab maxWidth={970} noAutoWidth />

            </ContentCenter>
        </Container>
    </Wrapper>
);

export default GlossaryFAQSection;