import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import CenterGrid from "../../../partials/center-grid";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import BoxedButton from "../../../molecules/buttons/boxed";

const Tools = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 120px;
  background-color: ${color.blue3};
`;

const colors = [color.green3, color.red3, color.red3, color.yellow3, color.babyblue3, color.orange3]
const icons = ["corporation-state-information", "s-corp-tax-calculator-01", "entity-comparison-chart", "state-filling-fees", "ongoing-filling-requirements-02", "clock-691"]

const ToolsSection = ({ className, content }) => (
    <Tools className={className}>
        <Oval className="oval" height="720" width="720" top="0" right="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter headline={content.header} headlineWidth="700" text={content.text} bottomMargin="80" />
        <CenterGrid columnsSM="1" columnsMD="2">
            {content.buttons.map((button, i) => (
                <BoxedButton content={button} icon={icons[i]} iconColor={colors[i]} />
            ))}
        </CenterGrid>
    </Tools>
);
  
export default ToolsSection;