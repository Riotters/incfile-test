import React from "react";
import styled from "styled-components";
import {color, gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {shadow} from "../../../atoms/styles/shadows";
import {adventages} from "../../../../static/type-of-business/publishing-company-business";
import OvalSvg from "../../../../images/ovals/top-left-transparent-orange.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import ContentCenter from "../../../partials/content-center";

const TypeOfBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>

        <Oval2>
            <OvalSvg/>
        </Oval2>

        <TextCenterLayout headlineWidth={770} textWidth={770} headline="What Type of Publishing Company Should You Start?"
                          text="When it comes to starting a publishing business, you have plenty of choices. Here are the main areas where publishing businesses can be successful:"/>

        <Service>
            <ContentCenter>
                <Paragraph big>
                    Here are some of the more popular options:
                </Paragraph>
            </ContentCenter>
            <Container>
                <AdventagesBox>
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
                            width="100%"
                        />
                    ))}
                </AdventagesBox>
            </Container>
        </Service>

    </Wrapper>
);

const Wrapper = styled.div`
    background: rgba(255,255,255,1);
    background-image: ${gradient.orange3}; 
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
    top: 312px;
    width: 100%;
    transform: scaleX(-1);
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    bottom: 400px;
    width: 100%;
    transform: scaleY(-1);
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

export default TypeOfBusiness;
