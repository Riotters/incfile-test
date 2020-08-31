import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import {shadow} from "../../../atoms/styles/shadows";
import UsefulTools from "../../../partials/useful-tools";
import {toolsList} from "../../../../static/type-of-business/teen-business";

const ToolsAndLinks = () => (
    <Wrapper>
        <Container>
            <UsefulTools toolsList={toolsList.tools} headlineText={toolsList.headlineText} description={toolsList.description} />
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    padding-top: 0px;
    margin-bottom: 200px;
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
