import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color, gradient} from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/digital-nomad";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import OvalSvg2 from "../../../../images/ovals/top-right-transparent-green3.inline.svg";

const ToolsAndLinks = () => (
    <Wrapper>

        <LinksWrapper>
            <Oval>
                <OvalSvg />
            </Oval>
            <Oval2>
                <OvalSvg />
            </Oval2>

            <Container>
                <TextCenterLayout headline="Social Media Groups for Your Digital Nomad Business"
                                  text="Connecting with other business owners in your industry can be incredibly helpful. Here are some of the best social media groups:"/>

                <LinksContainer>
                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomad Entrepreneurs
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Remote Entrepreneurs
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Location Independent Global Entrepreneurs
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomad Business Mastermind
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomads around the world
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Location Independent Global Entrepreneurs
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomad Entrepreneurs
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomads And Location Independent
                            People
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Nomadic Entrepreneurs
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomads Hub
                        </PathLink>
                    </LinkItem>

                </LinksContainer>

            </Container>

            <Container>
                <TextCenterLayout headline="Discussion Groups and Forums for Your Digital Nomad Business"
                                  text="There are plenty of forums and online discussion groups for digital nomad businesses. Start with these:"/>

                <LinksContainer>
                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Nomad List
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Remotive Community
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Global Digital Nomad Network
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomads Forum
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Digital Nomad Subreddit
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Nomad List Chat
                        </PathLink>
                    </LinkItem>
                </LinksContainer>

            </Container>

        </LinksWrapper>

        <ToolsWrapper>
            <Oval3>
                <OvalSvg2 />
            </Oval3>
            <Container>
                <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                             description={toolsList.description}/>
            </Container>
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

const Oval = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    width: 570px;
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    bottom: 556px;
    right: 0;
    transform: scaleX(-1);
    width: 420px;
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

const Oval3 = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 720px;
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

export default ToolsAndLinks;
