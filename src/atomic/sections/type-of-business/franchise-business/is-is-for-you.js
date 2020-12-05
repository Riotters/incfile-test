import React from "react";
import styled from "styled-components";
import TextCenterLayout from "../../../partials/heading-center";
import Container from "../../../../components/container";
import Adventages from "../../../../components/adventages";
import ContentCenter from "../../../partials/content-center";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const IsItForYou = () => (
    <Wrapper>

        <Oval>
            <OvalSvg />
        </Oval>
        <TextCenterLayout headline="Is Franchise Entrepreneurship For You?"
                          text="Franchise entrepreneurship could be for you if you:" headlineWidth={770} textWidth={770}/>

        <Container>

            <AdventagesWrapper>
                    <Adventages
                        text="Have the capital to pay a franchise fee and open up a location"
                    />

                    <Adventages
                        text="Can use the marketing and branding of a national organization"
                    />

                    <Adventages
                        text="Can follow the rules and regulations of the franchisor"
                    />

                    <Adventages
                        text="Want support and help with starting the business"
                    />

                    <Adventages
                        text="Don’t mind paying ongoing royalties"
                    />

            </AdventagesWrapper>

        </Container>

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

    </Wrapper>
);

const Wrapper = styled.section`
        padding-top: 120px;
        padding-bottom: 100px;
        position: relative;
`;

const AdventagesWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 0px;
    margin-top: 76px;
    margin-bottom: 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px; 
    }
`;

const Oval = styled.div`
    position: absolute;
    top: 447px;
    left: 0;
    width: 100%;
    
      @media (min-width: 520px) {
            width: 520px;
      }
`;

export default IsItForYou;
