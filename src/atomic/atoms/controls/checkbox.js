import React from "react";
import styled from "styled-components";
import { color } from "../styles/colors";

const Wrapper = styled.div`
  margin-right: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Input = styled.input`
  display: none;

  &:checked ~ span {
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
  background-color: ${color.grey5};
  border: 1px solid ${color.grey3};
  cursor: pointer;

  svg {
    height: 20px;
    width: 20px;
    fill: none;
    stroke: ${color.orange1};
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

const Label = styled.div`
  margin-left: 16px;
  font-family: Avenir;
  font-size: 16px;
  line-height: 24px;
  color: #7a7a7a;
`;

const Checkbox = ({ className, name, id, checked, onClick, label }) => (
  <Wrapper className={className} onClick={() => onClick(checked)}>
    <Input id={id} type="checkbox" name={name} checked={checked} />
    <Checkmark>
      <svg viewBox="-1 0 16 12">
        <polyline points="2 6 4.5 9 10.5 3"></polyline>
      </svg>
    </Checkmark>
    {label && <Label>{label}</Label>}
  </Wrapper>
);
export default Checkbox;
