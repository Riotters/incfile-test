import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../styles/colors";
import StarsSvg from "../../images/stars.svg";
import Image from "../../atomic/atoms/image/image_nobase64";
import _ from "lodash";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

const Box = styled.div`
	border-radius: 5px;
	box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;
	padding: 32px;

	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 24px;
		font-family: "Engram-Bold", sans-serif;
		font-size: 12px;
		font-weight: bold;
		letter-spacing: 1px;
		color: ${color.grey2};
	}

	.details {
		text-align: left;
		margin-bottom: 32px;
		font-family: "Engram", sans-serif;
		font-size: 16px;
		line-height: 1.5;
		color: ${color.grey2};
	}

	.content {
		font-family: "Engram";
		font-size: 20px;
		line-height: 1.6;
		color: ${color.grey2};
	}
`;

const Stars = styled.div`
	height: 25px;
	width: ${(props) => (props.stars * 168) / 5}px;
	transform: scale(0.6) translateX(-30%);
	background-image: url(${StarsSvg});
	background-repeat: no-repeat;
`;

const Pagination = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	.button {
		width: 48px;
		height: 48px;
		line-height: 48px;
		font-family: "Engram", sans-serif;
		font-size: 20px;
		font-weight: 900;
		text-align: center;
		color: ${color.grey2};
		margin-right: 14px;
		border-radius: 5px;
		background-color: #ffffff;
		cursor: pointer;

		&.current {
			color: #ffffff;
			background-color: #5089fd;
		}
	}
`;

const Logo = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	width: 186px;
	height: 29px;
`;

const Comments = ({ comments, perPage }) => {
	let [page, setPage] = useState(1);
	return (
		<Wrapper>
			<div style={{ marginBottom: "35px" }}>
				{_.chunk(comments, perPage)[page - 1].map((comment) => (
					<Box>
						<div className="header">
							<Stars stars={comment.stars} />
							<div>{comment.verifiedBuyer && "Verified Buyer"}</div>
						</div>
						<div className="details">
							{comment.date} by {comment.author} ({comment.location})
						</div>
						<div className="content">“{comment.content}”</div>
					</Box>
				))}
			</div>
			<Pagination>
				{_.range(1, Math.ceil(comments.length / perPage) + 1).map((n) => (
					<div
						className={page === n ? "button current" : "button"}
						onClick={() => setPage(n)}
					>
						{n}
					</div>
				))}
			</Pagination>
			<Logo>
				<Image filename="widgetfooter-darklogo-eng" alt="" />
			</Logo>
		</Wrapper>
	);
};

export default Comments;
