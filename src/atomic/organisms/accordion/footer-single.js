import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

const List = styled.ul`
    display: ${props => props.isOpen ? "block" : "none"};

    @media(min-width: 992px) {
        display: block;
    }
`;

const FooterSingle = ({ isOpen, handleClick, content }) => (
    <>
        {content && (
            <div>
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
            </div>
        )} 
    </> 
)

export default FooterSingle