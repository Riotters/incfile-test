import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import {shadow} from "../../../atoms/styles/shadows";
import {color, gradient} from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/bed-and-breakfast";
import OvalSvg from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";
import OvalSvg2 from "../../../../images/ovals/top-right-transparent-yellow.inline.svg";

const ToolsAndLinks = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <Oval2>
            <OvalSvg2 />
        </Oval2>
        <Oval3>
            <OvalSvg />
        </Oval3>
        <Container>
            <TextCenterLayout headline="Groups and Forums for Hotel Owners"
                              text="Here are some useful places where you can connect with other bed and breakfast entrepreneurs."/>

            <LinksContainer>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Innspiring forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="/" textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                        Hotel Owners and Managers Facebook Group
                    </PathLink>
                </LinkItem>

            </LinksContainer>
        </Container>
        
        <Container>
            <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText} description={toolsList.description} />
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 100px;
    background-image: ${gradient.orange3};
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

const Oval = styled.div`
    position: absolute; 
    top: 0;
    left: 0;
    width: 720px;
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

const Oval2 = styled.div`
    position: absolute; 
    top: calc(50% - 210px);
    right: 0;
    width: 420px;
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

const Oval3 = styled.div`
    position: absolute; 
    bottom: 0;
    left: 0;
    width: 420px;
    transform: scaleY(-1);
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

export default ToolsAndLinks;
