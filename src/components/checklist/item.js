import React from "react";
import styled from "styled-components";
import { color } from "../styles/colors";
import { shadow } from "../styles/shadows";
import Checkbox from "./checkbox";
import ArrowSVG from "../../images/arrow-circle.inline.svg";

const headerMarginBottom = 32;
const descritionMarginBottom = 25;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${color.white};
  box-shadow: ${shadow.white1};
  font-size: 16px;
  line-height: 24px;
  color: ${color.grey1};
  padding: 24px 80px;
  position: relative;
  cursor: pointer;
  margin-bottom: 8px;
  border-radius: 5px;
  transition: all .5s, background-color 0s;
  z-index: 1;

  &.completed {
    color: ${color.grey2};
    text-decoration: line-through;

    &.stacked:not(.last) {
      box-shadow: none;
    }
  }
  
  &.stacked {
    transform: perspective(600px) translateZ(${props => (props.index * -10)}px);
    position: absolute;
    top: ${props => props.index * 10}px;
    z-index: ${ props => props.total - props.index };
  }
  
  @media (max-width: 575px) {
    padding: 24px 24px 64px 80px;
  }
`;

const ItemHead = styled.div`
  transition: all 0.5s;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0;

  &.expanded {
    margin-bottom: ${headerMarginBottom}px;
  }
`;

const ItemDescription = styled.div`
  font-family: "Avenir", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: ${color.grey2};
  overflow: hidden;
  max-height: 0;
  padding-bottom: 0;
  transition: all .5s;

  &.expanded {
    max-height: 2500px;
    padding-bottom: ${descritionMarginBottom}px;
  }
`;

const Box = styled.span`
  height: 32px;
  width: 32px;
  position: absolute;
  top: 36px;
  left: 24px;
  transform: translateY(-50%);
  z-index: 1;
`;

const CollapseButton = styled.div`
  height: 32px;
  width: 32px;
  position: absolute;
  top: 36px;
  right: 24px;
  transform: translateY(-50%);
  
  @media (max-width: 575px) {
    right: unset;
    left: 24px;
    top: 78px;
  }
`;

const CollapseArrow = styled(ArrowSVG)`
  transform: rotate(${(props) => (props.expanded ? "0" : "180")}deg);
`;

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.itemRef = React.createRef();
  }

  handleCollapse = (event) => {
    event.stopPropagation();
    const height = this.itemRef.current.getBoundingClientRect().height + headerMarginBottom + descritionMarginBottom;
    this.setState(
      (prevState) => ({ expanded: !prevState.expanded }),
      () => {
        this.props.onChangeHeight(this.props.id, this.state.expanded ? height : this.props.initHeight);
      }
    );
  };

  shouldBeExpanded = () => {
    return this.state.expanded && !(this.props.isStack && this.props.isCompleted);
  };

  render() {
    const { name, id, initHeight, index, isCompleted, toggleClass, meta, isStack, description, isLastCompleted } = this.props;
    let className = "item ";
    if (isCompleted) className += "completed ";
    if (isCompleted && isStack) className += "stacked ";
    if (isLastCompleted) className += "last";
    return (
      <Wrapper className={isStack && isCompleted ? className + " stacked" : className} ref={this.itemRef} index={index} total={meta.completed.length}>
        <ItemHead className={this.shouldBeExpanded() ? "expanded" : ""} onClick={this.handleCollapse}>
          <Box onClick={function(e) {  toggleClass.call(); e.stopPropagation();  }} className="circleCheck">
            <Checkbox isCompleted={isCompleted} className="circleCheck" />
          </Box>
          <span>{name}</span>
          <CollapseButton>
            <CollapseArrow expanded={this.shouldBeExpanded()} />
          </CollapseButton>
        </ItemHead>
        <ItemDescription className={this.shouldBeExpanded() ? "expanded" : ""}>{description}</ItemDescription>
      </Wrapper>
    );
  }
}

export default Item;
