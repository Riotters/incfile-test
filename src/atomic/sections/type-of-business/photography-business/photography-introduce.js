import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import React from "react";
import styled from "styled-components";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import CkeckText from "../../../../components/static-check/text-only";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  .colorbox {
    margin-bottom: 48px;
  }
`;

const WrapperContainer = styled.div`
    background: rgb(255,255,255);
    padding-bottom: 100px;
    position: relative;
`;

const PhotographyIntroduce = () => (
    <WrapperContainer>
        <Container>
            <BusinessOwnerResponsibilities>
                <ImageContent image="photography-business-boxes" paddingTop="60">
                    <Paragraph big>
                        From traditional wedding photography to photojournalism, family sessions, portraits, advertising, product shots, fashion or food, the photography industry has plenty of opportunities for you to carve out
                        a niche. Great photographers can quickly build a reputation too, meaning that once you have a good portfolio together, you’ll likely find yourself
                        in demand.
                    </Paragraph>

                    <Paragraph big style={{paddingTop: "48px", fontWeight: "bold"}} mixed={true}>
                        Although photography is an artform, running a successful business requires plenty of practical skills. You will need to use your creative drive to create a sustainable freelance photography business, and we’re here to help. In this guide we’ll cover:
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
                                    How you can understand the world
                                    of photography
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    How to hire employees, market, and administer your business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    The best legal structure for your
                                    new organization
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Resources for your photography business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Some rules and regulations you will need to follow
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Information on taxes and finances
                                    for your photography business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Questions you should ask to see
                                    if you’re ready to start a photography business
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    And much more
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                    </ListWrapper>

                    <Paragraph big style={{paddingTop: "48px", fontWeight: "bold"}} mixed={true}>
                        By the time you’ve read through our complete photography business guide, you will have all the information you need to set up and manage
                        a thriving photography business. Let’s get into it.
                    </Paragraph>

                </ImageContent>
            </BusinessOwnerResponsibilities>
        </Container>
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

export default PhotographyIntroduce;
