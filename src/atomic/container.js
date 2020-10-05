import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 568px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 0 auto;

  @media (min-width: 769px) {
    max-width: 768px;
  }

  @media (min-width: 992px) {
    max-width: 100%;
  }

  @media (min-width: 1200px) {
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }

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
