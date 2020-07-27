import React from "react";
import styled from "styled-components";
import { color } from "../styles/colors";
import { shadow } from "../styles/shadows";

const Wrapper = styled.div`
    width: 100%;
    background-color: ${color.white};
    box-shadow: ${shadow.white1};
    border-radius: 5px;
`

const Whitebox = ({ className, children }) => {
  return (
    <Wrapper className={className}>
        {children}
    </Wrapper>
  )
}

export default Whitebox;
