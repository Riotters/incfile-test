import React from "react"
import styled from "styled-components"
import Item from "./item"
import _ from 'lodash'
import ShowUncompleted from './show-uncompleted'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`

const Undone = styled.div`
    display: flex;
    flex-direction: column;
`

const Separator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 670px;
`

const Done = styled.div`
    display: flex;
    flex-direction: column;    
    position: relative;
    margin-top: 20px;
`

class Checklist extends React.Component {
    constructor(props) {
        super(props)
        this.getMeta = this.getMeta.bind(this)
        this.toggleClass = this.toggleClass.bind(this)
        this.stackItems = this.stackItems.bind(this)
        this.state = {
            stack: false,
            completed: 0,
            item: {
                height: 60
            },
            items: [
                {id: 1, name: 'Lorem ipsum 1', isCompleted: false, height: 80},
                {id: 2, name: 'Lorem ipsum 2', isCompleted: false, height: 80},
                {id: 3, name: 'Lorem ipsum 3', isCompleted: false, height: 80},
                {id: 4, name: 'Lorem ipsum 4', isCompleted: false, height: 80},
            ]
        }
    }

    getMeta() {
        const { items } = this.state
        const completed = items.filter(item => item.isCompleted)
        const uncompleted = items.filter(item => !item.isCompleted)
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
        const { items } = this.state
        const updatedItems = items.map(item => ({...item, isCompleted: item.id === id ? !item.isCompleted : item.isCompleted}))
        this.setState({items: updatedItems})
    }

    stackItems(meta) {
        //const updatedItems = this.state.items.map(item => ({...item, isCompleted: item.id === id ? !item.isCompleted : item.isCompleted}))
        //console.log(updatedItems);
        const { items } = this.state
        const completed = items.filter(item => item.isCompleted)
        this.setState(prevState => ({
            stack: !prevState.stack
        }))
        if (completed.length > 0) {
            console.log("wieksze od 0") 
            console.log(meta.completed.length)
            console.log(completed[0])
        //} else if (completed.length > 3) {

        } else {
            console.log("0") 
        }
    }

    render() {
        const meta = this.getMeta()
        
        let uInd = 0, cInd = 0

        const items = this.state.items.map((item, index) => (
            <Item id={item.id} index={item.isCompleted ? cInd++ : uInd++} meta={meta} height={item.height} name={item.name} isCompleted={item.isCompleted} toggleClass={() => this.toggleClass(item.id)} isStack={this.state.stack}/>
        ))

        //const itemCountText = this.getItemCountText()

        return (
            <Wrapper>
                <Undone style={{height: `${meta.uncompleted.height}px`}}>
                    {items}
                </Undone>
                <Separator>
                    <h4>Done</h4>
                    <ShowUncompleted stackItems={() => this.stackItems(meta)}>showLess</ShowUncompleted>
                </Separator>
                <Done style={{height: `${meta.completed.height}px`}}>

                </Done>
            </Wrapper>
        )
    }
}

export default Checklist