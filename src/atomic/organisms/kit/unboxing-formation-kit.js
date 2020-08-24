import React from "react";
import styled from "styled-components";
import Card from "../../molecules/mixed-blocks/top-image-box";
import { color } from "../../atoms/styles/colors";
import Frame from "../../molecules/mixed-blocks/unboxing-frame";
import Image from "../../atoms/image/image_nobase64";
import Accordion from "../accordion/accordion-simple";
import Whitebox from "../../atoms/boxes/white-box";
import Line1SVG from "../../../images/icons/line1.inline.svg";
import Line2SVG from "../../../images/icons/line2.inline.svg";
import Line3SVG from "../../../images/icons/line3.inline.svg";
import Line4SVG from "../../../images/icons/line4.inline.svg";
import Line5SVG from "../../../images/icons/line5.inline.svg";
import Line6SVG from "../../../images/icons/line6.inline.svg";
import Line7SVG from "../../../images/icons/line7.inline.svg";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 32px 0 148px;

  .gatsby-image-wrapper {
    display: none;
    width: 100%;
    max-width: 1050px;
    margin: 0 auto;

    @media (min-width: 768px) {
      display: block;
    }
  }

  .frame {
    &:nth-child(2) {
      top: 0;
      left: 0;
    }
    &:nth-child(3) {
      top: 0;
      left: 300px;
    }
    &:nth-child(4) {
      top: 0;
      left: 600px;
    }
    &:nth-child(5) {
      top: 0;
      left: 900px;
    }
    &:nth-child(6) {
      bottom: 0;
      left: 150px;
    }
    &:nth-child(7) {
      bottom: 0;
      left: 450px;
    }
    &:nth-child(8) {
      bottom: 0;
      left: 750px;
    }
  }
`;

const FramesBoxTop = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 0;
  }

  grid-gap: 30px;

  h4 {
    text-align: center;
  }
`;

const FramesBoxBottom = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  h4 {
    text-align: center;
  }
`;

const New = styled(Whitebox)`
  width: 100%; 
  min-height: 80px;
  padding: 16px;
`;

const Icons = [Line1SVG, Line2SVG, Line3SVG, Line4SVG, Line5SVG, Line6SVG, Line7SVG];

const UnboxingFormationKit = ({ className, content }) => {
  return (
    <Wrapper className={className}>
      {/* {content.map((box, i) => (
            i < 4 ?  <Frame className="frame" content={box} Icon={Icons[i]}/> :  <Frame className="frame" content={box} Icon={Icons[i]} bottom />
        ))} */}
      <FramesBoxTop>
        {content.top.map((box, i) => (
          // <Accordion content={box} />
          <New>
            <span>{box.question}</span>
          </New>
        ))}
      </FramesBoxTop>
      <Image filename="testing" />
      <FramesBoxBottom>
        {content.bottom.map((box, i) => (
          // <Accordion content={box} />
          <New>
            <span>{box.question}</span>
          </New>
        ))}
      </FramesBoxBottom>
    </Wrapper>
  );
};

export default UnboxingFormationKit;
