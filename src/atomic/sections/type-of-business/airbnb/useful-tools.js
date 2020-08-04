import React from "react";
import styled from "styled-components";
import TextCenterLayout from "../../../partials/heading-center";
import ToolsList from "../../../organisms/lists/tools-list";
import {Tools} from "../../../../static/type-of-business/airbnb";

const UseFulTools = () => (
    <Wrapper>
        <TextCenterLayout headline="Useful Online Tools for Your Airbnb Business" text="The right software and apps will make it much easier to run your Airbnb business. Here are our recommendations for some of the best tools out there to make business operations a breeze." />

        <ToolsList tools={Tools} />
    </Wrapper>
);

const Wrapper = styled.section`
`;


export default UseFulTools;
