import React from "react";
import Container from "../../../container";
import LeftImageRightContent from "../../../../components/partials/blocks/left-content-right-image";
import Button from "../../../../components/button";
import styled from "styled-components";
import OvalLeftSvg from "../../../../images/oval-orange-3.inline.svg";
import OvalRightSvg from "../../../../images/oval-orange-4.inline.svg";
import OvalRight2Svg from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import Curve from "../../../../images/curve-orange.inline.svg";
import TabScrollable from "./TabScrollable";

const OrderNow = ({layout, columns}) => (
    <>
        <OrderNowWrapper>

            <Oval>
                <OvalLeftSvg/>
            </Oval>

            <OvalRight>
                <OvalRightSvg/>
            </OvalRight>
            <Container>

                <LeftImageRightContent image="after-formation-image" imageWidth="515" textWidth="570">

                    <h2 style={{position: "relative"}}>
                        <CurveWrapper>
                            <Curve/>
                        </CurveWrapper>

                        The Complete "Start Your Business" Checklist
                    </h2>
                    <p>A Clear and Comprehensive Guide to Starting Your Business the Right Way</p>
                    <ButtonsBox>
                        <Button theme="primary56" marginMD="0 24px 0 0" arrow>
                            Business Checklist
                        </Button>
                    </ButtonsBox>
                </LeftImageRightContent>

            </Container>
        </OrderNowWrapper>
        <TabScrollableWrapper>

            <OvalRight2>
                <OvalRight2Svg/>
            </OvalRight2>

            <Container>
                <TabScrollable/>
            </Container>
        </TabScrollableWrapper>
    </>
);

const TabScrollableWrapper = styled.div`
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 96%, #fef6ed);
    position: relative;
`;

const OrderNowWrapper = styled.section`
      background-color: #fef6ed;
      position: relative;
      padding: 64px 0;
`;

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const Oval = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    display: none;
    
    @media (min-width: 720px){
        display: block; 
    }
`;

const OvalRight = styled.div`
    position: absolute;
    right: 0;
    bottom: -5px;
    display: none;
    
    @media (min-width: 720px){
        display: block; 
    }
`;

const OvalRight2 = styled.div`
    position: absolute;
    right: 0;
    bottom: 1200px;
    width: 570px;
    transform: scaleX(-1);
    display: none;
    
    @media (min-width: 720px){
        display: block; 
    }
`;

const CurveWrapper = styled.div`
    position: absolute;
    left: -122px;
    top: -115px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListBox = styled.div`
    width: 100%;
    
    @media (min-width: 576px) { 
        width: 50%; 
    }
`;

export default OrderNow;
