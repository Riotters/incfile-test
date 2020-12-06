import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import ArrowLink from "../molecules/buttons/text";
import VisibilitySensor from "../../components/VisibilitySensor";
import ContentCenter from "./content-center";
import Button from "../molecules/buttons/button";
import {Heading} from "../atoms/typography/heading";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${(props) => (props.bottomMargin ? `${props.bottomMargin}px` : "")};

  @media (min-width: 769px) {
    margin-bottom: ${(props) => (props.bottomMarginMD ? `${props.bottomMarginMD}px` : "")};
  }

  @media (min-width: 992px) {
    margin-bottom: ${(props) => (props.bottomMarginLG ? `${props.bottomMarginLG}px` : "")};
  }

  h2 {
    max-width: ${(props) => (props.headlineWidth ? props.headlineWidth : "610")}px;
    margin: 0 auto 24px;
  }

  p {
    max-width: ${(props) => (props.textWidth ? props.textWidth : "750")}px;
    text-align: center;
    margin: 0 auto 24px;
  }

  a {
    margin: 0 auto 24px;
  }
`;

const TextCenterLayout = ({ className, headline, headlineSize = 2, headlineSizeTemplate = 2, headlineWidth, text, textWidth, linkText, linkUrl, linkOnClick, bottomMargin, bottomMarginMD, bottomMarginLG, useButton = false }) => {
  const content = {
    text: linkText,
    url: linkUrl,
  };

  return (
    <Wrapper className={className} headlineWidth={headlineWidth} textWidth={textWidth} bottomMargin={bottomMargin} bottomMarginMD={bottomMarginMD} bottomMarginLG={bottomMarginLG}>
      <ContentCenter>
        {headline && (
          <VisibilitySensor partialVisibility once>
            {({ isVisible }) => <Heading size={headlineSize} template={headlineSizeTemplate} className={isVisible ? "slideUp enter" : "slideUp"}>{parse(headline)}</Heading>}
          </VisibilitySensor>
        )}
        {text && (
          <VisibilitySensor partialVisibility once>
            {({ isVisible }) => <p className={isVisible ? "slideUp enter" : "slideUp"}>{parse(text)}</p>}
          </VisibilitySensor>
        )}
        {linkText && !useButton && (
          <VisibilitySensor partialVisibility once>
            {({ isVisible }) => <ArrowLink content={content} className={isVisible ? "slideUp enter" : "slideUp"} onClick={linkOnClick} />}
          </VisibilitySensor>
        )}
          {linkText && useButton && (
              <VisibilitySensor partialVisibility once>
                  {({ isVisible }) => <Button content={content} className={isVisible ? "slideUp enter" : "slideUp"} onClick={linkOnClick} arrow theme="primary56" />}
              </VisibilitySensor>
          )}
      </ContentCenter>
    </Wrapper>
  );
};

export default TextCenterLayout;
