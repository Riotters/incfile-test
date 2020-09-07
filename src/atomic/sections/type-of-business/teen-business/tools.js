import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import {shadow} from "../../../atoms/styles/shadows";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/teen-business";
import {gradient} from "../../../atoms/styles/colors";
import OvalSvg from "../../../../images/ovals/top-left-transparent-red3.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const ToolsAndLinks = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <Oval2>
            <OvalSvg2 />
        </Oval2>
        <Container>
            <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText} description={toolsList.description} />
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 100px;
    margin-bottom: 200px;
    position: relative;
    background-image: ${gradient.orange3};
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 279px;
    width: 720px;
    transform: scaleX(-1);
    display: block;
      
    @media (min-width: 1200px){
       display: block;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    bottom: 200px;
    width: 420px;
    display: block;
      
    @media (min-width: 1200px){
       display: block;
    }
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

export default ToolsAndLinks;
