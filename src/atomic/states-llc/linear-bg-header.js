import React from 'react';
import styled from 'styled-components';

// components
import { color } from "../atoms/styles/colors"


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-image: linear-gradient(${(props) => (props.position ? props.position : `to bottom`)}, rgba(255, 255, 255, 0) 20%, ${(props) => (props.bgColor ? props.bgColor : `${color.orange3}`)});
  min-height: 300px;
  padding-top: 80px;
`

const LinearBgHeader = ({ children, bgColor, position }) => {
  return (
    <Wrapper bgColor={bgColor} position={position}>
      {children}
    </Wrapper>
  )
}

export default LinearBgHeader;