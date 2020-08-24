import React from "react"
import styled from "styled-components"
import Container from "../../../atomic/container"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Article from "../../article"
import PurpleCurveSVG from "../../../images/purple-curve.inline.svg"
import PinkCurveSVG from "../../../images/pink-curve.inline.svg"
import VisibilitySensor from "../../VisibilitySensor"
import Oval from "../../../atomic/atoms/icons/oval";
import OvalSVG from "../../../images/ovals/top-right-transparent-purple2.inline.svg";

const Wrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;
  overflow: hidden;
`

const PurpleCurve = styled.div`
  height: 25px;
  width: 29px;
  position: absolute;
  top: 38px;
  right: -15px;
`

const PinkCurve = styled.div`
  height: 21px;
  width: 24px;
  position: absolute;
  bottom: 52px;
  left: -10px;
`

const Content = styled.div`
  h3 {
    text-align: center;
    margin: 0 auto 35px;
  }
`

const CarouselWrapper = styled.div`
  margin: 0 -15px;
  overflow: hidden;
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
`

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    display: none;
  }

  a {
    box-shadow: 0 20px 30px 0 #e6e6e6;
  }
`

const responsive = {
  desktop: {
    breakpoint: { max: 9999, min: 992 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 992, min: 768 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 0,
  },
}

const Articles = ({ oval }) => (
  <Wrapper>
    {oval && (
      <Oval height="341" width="341" top="25" right="0">
          <OvalSVG />
      </Oval>
    )}
    <Container>
      <Content>
        <VisibilitySensor partialVisibility once>
          {({ isVisible }) => (
            <h3 className={isVisible ? "slideUp enter" : "slideUp"}>
              Related Articles
            </h3>
          )}
        </VisibilitySensor>
        <CarouselWrapper>
          <PurpleCurve>
            <PurpleCurveSVG />
          </PurpleCurve>
          <PinkCurve>
            <PinkCurveSVG />
          </PinkCurve>
          <Carousel
            responsive={responsive}
            arrows={false}
            showDots
            renderDotsOutside
          >
            <Article img="bike" top="0" topLG="-50px" scale="1.1">
              Here’s Seven Tips to Steer You in the Right Direction.
            </Article>
            <Article img="baloons">
              How to Balance Owning Multiple Businesses.
            </Article>
            <Article img="newspaper" top="0" topLG="-30px" scale="1.1">
              Here’s Seven Tips to Steer You in the Right Direction.
            </Article>
            <Article img="bike" top="0" topLG="-50px" scale="1.1">
              How to Balance Owning Multiple Businesses.
            </Article>
            <Article img="newspaper" top="0" topLG="-30px" scale="1.1">
              Here’s Seven Tips to Steer You in the Right Direction.
            </Article>
            <Article img="baloons">
              How to Balance Owning Multiple Businesses.
            </Article>
            <Article img="bike" top="0" topLG="-50px" scale="1.1">
              Here’s Seven Tips to Steer You in the Right Direction.
            </Article>
            <Article img="baloons">
              How to Balance Owning Multiple Businesses.
            </Article>
            <Article img="newspaper" top="0" topLG="-30px" scale="1.1">
              Here’s Seven Tips to Steer You in the Right Direction.
            </Article>
            <Article img="bike" top="0" topLG="-50px" scale="1.1">
              How to Balance Owning Multiple Businesses.
            </Article>
            <Article img="newspaper" top="0" topLG="-30px" scale="1.1">
              Here’s Seven Tips to Steer You in the Right Direction.
            </Article>
            <Article img="baloons">
              How to Balance Owning Multiple Businesses.
            </Article>
          </Carousel>
        </CarouselWrapper>
        <MobileWrapper>
          <Article>
            Here’s Seven Tips to Steer You in the Right Direction.
          </Article>
          <Article>How to Balance Owning Multiple Businesses.</Article>
          <Article>
            Here’s Seven Tips to Steer You in the Right Direction.
          </Article>
          <Article>How to Balance Owning Multiple Businesses.</Article>
          <Article>
            Here’s Seven Tips to Steer You in the Right Direction.
          </Article>
          <Article>How to Balance Owning Multiple Businesses.</Article>
          <Article>
            Here’s Seven Tips to Steer You in the Right Direction.
          </Article>
          <Article>How to Balance Owning Multiple Businesses.</Article>
          <Article>
            Here’s Seven Tips to Steer You in the Right Direction.
          </Article>
          <Article>How to Balance Owning Multiple Businesses.</Article>
          <Article>
            Here’s Seven Tips to Steer You in the Right Direction.
          </Article>
          <Article>How to Balance Owning Multiple Businesses.</Article>
        </MobileWrapper>
      </Content>
    </Container>
  </Wrapper>
)

export default Articles
