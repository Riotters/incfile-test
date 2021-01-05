import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import SearchSVG from "../images/search.inline.svg";
import ArrowSVG from "../images/arrow-circle.inline.svg";
import { states } from "./states";

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
	overflow: hidden;
	width: 100%;
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

const States = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const State = styled(Link)`
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
		font-family: Engram-Bold;
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

const Searchbar = () => {
	const [display, setDisplay] = useState();
	const [search, setSearch] = useState("");
	const [results, setResults] = useState([]);

	const handleChange = (e) => {
		setSearch(e.target.value);
		setDisplay(e.target.value.length >= 1 ? true : false);
	};

	useEffect(() => {
		const searchResults = states.state.filter((state) =>
			state.name.toLowerCase().includes(search.toLowerCase())
		);
		setResults(searchResults);
	}, [search]);

	return (
		<Wrapper>
			<InputWrapper>
				<Box>
					<Icon>
						<SearchSVG />
					</Icon>
					<Label for="search">searchbar</Label>
					<Input
						value={search}
						onChange={handleChange}
						name="search"
						id="search"
						type="text"
						autoComplete="off"
						placeholder="Type to find the right state"
					/>
				</Box>
				{display && (
					<States>
						{results.slice(0, 3).map((item) => (
							<State to={item.corporation}>
								<span>{item.name}</span>
								<Arrow>
									<ArrowSVG />
								</Arrow>
							</State>
						))}
					</States>
				)}
			</InputWrapper>
		</Wrapper>
	);
};
export default Searchbar;
