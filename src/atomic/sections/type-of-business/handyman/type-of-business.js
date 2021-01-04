import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {adventages} from "../../../../static/type-of-business/handyman";
import Curve from "../../../../images/curve-orange.inline.svg";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import OvalSvg2 from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import AdventagesWithLongText from "../../../molecules/mixed-blocks/adventages-with-long-text";

const TypeOfBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <OvalBottom>
            <OvalSvg2/>
        </OvalBottom>

        <TextCenterLayout 
            headlineWidth={770} 
            textWidth={770} 
            headline="What Type of Home Handyman Business Should You Start?"
            text="When it comes to starting a handyman business, you have plenty of choices. When you want to turn your hobbies or fix-it skills into a successful business, these are some good places to start."
        />

        <Container>
            <Service>
                <AdventagesBox>
                    <CurveWrapper>
                        <Curve/>
                    </CurveWrapper>
                    {adventages.items.map((item, i) => (
                        <Adventages
                            key={i}
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
                            width="100%"
                        />
                    ))}
                    <AdventagesWithLongText
                        style={{textAlign: "left"}}
                        circleText={8}
                        title="Other Areas"
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1}
                        imageName="other-areas"
                    >
                        <Paragraph mixed={true}>
                            We’ve covered some of the more popular jobs for the home handyman above, but there are
                            plenty of other choices. These include:

                            <ul style={{paddingLeft: "20px", marginTop: "15px"}}>
                                <li>
                                    Flooring installation and repair, including
                                    traditional wood, vinyl, tile or carpets
                                </li>
                                <li>
                                    Bathroom and shower installations
                                </li>
                                <li>
                                    Insulation for attics, walls and other spaces
                                </li>
                                <li>
                                    Fence, gutter and deck installation, as well as
                                    maintenance and repairs
                                </li>
                            </ul>
                        </Paragraph>
                    </AdventagesWithLongText>
                </AdventagesBox>
            </Service>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    background: rgba(255,255,255,1);
    background-color: ${color.blue3}; 
    padding-top: 100px;
    position: relative;
`;

const Service = styled.div`
  padding: 64px 0 120px 0;
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
    left: -70px;
    bottom: -70px;
    display: none;
    transform: rotate(-90deg);
    
    @media (min-width: 1200px){
       display: block;
    }
    
    svg{
        path{
            fill: #d2e0fe;
        }
    }
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 300px;
    width: 100%;
  
  @media (min-width: 570px) {
        width: 570px;
  }
`;

const OvalBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: 300px;
    width: 100%;
  
  @media (min-width: 570px) {
        width: 570px;
  }
`;

export default TypeOfBusiness;
