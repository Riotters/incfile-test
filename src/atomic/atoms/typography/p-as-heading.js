import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {color} from "../styles/colors";

const templateStyle = (template) => {
    switch (template) {
        case 1: {
            return `
                font-family: MarkPro;
                font-size: 40px;
                line-height: 48px;

                @media (min-width: 769px) {
                    font-size: 48px;
                    line-height: 56px;
                }
            `;
        }
        case 2: {
            return `
                font-family: MarkPro;
                font-size: 32px;
                line-height: 40px;

                @media (min-width: 769px) {
                    font-size: 40px;
                    line-height: 48px;
                }
            `;
        }
        case 3: {
            return `
                font-family: MarkPro;
                font-size: 24px;
                line-height: 32px;
            `;
        }
        case 4: {
            return `
                font-family: Avenir;
                font-weight: 900;
                font-size: 20px;
                line-height: 28px;
            `;
        }
        case 5: {
            return `
                font-family: MarkPro;
                font-size: 16px;
                line-height: 24px;
            `;
        }
        case 6: {
            return `
                font-family: MarkPro;
                font-size: 12px;
                line-height: 1;
            `;
        }
    }
};

const HeadingWrapper = styled.p`
	margin-top: ${(props) => (props.topMargin ? `${props.topMargin}px` : "")};
	margin-bottom: ${(props) =>
    props.bottomMargin ? `${props.bottomMargin}px` : ""};
	padding-bottom: ${(props) =>
    props.bottomPadding ? `${props.bottomPadding}px` : ""};
	max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "")};
	position: ${(props) => (props.relative ? "relative" : "")};
	text-align: ${(props) =>
    props.left ? "left" : props.center ? "center" : ""};
	color: ${props => props.color ? props.color : color.black};
	@media (max-width: 575px) {
		word-break: break-word;
	}

	@media (min-width: 769px) {
		margin-bottom: ${(props) =>
    props.bottomMarginMD ? `${props.bottomMarginMD}px` : ""};
	}

	${({ template }) => templateStyle(template)};
`;

export const PHeading = ({
                            template,
                            left,
                            center,
                            children,
                            bottomMargin,
                            bottomMarginMD,
                            topMargin,
                            bottomPadding,
                            maxWidth,
                            className,
                            style,
                            relative,
                        }) => (
    <HeadingWrapper
        template={template}
        left={left}
        center={center}
        bottomMargin={bottomMargin}
        bottomMarginMD={bottomMarginMD}
        topMargin={topMargin}
        bottomPadding={bottomPadding}
        maxWidth={maxWidth}
        relative={relative}
        className={className}
        style={style}
    >
        {children}
    </HeadingWrapper>
);

PHeading.propTypes = {
    template: PropTypes.number,
    children: PropTypes.any,
    bottomSpace: PropTypes.number,
    maxWidth: PropTypes.number,
};

PHeading.defaultProps = {
    size: 1,
    bottomMargin: `24`,
};
