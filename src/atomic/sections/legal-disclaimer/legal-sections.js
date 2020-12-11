import styled from "styled-components";
import React from "react";
import Container from "../../container";
import ContentCenter from "../../partials/content-center";
import {Heading} from "../../atoms/typography/heading";
import {Paragraph} from "../../atoms/typography/paragraph";
import parse from 'html-react-parser';
import {PHeading} from "../../atoms/typography/p-to-heading";

const Wrapper = styled.section`
    position: relative;
    
    h2, h3, h4, h5 {
        text-align: left;
        align-self: flex-start;
    }
    
    ul {
        list-style: inside disc;
        margin-bottom: 42px;
        padding-left: 32px;
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
            {content.header && (<Heading size={content.headerSize ?? 3} template={content.headerTemplate ?? 2} left bottomMargin={32}>{content.header}</Heading>)}
            {content.bold1 && (<PHeading size={4} bottomMargin={42}>{content.bold1}</PHeading>)}
            {content.text && (<Paragraph big mixed bottomMargin={42}>{parse(content.text)}</Paragraph>)}
            {content.bold2 && (<PHeading size={4} bottomMargin={42}>{content.bold2}</PHeading>)}
            {content.text2 && (<Paragraph big bottomMargin={42} topMargin={-18}>{content.text2}</Paragraph>)}
            {content.bold3 && (<PHeading size={4} bottomMargin={42}>{content.bold3}</PHeading>)}
            {content.text3 && (<Paragraph mixed big bottomMargin={42} topMargin={-18}>{parse(content.text3)}</Paragraph>)}
            {content.bold4 && (<PHeading size={4} bottomMargin={42}>{content.bold4}</PHeading>)}
            {content.text4 && (<Paragraph mixed big bottomMargin={42} topMargin={-18}>{parse(content.text4)}</Paragraph>)}
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