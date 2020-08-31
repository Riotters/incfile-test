import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import {shadow} from "../../../atoms/styles/shadows";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/consulting-business";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {color} from "../../../atoms/styles/colors";
import {Paragraph} from "../../../atoms/typography/paragraph";

const ToolsAndLinks = () => (
    <Wrapper>
        <Container>
            <TextCenterLayout headline="Social Media Groups for Your Consulting Business"
                              text="Connecting with other business owners in your industry can be incredibly helpful. Here are some of the best social media groups:"/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Restaurateur subreddit
                    </PathLink>
                    <Paragraph>
                        The largest and most active LinkedIn group for business consultants with over 400,000 members.
                        It also has several location based and industry specific subgroups.
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Strategy Consulting Network
                    </PathLink>
                    <Paragraph>
                        The second largest network of consultants on LinkedIn with over 250,000 members. The group group is for everyone who is currently working as a Strategy Consultant or who aspires to become one.
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Proactive Business Consultants
                    </PathLink>
                    <Paragraph>
                        This group brings together consultants from different niches into one community.
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Proactive Business Consultants
                    </PathLink>
                    <Paragraph>
                        Perfect for consultants who are just starting out, with
                        a membership of over 30,000 people.
                    </Paragraph>
                </LinkItem>
            </LinksContainer>
        </Container>

        <Container>
            <TextCenterLayout headline="Discussion Groups and Forums for Your Consulting Business"
                              text="There are plenty of forums and online discussion groups for consulting businesses. Start with these:"/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Wall Street Oasis
                    </PathLink>
                    <Paragraph>
                        The largest and most active LinkedIn group for business consultants with over 400,000 members. It also has several location based and industry specific subgroups.
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Project Management Central
                    </PathLink>
                    <Paragraph>
                        For consultants involved in project and portfolio management
                    </Paragraph>
                </LinkItem>
            </LinksContainer>
        </Container>

        <Container>
            <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText} description={toolsList.description} />
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 0px;
    margin-bottom: 200px;
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

export default ToolsAndLinks;
