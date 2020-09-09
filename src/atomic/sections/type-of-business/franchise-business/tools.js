import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color, gradient} from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/franchise-business";
import ContentCenter from "../../../partials/content-center";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Curve from "../../../../images/curve-orange.inline.svg";

const ToolsAndLinks = () => (
    <Wrapper>
        <Container>
            <ContentCenter contentWidth={770}>
                <div>
                    <TextCenterLayout headline="Franchise Business Resources"
                                      text="The best place to start looking for your franchise business resources is with the franchisor itself. They will have devoted considerable time and effort to providing you with the resources, guidance and support you need to succeed."/>

                    <Paragraph big>
                        See if they have an internet or intranet site where you can meet up with other franchisees to
                        discuss business initiatives, issues and best practice.
                    </Paragraph>
                    <Paragraph big>
                        Here are some other franchising groups and communities.
                    </Paragraph>
                </div>
            </ContentCenter>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="https://www.facebook.com/InternationalFranchiseProfessionalsGroup/"
                              textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        International Franchise Professionals Group
                    </PathLink>
                    <Paragraph bottomMargin={0} style={{marginTop: "8px"}}>
                        Connecting franchise professionals around the globe
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.franchise.org/discussion-forums-main" textColor={color.blue1}
                              hoverColor={color.orange1} arrowColor={color.blue1}>
                        The International Franchise Association
                    </PathLink>
                    <Paragraph bottomMargin={0} style={{marginTop: "8px"}}>
                        Official discussion forums of the IFA
                    </Paragraph>
                </LinkItem>

            </LinksContainer>
        </Container>

        <BlueContainer>
            <Container>

                <CurveWrapper>
                    <Curve/>
                </CurveWrapper>

                <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                             description={toolsList.description}/>
            </Container>
        </BlueContainer>
    </Wrapper>
);

const CurveWrapper = styled.div`
    position: absolute;
    right: 70px;
    top: 100px;
    transform: scaleX(-1);
    display: none;
    
    svg{
        path {
            fill: #5089fd;
        }
    }
    
    @media (min-width: 1200px){
        display: block;
    }
`;

const Wrapper = styled.div`
    padding-top: 100px;
    margin-bottom: 200px;
    position: relative;
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

const BlueContainer = styled.div`
    background-image: ${gradient.blue3};
`;

export default ToolsAndLinks;
