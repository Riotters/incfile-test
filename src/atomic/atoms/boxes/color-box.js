import React from "react";
import styled from "styled-components";
import { color } from "../styles/colors";

const Wrapper = styled.div`
    width: 100%;
    background-color: ${props => props.color ? props.color : color.blue3};
`

const Colorbox = ({ className, children, color, overflow }) => {
  return (
    <Wrapper className={className} color={color} overflow={overflow}>
        {children}
    </Wrapper>
  )
}

export default Colorbox;
