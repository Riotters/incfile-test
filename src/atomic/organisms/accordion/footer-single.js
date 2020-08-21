import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

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

const FooterSingle = ({ isOpen, handleClick, content }) => (
    <>
        {content && (
            <FooterItem>
                {content.header && (
                    <button onClick={handleClick}>
                        <h4>{content.header}</h4>
                    </button>
                )}
                {content.list && (
                    <List isOpen={isOpen}>
                        {content.list.map(item => (
                            <li>
                                <Link to={item.url}>{item.text}</Link>
                            </li>
                        ))}
                    </List>
                )}
            </FooterItem>
        )} 
    </> 
)

export default FooterSingle