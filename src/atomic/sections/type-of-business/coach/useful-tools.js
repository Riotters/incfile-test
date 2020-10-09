import React from "react";
import styled from "styled-components";
import TextCenterLayout from "../../../partials/heading-center";
import ToolsList from "../../../organisms/lists/tools-list";
import {Tools} from "../../../../static/type-of-business/coach";
import OvalSvg from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import OvalSvg2 from "../../../../images/ovals/top-right-transparent-green3.inline.svg";

const UseFulTools = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <Oval2>
            <OvalSvg2 />
        </Oval2>
        <TextCenterLayout headline="Useful Online Tools for Professional Coaches"
                          text="Here are some really great online tools for managing your life or business coaching business. They will reduce the time you spend on administration, help you to collaborate with others and free up your time to grow and manage your new venture."/>

        <ToolsList tools={Tools}/>
    </Wrapper>
);

const Wrapper = styled.section`
    padding-top: 100px;
    position: relative;
`;

const Oval = styled.div`
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

const Oval2 = styled.div`
    position: absolute; 
    top: 0;
    right: 0;
    width: 100%;
    z-index: -1;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

export default UseFulTools;
