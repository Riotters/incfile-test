import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/real-estate-business";
import {Heading} from "../../../atoms/typography/heading";
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
                              headline="Social Media Groups for Real Estate Agents & Investors"
                              text="Connecting with other business owners in your industry can be incredibly helpful. Here are some of the best social media groups for real estate businesses:"/>

            <Container>
                <LinksContainer>
                    <Heading size={3} style={{margin: "0 auto 50px", textAlign: "center"}}>Facebook</Heading>
                    <LinkItem>
                        <PathLink to="https://www.facebook.com/realestateforums/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Agents Online - Real Estate Forums
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/RaiseTheBar/?fref=ts" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Raise the Bar on Real Estate
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/labcoatagents/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Lab Coat Agents — The Science of Real Estate
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/groups/174889399279972/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Real Estate Success Principles
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.facebook.com/NARdotRealtor/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            National Association of Realtors Facebook Group
                        </PathLink>
                    </LinkItem>

                </LinksContainer>

                <LinksContainer>
                    <Heading size={3} style={{margin: "0 auto 50px", textAlign: "center"}}>Linkedin</Heading>
                    <LinkItem>
                        <PathLink to="https://www.linkedin.com/groups/1812050/profile" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Social Media for Real Estate
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.linkedin.com/groups/97046/profile" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Real Estate Open Networkers
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.linkedin.com/groups/134657/profile" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Real Estate Professionals Group
                        </PathLink>
                    </LinkItem>

                </LinksContainer>

            </Container>

            <Container>
                <TextCenterLayout headline="Discussion Groups and Forums for Your Real Estate Business"
                                  text="There are plenty of forums and online discussion groups for real estate businesses. Start with these:"/>

                <LinksContainer>
                    <LinkItem>
                        <PathLink to="https://www.biggerpockets.com/forums/21-real-estate-agents"
                                  textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Bigger Pockets Real Estate Agent Forums
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://forum.creonline.com/forum/real-estate-investing-forum"
                                  textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Real Estate Investing Forum
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="http://www.agentsonline.net/forums/ubbthreads.php" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Agents Online Real Estate Ideas Center
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink
                            to="http://bestconstructionmanagementdegree.com/2011/top-50-web-forums-for-construction-and-real-estate-professionals/"
                            textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            Local Real Estate Forums
                        </PathLink>
                    </LinkItem>
                </LinksContainer>

            </Container>

            <Container>
                <TextCenterLayout headline="Conferences for Real Estate Investors"
                                  text="Of course, there are also regular conferences for real estate businesses:"/>

                <LinksContainer>
                    <LinkItem>
                        <PathLink to="https://crs.com/events/sell-a-bration" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Council of Residential Specialists
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.nar.realtor/convention.nsf/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            National Association of Realtors Conference
                            and Expo
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="http://fitsmallbusiness.com/real-estate-conference-and-convention-guide/"
                                  textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                            More Real Estate Conventions and Conferences
                        </PathLink>
                    </LinkItem>

                    <LinkItem>
                        <PathLink to="https://www.imn.org/group/real-estate/" textColor={color.blue1}
                                  hoverColor={color.orange1} arrowColor={color.blue1}>
                            Single Family Rental Investment Forum
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

const Wrapper = styled.div`
    margin-bottom: 200px;
    position: relative;
`;

const ToolsWrapper = styled.div`
    position: relative;
`;

const LinksWrapper = styled.div`
    padding-top: 100px;
    padding-bottom: 50px;
    position: relative;
    background-image: linear-gradient(180deg, rgba(255,255,255,0.00) 4%, #F2F6FF 99%);
`;

const LinksContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 30px;
    margin-top: 76px;
    margin-bottom: 76px;; 
    
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
    top: 80px;
    width: 100%;
  
    @media (min-width: 570px) {
       width: 570px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    right: 0;
    top: calc(50% - 210px);
    width: 100%;
    transform: scaleX(-1);
  
    @media (min-width: 420px) {
       width: 420px;
    }
`;

const Oval3 = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  
    @media (min-width: 720px) {
       width: 720px;
    }
`;

export default ToolsAndLinks;
