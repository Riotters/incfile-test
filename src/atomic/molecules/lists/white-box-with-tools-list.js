import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ToolBox from "../../atoms/boxes/tool-box";
import {shadow} from "../../atoms/styles/shadows";
import {color} from "../../atoms/styles/colors";

const WhiteBoxWithToolsList = ({title, list}) => (
    <BoxWrapper>
        <TitleBox>
            {title}
        </TitleBox>
        <ToolsBox>
            {list.map(item => (
                <ToolBox title={item} />
            ))}
        </ToolsBox>
    </BoxWrapper>
);

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 28px 28px 13px 28px;
    background-color: white;
    box-shadow: ${shadow.white1};
    border-radius: 15px;
    margin: 0 15px 15px;
    
    @media (min-width: 1200px) {
        flex-direction: row;
    }
}
`;

const TitleBox = styled.div`
    font-family: Avenir-Roman, sans-serif;
    width: 220px;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 15px;
    text-align: center;
    color: ${color.grey1};
    
    @media (min-width: 1200px) {
        text-align: left;
        padding-right: 30px;
    }
`;

const ToolsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    @media (min-width: 1200px) {
        display: block;
    }
`;

WhiteBoxWithToolsList.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
};

export default WhiteBoxWithToolsList;
