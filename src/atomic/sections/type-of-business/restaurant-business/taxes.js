import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import OvalSvg from "../../../../images/oval-babyblue-1.inline.svg";
import OvalSvgBottom from "../../../../images/oval-babyblue-2.inline.svg";
import CurveSvg from "../../../../images/curve-babyblue-1.inline.svg";
import {adventages2} from "../../../../static/type-of-business/teen-business";

const Taxes = () => (
    <Wrapper>

        <Oval>
            <OvalSvg/>
        </Oval>
        <OvalBottom>
            <OvalSvgBottom/>
        </OvalBottom>

        <Service>
            <Container>
                <TextCenterLayout headline="Maintaining Your Teen Business"
                                  text="If you’re an LLC, there are certain forms and legalities you need to follow to keep your teen business in good standing."/>
                <AdventagesBox>
                    <CurveWrapper>
                        <CurveSvg/>
                    </CurveWrapper>
                    {adventages2.items.map((item, i) => (
                        <Adventages key={i} style={{textAlign: "center"}} url={item.url} urlText={item.urlText}
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
    background: rgb(255,255,255);
    padding-bottom: 0px;
    padding-top: 100px;
    position: relative;
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
    top: 0;
`;

const OvalBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: 300px;
    
    @media (max-width: 970px) {
        display: none;
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
