import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../atoms/styles/colors";
import {shadow} from "../../../atoms/styles/shadows";
import {typeBusiness} from "../../../../static/type-of-business/brewery-business";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import {gradient} from "../../../atoms/styles/colors";

const TypeBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>

        <TextCenterLayout headlineWidth={770} textWidth={770} headline="What Type of Brewery Should You Start?"
                          text="If you want to start a successful brewery business, it’s important to know what your options are. Here are some of the more popular business ideas."/>

        <Container>
            <Service>

                <AdventagesBox>
                    <CurveWrapper>
                        <Curve color={color.orange1}/>
                    </CurveWrapper>
                    {typeBusiness.items.map(item => (
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
                            className="containerMargin"
                        />
                    ))}
                </AdventagesBox>
            </Service>

        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    background-image: ${gradient.orange3}; 
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
  max-width: 1000px;
  margin: 72px auto 0;
  position: relative; 
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: -24px;
    top: 0px;
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 287px;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

export default TypeBusiness;
