import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import parse from 'html-react-parser';

// components
import Container from '../container';
import { color } from "../atoms/styles/colors"
import Button from "../molecules/buttons/button";
import { Heading } from "../atoms/typography/heading"
import { Paragraph } from "../atoms/typography/paragraph"
import Curve from "../atoms/icons/curve";
import CurveSVG from "../../images/curve-orange.inline.svg";
import Colorbox from '../atoms/boxes/color-box';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 45%, ${(props) => (props.bgColor ? props.bgColor : `${color.orange3}`)});
  min-height: 300px;
  padding-top: 80px;
`

const LinearBgHeader = ({ children, bgColor }) => {
  return (
    <Wrapper bgColor={bgColor}>
      {children}
    </Wrapper>
  )
}

export default LinearBgHeader;