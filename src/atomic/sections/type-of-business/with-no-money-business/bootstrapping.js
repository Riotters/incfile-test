import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import React from "react";
import styled from "styled-components";
import {Paragraph} from "../../../atoms/typography/paragraph";
import {color} from "../../../../components/styles/colors";
import Colorbox from "../../../../components/color-box";
import CkeckText from "../../../../components/static-check/text-only";
import FingerIcon
    from "../../../../images/icons/here-at-incfile-we-know-a-thing-or-two-about-starting-your-business.inline.svg";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-bottom: 64px;

  .colorbox {
    margin-bottom: 48px;
  }
`;

const WrapperContainer = styled.div`
    background: rgb(255,255,255);
    padding-bottom: 100px;
    position: relative;
    margin-top: 120px;
    position: relative;
      @media (min-width: 992px){
          margin-top: 21px;
      }
`;

const Bootstrapping = () => (
    <WrapperContainer>
        <BusinessOwnerResponsibilities>
            <ImageContent image="with-no-money-business-1" paddingTop="60">
                <Paragraph big style={{paddingBottom: 0}}>
                    Bootstrapping is the discipline of starting a business with very little upfront cash. It means
                    you don’t typically take out loans or investments
                    or get VC funding. Instead, you rely on limited personal savings and revenue created by your
                    business to grow it. Bootstrapping has created many successful businesses — Dell, HP, Apple and
                    Microsoft all started with very little cash, and now they are some of the biggest companies
                    in the world.
                </Paragraph>

                <Colorbox curveColor={color.babyblue1} color={color.babyblue3} theme="icon" curve Icon={FingerIcon}>
                    <Paragraph style={{fontWeight: "bold"}}>
                        Here at Incfile we know a thing or two about starting a business.
                    </Paragraph>
                    <Paragraph>
                        Since 2004 we’ve helped over 100,000 business owners, and now we’re here to help you. You
                        don't always need a lot of capital to get
                        a business started. That's why we've put together this guide
                        to starting your own business with low-or no-investment
                    </Paragraph>
                </Colorbox>

                <Paragraph big style={{paddingTop: "48px"}} mixed={true}>
                    Read on to find out exactly where to start, what to do next and what questions you should ask to
                    give your new, bootstrapped business the best chance of success. We’ll cover:
                </Paragraph>

                <ListWrapper>
                    <ListBox>
                        <CkeckText>
                            <Paragraph big>
                                Why a lack of money shouldn’t
                                stop you
                            </Paragraph>
                        </CkeckText>
                    </ListBox>

                    <ListBox>
                        <CkeckText>
                            <Paragraph big>
                                Developing your business model
                                and business plan
                            </Paragraph>
                        </CkeckText>
                    </ListBox>

                    <ListBox>
                        <CkeckText>
                            <Paragraph big>
                                What to expect from starting
                                a business
                            </Paragraph>
                        </CkeckText>
                    </ListBox>

                    <ListBox>
                        <CkeckText>
                            <Paragraph big>
                                Getting the right legal structure
                                in place
                            </Paragraph>
                        </CkeckText>
                    </ListBox>

                    <ListBox>
                        <CkeckText>
                            <Paragraph big>
                                Finding examples of businesses that don’t need much money
                            </Paragraph>
                        </CkeckText>
                    </ListBox>

                    <ListBox>
                        <CkeckText>
                            <Paragraph big>
                                Complying with rules, regulations
                                and taxes
                            </Paragraph>
                        </CkeckText>
                    </ListBox>

                    <ListBox>
                        <CkeckText>
                            <Paragraph big>
                                Maintaining your business
                            </Paragraph>
                        </CkeckText>
                    </ListBox>

                    <ListBox>
                        <CkeckText>
                            <Paragraph big>
                                Setting up your business operations
                            </Paragraph>
                        </CkeckText>
                    </ListBox>

                    <ListBox>
                        <CkeckText>
                            <Paragraph big>
                                Choosing the type of business to start
                            </Paragraph>
                        </CkeckText>
                    </ListBox>

                    <ListBox>
                        <CkeckText>
                            <Paragraph big>
                                Learning the art of bootstrapping
                            </Paragraph>
                        </CkeckText>
                    </ListBox>

                </ListWrapper>

            </ImageContent>
        </BusinessOwnerResponsibilities>
    </WrapperContainer>
);

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListBox = styled.div`
    width: 100%;
    
    @media (min-width: 576px) { 
        width: 50%; 
    }
`;

export default Bootstrapping;
