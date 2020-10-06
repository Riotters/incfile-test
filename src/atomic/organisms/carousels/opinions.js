import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import Image from "../../atoms/image/image";
import {Heading} from "../../atoms/typography/heading";
import {Paragraph} from "../../atoms/typography/paragraph";
import {color} from "../../atoms/styles/colors";
import {shadow} from "../../atoms/styles/shadows";

const Wrapper = styled.div`
    width: 100%;
    max-width: 770px;

    .opinionbox {
        position: relative;
        padding: 48px 48px 20px;
        width: 100%;
        max-width: 570px;
        margin: 0 auto;
        
        &::after {
            content: "";
            position: absolute;
            bottom: -60px;
            left: 0;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 60px 45px 0 0px;
            border-color: ${color.white} transparent transparent transparent;
        }
    }
`;

const CarouselWrapper = styled.div`
  margin: 0 -15px;
  overflow: clip visible;
  padding: 0 15px;

  .react-multi-carousel-list {
    overflow: visible;

    .react-multi-carousel-item {
      //opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;

      &--active {
        opacity: 1;
        pointer-events: auto;

        a {
          box-shadow: 0 20px 30px 0 #e6e6e6;
        }
      }
    }
  }

  .react-multi-carousel-dot-list {
    position: relative;
    z-index: 1;
    margin-top: 48px;

    .react-multi-carousel-dot {
      button {
        width: 8px;
        height: 8px;
        background-color: #fce7d0;
        border: none;
        border-radius: 4px;
        transition: width 0.3s ease;
      }

      &--active {
        button {
          width: 16px;
          background-color: #fd8550;
        }
      }
    }
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    display: none;
  }

  a {
    box-shadow: 0 20px 30px 0 #e6e6e6;
  }
`;

const ImageWrapper = styled.div`
    position: absolute;
    left: 48px;
    top: -32px;
    width: 64px;
    height: 64px;
    overflow: hidden;
    border-radius: 32px;
`;

const responsive = {
    mobile: {
        breakpoint: { max: 9999, min: 0 },
        items: 1,
    },
};

const OpinionsCarousel = ({className, content}) => (
    <Wrapper>
        <CarouselWrapper>
            <Carousel responsive={responsive} arrows={true} showDots renderDotsOutside>
                {content.items.map((item) => (
                    <Whitebox className="opinionbox">
                        <ImageWrapper>
                            <Image filename={item.image} />
                        </ImageWrapper>
                        <Heading size={4} bottomMargin={4}>{item.header}</Heading>
                        <Paragraph style={{"font-size": "12px"}}>{item.subheader}</Paragraph>
                        <Paragraph big>{item.text}</Paragraph>
                    </Whitebox>
                ))}
            </Carousel>
        </CarouselWrapper>
    </Wrapper>
);

export default OpinionsCarousel;