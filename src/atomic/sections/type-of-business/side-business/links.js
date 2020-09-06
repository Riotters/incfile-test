import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import {toolsList} from "../../../../static/type-of-business/side-business";
import UsefulTools from "../../../partials/useful-tools";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const Links = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <Oval2>
            <OvalSvg />
        </Oval2>
        <Container>
            <UsefulTools style={{paddingBottom: "200px"}} toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                         description={toolsList.description}/>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 100px;
    position: relative;
    background: linear-gradient(180deg, #fef6ed 0%, #ffffff 100%);
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 279px;
    width: 720px;
    transform: scaleX(-1);
    
    svg {
        transform: scaleY(-1);
    }
    display: block;
  
  @media (min-width: 1200px){
    display: block;
  }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    bottom: 201px;
    width: 420px;
    display: block;
  
  @media (min-width: 1200px){
    display: block;
  }
`;
export default Links;
