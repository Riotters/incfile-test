import React from "react";
import styled from "styled-components";

const SummaryOrder = ({ orderSum }) => <Wrapper>${orderSum}</Wrapper>;

const Wrapper = styled.div`
	font-family: Engram-Bold;
	font-size: 48px;
	text-align: center;
	line-height: 56px;
	color: #1d1d1d;
	margin-bottom: 24px;
`;

export default SummaryOrder;
