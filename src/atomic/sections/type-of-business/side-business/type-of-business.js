import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {adventages} from "../../../../static/type-of-business/side-business";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import OvalSvg2 from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import AdventagesWithLongText from "../../../molecules/mixed-blocks/adventages-with-long-text";
import {gradient} from "../../../atoms/styles/colors";

const TypeOfBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <OvalBottom>
            <OvalSvg2/>
        </OvalBottom>
        <Container>
            <Service>
                <TextCenterLayout headline="What Type of Side Business Should You Start?"
                                  text="Ideally, you want a side business to be relatively hassle-free. If you’re running a side business on top of another job, the less time you spend on setting up the business (and the more time you spend earning money) the better. Here are some good opportunities to achieve this:"/>

                <AdventagesBox>
                    {adventages.items.map(item => (
                        <Adventages
                            style={{textAlign: "left"}}
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
            </Service>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    background: rgba(255,255,255,1);
    background-image: ${gradient.blue3}; 
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
  margin: 140px auto 0;
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
    top: 300px;
    width: 570px;
`;

const OvalBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: 300px;
    width: 570px;
    transform: scaleY(-1);
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

export default TypeOfBusiness;
