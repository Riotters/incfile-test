import React from "react";
import styled from "styled-components";
import {Heading} from "../../../atoms/typography/heading";
import Container from "../../../container";
import {Paragraph} from "../../../atoms/typography/paragraph";
import FAQSection from "./faqs";
import parse from "html-react-parser";
import {color, gradient} from "../../../atoms/styles/colors";
import Image from "../../../atoms/image/image";
import Whitebox from "../../../atoms/boxes/white-box";
import { Link } from "gatsby";
import OvalSVG from "../../../../images/ovals/incorporate-faq-top-right.inline.svg";
import OvalSVG2 from "../../../../images/ovals/incorporate-trusted-top-left.inline.svg";
import Oval from "../../../atoms/icons/oval";

import ArrowSVG from "../../../../images/arrow-circle.inline.svg";
import Curve from "../../../../atomic/atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-right-babyblue1.inline.svg";
import ContentCenter from "../../../partials/content-center";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 100px;
  margin-top: 100px;
  background: ${gradient.orange3};
  overflow: hidden;

  @media (min-width: 992px) {
    flex-direction: row;
  }
  
  h3 {
    width: auto;
  }
  
  .curve-left {
    transform: rotate(270deg);
  }
  
  .section-description {
    text-align: center;
  }
  
  @media screen and (max-width: 512px) {
    .oval {
        max-width: 100vw;
        overflow: hidden;
    }
  }
`;

const CardsWrapper = styled.div`
    position: relative;
    margin-bottom: 100px;
`;

const Improvement = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    align-items: center;
    
    @media screen and (max-width: 512px) {
        grid-template-columns: 100%;
    }

    .improvement__item{
        padding: 24px;
        align-items: flex-start;
        flex-direction: column;
        text-align: left;

        .gatsby-image-wrapper{
            width: 96px;
            align-self: center;
            margin-bottom: 20px;
        }
    }
    
    .link-arrow-right {
        svg {
            transform: rotate(90deg);
        }
    }
`;

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
    p:first-child {
        margin-right: 24px;
    }
`;

const ImageWrapper = styled.div`
  padding: 16px 0;
  display: flex;
  width: 100%;
  margin-bottom: 24px;
  justify-content: center;
  background: ${(props) => (props.background ? props.background : color.white)}
`;

const TrustedSection = ({ className, content }) => {
    return (
        <Wrapper className={className}>
            <Oval className="oval" height="570" width="565" top="0" right="0" y={141}>
                <OvalSVG />
            </Oval>
            <Oval className="oval" height="420" width="420" top="0" left="0" y={50}>
                <OvalSVG2 />
            </Oval>
            <ContentCenter>
                <Heading size={2} maxWidth={770}>{content.header}</Heading>
                <Paragraph big className="section-description" maxWidth={770} bottomMargin={80}>{content.text}</Paragraph>
                <CardsWrapper>
                    <Improvement>
                        {content.cards.map(item => (
                            <Whitebox flex className="improvement__item">
                                <ImageWrapper background={item.background}>
                                    <Image filename={item.image} alt={item.title} />
                                </ImageWrapper>
                                <Paragraph big mixed={true} style={{  fontWeight: `bold` }} bottomMargin="16">{item.header}</Paragraph>
                                <FlexWrapper>
                                    <Paragraph mixed={true}>{parse(item.text)}</Paragraph>
                                    {item.link && (
                                        <Link to={item.link.url} className="link-arrow-right">
                                            <ArrowSVG/>
                                        </Link>
                                    )}
                                </FlexWrapper>
                            </Whitebox>
                        ))}
                    </Improvement>
                </CardsWrapper>
                <div style={{position: "relative"}}>
                    <Curve top="75" left="-35" color={color.green1} className="curve-left">
                        <CurveSVG />
                    </Curve>
                    <FAQSection content={content.faq} />
                </div>
            </ContentCenter>
        </Wrapper>
    );
};

export default TrustedSection;