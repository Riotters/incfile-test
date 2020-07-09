import React from "react"
import styled from "styled-components"
import Box from "./box"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Undone = styled.div`
    display: flex;
    flex-direction: column;
`

const Done = styled.div`
    display: flex;
    flex-direction: column;    
    position: relative;
    margin-top: 20px;
    height: 320px;
`

class Checklist extends React.Component {
    constructor(props) {
        super(props)
        //this.getMeta = this.getMeta.bind(this)
        this.toggleClass = this.toggleClass.bind(this)
        //this.setItemHeight = this.setItemHeight.bind(this)
        //this.getItemCountText = this.getItemCountText.bind(this)
        this.state = {
            item: {
                height: 60
            },
            items: [
                {id: 1, name: 'Lorem ipsum 1', isCompleted: false, height: 0},
                {id: 2, name: 'Lorem ipsum 2', isCompleted: false, height: 0},
                {id: 3, name: 'Lorem ipsum 3', isCompleted: false, height: 0},
                {id: 4, name: 'Lorem ipsum 4', isCompleted: false, height: 0},
            ]
        }
    }

    componentDidMount() {
        setTimeout(() => this.toggleClass(1), 700)
    }

    toggleClass(id) {
        const updatedItems = this.state.items.map(item => ({...item, isCompleted: item.id === id ? !item.isCompleted : item.isCompleted}))
        this.setState({items: updatedItems})
    }

    render() {

        let uInd = 0, cInd = 0

        const items = this.state.items.map((item, index) => (
            <Box id={item.id} index={item.isCompleted ? cInd++ : uInd++} height={item.height} name={item.name} isCompleted={item.isCompleted} toggleClass={() => this.toggleClass(item.id)} />
        ))

        //const itemCountText = this.getItemCountText()

        return (
            <Wrapper>
                <Undone>
                    {items}
                </Undone>
                <div>
                    <h4>Done</h4>
                </div>
                <Done>

                </Done>
            </Wrapper>
        )
    }
}

export default Checklist