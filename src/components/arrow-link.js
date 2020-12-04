import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ArrowSVG from "../images/arrow.inline.svg";

const Wrapper = styled(Link)`
  display: flex;
  align-items: baseline;
  text-decoration: none;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  span {
    transition: color 0.3s ease;
    font-weight: 600;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "inherit")};
  }

  &:hover {
    color: #fd8550;

    svg {
      path {
        fill: #fd8550;
      }
    }
  }
`;

const WrapperExternal = styled.a`
  display: flex;
  align-items: baseline;
  text-decoration: none;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  span {
    transition: color 0.3s ease;
    font-weight: 600;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "inherit")};
  }

  &:hover {
    color: #fd8550;

    svg {
      path {
        fill: #fd8550;
      }
    }
  }
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  width: 12px;
  margin-right: 10px;

  svg {
    path {
      transition: fill 0.3s ease;
      fill: #5088fd;
    }
  }
`;

const ArrowLink = ({ children, className, url, externalLink, ...rest }) => (
  <>
    {!externalLink ? (
      <Wrapper to={url ?? "/"} className={className} {...rest}>
        <Arrow>
          <ArrowSVG />
        </Arrow>
        <span>{children}</span>
      </Wrapper>
    ) : (
      <WrapperExternal href={url ?? "#"} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
        <Arrow>
          <ArrowSVG />
        </Arrow>
        <span>{children}</span>
      </WrapperExternal>
    )}
  </>
);
export default ArrowLink;
