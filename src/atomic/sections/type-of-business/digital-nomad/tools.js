import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/digital-nomad";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import OvalSvg2 from "../../../../images/ovals/top-right-transparent-green3.inline.svg";

const ToolsAndLinks = () => (
    <Wrapper>

        <LinksWrapper>
            <Oval>
                <OvalSvg/>
            </Oval>
            <Oval2>
                <OvalSvg/>
            </Oval2>

            <TextCenterLayout headlineWidth={770} textWidth={770}
                              headline="Social Media Groups for Your Digital Nomad Business"
                              text="Connecting with other business owners in your industry can be incredibly helpful. Here are some of the best social media groups:"/>

            <Container>
                <LinksContainer>
                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/digitalnomadentrepreneurs/"
                                  textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomad Entrepreneurs
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/848894731872317/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Remote Entrepreneurs
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/dannyveigahustlegroup/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Entrepreneur Hustle
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/519961684685930/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Location Independent Global Entrepreneurs
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/222995801385500/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomad Business Mastermind
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/DigitalNomadsAroundTheWorld/?fref=nf"
                                  textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomads around the world
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/519961684685930/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Location Independent Global Entrepreneurs
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/803975783022624/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomad Entrepreneurs
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.linkedin.com/groups/8429882/profile" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomads And Location Independent
                            People
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/nomadicentrepreneur/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Nomadic Entrepreneurs
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/756306204446638/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomads Hub
                        </PathLink>
                    </LinkItem>

                </LinksContainer>

            </Container>

            <TextCenterLayout headlineWidth={770} textWidth={770}
                              headline="Discussion Groups and Forums for Your Digital Nomad Business"
                              text="There are plenty of forums and online discussion groups for digital nomad businesses. Start with these:"/>


            <Container>

                <LinksContainer>
                    <LinkItem>
                        <PathLink to="https://nomadlist.com/forum/" textColor={color.blue1} hoverColor={color.orange1}
                                  arrowColor={color.blue1}>
                            Nomad List
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://remotive.io/community" textColor={color.blue1} hoverColor={color.orange1}
                                  arrowColor={color.blue1}>
                            Remotive Community
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/1428340887415620/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Global Digital Nomad Network
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/digitalnomadsforum/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomads Forum
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.reddit.com/r/digitalnomad/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomad Subreddit
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://nomadlist.com/chat" textColor={color.blue1} hoverColor={color.orange1}
                                  arrowColor={color.blue1}>
                            Nomad List Chat
                        </PathLink>
                    </LinkItem>
                </LinksContainer>

            </Container>

        </LinksWrapper>

        <ToolsWrapper>
            <Oval3>
                <OvalSvg2/>
            </Oval3>

            <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                         description={toolsList.description}/>

        </ToolsWrapper>
    </Wrapper>
);

const ToolsWrapper = styled.div`
    position: relative;
`;

const Wrapper = styled.div`
    margin-bottom: 200px;
`;

const LinksWrapper = styled.div`
    padding-top: 100px;
    padding-bottom: 30px;
    position: relative;
    background-image: linear-gradient(to top, #f2f6ff, #ffffff);
`;

const LinksContainer = styled.div`
    width: 100%;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (min-width: 1100px) {
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
    
    @media (min-width: 1100px) {
        margin-left: 15px;
        margin-right: 15px;
    }
`;

const Oval = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    bottom: 556px;
    right: 0;
    transform: scaleX(-1);
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

const Oval3 = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

export default ToolsAndLinks;
