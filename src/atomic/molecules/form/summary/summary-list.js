import React from "react";
import styled from "styled-components";
import {color} from "../../../atoms/styles/colors";

const SummaryList = ({list}) => (
    <Wrapper>

        <ListWrapper>
            {list.map(item => {

                if (isNaN(item.price)) {
                    item.price = 0;
                }

                return (
                    <ListPosition>
                        <Description>{item.description}</Description>
                        <Price>{item.price}$</Price>
                    </ListPosition>
                )
            })}
        </ListWrapper>

        <TotalWrapper>
            <Description>Total</Description>
            <Price bold>{TotalSum(list)}$</Price>
        </TotalWrapper>

    </Wrapper>
);

function TotalSum(items) {
    let total = 0;

    if (items.length > 0) {
        items.map(item => {

            if (isNaN(item.price)) {
                item.price = 0;
            }

            return total += item.price;
        })
    }

    return total;
}

const Wrapper = styled.div`
    margin-bottom: 32px;
`;

const ListWrapper = styled.div`
    border-bottom: 1px solid ${color.grey4};
    margin-bottom: 24px;
`;

const ListPosition = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`;

const Description = styled.div`
    font-family: Avenir-Roman;
    color: ${color.grey1};
    font-size: 16px;
    line-height: 24px;
`;

const Price = styled.div`
    font-family: ${props => (props.bold ? "Avenir-Heavy" : "Avenir-Roman")};
    color: ${color.grey1};
    font-size: 16px;
    line-height: 24px;
`;

const TotalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${color.grey4};
    padding-bottom: 24px;
`;

export default SummaryList;
