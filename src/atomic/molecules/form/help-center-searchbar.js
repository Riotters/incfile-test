import React from "react";
import styled from "styled-components";
import SearchSVG from "../../../images/search.inline.svg";
import ArrowSVG from "../../../images/arrow-circle.inline.svg";
import { shadow } from "../../atoms/styles/shadows";
import Autosuggest from "react-autosuggest";
import { pages } from "../../../static/research-topics/list";
import { color } from "../../../components/styles/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  width: 100%;
  position: relative;
  box-shadow: ${shadow.white2};
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #fff;
  padding: 0 40px;
  position: relative;

  .react-autosuggest__container {
    width: 100%;
  }

  input {
    height: 100%;
    width: 100%;
    border: none;
    color: #1e1e1e;
    font-family: Avenir;
    font-size: 16px;
    line-height: 19px;
    margin-left: 16px;
  }

  .react-autosuggest {
    &__container {
      width: 100%;
    }

    &__suggestions-container {
      position: absolute;
      width: 100%;
      background-color: #fff;
      left: 0;
      bottom: 0;
      transform: translateY(100%);

      ul {
        list-style: none;
      }

      .afds {
        width: 100%;
        height: 100%;
        background-color: red;
      }

      &--open {
        max-height: 240px;
        overflow-y: auto;
      }
    }
  }
`;

const Icon = styled.div`
  height: 16px;
  width: 16px;
  transform: translateY(-2px);
`;

const States = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const State = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #f4f4f4;
  padding: 0 40px;
  cursor: pointer;

  &:hover {
    svg {
      transform: translateY(-2px);
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span {
    text-align: left;

    &:nth-child(1) {
      color: ${color.orange1};
      font-family: Avenir, sans-serif;
      font-size: 14px;
      line-height: 17px;
    }

    &:nth-child(2) {
      color: #1e1e1e;
      font-family: MarkPro, sans-serif;
      font-size: 16px;
      line-height: 19px;
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

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0 ? [] : pages.filter((el) => el.text.split(" ").some((term) => term.toLowerCase().slice(0, inputLength) === inputValue));
};

const getSuggestionValue = (suggestion) => suggestion.text;

const renderSuggestion = (suggestion) => (
  <States href={suggestion.url}>
    <State>
      <TextWrapper>
        <span>{suggestion.header}</span>
        <span>{suggestion.text}</span>
      </TextWrapper>
      <Arrow>
        <ArrowSVG />
      </Arrow>
    </State>
  </States>
);

class Searchbar extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "",
      value,
      onChange: this.onChange,
    };

    return (
      <Wrapper>
        <Box>
          <Icon>
            <SearchSVG />
          </Icon>
          <Autosuggest suggestions={suggestions} onSuggestionsFetchRequested={this.onSuggestionsFetchRequested} onSuggestionsClearRequested={this.onSuggestionsClearRequested} getSuggestionValue={getSuggestionValue} renderSuggestion={renderSuggestion} inputProps={inputProps} />
        </Box>
      </Wrapper>
    );
  }
}

export default Searchbar;
