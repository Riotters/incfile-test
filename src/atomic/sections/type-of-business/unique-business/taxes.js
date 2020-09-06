import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import Adventages from "../../../../components/adventages";
import {color, gradient} from "../../../atoms/styles/colors";
import {shadow} from "../../../atoms/styles/shadows";
import OvalSvg from "../../../../images/oval-babyblue-1.inline.svg";
import OvalSvgBottom from "../../../../images/oval-babyblue-2.inline.svg";
import CurveSvg from "../../../../images/curve-babyblue-1.inline.svg";
import {adventages2} from "../../../../static/type-of-business/unique-business";

const Taxes = () => (
    <Wrapper>

        <Oval>
            <OvalSvg/>
        </Oval>

        <Service>
            <Container>
                <TextCenterLayout headline="Maintaining Your Unique Business"
                                  text="There are certain forms and legalities you need to follow to keep your unique business in good standing."/>
                <AdventagesBox>
                    <CurveWrapper>
                        <CurveSvg/>
                    </CurveWrapper>
                    {adventages2.items.map(item => (
                        <Adventages style={{textAlign: "center"}} url={item.url} urlText={item.urlText}
                                    circleText={item.circleText} headline={item.headline} text={item.text}
                                    circlePosition="center" circleBackgroundColor={color.blue1}
                                    circleBackgroundShadow={shadow.blue1}/>
                    ))}
                </AdventagesBox>
            </Container>
        </Service>

    </Wrapper>
);

const Wrapper = styled.div`
    background-image: ${gradient.babyblue3};
    padding-bottom: 0px;
    padding-top: 100px;
    position: relative;
`;

const TextWrapper = styled.div`
    width: 100%;
    position: relative;
    
    @media (min-width: 750px) {
        width: 750px;
        margin: 48px auto 100px;
    }
`;

const Service = styled.div`
  padding: 64px 0;
`;

const AdventagesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 970px;
  padding: 140px 0;
  margin: 0 auto;
  position: relative;
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 291px;
    
    svg{
        transform: scaleY(-1);
    }
    display: none;
    
    @media (min-width: 420px) {
        display: block;
    }
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: -115px;
    top: 24px;
    
    @media (max-width: 970px) {
        display: none;
    }
`;

export default Taxes;
