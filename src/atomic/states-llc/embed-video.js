import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const EmbedVideo = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default EmbedVideo