import styled from "styled-components";
import React from "react";
import Container from "../../container";
import ContentCenter from "../../partials/content-center";
import {Heading} from "../../atoms/typography/heading";
import {Paragraph} from "../../atoms/typography/paragraph";
import parse from 'html-react-parser';

const Wrapper = styled.section`
    position: relative;
    
    h2, h3, h4, h5 {
        text-align: left;
        align-self: flex-start;
    }
    
    ul {
        list-style: inside disc;
        margin-bottom: 42px;
    }
    
    ul, p {
        align-self: flex-start;
    }
`;

const ContentWrapper = styled.article`
    position: relative;
`;

const LegalSection = ({ className, content, contentWidth }) => (
    <Wrapper>
        <ContentCenter contentWidth={contentWidth}>
            {content.header && (<Heading size={2} bottomMargin={32}>{content.header}</Heading>)}
            {content.bold1 && (<Heading size={4} bottomMargin={42}>{content.bold1}</Heading>)}
            {content.text && (<Paragraph big mixed bottomMargin={42}>{parse(content.text)}</Paragraph>)}
            {content.bold2 && (<Heading size={4} bottomMargin={42}>{content.bold2}</Heading>)}
            {content.text2 && (<Paragraph big bottomMargin={42} topMargin={-18}>{content.text2}</Paragraph>)}
            {content.bold3 && (<Heading size={4} bottomMargin={42}>{content.bold3}</Heading>)}
            {content.text3 && (<Paragraph mixed big bottomMargin={42} topMargin={-18}>{parse(content.text3)}</Paragraph>)}
            {content.bold4 && (<Heading size={4} bottomMargin={42}>{content.bold4}</Heading>)}
            {content.text4 && (<Paragraph big bottomMargin={42} topMargin={-18}>{content.text4}</Paragraph>)}
            {content.list && (
                <ul>
                    {content.list.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            )}
        </ContentCenter>
    </Wrapper>
);

const LegalSections = ({ className, content, contentWidth }) => (
    <ContentWrapper className={className}>
        <Container>
            {content.map((section) => (
                <LegalSection content={section} contentWidth={contentWidth ?? 970} />
            ))}
        </Container>
    </ContentWrapper>
);

export default LegalSections;