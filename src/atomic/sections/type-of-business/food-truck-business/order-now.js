import React from "react";
import Container from "../../../container";
import LeftImageRightContent from "../../../../components/partials/blocks/left-content-right-image";
import Button from "../../../../components/button";
import styled from "styled-components";
import {color} from "../../../../components/styles/colors";
import OvalLeftSvg from "../../../../images/oval-orange-3.inline.svg";
import OvalRightSvg from "../../../../images/oval-orange-4.inline.svg";
import Curve from "../../../../images/curve-orange.inline.svg";

const OrderNow = () => (
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
);

const OrderNowWrapper = styled.section`
  background-color: ${color.orange3};
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
  
  @media (min-width: 1200px){
    display: block;
  }
`;

const OvalRight = styled.div`
    position: absolute;
    right: 0;
    bottom: -5px;
    display: none;
  
  @media (min-width: 1200px){
    display: block;
  }
`;

const CurveWrapper = styled.div`
    position: absolute;
    left: -122px;
    top: -115px;
    display: none;
  
  @media (min-width: 1200px){
    display: block;
  }
`;

export default OrderNow;
