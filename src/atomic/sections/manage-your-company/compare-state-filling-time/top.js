import styled from "styled-components";
import React from "react";
import Container from "../../../container";
import ContentCenter from "../../../partials/content-center";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import OvalSVG from "../../../../images/ovals/compare-state-filling-time-top-top-right.inline.svg";
import Oval from "../../../atoms/icons/oval";

const Wrapper = styled.section`
    position: relative;
    padding: 180px 0 80px;
    
    h1, h2, p {
        text-align: center;
    }
`;

const Top = ({ className, content, ovalTop }) => (
      <Wrapper>
          <Oval top={ovalTop ?? "13"} right="0" width={341} height={192}>
              <OvalSVG />
          </Oval>
          <Container>
              <ContentCenter>
                  {content.header && (<Heading size={1} maxWidth={700}>{content.header}</Heading>)}
                  {content.text && (<Paragraph big maxWidth={700}>{content.text}</Paragraph>)}
              </ContentCenter>
          </Container>
      </Wrapper>
);

export default Top;