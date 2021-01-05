import React from "react";
import styled from "styled-components";
import SearchSVG from "../../../images/search.inline.svg";
import { shadow } from "../../atoms/styles/shadows";

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
	font-family: Engram;
	font-size: 16px;
	line-height: 19px;
	margin-left: 16px;
`;

const Searchbar = () => {
	return (
		<Wrapper>
			<Box>
				<Icon>
					<SearchSVG />
				</Icon>
				<Label for="search">searchbar</Label>
				<Input name="search" id="search" type="text" />
			</Box>
		</Wrapper>
	);
};

export default Searchbar;
