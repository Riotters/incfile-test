import React from "react";
import {useTabState} from "@bumaga/tabs";
import styled from "styled-components";

const TabHeading = ({title, filename, children, ...props}) => (
    <TabsWrapper className={props.isVisible ? "slideUp enter" : "slideUp"} layout={props.layout}>
        {console.log(props)}
        <Sticky layout={props.layout} columns={props.columns}>
            {children}
        </Sticky>
    </TabsWrapper>
);

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 769px) {
    max-width: ${props => (props.layout !== "grid" ? "40%" : "")};
  }

  @media (min-width: 1200px) {
    max-width: ${props => (props.layout !== "grid" ? "370px" : "")};
  }
`

const Sticky = styled.div`
  display: ${props => (props.layout === "grid" ? "grid" : "flex")};
  flex-direction: ${props => (props.layout !== "grid" ? "column" : "")};
  grid-template-columns: ${props => (props.columns ? `repeat(${props.columns}, 1fr)` : "")};
  grid-gap: ${props => (props.layout === "grid" ? "30px" : "")};
  position: ${props => (props.layout !== "grid" ? "sticky" : "")};
  top: 100px; 
`

export default TabHeading;

TabHeading.propTypes = {};

TabHeading.defaultProps = {};
