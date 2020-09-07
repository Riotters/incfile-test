import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import {toolsList} from "../../../../static/type-of-business/bar-nightclub";
import UsefulTools from "../../../partials/useful-tools";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const Links = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <Container>
            <UsefulTools style={{paddingBottom: "200px"}} toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                         description={toolsList.description}/>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    position: relative;
    background: linear-gradient(180deg, #fef6ed 0%, #ffffff 100%);
`;

const Oval = styled.div`
    width: 720px;
    position: absolute;
    right: 0;
    bottom: 549px;
    display: none;
  
    @media (min-width: 720px){
      display: block;
    }
`;

export default Links;
