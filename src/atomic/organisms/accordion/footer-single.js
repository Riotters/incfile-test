import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import DropdownSVG from "../../../images/dropdown.inline.svg";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    min-width: 185px;

    @media (min-width: 769px) {
      margin-top: 0;
    }

    @media (min-width: 992px) {
      padding-right: 15px;
    }

    &:last-child {
      padding-right: 0;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15px;
        width: 15px;
        margin-top: 10px;

        @media(min-width: 992px) {
            display: none;
        }

        svg {
            transform: ${props => props.isOpen ? "scale(-1)" : "scale(1)"};
        }
    }
`;

const FooterItem = styled.div`
    button {
        background-color: transparent;
        border: 0;
        padding: 0;
        margin-top: 10px;
        margin-bottom: 10px;

        @media (min-width: 992px) {
            margin-top: 0;
            margin-bottom: 24px;
        }
    }

    h4 {
        color: #757575;
        font-family: MarkPro;
        font-size: 16px;
        letter-spacing: 1px;
        line-height: 14px;
        text-transform: uppercase;
        border-top: 1px solid #f4f4f4;

        @media (min-width: 992px) {
            font-size: 12px;
            letter-spacing: 1px;
            border-top: none;
            opacity: 0.9;
        }
    }
`;

const List = styled.ul`
    display: ${props => props.isOpen ? "block" : "none"};
    list-style: none;

    @media(min-width: 992px) {
        display: block;
    }

    li {
        a {
          text-decoration: none;
          color: #797a79;
          font-family: Avenir;
          font-size: 14px;
          line-height: 17px;
          transition: color 0.3s ease;
  
          &:hover {
            color: #fd8550;
          }
        }
    }
`;

const FooterSingle = ({ handleClick, content }) => {
    const [menu, showMenu] = useState(false);

    function handleClick() {
        showMenu(!menu)
    }

    return (
        <Wrapper isOpen={menu}>
            {content && (
                <FooterItem>
                    {content.header && (
                        <button onClick={handleClick}>
                            <h4>{content.header}</h4>
                        </button>
                    )}
                    {content.list && (
                        <List isOpen={menu}>
                            {content.list.map(item => (
                                <li>
                                    <Link to={item.url}>{item.text}</Link>
                                </li>
                            ))}
                        </List>
                    )}
                </FooterItem>
            )}
            <span>
                <DropdownSVG /> 
            </span>
        </Wrapper> 
    )
}

export default FooterSingle