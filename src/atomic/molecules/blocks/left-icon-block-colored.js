import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.div`
    background-color: ${(props) => (props.color ? props.color : "")};
    ${(props) =>
			props.hasBorderRadius && "border-radius:" + props.borderRadiusValue + ";"}
    padding: ${(props) => (props.Icon ? props.paddingValue : "40px")};
    position: relative;

    h4 {
        padding-bottom: ${(props) => (props.Icon ? "16px" : "24px")};
    }

    p {
        font-size: 16px;
        line-height: 24px;
        color: ${color.grey1};
        padding-bottom: 0;
    }

    ul {
        list-style: none;

        li {
            font-family: Avenir, sans-serif;
            font-size: 16px;
            line-height: 24px;
            color: #63666E;
            padding-left: 26px;
            position: relative;

            &::before {
                content: '';
                height: 4px;
                width: 4px;
                background-color: ${(props) =>
									props.dotsColor ? props.dotsColor : ""};
                border-radius: 50%;
                position: absolute;
                top: 9px;
                left: 6px;
            }

            &:not(:last-child) {
                margin-bottom: 12px;
            }
        }
    }

    svg {
        position: absolute;
        left: ${(props) => props.iconLeftPosition};
        top: ${(props) => props.iconTopPosition};
    }
`;

const Colorbox = ({
	className,
	color,
	Icon,
	dotsColor,
	content,
	hasBorderRadius,
	borderRadiusValue,
	paddingValue,
	iconLeftPosition,
	iconTopPosition,
	paragraphHeader,
	style,
}) => {
	return (
		<Wrapper
			style={style}
			className={className}
			color={color}
			Icon={Icon}
			dotsColor={dotsColor}
			iconLeftPosition={iconLeftPosition}
			iconTopPosition={iconTopPosition}
			paddingValue={paddingValue}
			hasBorderRadius={hasBorderRadius}
			borderRadiusValue={borderRadiusValue}
		>
			{Icon && <Icon />}
			{content.header &&
				(!paragraphHeader ? (
					<h4>{content.header}</h4>
				) : (
					<p
						style={{
							marginBottom: "24px",
							fontWeight: "bold",
							fontSize: "20px",
							lineHeight: "28px",
							color: "#1D1D1D",
						}}
					>
						{content.header}
					</p>
				))}
			{content.text && <p>{content.text}</p>}
			{content.list && (
				<ul>
					{content.list.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
			)}
		</Wrapper>
	);
};

Colorbox.defaultProps = {
	hasBorderRadius: true,
	borderRadiusValue: "5px 50px 50px 5px",
	paddingValue: "40px 40px 40px 112px",
	iconTopPosition: "inherit",
	iconLeftPosition: "44px",
};

export default Colorbox;
