import React from "react";
import styled from "styled-components";
import {gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-left";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {adventages} from "../../../../static/type-of-business/construction-company";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import ContentCenter from "../../../partials/content-center";

const TypeOfBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>

        <Service>
            <ContentCenter contentWidth={770}>
                <TextCenterLayout headlineWidth={770} textWidth={770}
                                  headline="What Type of Construction Business Should You Start?"
                                  text="There are several different types of construction business that you can start. Here are some of the more popular options."/>
            </ContentCenter>

            <Container>
                <AdventagesBox>
                    {adventages.items.map((item, i) => (
                        <Adventages
                            key={i}
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
                <Paragraph big style={{ justifyContent: "center", width: "100%", maxWidth: "770px", margin: "auto" }}>
                    There are dozens of other niches including using reclaimed materials, industrial construction, commercial construction, constructing vacation rentals and much more.
                </Paragraph>
            </Container>

        </Service>

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
    top: 300px;
    width: 100%;
      
      @media (min-width: 720px){
        width: 720px;
      }
`;

export default TypeOfBusiness;
