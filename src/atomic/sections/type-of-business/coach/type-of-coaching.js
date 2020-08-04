import React from "react";
import styled from "styled-components";
import {gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import CurveSvg from "../../../../images/curve-babyblue-1.inline.svg";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {adventages} from "../../../../static/type-of-business/coach";

const TypeOfCoaching = () => (
    <Wrapper>
        <Container>
            <Service>
                <Container>
                    <TextCenterLayout headline="What Type of Professional Coaching Business Should You Start?"
                                      text="There are several different types of life or business coaches. Here are some of the more popular options:"/>

                    <AdventagesBox>
                        <CurveWrapper>
                            <CurveSvg/>
                        </CurveWrapper>
                        {adventages.items.map(item => (
                            <Adventages
                                style={{textAlign: "center"}}
                                url={item.url}
                                urlText={item.urlText}
                                circleText={item.circleText}
                                headline={item.headline}
                                text={item.text}
                                circlePosition="center"
                                circleBackgroundColor={color.blue1}
                                circleBackgroundShadow={shadow.blue1}
                                imageName={item.imageName}
                            />
                        ))}
                    </AdventagesBox>
                </Container>
            </Service>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    background: rgba(255,255,255,1);
    background-image: ${gradient.orange3}; 
    padding-top: 100px;
`;

const Service = styled.div`
  padding: 64px 0;
`;

const AdventagesBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  width: 100%;
  max-width: 970px;
  padding: 140px 0;
  margin: 0 auto;
  position: relative;
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: -115px;
    top: 24px;
`;

export default TypeOfCoaching;
