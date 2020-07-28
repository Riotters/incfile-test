import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media (min-width: ${props => props.width}px) {
    max-width: ${props => props.width}px;
  }
`

const Container = ({ children, style, width}) => <Wrapper style={style} width={width}>{children}</Wrapper>

export default Container

Container.propTypes = {
    width: PropTypes.number
}

Container.defaultProps = {
    width: 1200
}
