import React from "react";
import styled from "styled-components";
import { gradient } from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import { color } from "../../../../components/styles/colors";
import { shadow } from "../../../../components/styles/shadows";
import { adventages } from "../../../../static/type-of-business/travel-agency";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/top-right-transparent-green3.inline.svg";

const TypeOfBusiness = () => (
  <Wrapper>
    <Oval>
      <OvalSvg />
    </Oval>
    <Oval2>
      <OvalSvg />
    </Oval2>

    <TextCenterLayout
      headlineWidth={770}
      textWidth={770}
      headline="What Type of Travel Agency Business Should You Start?"
      text="If you want to start a successful travel agency business, it’s important to know what your options are. Here are some of the more popular business ideas:"
    />

    <Service>
      <Container>
        <AdventagesBox>
          <CurveWrapper>
            <Curve color={color.orange1} />
          </CurveWrapper>
          {adventages.items.map((item, i) => (
              <Adventages
                  key={i}
              style={{ textAlign: "center" }}
              url={item.url}
              urlText={item.urlText}
              circleText={item.circleText}
              headline={item.headline}
              text={item.text}
              circlePosition="center"
              circleBackgroundColor={color.blue1}
              circleBackgroundShadow={shadow.blue1}
              imageName={item.imageName}
              width="100%"
            />
          ))}
        </AdventagesBox>
      </Container>
    </Service>
  </Wrapper>
);

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 1);
  background-image: ${gradient.green3};
  padding-top: 100px;
  position: relative;
`;

const Service = styled.div`
  padding: 64px 0;
`;

const AdventagesBox = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100%;
  justify-content: center;
  column-gap: 30px;
  row-gap: 20px;

  @media (min-width: 992px) {
    grid-template-columns: 470px 470px;
  }
`;

const CurveWrapper = styled.div`
  position: absolute;
  right: -24px;
  top: 0px;
`;

const Oval = styled.div`
  position: absolute;
  right: 0;
  top: 353px;
  width: 100%;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  left: 0;
  bottom: 51px;
  width: 100%;
  transform: rotate(180deg);

  @media (min-width: 570px) {
    width: 570px;
  }
`;

export default TypeOfBusiness;
