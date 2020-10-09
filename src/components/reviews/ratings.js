import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { color } from "../styles/colors"
import StarsSvg from "../../images/stars.svg";

const Wrapper = styled.div`
    display: grid;
    grid-gap: 20px;
    
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 20px;
        grid-auto-flow: column;
    }
    
    @media (min-width: 1200px) {
        grid-template-columns:  1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        grid-gap: 30px;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.bgColor};
    border-radius: 5px;
    min-width: 270px;
`;

const Average = styled.div`
    font-family: "MarkPro", sans-serif;
    font-size: 48px;
    font-weight: bold;
    line-height: 1.17;
    text-align: center;
    color: #ffffff;
    padding: 24px;
`;

const OutOf = styled.div`
    width: 100%;
    line-height: 66px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #f2f8f3;
    font-family: "Avenir", sans-serif;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    color: ${color.grey2};
`;

const RatingPercentages = styled.div`
    display: flex;
    flex-direction: row;
    font-family: "Avenir-Roman", sans-serif;
    font-size: 14px;
    line-height: 1.14;
    margin-bottom: 12px;
    width: 100%;
    color: ${color.grey2};
    
    .label { 
        width: 40px;
        margin-right: 15px;
    }
`;

const PercentagesBar = styled.div`
    height: 16px;
    width: calc(100% - 110px);
    border-radius: 5px;
    background-color: #fcffff;
    position: relative;
    margin-right: 15px;
    
    &:after {
        content: ''; 
        height: 16px;
        border-radius: 5px;
        background-color: #5089fd;
        position: absolute;
        top: 0;
        left: 0;
        width: ${props => props.percent}%;
    }
`;

const OverallRating = styled.div`
    font-family: "Avenir", sans-serif;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    color: ${color.grey1};
    margin-bottom: 32px;
`;

const Stars = styled.div`
    height: 25px;
    width: ${props => props.average * 168 / 5}px;
    background-image: url(${StarsSvg});
    background-position: top left;
    margin-bottom: 46px;
`;

const PercentOf4And5 = styled.div`
    font-family: "MarkPro", sans-serif;
    font-size: 48px;
    font-weight: bold;
    line-height: 1.17;
    text-align: center;
    color: #5089fd;
    margin-bottom: 16px;
    
    + p {
        font-family: "Avenir-Roman", sans-serif;
        font-size: 14px;
        line-height: 1.43;
        text-align: center;
        color: ${color.grey2};
        max-width: 200px;
    }
`;

const Ratings = ({ratings}) => {
    let allCount =  _.sum(Object.values(ratings));
    let average = (_.sum(Object.entries(ratings).map(entry => entry[0] * entry[1])) / allCount);
    let format = (number) => number >= 10000 ? (number/1000).toFixed(1) + 'K' : number;
    return (
        <Wrapper>
            <Box bgColor="#97e0c7">
                <Average>{average.toFixed(1)}</Average>
                <OutOf>Out of 5</OutOf>
            </Box>
            <Box bgColor="#f2f6ff" style={{padding: '20px 20px 0 20px'}}>
                {_.range(1, 6).reverse().map(i => (
                    <RatingPercentages>
                        <span className="label">{i} star.</span>
                        <PercentagesBar percent={ratings[i] / allCount * 100}/>
                        {format(ratings[i])}
                    </RatingPercentages>
                ))}
            </Box>
            <Box bgColor="#fef6ed" style={{paddingTop: '40px'}}>
                <OverallRating>Overall Rating</OverallRating>
                <Stars average={Math.round(average)}/>
            </Box>
            <Box bgColor="#f2f6ff" style={{padding: '24px 28px'}}>
                <PercentOf4And5>{Math.round((ratings['4'] + ratings['5']) / allCount * 100)}%</PercentOf4And5>
                <p>of customers that buy from this merchant give them a 4 or 5</p>
            </Box>
        </Wrapper>
    );
}
export default Ratings;