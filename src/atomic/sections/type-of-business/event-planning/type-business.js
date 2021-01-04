import React from "react";
import styled from "styled-components";
import {gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {typeBusiness} from "../../../../static/type-of-business/event-planning";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";

const TypeBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg/>
        </Oval2>

        <TextCenterLayout headlineWidth={770} textWidth={770} headline="Becoming an Event Planner and the Type of Planning Business You Should Start"
                          text="You have plenty of choices for starting a party or event planning business, and the best choice depends on your skills, network and existing competition in your local area. We definitely recommend focusing on a specific niche rather than trying to become a general event planner. When you specialize in one area, it’s easier to focus your marketing, networking, administration and other skills on delivering to the needs of that niche."/>

        <Container>
            <Service>

                <AdventagesBox>
                    <CurveWrapper>
                        <Curve color={color.orange1}/>
                    </CurveWrapper>
                    {typeBusiness.items.map((item, i) => (
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
            </Service>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    background: rgba(255,255,255,1);
    background-image: ${gradient.blue3}; 
    padding-top: 100px;
    position: relative;
    overflow: hidden;
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
    top: 300px;
    width: 100%;
    
    @media (min-width: 570px){
        width: 570px; 
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    bottom: 577px;
    width: 100%;
    transform: scaleX(-1);
    
    svg{
        transform: scaleY(-1);
    }
    
    @media (min-width: 720px){
        width: 720px; 
    }
`;
export default TypeBusiness;
