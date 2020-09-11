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
import ShapeCurve from "../atoms/shapes/curve";
import Colorbox from '../atoms/boxes/color-box';

const Content = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align:center;
  padding: 100px 0 76px 0;
  max-width: 670px;
  margin: 0 auto;

  h1 {
    @media screen and (min-width:769px) {
      font-size: 40px;
    }
  }
`

const WrappBox = styled.div`
  display: flex;
  
  .box{
    position: relative;
    padding: 40px;
    border-radius: 5px 50px 50px 5px;
    box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    @media screen and (min-width:769px) {
      width: 670px;
    }

    h4{
      line-height:normal;
    }
  }
`

const AbsoluteCurve = styled.div`
    position: absolute;
    left: -27px;
    top: -16px;
    transform: rotate(-90deg);
`;

const TaxesHeader = ({content}) => (
  <Container>
      <Content>
        <Heading size={1} bottomMargin="24">{content.title}</Heading>
        <Paragraph big flex mixed={true} bottomMargin="55" style={{ textAlign: `center` }}>{parse(content.subline)}</Paragraph>
        <WrappBox>
          {content.boxes.map((box) => (
            <Colorbox color={color.white} className="box">
              <AbsoluteCurve>
                <ShapeCurve color={color.blue1}/>
              </AbsoluteCurve>
              <Heading size={4}>{parse(box.title)}</Heading>
              <Paragraph flex mixed={true}>{parse(box.desc)}</Paragraph>
              <Button arrow content={box.button} theme="primary56" width="240"></Button>
            </Colorbox>
          ))}
        </WrappBox>
      </Content>
    </Container>
);

export default TaxesHeader;