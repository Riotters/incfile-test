import React from "react"
import styled from "styled-components"
import Icon from "../../../images/purple-curve.inline.svg"

const Wrapper = styled.div`
    height: 25px;
    width: 29px;

    svg {
        path {
            fill: ${props => props.color ? props.color : ""}
        }
    }
`;

const Curve = ({ className, color }) => {

    return (
        <Wrapper className={className} color={color}>
            <Icon />
        </Wrapper>
    )
  }
  
  export default Curve