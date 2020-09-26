import React from "react";
import styled from "styled-components";
import Label from "../../atoms/text-fields/label";
import Link from "../../atoms/links/link";

const Wrapper = styled.div`
  margin-bottom: ${(props) => (props.bottomMargin ? `${props.bottomMargin}px` : "")};

  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .bottom {
    display: flex;
    width: 100%;
    
    ${props => props.contentMarginTop &&
        "margin-top:" + props.contentMarginTop
    }
  }
`;

const InputField = ({ className, children, content, htmlFor, bottomMargin, contentMarginTop}) => (
  <Wrapper className={className} bottomMargin={bottomMargin} contentMarginTop={contentMarginTop}>
      {content &&
          <div className="top">
              {content.label && <Label text={content.label} htmlFor={htmlFor} />}
              {content.link && <Link linkUrl={content.link.url} linkText={content.link.text} bottomMargin="0" />}
          </div>
      }

    <div className="bottom">{children}</div>
  </Wrapper>
);

export default InputField;
