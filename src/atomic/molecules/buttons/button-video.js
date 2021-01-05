import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { createPortal } from "react-dom";
import Arrow2SVG from "../../../images/arrow2.inline.svg";
import CloseSVG from "../../../images/icons/close.inline.svg";

const PortalComponent = ({ children, visible }) => {
	return createPortal(
		<LightBoxModal visible={visible}>{children}</LightBoxModal>,
		document.getElementById("portal-lightbox")
	);
};

class ButtonVideo extends Component {
	state = {
		showLightBox: false,
	};

	openModal = (e) => {
		e.preventDefault();
		this.setState({ showLightBox: !this.state.showLightBox });
	};

	closeModal = () => {
		this.setState({ showLightBox: false });
	};

	render() {
		const { videoID, thumbnailVideo, vimeo, bottomMargin } = this.props;
		const { showLightBox } = this.state;

		return (
			<Fragment>
				<PlayButton onClick={(e) => this.openModal(e)}>
					Watch Video
					<Arrow className="arrow2">
						<Arrow2SVG />
					</Arrow>
				</PlayButton>

				{videoID && showLightBox && (
					<PortalComponent visible={showLightBox}>
						<LightBoxContent>
							{vimeo
								? parse(`<iframe 
                                src="https://player.vimeo.com/video/${videoID}/?autoplay=1"  
                                frameborder="0" 
                                allow="autoplay; fullscreen" 
                                allowfullscreen></iframe>`)
								: parse(`<iframe
                                src="https://www.youtube.com/embed/${videoID}?rel=0&autoplay=1"
                                width="500"
                                height="349"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>`)}
							<Control>
								<button onClick={(e) => this.closeModal(e)}>
									<CloseSVG />
								</button>
							</Control>
						</LightBoxContent>
					</PortalComponent>
				)}
			</Fragment>
		);
	}
}

const PlayButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${(props) => (props.height ? props.height : "auto")};
	width: 100%;
	background-color: ${color.white};
	border: 2px solid ${color.orange1};
	border-radius: 50px;
	color: ${color.orange1};
	font-family: Engram-Bold;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	text-decoration: none;
	position: relative;
	padding: 14px 42px;
	margin: 0 0 32px 0;
	transition: background-color 0.3s ease, color 0.3s ease;
	cursor: pointer;

	@media (min-width: 576px) {
		width: auto;
		white-space: nowrap;
	}

	@media (min-width: 992px) {
		margin: 0 0 32px 16px;
	}

	&:hover {
		background-color: ${color.orange1};
		color: ${color.white};

		.arrow1,
		.arrow2 {
			transform: translate(3px, -50%);
		}

		.arrow1 {
			svg {
				path {
					fill: ${color.white};
				}
			}
		}

		.arrow2 {
			svg {
				path {
					fill: ${color.white};
				}
			}
		}
	}
`;

const Arrow = styled.div`
	display: none;
	align-items: center;
	justify-content: center;
	height: 12px;
	width: 12px;
	position: absolute;
	top: 50%;
	right: 16px;
	transform: translate(0, -50%);
	transition: transform 0.3s ease;

	@media (min-width: 769px) {
		display: flex;
	}

	svg {
		path {
			transition: fill 0.3s ease;
		}
	}

	&.arrow1 {
		svg {
			path {
				fill: ${color.orange1};
			}
		}
	}

	&.arrow2 {
		svg {
			path {
				fill: ${color.orange1};
			}
		}
	}
`;

const LightBoxModal = styled.div`
	position: fixed;
	z-index: 9999;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.8);
	opacity: ${(props) => (props.visible ? "1" : "0")};
	visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const LightBoxContent = styled.div`
	background-color: #fff;
	width: 100%;
	max-width: 913px;
	position: relative;
	margin: 0 30px;
	padding-top: 49.25%;
	height: 29vh;

	@media screen and (min-width: 769px) {
		height: 55.7vh;
		padding-top: 0;
	}

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

const Control = styled.div`
	button {
		position: absolute;
		top: -45px;
		right: -15px;
		border: none;
		width: 30px;
		height: 30px;
		background: none;
		cursor: pointer;

		svg {
			fill: white;
		}
	}
`;

export default ButtonVideo;

ButtonVideo.propTypes = {
	thumbnailVideo: PropTypes.string.isRequired,
	videoID: PropTypes.string.isRequired,
};
