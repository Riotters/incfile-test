import React from "react"
import styled from "styled-components"
import ArrowSVG from "../images/arrow.inline.svg"

const Wrapper = styled.a`
    display: flex;
    align-items: baseline;
    text-decoration: none;
    margin-bottom: 15px;

    &:last-child{
        margin-bottom: 0;
    }

    span {
        transition: color 0.3s ease;
        font-weight: 600;
        font-size: ${props => (props.fontSize ? props.fontSize : "initial")};
    }

    &:hover {
        color: #fd8550;

        svg {
            path {
                fill: #fd8550;
            }
        }
    }
`

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
`

const ArrowLink = ({ children, className, url, ...rest }) => (
  <Wrapper href={url ?? '#'} className={className} {...rest}>
    <Arrow>
      <ArrowSVG />
    </Arrow>
    <span>{children}</span>
  </Wrapper>
)
export default ArrowLink
