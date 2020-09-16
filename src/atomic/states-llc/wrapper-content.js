import React from "react"
import styled from "styled-components"
import Container from "../container"
import OvalSVG from "../../images/oval-blue.inline.svg"

const Wrapper = styled.div`
  padding-top: 75px;
  position: relative;

  @media (min-width: 769px) {
    padding-top: 115px;
  }
`

const Oval = styled.div`
    height: 100%;
    width: 100%;
    max-height: 460px;
    max-width: 370px;
    position: absolute;
    left: 0;
    top: 60px;
    transform: translateY(40%);
    transform: rotate(-460deg);

    svg {
        moz-transform: scale(-1,1);
        -o-transform: scale(-1,1);
        -webkit-transform: scale(-1,1);
        transform: scale(-1,1);
    }
`

const WrapperContent = ({children}) => (
    <Wrapper>
        <Oval>
            <OvalSVG />
        </Oval>
        <Container>
            {children}
        </Container>
    </Wrapper>
)

export default WrapperContent