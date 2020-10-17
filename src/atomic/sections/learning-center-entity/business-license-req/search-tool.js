import React from "react";
import styled from "styled-components";
import parser from "html-react-parser";
import { color, gradient } from "../../../../components/styles/colors";
import { states } from "../../../../components/states"
import Dropdown from "../../../molecules/form/dropdown";
import ContentCenter from "../../../partials/content-center";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import Button from "../../../molecules/buttons/button";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import LicenseIcon from '../../../../images/icons/license.inline.svg';
import { Heading } from "../../../atoms/typography/heading"
import { Paragraph } from "../../../atoms/typography/paragraph";
import Whitebox from "../../../atoms/boxes/white-box";
import { Link } from "gatsby";

const SearchTool = styled.div`
    padding-bottom: 100px;
    padding-top: 100px;
    position: relative;
    background-image: ${gradient.blue3};
`;


const ImageBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 80px;
  padding-bottom: 48px;
  width: 100%;

  @media(min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 970px) {
    width: 970px;
    margin: 0 auto;
  }

  .box {
      padding: 16px 16px 56px;

    h4 {
        text-align: center;
        padding: 24px 0 0;
    }

    &--left {
        border-radius: 5px;

        @media (min-width: 769px) {
            border-radius: 50px 5px 5px 50px;
        }
        
    
        .top {
            border-radius: 5px;

            @media (min-width: 769px) {
                border-radius: 35px 5px 5px 5px;
            }
        }
    }

    &--right {
        border-radius: 5px;

        @media (min-width: 769px) {
            border-radius: 5px 50px 50px 5px;
        }
    
        .top {
            border-radius: 5px;

            @media (min-width: 769px) {
                border-radius: 5px 35px 5px 5px;
            }
        }
    }
  }

  .dropdown {
      max-width: 304px;
      margin: 0 auto;
`;


const LicenseItemWrapper = styled.ul`
    margin-bottom: 32px;
`

const LicenseItem = styled.li`
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-top: 1px solid ${color.grey4};
    font-family: 'Avenir', san-serif;

    & > p {
        font-size: 20px;
        margin-bottom: 0;
    }

    &:first-child{
        border-top: none;
    }

    .icon{
        width: 50px;
    }
`

const Icon = styled.div`
    svg{

    }
`

const dropdownOptions = states.state.map(state => (state.name));

const SearchToolSection = ({ content, businessIndustryList }) => {
    const [selectedState, setSelectedState] = React.useState('');
    const [licenseOption, setLicenseOption] = React.useState({});
    const [licenseFound, setLicenseFound] = React.useState({});
    const [showResult, setShowResult] = React.useState(false);

    const cards = content.cards;
    let dropdownOptionsTwo = [];

    businessIndustryList.map((item) => {
        dropdownOptionsTwo.push({
            value: item.id,
            label: item.name
        });
    });

    const findLicense = (e) => {
        e.preventDefault();

        if (!licenseOption?.label) {
            return;
        }

        let finds = businessIndustryList.find(item => item.id === licenseOption.value);
        setLicenseFound(finds);
        setShowResult(true);
    }
    
    return (
        <SearchTool>
            <Oval heigh="720" width="720" top="0" left="0">
                <OvalSVG />
            </Oval>
            <ContentCenter>
                <TextCenterLayout
                    headline={content.header}
                    headlineWidth="850"
                    text={content.text}
                />
                
                {!showResult ? (
                    <>
                        <ImageBoxes>
                            <TopImageBox className="box box--left" image="your-state" color={color.blue3} >
                                <Heading size="4">{cards[0]}</Heading>
                                <Dropdown className="dropdown" placeholder="Select" options={dropdownOptions} onChange={(option) => setSelectedState(option.value)} />
                            </TopImageBox>
                            <TopImageBox className="box box--right" image="forming-a-corporation" color={color.orange3}>
                                <Heading size="4">{cards[1]}</Heading>
                                <Dropdown className="dropdown" placeholder="Select" options={dropdownOptionsTwo} onChange={option => setLicenseOption(option)} />
                            </TopImageBox>
                        </ImageBoxes>
                        
                        <Button content={content.button} theme="primary56" arrow onClick={e => findLicense(e)} />
                    </>
                )
                    : (
                        <>
                            <Whitebox padding="35px" bottomMargin="56px">
                                <Paragraph big mixed={true}
                                    style={{ fontSize: `28px`, maxWidth: `500px`, margin: `0 auto 52px auto`, textAlign: `center` }}
                                >
                                    {parser(`Here are the licenses you will need for your <b>${licenseFound.name}</b> business in <b>${selectedState}</b>...`)}
                                </Paragraph>

                                <LicenseItemWrapper>
                                    {licenseFound.licenses.map(item => (
                                        <LicenseItem>
                                            <Icon className="icon"><LicenseIcon /></Icon>
                                            <Paragraph>{item}</Paragraph>
                                        </LicenseItem>
                                    ))}
                                </LicenseItemWrapper>

                                <Link to="#" onClick={(e) => { e.preventDefault(); setShowResult(false)}}>Search Again</Link>
                            </Whitebox>

                            <TextCenterLayout
                                headline={`Want more 1-on-1 help?`}
                                headlineWidth="700"
                                text={`Our Business License Research Package offers total peace of mind by having our licensing
                                specialist conduct the necessary research to determine all of the licenses and permits
                                required on a city, state, and county level specifically for your business.`}
                            />     
                            
                            <Button
                                content={{ text: `Do The ReSearch For me`, url: `/business-license-research-package/` }}
                                theme="primary56" width="250px" arrow />
                        </>
                    )}
            </ContentCenter>
        </SearchTool>
    );
};

export default SearchToolSection;
