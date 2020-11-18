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

    .error__info{
        width: 100%;
        height: 16px;
        font-size: 11px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.45;
        letter-spacing: normal;
        color: #fd8550;
        display: block;
        text-align: right;
        margin-top: 4px;
    }
`;

const InputField = ({ className, children, content, htmlFor, bottomMargin, bottomMarginMD, contentMarginTop, bottomDirection, linkOnClick, ...rest}) => (
  <Wrapper className={className} bottomMargin={bottomMargin} bottomMarginMD={bottomMarginMD} contentMarginTop={contentMarginTop} {...rest}>
      {content &&
          <div className="top">
              {content.label && <Label text={content.label} htmlFor={htmlFor} />}
              {content.link && <Link linkUrl={content.link.url} linkText={content.link.text} onClick={linkOnClick} bottomMargin="0" />}
          </div>
      }

    <div className={bottomDirection ?? 'bottom column'}>{children}</div>
  </Wrapper>
);

export default InputField;
