import React from "react"
import styled from "styled-components"
import Item from "./item"
import _ from 'lodash'
import ShowUncompleted from './show-uncompleted-alt'
import TabbedItem from "./tabbed-item";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`;

const Undone = styled.div`
    display: flex;
    flex-direction: column;
`;

const Separator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0 14px;
`;

const Done = styled.div`
    display: flex;
    flex-direction: column;    
    position: relative;
    margin: 20px 0 50px;
    
    &.stacked {
        min-height: ${props => props.total ? ((props.total * 14) + 75) : 200}px;
    }
`;

class Checklist extends React.Component {
    constructor(props) {
        super(props);
        this.getMeta = this.getMeta.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
        this.stackItems = this.stackItems.bind(this);
        this.update = this.update.bind(this);
        this.handler = props.onUpdate ?? null;
        this.state = {
            stack: false,
            completed: 0,
            item: {
                height: 60
            },
            items: props.Items ?? []
        }
    }

    update(currentState) {
        if( this.handler != null && ( this.handler.hasOwnProperty( "_func" ) ) ) {
            this.handler._func.call(this.handler.scope ?? this, currentState);
        }
    }

    getMeta() {
        const { items } = this.state;
        const completed = items.filter(item => item.isCompleted);
        const uncompleted = items.filter(item => !item.isCompleted);
        return {
            completed: {
                items: completed,
                height: completed.length > 0 ? _.sumBy(completed, 'height') : 0,
                length: completed.length
            },
            uncompleted: {
                items: uncompleted,
                height: uncompleted.length > 0 ? _.sumBy(uncompleted, 'height') : 0
            },
        }
    }

    toggleClass(id) {
        const { items } = this.state;
        const updatedItems = items.map(item => ({...item, isCompleted: item.id === id ? !item.isCompleted : item.isCompleted}));
        this.setState({items: updatedItems});
        this.update(updatedItems);
    }

    stackItems(meta) {
        const { items } = this.state
        const completed = items.filter(item => item.isCompleted);

        this.setState(prevState => ({
            stack: !prevState.stack
        }));
    }

    render() {
        const meta = this.getMeta();

        let uInd = 0, cInd = 0, total = this.state.items.length;

        const undoneItems = this.state.items.map((item, index) => {
            if(!item.isCompleted) {
                if ( item.hasOwnProperty("subcontent") ) {
                    return (
                        <TabbedItem id={item.id} index={item.isCompleted ? cInd++ : uInd++} meta={meta} height={item.height}
                                    name={item.name} isCompleted={item.isCompleted} toggleClass={() => this.toggleClass(item.id)}
                                    isStack={this.state.stack} subcontent={item.subcontent} total={total} />
                    )
                }
                else {
                    return (
                        <Item id={item.id} index={item.isCompleted ? cInd++ : uInd++} meta={meta} height={item.height}
                              name={item.name} isCompleted={item.isCompleted} toggleClass={() => this.toggleClass(item.id)}
                              isStack={this.state.stack}/>
                    );
                }
            }
        });

        const doneItems = this.state.items.map((item, index) => {
            if(item.isCompleted) {
                if ( item.hasOwnProperty("subcontent") ) {
                    return (
                        <TabbedItem id={item.id} index={item.isCompleted ? cInd++ : uInd++} meta={meta} height={item.height}
                                    name={item.name} isCompleted={item.isCompleted} toggleClass={() => this.toggleClass(item.id)}
                                    isStack={this.state.stack} subcontent={item.subcontent} total={total} />
                    )
                }
                else {
                    return (
                        <Item id={item.id} index={item.isCompleted ? cInd++ : uInd++} meta={meta} height={item.height}
                              name={item.name} isCompleted={item.isCompleted} toggleClass={() => this.toggleClass(item.id)}
                              isStack={this.state.stack}/>
                    );
                }
            }
        });

        return (
            <Wrapper>
                <Undone>
                    {undoneItems}
                </Undone>
                <Separator>
                    <h4>Done</h4>
                    <ShowUncompleted stackItems={() => this.stackItems(meta)} stacked={this.state.stack} />
                </Separator>
                <Done total={this.state.items.length} className={this.state.stack ? "stacked" : ""}>
                    {doneItems}
                </Done>
            </Wrapper>
        )
    }
}

export default Checklist