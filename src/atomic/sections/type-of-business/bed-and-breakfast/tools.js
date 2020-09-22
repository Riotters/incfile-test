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
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg2/>
        </Oval2>
        <Oval3>
            <OvalSvg/>
        </Oval3>
        <TextCenterLayout headlineWidth={770} textWidth={770} headline="Groups and Forums for Hotel Owners"
                          text="Here are some useful places where you can connect with other bed and breakfast entrepreneurs."/>

        <Container>
            <LinksContainer>

                <LinkItem>
                    <PathLink to="http://www.innspiring.com/" textColor={color.blue1} hoverColor={color.orange1}
                              arrowColor={color.blue1}>
                        Innspiring forums
                    </PathLink>
                </LinkItem>

                <LinkItem>
                    <PathLink to="https://www.facebook.com/managersforum/" textColor={color.blue1}
                              hoverColor={color.orange1} arrowColor={color.blue1}>
                        Hotel Owners and Managers Facebook Group
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
    background-image: ${gradient.orange3};
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
    top: 0;
    left: 0;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

const Oval2 = styled.div`
    position: absolute; 
    top: calc(50% - 210px);
    right: 0;
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

const Oval3 = styled.div`
    position: absolute; 
    bottom: 0;
    left: 0;
    width: 100%;
    transform: scaleY(-1);
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

export default ToolsAndLinks;
