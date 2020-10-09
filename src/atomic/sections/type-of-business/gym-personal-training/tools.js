import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color} from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/gym-personal-training";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const ToolsAndLinks = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg2/>
        </Oval2>
        <TextCenterLayout headline="Groups and Forums for Fitness Business Owners"
                          text="Here are some useful places where you can connect with other gym, fitness or personal training entrepreneurs."/>

        <Container>
            <LinksContainer>

                <LinkItem>
                    <PathLink to="https://www.ideafit.com/fit-pro-forum/" textColor={color.blue1}
                              hoverColor={color.orange1} arrowColor={color.blue1}>
                        Idea Health and Fitness Forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://bodyspace.bodybuilding.com/" textColor={color.blue1}
                              hoverColor={color.orange1} arrowColor={color.blue1}>
                        BodySpace Bodybuilding Forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.shapefit.com/forum/" textColor={color.blue1} hoverColor={color.orange1}
                              arrowColor={color.blue1}>
                        Facebook ShapeFit Forums
                    </PathLink>
                </LinkItem>

            </LinksContainer>
        </Container>
        
        <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                     description={toolsList.description}/>

    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 0px;
    margin-bottom: 200px;
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
    bottom: 0;
    width: 100%;
  
    @media (min-width: 420px) {
        width: 420px;
    }
`;

export default ToolsAndLinks;
