import React from "react";
import styled from "styled-components";
import _ from "lodash";

const Table = styled.div`
    display: flex;
    flex-direction: column;
`;

const TableRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
    background-color: #ffffff;
    margin-bottom: 8px;
    padding: 16px 24px;
`;

const Number = styled.div`
    width: 32px;
    height: 32px;
    color: #ffffff;
    background-color: #5089fd;
    border-radius: 32px;
    text-align: center;
    line-height: 32px;
    font-family: "Avenir", sans-serif;
    font-size: 16px;
    font-weight: 900;
    margin-right: 24px;
`;

const StateInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 56px);
`;

const StateInfoHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    font-family: "Avenir", sans-serif;
    font-size: 16px;
    font-weight: 900;
    color: #1d1d1d;
    margin-bottom: 16px;
    position: relative;
`;

const Tooltip = styled.div`
    display: none;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    width: 326px;
    opacity: 0.7;
    border-radius: 8px;
    background-color: #000000;
    right: -102px;
    top: 52px;
    color: #fff;
    z-index: 100;
    padding: 24px;
    
    :before {
        content: '';
        position: absolute;
        top: -5px;
        left: 153px;
        border-bottom: 5px solid #000;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
    }
    
    ul {
        padding-left: 24px;
    
        li {
            font-family: Avenir;
            font-size: 16px;
            font-weight: 900;
        }
    }
`;

const Button = styled.div`
    padding: 4px 32px;
    color: #fd8550;
    font-family: "MarkPro", sans-serif;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    border-radius: 24px;
    border: solid 2px #fd945b;
    cursor: pointer;
     
    &:hover {
        + ${Tooltip} {
            display: flex !important;
        }
    }
`;

const StateInfoProgressBar = styled.div`
    width: 100%;  
    height: 8px;
    border-radius: 4px;
    background-color: #f2f6ff;
    margin-bottom: 12px;
    position: relative;
    
    :after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 8px;
        width: ${(props) => props.percent + '%'};
        border-radius: 4px;
        background-color: #5089fd;
    }
`;

const StatesTable = ({entries}) => {
    const stateLists = (states) =>  states.length < 3 ? [states] : _.chunk(states, Math.ceil(states.length / 2));
    return (
        <Table>
            {entries.map((entry, index) => (
                <TableRow>
                    <Number>{index + 1}</Number>
                    <StateInfo>
                        <StateInfoHeader>
                            <span>{entry.title}</span>
                            <Button>{entry.states.length} States</Button>
                            <Tooltip>
                                {stateLists(entry.states).map(stateList => (
                                    <ul>
                                        {stateList.map(state => <li>{state}</li>)}
                                    </ul>
                                ))}
                            </Tooltip>
                        </StateInfoHeader>
                        <StateInfoProgressBar percent={entry.percent}/>
                    </StateInfo>
                </TableRow>
            ))}
        </Table>
    )
};

export default StatesTable;