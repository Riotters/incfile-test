import React from "react"
import styled from "styled-components"
import { color } from "../styles/colors"

const Input = styled.input`
    display: none;

    &:checked + span {
        background-color: ${color.blue1};
        border-color: ${color.blue1};
        opacity: 1;

        svg {
            stroke-dashoffset: 0;
        }
    }
`;

const Checkmark = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    max-width: 32px;
    max-height: 32px;
    background-color: ${color.grey5};
    border: 1px solid ${color.grey3};
    border-radius: 50%;
    margin-right: 24px;

    svg {
        height: 20px;
        width: 20px;
        fill: none;
        stroke: ${color.white};
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 18;
        stroke-dashoffset: 18;
        transition: all 0.3s ease;
        transition-delay: 0.1s;
        transform: translate3d(0, 0, 0);
        z-index: 99;
    }
`;

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.isChecked
        };

        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {

        return (
            <>
                <Input id={this.props.id} type="checkbox" name={this.props.name} checked={this.state.checked} />
                <Checkmark onClick={this.tick}>
                    <svg viewBox="-1 0 16 12">
                        <polyline points="2 6 4.5 9 10.5 3"></polyline>
                    </svg>
                </Checkmark>
            </>
        );
    }
}

export default Checkbox