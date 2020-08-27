import React from "react";
import { Link } from "gatsby";
import OverviewSVG from "../../../images/icons/coaching-business.inline.svg";
import ArrowSVG from "../../../images/arrow.inline.svg";
import styled from "styled-components";
import PropTypes from "prop-types";

const TabTitle = ({content, arrow, icon}) => (
    <ButtonBox to={content.url}>
        <Icon>
            {icon}
        </Icon>
        <Content>
            <span>{content.header}</span>

            {arrow &&
                <Arrow className="tabArrow">
                    <ArrowSVG/>
                </Arrow>
            }
        </Content>
    </ButtonBox>
);

export default TabTitle;

TabTitle.propTypes = {
    title: PropTypes.string.isRequired,
    arrow: PropTypes.bool,
    SvgIcon: PropTypes.object.isRequired
};

TabTitle.defaultProps = {
    arrow: true,
    SvgIcon: OverviewSVG
};

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 50px;
  min-width: 50px;
  opacity: 0.75;

  @media (min-width: 992px) {
    width: 80px;
    min-width: 80px;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding: 0 24px;
  border-left: 1px solid #f4f4f4;

  span {
    color: #4e4e4e;
    font-family: Avenir;
    font-size: 13px;
    line-height: 21px;

    @media (min-width: 769px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  .tabArrow {
    opacity: 0;
    transform: translateX(-3px);
    transition: opacity 0.3s ease, transform 0.3s ease;

    svg {
      path {
        fill: #1d1d1d;
      }
    }
  }

  &:hover {
    .tabArrow {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  width: 12px;
  margin-right: 10px;

  svg {
    path {
      transition: fill 0.3s ease;
      fill: #5088fd;
    }
  }
`

const ButtonBox = styled(Link)`
  height: 78px;
  line-height: 78px;
  color: #4e4e4e;
  background: #fff;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 20px 30px 0 #e6e6e6;
  display: flex;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 7px;
  border: none;
  z-index: 0;

  &.active {
    box-shadow: 0 40px 80px 0 #e6e6e6;
    font-weight: 600;
    z-index: 1;

    .tabArrow {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
