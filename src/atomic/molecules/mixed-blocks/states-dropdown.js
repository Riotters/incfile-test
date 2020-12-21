import { states } from "../../../components/states";
import Dropdown from "../../molecules/form/dropdown";
import styled from "styled-components";
import {Link} from "gatsby";
import ArrowSVG from "../../../images/arrow-circle.inline.svg";
import React from "react";
import SearchSVG from "../../../images/search.inline.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  width: 100%;
  position: relative;
`;

const InputWrapper = styled.div`
  box-shadow: 0 40px 80px 0 #e6e6e6;
  position: absolute;
  border-radius: 5px;
  width: 100%;
  
  .Dropdown {
    &-root {
      width: 100%; 
    }
    
    &-option {
      padding: 0;
    }
    
    &-control {
      border: none;
      background-color: transparent;    
    }
    
    &-placeholder.is-selected span {
        border-top: 0;
        height: auto;
        padding: 0;
    }
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #fff;
  padding: 0 40px;
  position: relative;
`;

const Icon = styled.div`
  height: 16px;
  width: 16px;
  transform: translateY(-2px);
  margin-right: 15px;
`;

const State = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #f4f4f4;
  padding: 0 40px;
  cursor: pointer;

  span {
    color: #1e1e1e;
    font-family: MarkPro;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
  }
  
  svg {
    top: 0;
    left: 0;
  }

  &:hover {
    svg {
      transform: translateY(-2px);
    }
  }
`;

const Arrow = styled.div`
  width: 32px;
  height: 32px;
  transform: rotate(90deg);

  svg {
    transition: transform 0.3s ease;
  }
`;

const StatesDropdown = ({  }) => {
    const [ selectedState, setSelectedState ] = React.useState("");

    const options = states.state.map((item, i) => (
        <State data-state={item.corporation} key={i}>
            <span>{item.name}</span>
        </State>
    ));

    return (
        <Wrapper>
            <InputWrapper>
                <Box>
                    <Icon>
                        <SearchSVG />
                    </Icon>
                    <Dropdown options={options} className="dropdown" placeholder="Choose state" onChange={(item) => setSelectedState(item.value.props['data-state'])} />
                    <Link to={selectedState}>
                        <Arrow>
                            <ArrowSVG />
                        </Arrow>
                    </Link>
                </Box>
            </InputWrapper>
        </Wrapper>
    );
};

export default StatesDropdown;