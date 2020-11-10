import React from "react";
import styled from "styled-components";
import SearchSVG from "../../../images/search.inline.svg";
import ArrowSVG from "../../../images/arrow-circle.inline.svg";
import { shadow } from "../../atoms/styles/shadows";
import Autosuggest from "react-autosuggest";

const languages = [
  {
    name: "C",
    url: "/start-your-company/",
  },
  {
    name: "Elm",
    url: "/start-your-company/",
  },
  {
    name: "Elmb",
    url: "/start-your-company/",
  },
  {
    name: "Elms",
    url: "/start-your-company/",
  },
  {
    name: "Elmaasa",
    url: "/start-your-company/",
  },
  {
    name: "Elmfdffd",
    url: "/start-your-company/",
  },
];

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
    }
  }
`;

const Icon = styled.div`
  height: 16px;
  width: 16px;
  transform: translateY(-2px);
`;

const Label = styled.label`
  height: 100%;
  flex-grow: 1;
  position: absolute;
  z-index: -1;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  color: #1e1e1e;
  font-family: Avenir;
  font-size: 16px;
  line-height: 19px;
  margin-left: 16px;
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

  span {
    color: #1e1e1e;
    font-family: MarkPro;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
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

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter((lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue);
};

const getSuggestionValue = (suggestion) => suggestion.name;

const renderSuggestion = (suggestion) => (
  <States href={suggestion.url}>
    <State>
      <span>{suggestion.name}</span>
      <Arrow>
        <ArrowSVG />
      </Arrow>
    </State>
  </States>
);

class Searchbar extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
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

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Type a programming language",
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
