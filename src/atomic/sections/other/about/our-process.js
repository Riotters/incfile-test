import React, {Fragment} from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { color } from '../../../../components/styles/colors';
import { shadow } from '../../../../components/styles/shadows';
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-pink2.inline.svg";
import ArrowCircleOrangeSVG from "../../../../images/icons/arrow-circle-orange.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import TopImageBox from '../../../molecules/mixed-blocks/top-image-box';
import Container from '../../../container';
import VisibilitySensor from '../../../VisibilitySensor';

const Wrapper = styled.div`
    position: relative;
    padding: 100px 0;
`

const Grid = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 992px) {
        flex-direction: row;
    }

    .image__box {
        .content{
            text-align: center;
        }
    }

`
const TextLeftLayout = styled.div`
    display: block;
    text-align: left;
    margin-bottom: 80px;
    h2{
        text-align: left;
    }
`

const IconWrapper = styled.div`
    height: 30px;
    width: 100%;
    max-width: 30px;
    position: relative;
    z-index:1;

    @media (min-width: 992px) {
      height: auto;
    }

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 96px;
      width: 96px;
      background-color: ${color.white};
      box-shadow: inset ${shadow.white1};
      box-shadow: inset 0 0 32px 0 rgba(236, 236, 236, 0.4);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(90deg);

      @media (min-width: 992px) {
        transform: translate(-50%, -50%) rotate(0);
      }
    }
  }
`

const ourProcessSection = ({ content }) => (
    <Wrapper>
        <Oval className="oval" height="570" width="570" top="5" right="0" y="-20">
            <OvalSVG />
        </Oval>

        <Container>
            <VisibilitySensor partialVisibility once>
                {({ isVisible }) => (
                    <TextLeftLayout className={isVisible ? "slideLeft enter" : "slideLeft"}>
                        <Heading size={2}>{content.header}</Heading>
                        <Paragraph big mixed={true}>{content.text}</Paragraph>
                    </TextLeftLayout>
                )}
            </VisibilitySensor>
            <Grid>
                {content.items.map(item => (
                    <Fragment>
                        <TopImageBox content={item} image={item.icon} className="image__box" />
                        {item.hasCircle &&
                            <IconWrapper>
                            <span><ArrowCircleOrangeSVG /></span>
                            </IconWrapper>
                        }
                    </Fragment>
                ))}
            </Grid>

        </Container>
    </Wrapper>
)

export default ourProcessSection;