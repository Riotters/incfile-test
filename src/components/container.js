import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media (min-width: 1230px) {
    max-width: 1200px;
  }
`

const Container = ({ children }) => <Wrapper>{children}</Wrapper>

export default Container
