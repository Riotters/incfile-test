import React from "react";
import styled from "styled-components";
import { color } from "../styles/colors";

const Wrapper = styled.div`
    width: 100%;
    background-color: ${color.blue3};
    border-radius: 5px;
`

const Bluebox = ({ className, children, overflow }) => {
  return (
    <Wrapper className={className} overflow={overflow}>
        {children}
    </Wrapper>
  )
}

export default Bluebox;
