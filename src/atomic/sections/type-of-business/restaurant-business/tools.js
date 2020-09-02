import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import {shadow} from "../../../atoms/styles/shadows";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/restaurant-business";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {color} from "../../../atoms/styles/colors";
import Curve from "../../../atoms/shapes/curve";
import {Paragraph} from "../../../atoms/typography/paragraph";

const ToolsAndLinks = () => (
    <Wrapper>
        <LinksWrapper>
            <Container>
                <TextCenterLayout headline="Discussion Groups and Forums for Your Restaurant Business"
                                  text="There are plenty of forums and online discussion groups for restaurant businesses. Start with these:"/>

                <LinksContainer>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Restaurateur subreddit
                        </PathLink>
                        <Paragraph style={{marginBottom: 0}}>
                            An active discussion forum on the ever-popular reddit.
                        </Paragraph>
                    </LinkItem>

                    <LinkItem>
                        <CurveWrapper>
                            <Curve color={color.orange1}/>
                        </CurveWrapper>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Restaurant Management Forum
                        </PathLink>
                        <Paragraph style={{marginBottom: 0}}>
                            Another discussion group for eatery owners.
                        </Paragraph>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Restaurant Owners
                        </PathLink>
                        <Paragraph style={{marginBottom: 0}}>
                            Restaurant Owners is a useful paid online resource ($29 a month) for owning, starting and
                            running
                            a restaurant. With over 40,000 members, they have
                            a very active discussion forum.
                        </Paragraph>
                    </LinkItem>

                </LinksContainer>
            </Container>

            <Container>
                <TextCenterLayout headline="Conferences for Your Restaurant Business"
                                  text="Of course, there are also regular conferences for restaurant businesses:"/>

                <LinksContainer>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            The Restaurant Leadership Conference
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            The National Restaurant Association
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            MUFSO Restaurant News
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            The Fast Casual Summit
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            The International Restaurant and Foodservice
                            Show
                        </PathLink>
                    </LinkItem>
                </LinksContainer>
            </Container>

        </LinksWrapper>
        <Container>
            <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                         description={toolsList.description}/>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 100px;
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

const CurveWrapper = styled.div`
    position: absolute;
    right: -24px;
    top: -24px;
`;

const LinksWrapper = styled.div`
     background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 40%, #f2f6ff);
     padding-bottom: 100px;
`;

export default ToolsAndLinks;
