import React from "react";
import Container from "../../../container";
import LeftImageRightContent from "../../../../components/partials/blocks/left-content-right-image";
import Button from "../../../molecules/buttons/button";
import styled from "styled-components";
import { color } from "../../../../components/styles/colors";
import OvalLeftSvg from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";
import OvalRightSvg from "../../../../images/ovals/top-left-transparent-orange.inline.svg";
import Curve from "../../../../images/curve-orange.inline.svg";

const OrderNow = () => (
  <OrderNowWrapper>
    <Oval>
      <OvalLeftSvg />
    </Oval>

    <OvalRight>
      <OvalRightSvg />
    </OvalRight>

    <Container>
      <LeftImageRightContent
        image="after-formation-image"
        imageWidth="515"
        textWidth="570"
      >
        <p>
          From developing your business idea to measuring success, our free
          guide has all the info you need to get your business off the ground.
        </p>
        <ButtonsBox>
          <Button
            theme="primary56"
            marginMD="0 24px 0 0"
            arrow
            content={{
              url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&utm_campaign=Lead%20Gen%20-%20Business%20Entity%20Quiz&utm_source=On_Page_Click&utm_medium=LLC%20Results%20Page&utm_term=Order%20Form`,
              text: "Form Your LLC Today for $0 + State Fee.",
            }}
          />
        </ButtonsBox>
      </LeftImageRightContent>
    </Container>
  </OrderNowWrapper>
);

const OrderNowWrapper = styled.section`
  background-color: ${color.orange3};
  position: relative;
  padding-top: 64px;
  padding-bottom: 64px;

  @media (min-width: 992px) {
    padding-top: 0;
    padding-bottom: 0;
  }
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

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const OvalRight = styled.div`
  position: absolute;
  right: 0;
  bottom: 0px;
  transform: scaleX(-1);
  width: 100%;

  @media (min-width: 409px) {
    width: 409px;
  }
`;

const CurveWrapper = styled.div`
  position: absolute;
  left: -85px;
  top: -85px;

  @media (max-width: 992px) {
    display: none;
  }
`;

export default OrderNow;
