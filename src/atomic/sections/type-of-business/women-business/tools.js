import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/women-business";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";
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
    padding-top: 0px;
    margin-bottom: 200px;
    position: relative;
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 339px;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    bottom: 226px;
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;
export default ToolsAndLinks;
