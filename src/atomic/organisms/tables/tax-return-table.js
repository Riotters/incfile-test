import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Whitebox from "../../atoms/boxes/white-box-li";
import Circle from "../../atoms/icons/circle";

const Wrapper = styled.ul`
    width: 100%;
    list-style: none;

    li {
        display: flex;
        margin-bottom: 8px;
        padding: 24px;

        span {
            background-color: ${color.blue1};
            color: ${color.white};
            margin-right: 24px;
        }

        p {
            display: flex;
            align-items: center;
            min-height: 32px;
            font-size: 16px;
            line-height: 24px;
            color: ${color.black};
            padding: 0;
        }
    }
`

const TaxReturnTable = ({ className, content }) => {
  return (
    <Wrapper className={className}>

    </Wrapper>
  )
}

export default TaxReturnTable;
