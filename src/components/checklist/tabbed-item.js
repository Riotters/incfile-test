import React from "react"
import styled from "styled-components"
import {color} from "../styles/colors"
import {shadow} from "../styles/shadows"
import Checkbox from "./checkbox"
import {usePanelState, useTabState} from "@bumaga/tabs";
import ArrowSVG from "../../images/arrow-circle.inline.svg";
import {motion} from "framer-motion";
import {Paragraph} from "../../atomic/atoms/typography/paragraph";

const Button = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  &.active {
    svg {
      transform: rotate(0deg);
    }
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 40px;
  width: 40px;
  opacity: 0.75;

  svg {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }
`;

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
    const { isActive, onClick } = useTabState();

    return (
        <Button className={cn("accordion-tab", isActive && "active")} onClick={onClick}>
            {children}
        </Button>
    );
};

const panel = {
    hidden: { height: 0, "margin-top": 0 },
    visible: { height: "auto", "margin-top": "20px" },
};

const Panel = ({ children }) => {
    const isActive = usePanelState();

    return (
        <motion.div className="accordion-panel" animate={isActive ? "visible" : "hidden"} transition={{ ease: "easeOut", duration: 0.3 }} variants={panel}>
            {children}
        </motion.div>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: ${color.white};
    box-shadow: ${shadow.white1};
    font-size: 16px; 
    line-height: 24px;
    color: ${color.grey1};
    padding: 24px 24px 24px 80px;
    flex-direction: column;
    cursor: pointer;
    margin-bottom: 8px;
    position: relative;
    border-radius: 5px;
    transition: transform 0.5s, top 0.5s, background-color 0s;

    &.completed {
        color: ${color.grey2};
        text-decoration: line-through;
    }
    
    .accordion-panel {
        overflow: hidden;
    }
    
    &.stacked {
        position: absolute;
        top: ${ props => props.top ? (props.top + "px") : "0" };
        transform: perspective(600px) translateZ(-${ props => props.index ? props.index * 20 : 0 }px);
        z-index: ${props => props.zindex ?? 0};
    }
`;

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const Box = styled.span`
    height: 32px;
    width: 32px;
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
`;

class TabbedItem extends React.Component {
    constructor(props){
      super(props);
      this.getTop = this.getTop.bind(this)
    }

    componentDidMount(){
      const height = this.refs.item.getBoundingClientRect().height
    }

    getTop() {
        const {index} = this.props;

        return index * 14;
    }

    render() {
        const {subcontent, name, id, height, index, isCompleted, toggleClass, meta, isStack, maxWidth, total} = this.props
        let top = this.getTop();
        let invIndex = total - index;

        return (
            <Wrapper className={"item" + (isCompleted ? (isStack ? " completed stacked" : " completed") : "")}
                     ref="item" maxWidth={maxWidth} top={top} index={index} zindex={invIndex}>
                <FlexRow>
                    <Box onClick={toggleClass}>
                        <Checkbox isCompleted={isCompleted} className="circleCheck"/>
                    </Box>
                    <Tab>
                        <FlexRow>
                            <Paragraph bottomMargin={0}>{name}</Paragraph>
                            <Icon>
                                <ArrowSVG />
                            </Icon>
                        </FlexRow>
                    </Tab>
                </FlexRow>
                <Panel>
                    <Paragraph>{subcontent}</Paragraph>
                </Panel>
            </Wrapper>
        )
    }   
}

export default TabbedItem;