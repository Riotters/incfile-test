import React from "react";
import styled from "styled-components";
import {gradient} from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/bookstore";
import OvalSvg from "../../../../images/ovals/top-right-transparent-yellow.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const ToolsAndLinks = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg2/>
        </Oval2>

        <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                     description={toolsList.description}/>

    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 0px;
    background-image: ${gradient.orange3};
    margin-bottom: 200px;
    position: relative;
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: calc(50% - 210px);
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    bottom: 38px;
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

export default ToolsAndLinks;
