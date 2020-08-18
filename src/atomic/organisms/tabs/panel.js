import React from "react";
import {Panel} from "@bumaga/tabs";
import styled from "styled-components";

const PanelWrapper = ({children, isVisible, layout, panelNo}) => (
    <Panel>
        <PanelBox
            className={
                isVisible ? "slideUp enter panel" + panelNo : "slideUp panel" + panelNo
            }
            layout={layout}
        >
            {children}
        </PanelBox>
    </Panel>
);

const PanelBox = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: ${props => (props.layout !== "grid" ? "670px" : "")};
  margin-left: auto;
  padding-top: 24px;

  h3 {
    margin-bottom: 48px;
  }
`


export default PanelWrapper;
