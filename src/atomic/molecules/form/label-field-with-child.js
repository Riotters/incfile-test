import React from "react";
import styled from "styled-components";
import Label from "../../atoms/text-fields/label";
import Link from "../../atoms/links/link";

const Wrapper = styled.div`
    margin-bottom: ${(props) => (props.bottomMargin ? `${props.bottomMargin}px` : "")};

    &.hide{
        display:none;
    }

    @media (min-width: 769px){
        margin-bottom: ${(props) => (props.bottomMarginMD ? `${props.bottomMarginMD}px` : "")};
    }

    .top {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .bottom {
        display: flex;
        width: 100%;
        &.column{
            flex-flow:column;
        }
        &.row{
            flex-flow:row;
        }
        
        ${props => props.contentMarginTop &&
            "margin-top:" + props.contentMarginTop
        }
    }
`;

const InputField = ({ className, children, content, htmlFor, bottomMargin, bottomMarginMD, contentMarginTop, bottomDirection, ...rest}) => (
  <Wrapper className={className} bottomMargin={bottomMargin} bottomMarginMD={bottomMarginMD} contentMarginTop={contentMarginTop} {...rest}>
      {content &&
          <div className="top">
              {content.label && <Label text={content.label} htmlFor={htmlFor} />}
              {content.link && <Link linkUrl={content.link.url} linkText={content.link.text} bottomMargin="0" />}
          </div>
      }

    <div className="bottom" class={bottomDirection ?? 'bottom column'}>{children}</div>
  </Wrapper>
);

export default InputField;
