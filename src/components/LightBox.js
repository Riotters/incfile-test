import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import styled from "styled-components";
import { color } from "./styles/colors";
import Image from "../atomic/atoms/image/image";

import { createPortal } from "react-dom";

import PlayerSVG from "../images/icons/player.inline.svg";
import CloseSVG from "../images/icons/close.inline.svg";

const PortalComponent = ({ children, visible }) => {
  return createPortal(<LightBoxModal visible={visible}>{children}</LightBoxModal>, document.getElementById("portal-lightbox"));
};

class LightBox extends Component {
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
        <WrapperVideo bottomMargin={bottomMargin}>
          <Image filename={thumbnailVideo} alt="" />
          <PlayButton onClick={(e) => this.openModal(e)}>
            <span>
              <PlayerSVG />
            </span>
          </PlayButton>
        </WrapperVideo>

        {videoID && showLightBox && (
          <PortalComponent visible={showLightBox}>
            <LightBoxContent>
              {vimeo
                ? parse(`<iframe 
                src="https://player.vimeo.com/video/${videoID}"  
                frameborder="0" 
                allow="autoplay; fullscreen" 
                allowfullscreen></iframe>`)
                : parse(`<iframe
                src="https://www.youtube.com/embed/${videoID}?rel=0&autoplay=1"
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

const WrapperVideo = styled.div`
  width: 100%;
  max-width: 770px;
  background-color: ${color.orange3};
  position: relative;
  margin-bottom: ${(props) => (props.bottomMargin ? `${props.bottomMargin}px` : "")};

  &::before {
    content: "";
    display: block;
    padding-top: 56.23%;
  }

  .gatsby-image-wrapper {
    overflow: hidden;
    border-radius: 6px;
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const PlayButton = styled.button`
  height: 30%;
  width: 16.87%;
  max-width: 80px;
  max-height: 80px;
  background-color: ${color.orange1};
  border: 0;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease;
  cursor: pointer;

  span {
    display: block;
    height: 26%;
    width: 26%;
    max-width: 21px;
    max-height: 21px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    svg {
      width: 100%;
      height: 100%;
      position: relative;
      left: 2px;
    }
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
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
  max-width: 960px;
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

export default LightBox;

LightBox.propTypes = {
  thumbnailVideo: PropTypes.string.isRequired,
  videoID: PropTypes.string.isRequired,
};
