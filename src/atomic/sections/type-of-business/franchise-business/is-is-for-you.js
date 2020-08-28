import React from "react";
import styled from "styled-components";
import TextCenterLayout from "../../../partials/heading-center";
import Container from "../../../../components/container";
import Adventages from "../../../../components/adventages";
import ContentCenter from "../../../partials/content-center";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";

const IsItForYou = () => (
    <Wrapper>
        <Container>
            <TextCenterLayout headline="Is Franchise Entrepreneurship For You?"
                              text="Franchise entrepreneurship could be for you if you:"/>

            <AdventagesWrapper>
                <div style={{marginBottom: "30px"}}>
                    <Adventages
                        text="Have the capital to pay a franchise fee and open up a location"
                    />
                </div>
                <div style={{marginBottom: "30px"}}>
                    <Adventages
                        text="Can use the marketing and branding of a national organization"
                    />
                </div>
                <div style={{marginBottom: "30px"}}>
                    <Adventages
                        text="Can follow the rules and regulations of the franchisor"
                    />
                </div>
                <div style={{marginBottom: "30px"}}>
                    <Adventages
                        text="Want support and help with starting the business"
                    />
                </div>
                <div style={{marginBottom: "30px"}}>
                    <Adventages
                        text="Don’t mind paying ongoing royalties"
                    />
                </div>
            </AdventagesWrapper>

            <ContentCenter contentWidth={770}>
                <Heading size={3} style={{fontSize: "40px"}} maxWidth={770}>
                    What Are the Main Skills, Expertise and Experience Needed to Be a Successful Franchise Entrepreneur?
                </Heading>
                <Paragraph big>
                    The specific skills and experience you need depend on the franchising field you go into. For example, if you’re opening a restaurant, it will be all about managing staff and keeping diners happy. If you want to open an automotive service business, you will need to focus on good business processes and hiring expert mechanics.
                </Paragraph>
                <Paragraph big>
                    General business skills that will be useful include people management for hiring and managing staff, financial management for dealing with cash flow and operations to ensure everything runs smoothly. In addition to the standard business skills, you will also need to follow the franchise rules and regulations, so a keen attention to detail will be critical.
                </Paragraph>
            </ContentCenter>

        </Container>
    </Wrapper>
);

const Wrapper = styled.section`
        padding-top: 120px;
        padding-bottom: 100px;
`;

const AdventagesWrapper = styled.div`
        margin: 0 auto;
        padding-top: 120px;
        padding-bottom: 100px;
        max-width: 980px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
`;

export default IsItForYou;
