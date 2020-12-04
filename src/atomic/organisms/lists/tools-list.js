import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import WhiteBoxWithToolsList from "../../molecules/lists/white-box-with-tools-list";
import {Tools} from "../../../static/tools"

const ToolsList = ({ tools, tab, forcePropsTools = false }) => (
  <ToolsWrapper tab={tab}>
    {(forcePropsTools ? tools : Tools).map((item, index) => (
      <WhiteBoxWithToolsList list={item.tools} title={item.title} key={index} />
    ))}
  </ToolsWrapper>
);

const ToolsWrapper = styled.div`
  width: 100%;

  ${(props) =>
    !props.tab &&
    `@media (min-width: 1000px) {
        width: 830px;
        margin: 100px auto;
    }`}
`;

ToolsList.propTypes = {
  tools: PropTypes.array.isRequired,
};

export default ToolsList;
