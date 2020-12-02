import React, {useState} from "react";
import styled from "styled-components";
import {shadow} from "../../atoms/styles/shadows";
import ExSVG from "../../../images/circle-status-x.inline.svg"

const FeesTableRow = ({ price, i }) => {
    const [visible, setVisible] = useState(1);

    return (
        <>
            {visible && (
                <TableRow key={i}>
                    <TableCell>
                        <IconWrapper onClick={ () => setVisible( !visible ) }>
                            <ExSVG/>
                        </IconWrapper>
                        {price.state}
                    </TableCell>
                    <TableCell>
                        <Price>${price.LLC}</Price>
                    </TableCell>
                    <TableCell>
                        <Price>${price.CCorporation}</Price>
                    </TableCell>
                    <TableCell>
                        <Price>${price.SCorporation}</Price>
                    </TableCell>
                    <TableCell>
                        <Price>${price.nonprofit}</Price>
                    </TableCell>
                </TableRow>
            )}
        </>
    )
};


const TableRow = styled.div`
    display: grid;
    grid-template-columns: auto 160px 160px 160px 160px;
    align-items: center;
    box-shadow: ${shadow.white1};
    background-color: white;
    font-family: 'Avenir';
    font-size: 16px;
    line-height 24px;
    border-radius: 5px;
        
    &:first-child{
        font-family: 'Avenir';
        font-weight: 700;       
    }
    
    &.hidden {
        display: none;
    }
`;

const TableCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 28px;
    border-right: 1px solid #f4f4f4;
    
    &:first-child{
        justify-content: flex-start;
    }
    
    &:last-child{
        border-right: none;
    }
`;

const Price = styled.span`
    padding: 8px 26px;
    border-radius: 20px;
    background-color: #f2f8f3;
`;

const IconWrapper = styled.div`
    margin-right: 15px;
    cursor: pointer;
    padding-top: 5px;
`;

export default FeesTableRow;
