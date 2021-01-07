import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import {Panel, Tabs, useTabState} from "@bumaga/tabs";
import styled from "styled-components";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../../components/styles/shadows";
import TopImageBox from "../../../../components/top-image-box";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import ContentCenter from "../../../partials/content-center";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";

const AdventagesSection = () => (
    <SectionWrapper>

        <TabOval>
            <OvalSvg/>
        </TabOval>

        <TextCenterLayout headline="Advantages and Disadvantages of the Franchise Business"
                          text="Here are the key things you need to know before deciding of franchising is right for you."
                          headlineWidth={770} textWidth={770}/>

        <Container>
            <Tabs>
                <Wrapper>
                    <TabsWrapper>
                        <Scroller>
                            <Tab>Advantages</Tab>
                            <Tab>Disadvantages</Tab>
                        </Scroller>
                    </TabsWrapper>
                    <PanelsWrapper>
                        <Panel>
                            <ImageBoxes>

                                <TopImageBox image="choose-to-form-your-business-immediately-if-name-is-available-02"
                                             color={color.yellow3}>
                                    <Heading size={3} template={4}>Branding</Heading>
                                    <p>
                                        You get access to a business with a recognized brand, immediately setting you
                                        apart from independent businesses. Franchisors have spent time, effort and
                                        millions of dollars on building their brands and creating trust with consumers.
                                    </p>
                                </TopImageBox>

                                <TopImageBox image="display-ads" color={color.purple3}>
                                    <Heading size={3} template={4}>Marketing</Heading>
                                    <p>
                                        Local marketing and strong branding will be essential to your success. You will
                                        likely need a website and a strong social media presence too.
                                    </p>
                                </TopImageBox>

                                <TopImageBox image="we-have-an-interactive-help-service-02" color={color.blue3}>
                                    <Heading size={3} template={4}>Support</Heading>
                                    <p>
                                        Franchisors are familiar with helping their franchisees get set up. They will
                                        provide resources, training, advice, coaching and support in creating a
                                        successful business.
                                    </p>
                                </TopImageBox>

                            </ImageBoxes>
                        </Panel>
                        <Panel>
                            <ImageBoxes>

                                <TopImageBox image="not-guaranted-icon" color={color.red3}>
                                    <Heading size={3} template={4}>Results are not guaranteed</Heading>
                                    <p>
                                        Even with a successful franchisor behind you, results are not guaranteed. The
                                        success of your business will still be mainly down to your management skills,
                                        marketing, customer service and the dozens of other actions an entrepreneur has
                                        to take to make this business a success.
                                    </p>
                                </TopImageBox>

                                <TopImageBox image="the-gig-economy" color={color.orange3}>
                                    <Heading size={3} template={4}>You need to pay fees</Heading>
                                    <p>
                                        You will need to pay a fee to buy a license to start a franchise, and then
                                        continue to pay an ongoing royalty or other fees to the franchisor. Initial fees
                                        can run from anywhere from $50,000 up to several million dollars depending on
                                        the type of franchise you want to open. You will then be expected to pay a
                                        percentage of your revenue to the franchisor periodically to continue operating
                                        the business.
                                    </p>
                                </TopImageBox>

                                <TopImageBox image="entity-comparison-chart" color={color.green3}>
                                    <Heading size={3} template={4}>There are rules to follow</Heading>
                                    <p>
                                        Franchisors often have strict rules you will need to agree to. This could be
                                        anything from signage and staff uniforms to how you market and talk about your
                                        business. The agreements you have to sign are likely to be long and detailed.
                                    </p>
                                </TopImageBox>

                                <TopImageBox image="executive-relationship-and-culture-coaching" color={color.blue3}>
                                    <Heading size={3} template={4}>You need to convince the franchisor</Heading>
                                    <p>
                                        You do not need to take in and sell stock, meaning you don’t have money tied up
                                        in inventory
                                    </p>
                                </TopImageBox>

                            </ImageBoxes>
                        </Panel>
                    </PanelsWrapper>
                </Wrapper>
            </Tabs>
        </Container>

        <ContentCenter contentWidth={770}>
            <Heading size={3} style={{fontSize: "40px", marginTop: "100px"}} maxWidth={770}>
                Understand Your Franchise Market
            </Heading>
            <Paragraph big>
                The market for your franchise business depends very much on the franchisor you set up with. They
                will be able to provide guidance and expertise on the types of customers you should be marketing to,
                although you will need to carry out your own market research as well.
            </Paragraph>
            <Paragraph big>
                Look into the likely demand for services in your area, speak to other franchise businesses in
                neighboring regions and understand who your competitors are. You should also talk to your franchisor
                about planned advertising and partnerships.
            </Paragraph>
        </ContentCenter>
    </SectionWrapper>
);

const cn = (...args) => args.filter(Boolean).join(" ")

const Tab = ({children}) => {
    const {isActive, onClick} = useTabState()

    return (
        <Button
            className={cn("accordion-tab", isActive && "active")}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

const TabOval = styled.div`
    position: absolute;
    top: 443px;
    right: 0;
    width: 100%;
    transform: scaleX(-1);
    
      @media (min-width: 720px) {
            width: 720px;
      }
`;

const ImageBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 112px;
  width: 100%;
  max-width: 970px;
  
  @media(min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 970px) {
    margin: 0 auto;
  }
`;

const SectionWrapper = styled.div`
    background: rgb(242,246,255);
    background: -moz-linear-gradient(0deg, rgba(242,246,255,1) 0%, rgba(255,255,255,1) 50%, rgba(242,246,255,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(242,246,255,1) 0%, rgba(255,255,255,1) 50%, rgba(242,246,255,1) 100%);
    background: linear-gradient(0deg, rgba(242,246,255,1) 0%, rgba(255,255,255,1) 50%, rgba(242,246,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f2f6ff",endColorstr="#f2f6ff",GradientType=1);
    padding-top: 100px;
    padding-bottom: 100px;
    position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding-top: 100px;
`;

const TabsWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: ${color.white};
    box-shadow: ${shadow.white1};
    border-radius: 24px;
    margin: 0 auto;
    overflow: hidden;

    @media(min-width: 992px) {
      width: auto;
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
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
`;

const Scroller = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  border-radius: 24px;

  &::-webkit-scrollbar, &::-webkit-scrollbar {
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
  transition: background-color .3s ease, color .2s ease;
  color: ${color.grey1};
  font-family: Avenir, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    background-color: ${color.blue3};
  }

  &.active {
    background-color: ${color.blue1};
    color: ${color.white};
    font-weight: 900;
  }
`;

export default AdventagesSection;
