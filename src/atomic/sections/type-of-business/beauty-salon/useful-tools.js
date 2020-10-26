import React from "react";
import styled from "styled-components";
import TextCenterLayout from "../../../partials/heading-center";
import ToolsList from "../../../organisms/lists/tools-list";
import {Tools} from "../../../../static/type-of-business/coach";

const UseFulTools = () => (
    <Wrapper>
        <TextCenterLayout headline="Useful Online Tools for Your Beauty Salon Business"
                          text="Here are some really great online tools for managing your beauty salon business. They will reduce the time you spend on administration, help you collaborate with others and free up your time to grow and manage your new venture."/>

        <ToolsList tools={Tools}/>
    </Wrapper>
);

const Wrapper = styled.section`
padding-top: 100px;
`;


export default UseFulTools;
