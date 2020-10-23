import React from "react";
import styled from "styled-components";
import Container from "../../container";
//import Searchbar from "../../searchbar"
import Image from "../../image_nobase64";
import OvalSVG from "../../../images/oval-yellow-3.inline.svg";
import CurveSVG from "../../../images/yellow-curve.inline.svg";
import VisibilitySensor from "../../VisibilitySensor";

const Searchbar = React.lazy(() => import("../../searchbar"));

const Wrapper = styled.div`
  padding-top: 75px;
  position: relative;

  @media (min-width: 769px) {
    padding-top: 275px;
  }
`;

const Rocket = styled.div`
  display: none;
  width: 50%;
  max-width: 675px;
  position: absolute;
  top: calc(50% - 36px);
  left: -150px;
  transform: translateY(-50%);
  z-index: -1;

  @media (min-width: 769px) {
    display: flex;
  }

  &::after {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      object-fit: contain !important;
    }
  }
`;

const Oval = styled.div`
  height: 100%;
  width: 100%;
  max-height: 460px;
  max-width: 370px;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(25%);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 20%);
  }
`;

const Curve = styled.div`
  height: 97px;
  width: 81px;
  position: absolute;
  right: 0;
  bottom: 50px;
`;

const Moon = styled.div`
  display: none;
  height: 130px;
  width: 81px;
  position: absolute;
  top: 190px;
  right: 190px;

  @media (min-width: 769px) {
    display: block;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SearchBox = styled.div`
  width: 100%;
  max-width: 570px;
  margin: 0 auto;

  @media (min-width: 769px) {
    margin: 0 8.333333% 0 0;
  }

  h2 {
    max-width: 390px;
    text-align: center;
    margin: 0 auto 40px;

    @media (min-width: 769px) {
      text-align: left;
      margin: 0 0 40px;
    }
  }
`;

const Search = () => {
  const isSSR = typeof window === "undefined";

  return (
    <Wrapper>
      <Oval>
        <OvalSVG />
      </Oval>
      <Curve>
        <CurveSVG />
      </Curve>
      <Moon>
        <Image filename="moon" alt="moon" />
      </Moon>
      <Container>
        <Rocket>
          <Image filename="lunching-rocket-6969" alt="rocket lunch" />
        </Rocket>
        <Content>
          <SearchBox>
            <VisibilitySensor partialVisibility once>
              {({ isVisible }) => <h2 className={isVisible ? "slideUp enter" : "slideUp"}>Learn more about Nonprofits by state.</h2>}
            </VisibilitySensor>
            {!isSSR && (
              <React.Suspense fallback={<div />}>
                <Searchbar />
              </React.Suspense>
            )}
          </SearchBox>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Search;
