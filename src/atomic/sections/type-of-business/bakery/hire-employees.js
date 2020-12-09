import React from "react";
import AccordionWithCounting from "../../../../atomic/organisms/accordion/accordion-with-counting";
import { AccordionCounting } from "../../../../static/type-of-business/laundromat";
import ContentCenter from "../../../../atomic/partials/content-center";
import TextCenterLayout from "../../../../atomic/partials/heading-left";
import styled from "styled-components";
import Links from "../../../../atomic/sections/type-of-business/laundromat/links";
import { Paragraph } from "../../../atoms/typography/paragraph";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import { Link } from "gatsby";

const HireEmployees = () => (
  <BlueContainer>
    <Oval>
      <OvalSvg />
    </Oval>
    <Oval2>
      <OvalSvg />
    </Oval2>

    <ContentCenter contentWidth={770}>
      <TextCenterLayout headlineWidth={770} headline="Hire Laundromat Employees" />
      <Paragraph big mixed={true}>
        If you’re just running your laundromat business solo, you don’t need to worry about employees. If you are hiring people to work for you, you will need to know what to do. See our <Link to="https://www.incfile.com/blog/post/avoid-confusion-when-hiring/">10 tips on hiring employees</Link>.
      </Paragraph>

      <AccordionWithCounting content={AccordionCounting} />
    </ContentCenter>

    <Links />
  </BlueContainer>
);

const BlueContainer = styled.div`
  padding-top: 100px;
  position: relative;
  background-image: linear-gradient(to bottom, #f2f6ff, #ffffff);
`;

const Oval = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const Oval2 = styled.div`
  position: absolute;
  left: 0;
  bottom: 52px;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 570px) {
    width: 570px;
  }
`;
export default HireEmployees;
