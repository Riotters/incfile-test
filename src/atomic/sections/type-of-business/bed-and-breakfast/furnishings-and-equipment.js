import React from "react";
import ImageContent from "../../../../components/partials/blocks/left-image-right-content";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import HandsIcon from "../../../../images/icons/hands.inline.svg";
import {color} from "../../../../components/styles/colors";
import {shadow} from "../../../atoms/styles/shadows";
import IconCircle from "../../../../components/icons/circle";
import ArrowSVG from "../../../../images/arrow.inline.svg";
import UmbrellaIcon from "../../../../images/icons/umbrella.inline.svg";
import ArrowsIcon from "../../../../images/icons/arrows.inline.svg";
import PlaneIcon from "../../../../images/icons/plane.inline.svg";
import RockerIcon from "../../../../images/icons/rocket.inline.svg";
import Button from "../../../molecules/buttons/button";
import styled from "styled-components";
import Container from "../../../../components/container";
import CkeckText from "../../../../components/static-check/text-only";
import PanelWrapper from "../../../organisms/tabs/panel";

const FurnishingsAndEquipment = () => (
<Wrapper>
    <Container>
        <BusinessOwnerResponsibilities>
            <ImageContent image="bed-and-breakfast-bed-icon" paddingTop="60">
                <Heading size={4} style={{fontSize: "24px"}}>
                    Furnishings and Equipment for Your Bed and Breakfast
                </Heading>
                <Paragraph big>
                    You will need extensive equipment, furniture, fixtures and fittings for your B&B. This will include:
                </Paragraph>

                <Paragraph big style={{fontWeight: "bold", marginBottom: "48px", paddingBottom: 0, marginTop: "56px"}}>
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

                <Paragraph big style={{fontWeight: "bold", marginBottom: "48px", paddingBottom: 0, marginTop: "56px"}}>
                    For each room:
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

                <Paragraph big style={{fontWeight: "bold", marginBottom: "48px", paddingBottom: 0, marginTop: "56px"}}>
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
  padding-top: 75px;
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


export default FurnishingsAndEquipment;
