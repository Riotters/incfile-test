import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import {toolsList} from "../../../../static/type-of-business/bar-nightclub";
import UsefulTools from "../../../partials/useful-tools";

const Links = () => (
    <Wrapper>
        <Container>
            <UsefulTools style={{paddingBottom: "200px"}} toolsList={toolsList.tools} headlineText={toolsList.headlineText}
                         description={toolsList.description}/>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    
    background: linear-gradient(180deg, #fef6ed 0%, #ffffff 100%);
`;

export default Links;
