import React from "react";
import styled from "styled-components";
import TextCenterLayout from "../../../partials/heading-center";
import ToolsList from "../../../organisms/lists/tools-list";
import {Tools} from "../../../../static/type-of-business/boutique-clothing-business";
import Container from "../../../container";

const UseFulTools = () => (
    <Wrapper>
        <TextCenterLayout headlineWidth={770} textWidth={770} headline="Useful Online Tools for Boutique Owners"
                          text="Here are some really great online tools for managing your boutique clothing business. They will reduce the time you spend on administration, help you to collaborate with others and free up your time to grow and manage your new venture."/>

        <Container>
            <ToolsList tools={Tools}/>
        </Container>
    </Wrapper>
);

const Wrapper = styled.section`
    padding-top: 100px;
    padding-bottom: 100px;
`;


export default UseFulTools;
