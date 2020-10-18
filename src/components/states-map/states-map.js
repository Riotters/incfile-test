import React from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { navigate } from "gatsby";
import { MapData } from "./map-data";
import { MapLabels } from "./map-labels";
import { MapLabelsCorporations } from "./map-labels-corporations";
import ArrowIcon from "../../images/arrow-circle.inline.svg";
import { color } from "../../atomic/atoms/styles/colors";
import Curve from "../../atomic/atoms/icons/curve";
import CurveSVG from "../../images/curves/top-left-bottom-right.inline.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position: relative;

  & > svg {
    cursor: pointer;
    polygon:hover,
    path:hover {
      fill: #5089fd;
      stroke: #5089fd;
      stroke-width: 2.339;
    }
  }
`;

const StyledReactTooltip = styled(ReactTooltip)`
  &.show {
    opacity: 1;
    box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
    border-radius: 5px;
  }
`;

const TooltipContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  font-family: "Avenir-Roman", sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #4e4e4e;
  opacity: 1;
  pointer-events: all;

  > p {
    margin-right: 32px;
  }
`;

const StyledArrowIcon = styled(ArrowIcon)`
  cursor: pointer;
  transform: rotate(90deg);
`;

const StatesMap = ({ corporations }) => {
  return (
    <Wrapper>
      <Curve top="55" right="-5" color={color.blue1}>
        <CurveSVG />
      </Curve>
      <svg width="962px" height="648px" viewBox="0 0 962 648" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Map</title>
        <g id="Map" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
          <g id="Group-2" fill="#FDFDFF" stroke="#BBBBBC">
            {MapData.map((element) => {
              let attrs = {
                id: element.id,
                "data-for": "mapTooltip",
                //"data-event": "click",
                "data-event": "mouseenter",
                "data-tip": corporations ? MapLabelsCorporations[element.id] : MapLabels[element.id],
                onClick: () => {
                  navigate(`/${corporations ? MapLabelsCorporations[element.id].replace(/\s+/g, "-").toLowerCase() : MapLabels[element.id].replace(/\s+/g, "-").toLowerCase()}/`);
                },
              };
              if (element.tag === "polygon") attrs.points = element.points;
              else if (element.tag === "path") attrs.d = element.points;
              return React.createElement(element.tag, attrs);
            })}
          </g>
        </g>
      </svg>
      <StyledReactTooltip
        id="mapTooltip"
        getContent={(dataTip) => (
          <TooltipContent>
            <p>{dataTip}</p>
            <StyledArrowIcon />
          </TooltipContent>
        )}
        effect="solid"
        place="right"
        type="light"
        //globalEventOff="click"
        globalEventOff="mouseout"
      />
    </Wrapper>
  );
};

export default StatesMap;
