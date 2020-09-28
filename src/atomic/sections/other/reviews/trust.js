import React, {Component, Fragment, useState} from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { Link } from 'gatsby';
import { color } from '../../../../components/styles/colors';

import Container from '../../../container';
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Image from '../../../atoms/image/image_nobase64';
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import MapSVG from "../../../../images/map.inline.svg";
import Whitebox from "../../../atoms/boxes/white-box";
import Circle from "../../../atoms/icons/circle";
import ArrowSVG from "../../../../images/arrow.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Buttonsbox from "../../../atoms/boxes/top-buttons-box";
import Button from "../../../molecules/buttons/button";
import TextCenterLayout from '../../../partials/heading-center';

const Wrapper = styled.div`
    position: relative;
    padding: 165px 0;

    [class*="top-buttons-box__Wrapper"] {
        @media screen and (min-width: 769px) {
            justify-content: center;

            a:nth-child(2) {
                margin-left: 16px;
            }
        }
    }
`

const Map = styled.div`
  width: 100%;
  max-width: 970px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;

  &::after {
    content: "";
    display: block;
    padding-top: 57.73%;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const TrustSection = ({ content }) => {
    
    return (
        <Wrapper>
            <Oval className="oval" height="410" width="410" bottom="0" left="0" y="30">
            <OvalSVG />
            </Oval>
            <Map>
            <MapSVG />
            </Map>
            <ContentCenter contentWidth="770">
                <TextCenterLayout headline={content.header} headlineWidth="770"/>

                <Buttonsbox>
                    <Button content={content.button1} theme="primary56" arrow />
                    <Button content={content.button2} theme="secondary56"/>
                </Buttonsbox>
            </ContentCenter>
            
        </Wrapper>
    )
};

export default TrustSection;