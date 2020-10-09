import React from "react";
import styled from "styled-components";
import TextCenterLayout from "../../../partials/heading-center";
import ToolsList from "../../../organisms/lists/tools-list";
import {Tools} from "../../../../static/type-of-business/airbnb";
import OvalSvg from "../../../../images/ovals/top-right-transparent-green2.inline.svg";
import Container from "../../../container";

const UseFulTools = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Padding>
            <TextCenterLayout headline="Useful Online Tools for Your Airbnb Business"
                              text="The right software and apps will make it much easier to run your Airbnb business. Here are our recommendations for some of the best tools out there to make business operations a breeze."/>
        </Padding>

        <Container>
            <ToolsList tools={Tools}/>
        </Container>
    </Wrapper>
);

const Wrapper = styled.section`
    position: relative;
`;

const Padding = styled.div`
    padding: 0 15px;
`;

const Oval = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 720px;
    z-index: -1;
    display: none;
  
    @media (min-width: 720px){
       display: block;
    }
`;

export default UseFulTools;
