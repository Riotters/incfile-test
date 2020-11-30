import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import {shadow} from "../../../atoms/styles/shadows";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/photograpy-business";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {color} from "../../../atoms/styles/colors";
import {Paragraph} from "../../../atoms/typography/paragraph";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const ToolsAndLinks = () => (
    <Wrapper>
        <Oval3>
            <OvalSvg/>
        </Oval3>
        <Oval4>
            <OvalSvg2/>
        </Oval4>
        <LinksWrapper>
            <Oval>
                <OvalSvg/>
            </Oval>
            <Oval2>
                <OvalSvg/>
            </Oval2>

            <TextCenterLayout headlineWidth={770} textWidth={770}
                              headline="Social Media Groups for Your Photography Business"
                              text="Connecting with other business owners in your industry can be incredibly helpful. Here are some of the best social media groups:"/>

            <Container>
                <LinksContainer>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/pg/shootandsharephotos/about/?ref=page_internal"
                                  textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Shoot and Share
                        </PathLink>
                        <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                            "Our purpose as a community is to share our gifts, focus on service and celebrate new
                            photographers! Join us, ask questions and learn from the community!”
                        </Paragraph>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/pshopandlightroom/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Photoshop and Lightroom
                        </PathLink>
                        <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                            A group for those interested in sharing their photos, Photoshop and Lightroom tips and
                            questions
                        </Paragraph>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/profitographers/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Photographer Entrepreneur
                        </PathLink>
                        <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                            The purpose of this group is to bring together like minded people that are in the
                            photography industry that would like to run, build and sustain a successful profitable
                            photography business.
                        </Paragraph>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/724881957642789/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            The Art of the Second Shot
                        </PathLink>
                        <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                            This group is focused on helping photographers create stunning imagery by utilizing the
                            surroundings to tell the client's story in the most creative way possible.
                        </Paragraph>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.linkedin.com/groups/144538/profile" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Photo Marketing Association International Forum
                        </PathLink>
                        <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                            Connect with fellow members of PMA — promoting innovation and education in the business of imaging. Share industry ideas, discuss the latest photo imaging news and expand your network.
                        </Paragraph>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.linkedin.com/groups/93379/profile" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Professional Photographers of America
                        </PathLink>
                        <Paragraph style={{marginTop: "20px"}} bottomMargin={0}>
                            We help photographers reach their professional and artistic goals, increase consumer
                            awareness and help position photography as an art, science and visual recorder of history.
                        </Paragraph>
                    </LinkItem>

                </LinksContainer>
            </Container>

            <TextCenterLayout headline="Discussion Groups and Forums for Your Photography Business"
                              headlineWidth={770}/>

            <Container>
                <LinksContainer>

                    <LinkItem>
                        <PathLink to="https://www.thephotoforum.com/" textColor={color.blue1} hoverColor={color.orange1}
                                  arrowColor={color.blue1}>
                            The Photo Forum
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.photography-forum.org/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Photography Forum
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.photo.net/discuss/" textColor={color.blue1} hoverColor={color.orange1}
                                  arrowColor={color.blue1}>
                            Photo.net Forum
                        </PathLink>
                    </LinkItem>

                </LinksContainer>
            </Container>
        </LinksWrapper>
        
        <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                     description={toolsList.description}/>

    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 120px;
    margin-bottom: 200px;
    position: relative;
`;

const LinksWrapper = styled.div`
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 40%, #f2f6ff);
    padding-bottom: 100px;
    position: relative;
`;

const LinksContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 30px;
    margin-top: 76px;
    margin-bottom 76px; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const LinkItem = styled.div`
    margin: 0 auto;
    padding: 28px 40px 28px 40px;
    background-color: white;
    box-shadow: ${shadow.white1};
    width: 100%;
`;

const Oval = styled.div`
    position: absolute;
    left: 0;
    top: 246px;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

const Oval3 = styled.div`
    position: absolute;
    right: 0;
    bottom: 951px;
    width: 100%;
    transform: scaleX(-1);
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

const Oval4 = styled.div`
    position: absolute;
    left: 0;
    bottom: 180px;
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    right: 0;
    bottom: 251px;
    width: 100%;
    transform: rotate(180deg);
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

export default ToolsAndLinks;
