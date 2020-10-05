import React from "react";
import styled from "styled-components";
import parse from 'html-react-parser';
import ArrowLink from "../molecules/buttons/text";
import VisibilitySensor from "../../components/VisibilitySensor";
import ContentCenter from "./content-center";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${(props) => (props.bottomMargin ? `${props.bottomMargin}px` : "")};

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

const TextCenterLayout = ({ className, headline, headlineWidth, text, textWidth, linkText, linkUrl, bottomMargin, bottomMarginLG }) => {
  const content = {
    text: linkText,
    url: linkUrl,
  };

  return (
    <Wrapper className={className} headlineWidth={headlineWidth} textWidth={textWidth} bottomMargin={bottomMargin} bottomMarginLG={bottomMarginLG}>
      <ContentCenter>
        {headline && (
          <VisibilitySensor partialVisibility once>
            {({ isVisible }) => <h2 className={isVisible ? "slideUp enter" : "slideUp"}>{parse(headline)}</h2>}
          </VisibilitySensor>
        )}
        {text && (
          <VisibilitySensor partialVisibility once>
            {({ isVisible }) => <p className={isVisible ? "slideUp enter" : "slideUp"}>{parse(text)}</p>}
          </VisibilitySensor>
        )}
        {linkText && (
          <VisibilitySensor partialVisibility once>
            {({ isVisible }) => <ArrowLink content={content} className={isVisible ? "slideUp enter" : "slideUp"} />}
          </VisibilitySensor>
        )}
      </ContentCenter>
    </Wrapper>
  );
};

export default TextCenterLayout;
