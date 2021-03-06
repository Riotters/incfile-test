import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

// components
import Container from "../container";
import { color } from "../atoms/styles/colors";
import Button from "../molecules/buttons/button";
import { Heading } from "../atoms/typography/heading";
import { Paragraph } from "../atoms/typography/paragraph";
import Curve from "../atoms/icons/curve";
import CurveSVG from "../../images/curve-orange.inline.svg";
import Colorbox from "../atoms/boxes/color-box";
import { replace } from "lodash";

const Content = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0 76px 0;

  h1 {
    text-align: center;

    @media screen and (min-width: 769px) {
      font-size: 40px;
    }
    
    @media (max-width: 576px) {
      margin-bottom: 22px;
    }
  }
`;

const WrappBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  max-width: 1024px;
  margin: 0 auto;

  .box {
    padding: 40px;
    border-radius: 5px 50px 50px 5px;
    box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 769px) {
      width: calc(50% - 30px);
    }

    &:first-child {
      border-radius: 50px 5px 5px 50px;
    }
  }
`;

const HomeHeader = ({ content, data }) => (
  <Container>
    <Curve left="40" top="130">
      <CurveSVG />
    </Curve>
    <Content>
      <Heading
        size={content.size}
        template={content.template}
        bottomMargin={80}
        left={content.left}
      >
        {content.title}
      </Heading>
      <WrappBox>
        {content.boxes.map((box, i) => (
          <Colorbox color={color.white} className="box" key={i}>
            <Heading
              size={2}
              template={4}
              bottomMargin={box.bottomMargin}
              left={box.left}
            >
              {parse(box.title)}
            </Heading>
            <Paragraph>
              {replace(box.desc, `[STATE_FEE]`, data.prices?.statefee)}
            </Paragraph>
            {box.externalLink ? (
              <Button
                arrow
                content={box.button}
                theme="primary56"
                width="240"
                externalLink
              />
            ) : (
              <Button
                arrow
                content={box.button}
                theme="primary56"
                width="240"
              />
            )}
          </Colorbox>
        ))}
      </WrappBox>
    </Content>
  </Container>
);

export default HomeHeader;
