import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {typeBusiness} from "../../../../static/type-of-business/blockchain";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/top-right-transparent-orange.inline.svg";

const TypeBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg/>
        </Oval2>
        <TextCenterLayout textWidth={770} headlineWidth={770} headline="Business Industries Ideally Suited to Blockchain Applications"
                          text="If you’re in one of the following sectors, there’s a good chance you’ll get value out of a blockchain application. Here are some ideas of how blockchain can be used in these industries:"/>
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
                            width="100%"
                        />
                    ))}
                </AdventagesBox>
            </Service>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    background-color: ${color.orange3};
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
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
  @media (min-width: 992px){
      grid-template-columns: 470px 470px;
  }
`;

const CurveWrapper = styled.div`
    position: absolute;
    right: -24px;
    top: 0px;
    
    @media (max-width: 1200px){
        display: none;
    }
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 421px;
    width: 100%;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    bottom: 189px;
    width: 100%;
    transform: rotate(180deg);
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

export default TypeBusiness;
