import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import {Paragraph} from "../../../atoms/typography/paragraph";

const Links = () => (
    <Wrapper>
        <Container>
            <TextCenterLayout headline="Discussion Groups and Forums for Your Cleaning Business"
                              text="There are plenty of forums and online discussion groups for cleaning businesses. Start with these"/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Entrepreneur Ridealong Subreddit
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                        A forum on the popular website reddit for entrepreneurship, with a strong focus on cleaning businesses.
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        CleaningTalk.com
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                        All the discussion you could possibly want around setting up, running and growing a cleaning business.
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Fat Cat Cleaner
                    </PathLink>
                    <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                        A forum specifically for cleaning business owners and entrepreneurs.
                    </Paragraph>
                </LinkItem>

            </LinksContainer>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 100px;
`;

const LinksContainer = styled.div`
    width: 100%;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (min-width: 1000px) {
        width: 1000px;
    }
`;

const LinkItem = styled.div`
    margin: 0 auto;
    padding: 28px 40px 28px 40px;
    background-color: white;
    box-shadow: ${shadow.white1};
    width: 100%;
    margin-bottom: 30px;
    
    @media (min-width: 470px) {
        width: 470px;
    }
    
    @media (min-width: 1000px) {
        margin-left: 15px;
        margin-right: 15px;
    }
`;

export default Links;
