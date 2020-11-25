import React from "react";
import styled from "styled-components";
import TextCenterLayout from "../../../partials/heading-center";
import ToolsList from "../../../organisms/lists/tools-list";
import {Tools} from "../../../../static/type-of-business/moving-company";

const UseFulTools = () => (
    <Wrapper>
        <TextCenterLayout headline="Useful Online Tools for Your Moving Business"
                          text="Here are some really great online tools for managing your moving business. They will reduce the time you spend on administration, help you to collaborate with others and free up your time to grow and manage your new venture."/>

        <ToolsList tools={Tools}/>
    </Wrapper>
);

const Wrapper = styled.section`
padding-top: 100px;
margin-bottom: 150px;
`;


export default UseFulTools;
