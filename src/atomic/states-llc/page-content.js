import React from "react"
import styled from "styled-components"

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: ${props => (props.layout !== "grid" ? "670px" : "")};
  margin-left: auto;
  padding-top: 24px;

  // p {
  //   margin: 0 0 24px 0;
  // }
`

const PageContent = ({children, content}) => (
  <Wrapper>
	  {children}
  </Wrapper>
)

export default PageContent