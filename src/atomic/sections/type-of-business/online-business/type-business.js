import React from "react";
import styled from "styled-components";
import {gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../atoms/styles/colors";
import {shadow} from "../../../atoms/styles/shadows";
import {typeBusiness} from "../../../../static/type-of-business/online-business";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import OvalSvg3 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import AdventagesWithLongText from "../../../molecules/mixed-blocks/adventages-with-long-text";
import {Paragraph} from "../../../atoms/typography/paragraph";

const TypeBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg2/>
        </Oval2>
        <Oval3>
            <OvalSvg3/>
        </Oval3>

        <TextCenterLayout headlineWidth={770} textWidth={770} headline="What Type of Online Business Should You Start?"
                          text="When it comes to starting an online business, you have plenty of choices. Here are the main areas where online businesses can be successful:"/>

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
                    <AdventagesWithLongText
                        style={{textAlign: "left"}}
                        circleText={7}
                        title="Ecommerce and Online Retail"
                        circlePosition="center"
                        circleBackgroundColor={color.blue1}
                        circleBackgroundShadow={shadow.blue1}
                        imageName="online-shop-icon"
                    >
                        <Paragraph mixed={true}>
                            This is perhaps the biggest sector of all, and you have plenty of choices when it comes to
                            being a successful ecommerce entrepreneur:

                            <ul style={{paddingLeft: "15px", paddingTop: "15px"}}>
                                <li style={{paddingBottom: "15px"}}>Starting up your own store on a service like
                                    Shopify, Volusion or Bigcommerce
                                </li>

                                <li style={{paddingBottom: "15px"}}>Starting an independent ecommerce store</li>

                                <li style={{paddingBottom: "15px"}}>Selling through third-party marketplaces like
                                    Amazon and eBay
                                </li>

                                <li style={{paddingBottom: "15px"}}>Starting as a traditional retailer and adding
                                    in an ecommerce function
                                </li>

                                <li style={{paddingBottom: "15px"}}>Getting involved in specialist online retail
                                    like dropshipping or selling digital products
                                    and services
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
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 319px;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;


const Oval2 = styled.div`
    position: absolute;
    left: 0;
    top: calc(50% - 210px);
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

const Oval3 = styled.div`
    position: absolute;
    right: 0;
    bottom: 138px;
    width: 100%;
    transform: scaleX(-1);
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

export default TypeBusiness;
