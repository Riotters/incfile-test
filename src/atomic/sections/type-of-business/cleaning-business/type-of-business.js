import React from "react";
import styled from "styled-components";
import { gradient } from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import { color } from "../../../../components/styles/colors";
import { shadow } from "../../../../components/styles/shadows";
import {
  adventages,
  adventages2,
} from "../../../../static/type-of-business/cleaning-business";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentCenter from "../../../partials/content-center";

const TypeOfBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <Oval2>
            <OvalSvg2 />
        </Oval2>
        <TextCenterLayout
            headlineWidth={770}
            textWidth={770}
            headline="What Type of Cleaning Business Do You Want to Run?"
            text="One of the first things you’ll need to decide on is the type of cleaning business you want to run. You have a few different options:"
        />

        <Service>
            <Container>
                <AdventagesBox>
                    <CurveWrapper>
                        <Curve color={color.red1} />
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

            <ContentCenter contentWidth={770}>
                <Paragraph big style={{ marginBottom: "70px" }}>
                    You can go even more detailed than this and focus on narrower areas of
                    cleaning. This might include:
        </Paragraph>
            </ContentCenter>

            <Container>
                <AdventagesBox>
                    {adventages2.items.map((item, i) => (
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
            <ContentCenter contentWidth={770}>
                <Paragraph big style={{ marginBottom: "70px" }}>
                    Explore the market opportunities in your area to see where you can
                    make the most impact.
        </Paragraph>
            </ContentCenter>
        </Service>
    </Wrapper>
);

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 1);
  background-image: ${gradient.orange3};
  padding-top: 100px;
  position: relative;
  overflow: hidden;
`;

const Service = styled.div`
  padding: 64px 0;
`;

const AdventagesBox = styled.div`
  display: grid;
  grid-template-columns: 100%;
  justify-content: center;
  column-gap: 30px;
  row-gap: 20px;

  @media (min-width: 490px) {
    grid-template-columns: 470px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 470px 470px;
  }
`;

const CurveWrapper = styled.div`
  position: absolute;
  right: -24px;
  top: 0px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Oval = styled.div`
  position: absolute;
  right: 0;
  top: 287px;
  width: 100%;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  left: 0;
  top: calc(50% - 210px);
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

export default TypeOfBusiness;
