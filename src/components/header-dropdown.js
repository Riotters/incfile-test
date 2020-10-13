import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import LogoSVG from "../images/logo.inline.svg";
import Button from "./button";
import DropdownSVG from "../images/dropdown.inline.svg";
import {color} from "../atomic/atoms/styles/colors";
import {shadow} from "../atomic/atoms/styles/shadows";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 0 40px;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 9999;
  border-bottom: 1px solid rgba(244, 244, 244, 0.9);
`;

const Logo = styled.div`
  height: 24px;
  padding-right: 25px;

  @media (min-width: 1200px) {
    width: 200px;
  }
`;

const MobileWrapper = styled.nav`
  display: ${({ showNav }) => (showNav ? "flex" : "none")};
  position: absolute;
  flex-direction: column;
  background-color: #fff;
  top: 80px;
  left: 0;
  height: calc(100vh - 80px);
  min-height: -webkit-fill-available;
  width: 100%;
  padding: 40px;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    position: static;
    flex-direction: row;
    height: 79px;
    width: auto;
    flex-grow: 1;
    padding: 0;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  @media (min-width: 992px) {
    margin: 0 auto;
    max-width: 1170px;
    height: 100%;
    flex-grow: 1;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  list-style: none;
  width: 100%;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: flex-start;
    width: initial;
  }
`;

const MenuItem = styled.li`
  margin-right: 34px;
  height: 50px;

  @media (min-width: 992px) {
    height: 100%;
  }
  
  &:hover > ul, &.active > ul {
    transition: max-height .5s;
    max-height: 4000px;
    padding: 24px 32px;
    
    li {
      display: block;
    }
  }
`;

const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  color: #1e1e1e;
  font-family: Avenir;
  font-size: 13px;
  line-height: 16px;
  text-decoration: none;
  padding-right: 10px;
  white-space: nowrap;

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 19px;
  }

  &:hover {
    border-bottom: 1px solid #fd8550;
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
  margin-top: 25px;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 0;
  }

  a {
    &:nth-child(2) {
      padding: 4px 24px;

      @media (min-width: 1200px) {
        padding: 6px 38px;
      }
    }
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const DropdownMenu = styled.ul`
  top: calc(100% + 1px);
  display: grid;
  grid-template-columns: auto auto;
  max-height: 0;
  padding: 0;
  z-index: 999;
  
  @media screen and (max-width: 992px) {
    position: relative;
    grid-template-columns: 100%;
    overflow: hidden;
  }
  
  box-shadow: ${shadow.white2};
  
  background: ${color.white};
  list-style-type: none;
  position: absolute;
  
  & > li {
    display: none;
    height: 48px;
    min-width: 100px;
     cursor: pointer;
    
    a:hover {
      border-bottom: none;
      color: ${color.orange1};
    }
  }
  
  & > li a {
    min-width: 150px;
  }
`;

const Login = styled.a`
  display: flex;
  align-items: center;
  color: #1e1e1e;
  font-family: Avenir;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  text-decoration: none;
  margin-right: 16px;
  transition: color 0.3s ease;
  height: 50px;
  margin-bottom: 25px;

  @media (min-width: 992px) {
    height: auto;
    margin-bottom: 0;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 19px;
  }

  &:hover {
    color: #fd8550;
  }
`;

const Hamburger = styled.div`
  display: block;
  height: 20px;
  width: 24px;
  position: relative;

  @media (min-width: 992px) {
    display: none;
  }

  span {
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 2px;
    background-color: #1d1d1d;
    position: absolute;
    left: 0;
    transform-origin: center;
    transition: transform 0.3s ease;

    &:nth-child(1) {
      top: ${({ hamburger }) => (hamburger ? "calc(50% - 2px)" : "0")};
      transform: ${({ hamburger }) => (hamburger ? "rotate(-135deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      display: ${({ hamburger }) => (hamburger ? "none" : "block")};
    }

    &:nth-child(3) {
      bottom: ${({ hamburger }) => (hamburger ? "calc(50% - 1px)" : "0")};
      transform: ${({ hamburger }) => (hamburger ? "rotate(135deg)" : "rotate(0)")};
    }
  }
`;

const Header = ({ siteTitle }) => {
  const [menu, showMenu, active] = useState(false);

  return (
    <Wrapper>
      <Logo>
        <LogoSVG />
      </Logo>
      <MobileWrapper showNav={menu}>
        <Navigation>
          <Menu>
            <MenuItem>
              <FlexRow>
                <MenuLink to="#">Review Entity Type</MenuLink>
                <div>
                  <DropdownSVG />
                </div>
              </FlexRow>
              <DropdownMenu>
                <MenuItem><MenuLink>Review Entity Types</MenuLink></MenuItem>
                <MenuItem><MenuLink>LLC</MenuLink></MenuItem>
                <MenuItem><MenuLink>S Corporation</MenuLink></MenuItem>
                <MenuItem><MenuLink>C Corporation</MenuLink></MenuItem>
                <MenuItem><MenuLink>Non-profit</MenuLink></MenuItem>
              </DropdownMenu>
            </MenuItem>
            <MenuItem>
              <FlexRow>
                <MenuLink to="/manage-your-company">Manage Your Company</MenuLink>
                <div><DropdownSVG /></div>
              </FlexRow>
              <DropdownMenu>
                <MenuItem>
                  <MenuLink>Review Entity Types</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink>LLC</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink>S Corporation</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink>C Corporation</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink>Non-profit</MenuLink>
                </MenuItem>
              </DropdownMenu>
            </MenuItem>
            <MenuItem>
              <FlexRow>
                <MenuLink to="#">Learning Center</MenuLink>
                <DropdownSVG />
              </FlexRow>
              <DropdownMenu>
                <MenuItem><MenuLink>Review Entity Types</MenuLink></MenuItem>
                <MenuItem><MenuLink>LLC</MenuLink></MenuItem>
                <MenuItem><MenuLink>S Corporation</MenuLink></MenuItem>
                <MenuItem><MenuLink>C Corporation</MenuLink></MenuItem>
                <MenuItem><MenuLink>Non-profit</MenuLink></MenuItem>
              </DropdownMenu>
            </MenuItem>
            <MenuItem>
              <FlexRow>
                <MenuLink to="#">About</MenuLink>
                <DropdownSVG />
              </FlexRow>
              <DropdownMenu>
                <MenuItem><MenuLink>Review Entity Types</MenuLink></MenuItem>
                <MenuItem><MenuLink>LLC</MenuLink></MenuItem>
                <MenuItem><MenuLink>S Corporation</MenuLink></MenuItem>
                <MenuItem><MenuLink>C Corporation</MenuLink></MenuItem>
                <MenuItem><MenuLink>Non-profit</MenuLink></MenuItem>
              </DropdownMenu>
            </MenuItem>
          </Menu>
        </Navigation>
        <LoginWrapper>
          <Login href="#">Login</Login>
          <Button theme="secondary40">Incoporate now</Button>
        </LoginWrapper>
      </MobileWrapper>
      <Hamburger hamburger={menu} onClick={() => showMenu(!menu)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
    </Wrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
