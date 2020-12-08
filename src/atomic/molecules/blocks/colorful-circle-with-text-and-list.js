import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";

const ColorFulCircleWithTextAndList = ({ CircleSVG, title, list, withBg, titleWidth, ...rest }) => (
  <Wrapper withBg={withBg} {...rest}>
    {title && <Title width={titleWidth}>{title}</Title>}
    <Content>
      <Circle>
        <CircleSVG />
      </Circle>

      <TextBox>
        {list.map((item, i) => (
          <ListStyle key={i}>
            <ColorSquare color={item.color} />
            {item.boldText && <TextBold>{item.boldText}</TextBold>}
            <Text>{item.text}</Text>
          </ListStyle>
        ))}
      </TextBox>
    </Content>
  </Wrapper>
);

ColorFulCircleWithTextAndList.propTypes = {
  withBg: PropTypes.bool,
  title: PropTypes.string,
  list: PropTypes.array.isRequired,
};

ColorFulCircleWithTextAndList.defaultProps = {
  withBg: false,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 40px;

  ${(props) => props.withBg && "background-color:" + color.white + ";" + "box-shadow:" + shadow.white1 + ";" + "border-top-left-radius: 8px;" + "border-top-right-radius: 20px;" + "border-bottom-left-radius: 8px;" + "border-bottom-right-radius: 20px;"}
`;

const Circle = styled.div`
  position: relative;
  max-width: 170px;
  max-height: 170px;
  margin-top: 26px;
`;

const TextBox = styled.div`
  font-family: Avenir, sans-serif;
  font-weight: 900;
  font-size: 20px;
  color: #1d1d1d;
  padding-right: 48px;
  padding-bottom: 24px;
  padding-top: 24px;
`;

const Title = styled.div`
  font-family: "Avenir", sans-serif;
  font-weight: 900;
  font-size: 20px;
  color: ${color.black};
  text-align: center;
  max-width: ${(props) => (props.width ? props.width : "300px")};
  margin: 0px auto 30px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

const ListStyle = styled.div`
  margin-left: 48px;
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
`;

const ColorSquare = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  margin-right: 16px;
  display: table;
  margin-top: 5px;
`;

const TextBold = styled.span`
  font-weight: bold;
  margin-right: 16px;
  font-family: "MarkPro-Bold", sans-serif;
  font-size: 16px;
  min-width: 35px;
  line-height: 24px;
  color: ${color.black};
`;

const Text = styled.span`
  font-family: "Avenir", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #63666e;
`;

export default ColorFulCircleWithTextAndList;
