import React from "react";
//import {Panel} from "@bumaga/tabs";
import styled from "styled-components";

const PanelWrapper = ({children, layout}) => (
    <PanelBox layout={layout}>
        {children}
    </PanelBox>
);

const PanelBox = styled.article`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	max-width: ${(props) => (props.layout !== "grid" ? "670px" : "")};
	margin-left: auto;
	padding-top: 24px;
`;

export default PanelWrapper;
