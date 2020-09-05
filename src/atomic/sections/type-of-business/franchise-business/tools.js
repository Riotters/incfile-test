import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
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
            <TextCenterLayout headline="Franchise Business Resources"
                              text="The best place to start looking for your franchise business resources is with the franchisor itself. They will have devoted considerable time and effort to providing you with the resources, guidance and support you need to succeed."/>

            <ContentCenter contentWidth={770}>
                <Paragraph big>
                    See if they have an internet or intranet site where you can meet up with other franchisees to
                    discuss business initiatives, issues and best practice.
                </Paragraph>
                <Paragraph big>
                    Here are some other franchising groups and communities.
                </Paragraph>
            </ContentCenter>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Wall Street Oasis
                    </PathLink>
                    <Paragraph bottomMargin={0} style={{marginTop: "8px"}}>
                        The largest and most active LinkedIn group for business consultants with over 400,000 members. It also has several location based and industry specific subgroups.
                    </Paragraph>
                </LinkItem>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        BodySpace Bodybuilding Forums
                    </PathLink>
                    <Paragraph bottomMargin={0} style={{marginTop: "8px"}}>
                        For consultants involved in project and portfolio management
                    </Paragraph>
                </LinkItem>

            </LinksContainer>
        </Container>

        <BlueContainer>
            <Container>

                <CurveWrapper>
                    <Curve />
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

const BlueContainer = styled.div`
    background-image: ${gradient.blue3};
`;

export default ToolsAndLinks;
