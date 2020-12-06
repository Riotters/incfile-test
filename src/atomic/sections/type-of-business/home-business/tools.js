import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/home-business";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import {gradient} from "../../../atoms/styles/colors";

const ToolsAndLinks = () => (
    <Wrapper>
        <Oval2>
            <OvalSvg2/>
        </Oval2>
        <TextCenterLayout headline="Groups and Forums for Your Home-Based Business"
                          text="Here are some useful places where you can connect with other home-based entrepreneurs."/>

        <Container>
            <LinksContainer>

                <LinkItem>
                    <PathLink to="https://www.smallbusinessforums.org/forumdisplay.php?16-Home-Based-Business" textColor={color.blue1}
                              hoverColor={color.orange1} arrowColor={color.blue1}>
                        Small Business Forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="http://www.homebusinessonline.com/forum/" textColor={color.blue1}
                              hoverColor={color.orange1} arrowColor={color.blue1}>
                        The Home Business Forum
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://community.startupnation.com/categories/homepreneurs" textColor={color.blue1} hoverColor={color.orange1}
                              arrowColor={color.blue1}>
                        Startup Nation Home-Based Businesses
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.facebook.com/groups/posthereaddhere/?ref=br_rs" textColor={color.blue1} hoverColor={color.orange1}
                              arrowColor={color.blue1}>
                        Home-Based Business on Facebook
                    </PathLink>
                </LinkItem>

            </LinksContainer>
        </Container>
        
        <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                     description={toolsList.description}/>

    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 100px;
    margin-bottom: 200px;
    position: relative;
    background-image: ${gradient.orange3};
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
    right: 0;
    bottom: 626px;
    width: 100%;
  
    @media (min-width: 420px) {
        width: 420px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    bottom: 501px;
    width: 100%;
  
    @media (min-width: 420px) {
        width: 420px;
    }
`;

export default ToolsAndLinks;
