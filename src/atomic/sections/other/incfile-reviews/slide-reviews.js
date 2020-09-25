import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Whitebox from "../../../atoms/boxes/white-box";
import { Paragraph } from "../../../atoms/typography/paragraph";

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;

    .slide__item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
        padding: 42px 45px;
        margin: 0 auto;
        
        p:last-of-type{
            margin-bottom: 0;
        }

        @media screen and (max-width: 768px) {
            p{
                font-size: 16px;
            }
        }

        @media screen and (min-width: 850px) {
            width: 720px;
            height: 370px;
        }
    }
`;

const CarouselWrapper = styled.div`
    margin: 0 -15px;
    overflow: hidden;
    width: 370px;

    @media screen and (min-width: 850px) {
        width: 920px;
    }

    //arrow style
    .react-multiple-carousel__arrow {
        background: #fef6ed;

        &::before {
            font-size: 15px;
            color: #6b5c4b;
        }
    }

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


const responsive = {
  desktop: {
    breakpoint: { max: 9999, min: 992 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 992, min: 768 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 769, min: 0 },
    items: 1,
  },
};

const SlideReviews = ({ content }) => (
    <Wrapper>
        <CarouselWrapper>
            <Carousel responsive={responsive} arrows={true} showDots renderDotsOutside>
                {content.map(item => (
                    <Whitebox className="slide__item" flex>
                        <Paragraph big mixed={true}>{item.text}</Paragraph>
                        <Paragraph big mixed={true} style={{ fontWeight: `bold` }}>{item.user}</Paragraph>
                    </Whitebox>
                ))}
            </Carousel>
        </CarouselWrapper>
    </Wrapper>
);

export default SlideReviews;
