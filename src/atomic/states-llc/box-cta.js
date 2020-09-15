import React from 'react';
import styled from 'styled-components'
import parse from 'html-react-parser';

import Button from "../molecules/buttons/button";
import { color } from '../../components/styles/colors'
import { Paragraph } from "../atoms/typography/paragraph"

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
    min-height:300px;
    padding: 40px;
	background: ${(props) => (props.bgColor ? props.bgColor : `${color.white}`)} url(${(props) => props.bgImage}) center right no-repeat;
	background-size: contain;

    .title{
        font-family: MarkPro;
        font-size: clamp(1.5rem, 5vw, 2.2rem);
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
		color: #1d1d1d;
		margin-bottom: 16px;
	}
`

const Content = styled.div`
	width: 100%;

	@media screen and (min-width:769px) {
		max-width:400px;
	}

	.btn-cta{
		display: inline-block;
	}
`

const BoxCTA = ({content, bgColor, bgImage, ...rest}) => (
	<Wrapper bgColor={bgColor} bgImage={bgImage}>
		<Content>
			<div className="title" {...rest}>{parse(content.title)}</div>
			{content.subtitle && 
				<Paragraph mixed={true}>{parse(content.subtitle)}</Paragraph>
			}
			<Button className="btn-cta" content={content.button} theme="primary56" arrow width="auto" margin="16px 0 0 0" marginMD="16px 0 0 0"/>
		</Content>
	</Wrapper>
)

export default BoxCTA;