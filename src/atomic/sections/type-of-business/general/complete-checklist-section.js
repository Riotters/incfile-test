import React from "react";
import Container from "../../../container";
import LeftImageRightContent from "../../../../components/partials/blocks/left-content-right-image";
import Button from "../../../molecules/buttons/button";
import styled from "styled-components";
import {color} from "../../../../components/styles/colors";
import OvalLeftSvg from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";
import OvalRightSvg from "../../../../images/ovals/top-left-transparent-orange.inline.svg";
import Curve from "../../../../images/curve-orange.inline.svg";

const CompleteCheckListSection = () => (
    <OrderNowWrapper>

        <Oval>
            <OvalLeftSvg />
        </Oval>

        <OvalRight>
            <OvalRightSvg />
        </OvalRight>

        <Container>

            <LeftImageRightContent image="after-formation-image" imageAlt="start your business" imageWidth="515" textWidth="570">
                <h2 style={{ position: "relative" }}>
                    <CurveWrapper>
                        <Curve />
                    </CurveWrapper>

                    The Complete "Start Your Business" Checklist
                </h2>
                <p>A Clear and Comprehensive Guide to Starting Your Business the Right Way</p>
                <ButtonsBox>
                    <Button
                        theme="primary56"
                        marginMD="0 24px 0 0"
                        arrow
                        content={{ url: "/starting-a-business-checklist/", text: "Business Checklist" }}
                    />
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
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

const OvalRight = styled.div`
    position: absolute;
    right: 0;
    bottom: 0px;
    transform: scaleX(-1);
    width: 100%;
    
    @media (min-width: 409px){
        width: 409px;
    }
`;

const CurveWrapper = styled.div`
    position: absolute;
    left: -85px;
    top: -85px;
    
    @media (max-width: 992px){
        display: none;
    }
`;

export default CompleteCheckListSection;