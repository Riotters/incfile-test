import React, { component, Component } from "react"
import Dropdown from 'react-dropdown';
//import 'react-dropdown/style.css';
import styled from "styled-components"
import { color } from "../styles/colors"
import DropdownSVG from "../../images/dropdown.inline.svg"

const options = [
    'Option 1', 'Option 2', 'Option 3'
];

const Wrapper = styled.div`
    position: relative;

    .Dropdown {
        &-root {
            position: relative;
            min-width: 227px;
            font-family: Avenir, sans-serif;
            font-size: 16px;
            line-height: 24px;
            border: 1px solid ${color.grey3};
            border-radius: 5px;

            &.is-open {
                border-radius: 5px 5px 0 0;
            }
        }

        &-control {
            position: relative;
            overflow: hidden;
            background-color: ${color.grey5};
            border-radius: 5px;
            font-weight: 400;
            color: ${color.black}; 
            outline: none;
            padding: 12px 32px 12px 24px;
            transition: all 200ms ease;
            cursor: pointer;
        }

        &-menu {
            background-color: ${color.grey5};
            margin-top: -1px;
            max-height: 200px;
            overflow-y: auto;
            width: 100%;
            z-index: 1000;
            -webkit-overflow-scrolling: touch;
            z-index: 999;
        }

        &-option {
            color: ${color.grey1};
            cursor: pointer;
            display: block;
            padding: 12px 24px;

            &:hover {
                background-color: ${color.blue3};
                color: ${color.grey1};
            }

            &.is-selected {
                background-color: ${color.blue3};
                color: ${color.grey1};
            }
        }
    }

    svg {
        position: absolute;
        top: 25px;
        right: 16px;
        transform: translateY(-50%);
        pointer-events: none;
    }
`;

class Drop extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selected: ''
        }
        this._onSelect = this._onSelect.bind(this)
    }

    _onSelect (option) {
        this.setState({selected: option})
    }

    render () {
        const defaultOption = this.state.selected;
    
        return (
            <Wrapper>
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Text" />
                <DropdownSVG />
            </Wrapper>
        )
    }
}

export default Drop