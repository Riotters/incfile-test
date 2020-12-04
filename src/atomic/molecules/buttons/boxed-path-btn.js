import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import PathLink from "./path";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 28px 40px 28px 40px;
  background-color: white;
  box-shadow: ${shadow.white1};
  width: 100%;
  position: relative;
`;

const BoxedPathBtn = ({ className, content }) => {
    let mixUrl = typeof content.url !== 'undefined' ? content.url.replace(/\/?$/, '/') : content.url;
    return (
        <Wrapper className={className}>
            <PathLink to={mixUrl} textColor={color.blue1} hoverColor={color.orange1} arrowColor={color.blue1}>
                {content.header}
            </PathLink>
        </Wrapper>
    );
};

export default BoxedPathBtn;
