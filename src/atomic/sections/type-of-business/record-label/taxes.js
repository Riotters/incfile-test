import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import Adventages from "../../../../components/adventages";
import { color } from "../../../../components/styles/colors";
import { shadow } from "../../../../components/styles/shadows";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-babyblue2.inline.svg";
import CurveSvg from "../../../../images/curve-babyblue-1.inline.svg";
import { gradient } from "../../../atoms/styles/colors";

const Taxes = () => (
  <Wrapper>
    <Oval>
      <OvalSvg />
    </Oval>

    <Service>
      <TextCenterLayout
        headlineWidth={770}
        textWidth={770}
        headline="Maintaining Your Record Label Business"
        text="There are certain forms and legalities you need to follow to keep your record label business in good standing."
      />

      <Container>
        <AdventagesBox>
          <CurveWrapper>
            <CurveSvg />
          </CurveWrapper>
          <Adventages
            style={{ textAlign: "center" }}
            url={`/manage-your-company/annual-report`}
            urlText={`Annual Report`}
            circleText={`1`}
            headline={`File an Annual Report`}
            text={`Depending on the state you’re located in, you will probably have to file a report every year. This report tells the state about any major changes to your business, and we can file your annual report on your behalf.`}
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
          />

          <Adventages
            style={{ textAlign: "center" }}
            circleText={`2`}
            headline={`Pay estimated taxes`}
            text={`You will be expected to pay estimated taxes on what you plan to earn in the current business year. Typically, you will need to pay estimated taxes in April, June, September and January (of the following year).`}
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
          />

          <Adventages
            style={{ textAlign: "center" }}
            circleText={`3`}
            headline={`Renew Business Permits and Licenses`}
            text={`Your federal, state, regional and city licenses and permits may need to be renewed on a regular basis, typically once a year.`}
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
          />

          <Adventages
            style={{ textAlign: "center" }}
            circleText={`4`}
            headline={`File your taxes`}
            text={`You will need to file your taxes once a year.`}
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
          />

          <Adventages
            style={{ textAlign: "center" }}
            circleText={`5`}
            headline={`Pay payroll and sales taxes`}
            text={`If applicable, you will need to make payroll and sales tax payments on a regular basis.`}
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
          />

          <Adventages
            style={{ textAlign: "center" }}
            circleText={`6`}
            headline={`Prepare your taxes`}
            text={`You will need to work with your accountant to prepare all the taxes you need to pay.`}
            circlePosition="center"
            circleBackgroundColor={color.blue1}
            circleBackgroundShadow={shadow.blue1}
          />
        </AdventagesBox>
      </Container>
    </Service>
  </Wrapper>
);

const Wrapper = styled.div`
  background-image: ${gradient.babyblue3};
  padding-bottom: 0px;
  padding-top: 100px;
  position: relative;
  overflow: hidden;
`;

const Service = styled.div`
  padding-top: 64px;
`;

const AdventagesBox = styled.div`
  display: grid;
    grid-gap: 10px;
    grid-template-columns: 100%;
    justify-content: center;
    column-gap: 30px;
    row-gap: 30px;
    margin-top: 76px;
    margin-bottom: 76px;; 
    
    @media (min-width: 490px){
        grid-template-columns: 470px;
    }
    
    @media (min-width: 992px){
        grid-template-columns: 470px 470px;
    }
`;

const Oval = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const CurveWrapper = styled.div`
  position: absolute;
  right: -15px;
  top: -85px;

  @media (max-width: 970px) {
    display: none;
  }
`;

export default Taxes;
