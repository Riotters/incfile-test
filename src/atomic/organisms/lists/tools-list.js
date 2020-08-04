import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import WhiteBoxWithToolsList from "../../molecules/lists/white-box-with-tools-list";

const ToolsList = ({tools}) => (
    <ToolsWrapper>
        {tools.map(item => (
            <WhiteBoxWithToolsList list={item.tools} title={item.title} />
        ))}
    </ToolsWrapper>
);

const ToolsWrapper = styled.div`
    width: 100%;
    
    @media (min-width: 830px) {
        width: 830px;
        margin: 100px auto;
    }
`;

ToolsList.propTypes = {
    tools: PropTypes.array.isRequired
};

export default ToolsList;
