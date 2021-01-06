import React from "react";
import { color } from "../../atoms/styles/colors";
import styled from "styled-components";
import Path from "../buttons/path"

const Wrapper = styled.span`
    font-family: Avenir, sans-serif;
    font-size: 16px;
    color: ${color.grey1};
    margin-bottom: 24px;

    a {
        margin-right: 10px;
        white-space: nowrap;
    }
`;

const ArticlePath = () => (
    <Wrapper>
        <Path to="/">Home</Path>
        <Path to="/tag">Business Logistics</Path>
        Steps You Can Take Today to Get Your Home Business Off the Ground
    </Wrapper>
);

export default ArticlePath;
