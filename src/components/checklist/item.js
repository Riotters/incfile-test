import React, { useState } from "react"
import styled from "styled-components"
import { color } from "../styles/colors"
import { shadow } from "../styles/shadows"
import Checkbox from "./checkbox"
import _ from 'lodash'
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
    transition: all 0.5s, background-color 0s;
    position: absolute;
    z-index: 1;

    &.completed {
        color: ${color.grey2};
        text-decoration: line-through;
    }
`

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
    transition: all 0.5s;
    font-family: "Avenir-Roman", sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: ${color.grey2};
    overflow: hidden;
    max-height: 0;
    padding-bottom: 0;
    
    &.expanded {
        max-height: 100px;
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
`;

const CollapseButton = styled.div`
    height: 32px;
    width: 32px;
    position: absolute;
    top: 36px;
    right: 24px;
    transform: translateY(-50%);
`

const CollapseArrow = styled(ArrowSVG)`
    transform: rotate(${props => props.expanded ? '0' : '180'}deg);
`;

class Item extends React.Component{
    constructor(props){
      super(props)
      this.state = {expanded: false}
    }

    getTop = () => {
        const {meta, index, isCompleted, isStack} = this.props
        const prevHeight = isCompleted ? _.sumBy(meta.completed.items.slice(0, index), 'height') : _.sumBy(meta.uncompleted.items.slice(0, index), 'height')
        const top = !isStack ? (isCompleted ? meta.uncompleted.height + prevHeight + 80 : prevHeight) : (isCompleted ? meta.uncompleted.height + 80 : prevHeight);
        return top
    }

    handleCollapse = (event) => {
        event.stopPropagation();
        const height = this.refs.item.getBoundingClientRect().height + headerMarginBottom + descritionMarginBottom + this.props.initHeight;
        this.setState(prevState => ({expanded: !prevState.expanded}), () => {
            this.props.onChangeHeight(this.props.id, this.state.expanded ? height : this.props.initHeight);
        });
    }

    shouldBeExpanded = () =>  {
        return this.state.expanded && !(this.props.isStack && this.props.isCompleted);
    }

    render() {
        const {name, id, initHeight, index, isCompleted, toggleClass, meta, isStack, description} = this.props
        let top = this.getTop()
        return (
            <Wrapper className={isCompleted ? "item completed" : "item"} onClick={toggleClass} style={{top: `${top}px`}} ref="item">
                <ItemHead className={this.shouldBeExpanded() ? 'expanded' : ''}>
                    <Box>
                        <Checkbox isCompleted={isCompleted} className="circleCheck"/>
                    </Box>
                    {name}
                    <CollapseButton onClick={this.handleCollapse}>
                        <CollapseArrow expanded={this.shouldBeExpanded()}/>
                    </CollapseButton>
                </ItemHead>
                <ItemDescription className={this.shouldBeExpanded() ? 'expanded' : ''}>
                    {description}
                </ItemDescription>
            </Wrapper>
        )
    }   
}

export default Item