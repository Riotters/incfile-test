import React from "react";
import styled from "styled-components";
import {gradient} from "../../../atoms/styles/colors";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import {typeBusiness} from "../../../../static/type-of-business/online-business";
import Curve from "../../../atoms/shapes/curve";
import OvalSvg from "../../../../images/oval-orange-4.inline.svg";
import AdventagesWithLongText from "../../../molecules/mixed-blocks/adventages-with-long-text";
import {Paragraph} from "../../../atoms/typography/paragraph";

const TypeBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Container>
            <Service>
                <TextCenterLayout headline="What Type of Online Business Should You Start?"
                                  text="When it comes to starting an online business, you have plenty of choices. Here are the main areas where online businesses can be successful:"/>

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
                                    Amazon &lt;link to Amazon page&gt; and eBay
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
`;

export default TypeBusiness;
