import React from "react";
import {color} from "../../../atoms/styles/colors";
import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import styled from "styled-components";
import Container from "../../../container";
import CkeckText from "../../../../components/static-check/text-only";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-babyblue2.inline.svg";

const FurnishingsAndEquipment = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Container>
            <BusinessOwnerResponsibilities>
                <ImageContent image="bed-and-breakfast-bed-icon" paddingTop="60">
                    <Heading size={4} style={{fontSize: "24px"}}>
                        Furnishings and Equipment for Your Bed and Breakfast
                    </Heading>
                    <Paragraph big style={{marginBottom: "96px"}}>
                        You will need extensive equipment, furniture, fixtures and fittings for your B&B. This will
                        include:
                    </Paragraph>

                    <Paragraph big
                               style={{
                                   fontFamily: "Avenir-Heavy",
                                   color: color.black,
                                   marginBottom: "48px",
                                   paddingBottom: 0
                               }}>
                        For each room:
                    </Paragraph>

                    <ListWrapper>
                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    En-suite bathroom with a shower and/or a good tub
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Furniture including chairs and a desk or table
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Bed and comfortable mattress
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Internet access
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Television
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Luxury bed linens and robes
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    High-quality carpets and window treatments
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                    </ListWrapper>

                    <Paragraph big
                               style={{
                                   fontFamily: "Avenir-Heavy",
                                   color: color.black,
                                   marginBottom: "48px",
                                   paddingBottom: 0,
                                   marginTop: "24px"
                               }}>
                        For the kitchen and dining area:
                    </Paragraph>
                    <ListWrapper>
                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Stove and cooking equipment to allow for preparation of multiple breakfasts
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Tables, chairs, tablecloths and place settings
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Enough refrigeration and storage space for all cooking ingredients
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Cutlery and dinnerware for everyone
                                </Paragraph>
                            </CkeckText>
                        </ListBox>
                    </ListWrapper>

                    <Paragraph big
                               style={{
                                   fontFamily: "Avenir-Heavy",
                                   color: color.black,
                                   marginBottom: "48px",
                                   paddingBottom: 0,
                                   marginTop: "24px"
                               }}>
                        For common areas:
                    </Paragraph>
                    <ListWrapper>
                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Television, music and other media
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Finger foods and snacks
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Television, music and other media
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Hot and cold beverages
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Telephone
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Fresh fruit and flowers
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                        <ListBox>
                            <CkeckText>
                                <Paragraph big>
                                    Information on tourist attractions, destinations and restaurants
                                </Paragraph>
                            </CkeckText>
                        </ListBox>

                    </ListWrapper>
                </ImageContent>
            </BusinessOwnerResponsibilities>
        </Container>
    </Wrapper>
);

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  margin-top: 75px;
  padding-bottom: 64px;

  .colorbox {
    margin-bottom: 48px;
  }
`;

const Wrapper = styled.div`
    background: rgb(255,255,255);
    padding-bottom: 100px;
    position: relative;
`;

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

const Oval = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    transform: scaleX(-1);
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

export default FurnishingsAndEquipment;
