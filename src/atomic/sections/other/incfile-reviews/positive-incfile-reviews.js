import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { Tabs, Panel, useTabState } from "@bumaga/tabs";

import { Paragraph } from '../../../atoms/typography/paragraph';
import Oval from "../../../atoms/icons/oval";
import { color } from '../../../../components/styles/colors';
import { shadow } from "../../../atoms/styles/shadows";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import OvalSVG2 from "../../../../images/ovals/top-right-transparent-babyblue2.inline.svg";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import RatingRow from "../../../atoms/boxes/rating-row";
import CartBlock from "../../../molecules/blocks/cart-block";
import RatingBlock from "../../../molecules/blocks/rating-block";
import SlideReviews from './slide-reviews';
import { positiveReview} from '../../../../static/other/incfile-reviews';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 150px 0 0 0;
    text-align: center;
`

const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  background-color: ${color.white};
  box-shadow: ${shadow.white1};
  border-radius: 24px;
  margin: 56px auto 80px;
  overflow: hidden;

  @media screen and (min-width: 769px) {
      max-width: 560px;
  }

  button {
    margin-right: 4px;

    &:first-child {
      margin-left: 4px;
    }
  }
`;

const PanelsWrapper = styled.div`
  display: block;
`;

const Scroller = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  border-radius: 24px;
  width: 100%;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: 252px;
  background-color: ${color.white};
  border-radius: 24px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.2s ease;
  color: ${color.grey1};
  font-family: Avenir, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  flex-grow: 1;

  &:hover {
    background-color: ${color.blue3};
  }

  &.active {
    background-color: ${color.blue1};
    color: ${color.white};
    font-weight: 900;
  }
`;

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();

  return (
    <Button className={cn("accordion-tab", isActive && "active")} onClick={onClick}>
      {children}
    </Button>
  );
};

const PositiveIncfileReviews = () => (
    <Wrapper>
        <Oval className="oval" height="720" width="720" top="8" left="0" y="0">
            <OvalSVG />
        </Oval>

        <Oval className="oval" height="420" width="420" bottom="15" right="0" y="0">
            <OvalSVG2 />
        </Oval>

            <HeadingCenter
                className="heading"
                headline={positiveReview.header}
                headlineWidth="770"
                text={positiveReview.text1}
            /> 

            <ContentCenter contentWidth="920">
                <Tabs>
                    <TabsWrapper>
                        <Scroller>
                            <Tab>Facebook</Tab>
                            <Tab>Shopper Review</Tab>
                        </Scroller>
                    </TabsWrapper>
                    <PanelsWrapper>
                        <Panel>
                            <Paragraph big mixed={true}>{parse(positiveReview.facebook.text1)}</Paragraph>   
                            <SlideReviews content={positiveReview.facebook.reviews} />
                        </Panel>

                        <Panel>
                        <Paragraph big mixed={true}>{parse(positiveReview.shopper.text1)}</Paragraph>
                            <SlideReviews content={positiveReview.shopper.reviews} />
                        </Panel>
                    </PanelsWrapper>
                </Tabs>

                <RatingRow>
                <CartBlock />
                <RatingBlock />
                </RatingRow>
                <Paragraph big mixed={true} topMargin="30">
                {parse(positiveReview.text2)}
                </Paragraph>
            </ContentCenter>
    </Wrapper>   
)

export default PositiveIncfileReviews;