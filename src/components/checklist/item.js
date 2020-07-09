import React, { useState } from "react"
import styled from "styled-components"
import { color } from "../styles/colors"
import { shadow } from "../styles/shadows"
import Checkbox from "./checkbox"
import _ from 'lodash'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 670px;
    background-color: ${color.white};
    box-shadow: ${shadow.white1};
    font-size: 16px; 
    line-height: 24px;
    color: ${color.grey1};
    padding: 24px 24px 24px 80px;
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

const Box = styled.span`
    height: 32px;
    width: 32px;
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
`;

class Item extends React.Component{
    constructor(props){
      super(props)
      this.getTop = this.getTop.bind(this)
    }

    componentDidMount(){
      const height = this.refs.item.getBoundingClientRect().height
    }

    componentDidUpdate(){
      const height = this.refs.item.getBoundingClientRect().height
      if(height !== this.props.height){
        console.log(height, this.props.height)
        console.log(this.props.isStack)
      }
    }

    getTop() {
        const {meta, index, isCompleted} = this.props
        const prevHeight = isCompleted ? _.sumBy(meta.completed.items.slice(0, index), 'height') : _.sumBy(meta.uncompleted.items.slice(0, index), 'height')
        const top = isCompleted ? meta.uncompleted.height + prevHeight + 80 : prevHeight;
    
        return top
    }

    render() {
        const {name, id, height, index, isCompleted, toggleClass, meta} = this.props
        let top = this.getTop()

        return (
            <Wrapper className={isCompleted ? "item completed" : "item"} onClick={toggleClass} style={!isCompleted ? { top: `${top}px` } : {top: `${meta.uncompleted.height + 80}px`}} ref="item">
                <Box>
                    <Checkbox isCompleted={isCompleted} className="circleCheck"/>
                </Box>
                {name}
            </Wrapper>
        )
    }   
}

export default Item