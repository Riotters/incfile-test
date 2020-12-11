import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../../components/styles/colors";
import { states } from "../../../../components/states";
import Dropdown from "../../../molecules/form/dropdown";
import ContentCenter from "../../../partials/content-center";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import Button from "../../../molecules/buttons/button-action";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import LicenseIcon from "../../../../images/icons/license.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Whitebox from "../../../atoms/boxes/white-box";
import ArrowLink from "../../../molecules/buttons/text";
import TopButtonsBox from "../../../atoms/boxes/top-buttons-box";

const SearchTool = styled.div`
	padding-bottom: 0;
	padding-top: 40px;
	position: relative;
	background-image: ${gradient.blue3};

	@media (min-width: 769px) {
		padding-top: 100px;
	}

	.section-headline {
		margin-bottom: 32px;
	}

	.license-holder {
		margin-bottom: 48px;
		padding: 15px;
	}

	@media (min-width: 576px) {
		.license-holder {
			margin-bottom: 76px;
			padding: 40px;
		}
	}
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

    h3 {
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
`;

const Icon = styled.div`
`

const LicenseItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: ${color.orange3};
	font-family: "Avenir", san-serif;
	margin-bottom: 8px;
	padding: 12px 24px;

	@media (min-width: 576px) {
		padding: 34px 53px;
		flex-direction: row;
		justify-content: unset;
		height: 100px;
	}

	& > p {
		font-size: 20px;
		margin-bottom: 0;
		font-weight: bold;
		color: ${color.black};
		text-align: center;

		@media (min-width: 576px) {
			margin-left: 32px;
			text-align: left;
		}
	}

	&:first-child {
		border-radius: 24px 24px 0 0;
	}

	&:last-child {
		border-radius: 0 0 24px 24px;
	}

	.icon {
		width: 50px;

		@media (min-width: 576px) {
			margin-bottom: 0;
		}
	}
`;

const StyledParagraph = styled(Paragraph)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 48px;

	@media (max-width: 575px) {
		span:first-child {
			margin-bottom: 8px;
		}
	}

	@media (min-width: 576px) {
		justify-content: space-between;
		align-items: unset;
		flex-direction: row;
	}

	&:first-child {
		margin-bottom: 40px;
	}

	span:first-child {
		color: ${color.black};
		font-weight: bold;
	}

	span:last-child {
		color: ${color.grey2};
	}
`;

const dropdownOptions = states.state.map((state) => state.name);

const SearchToolSection = ({ content, businessIndustryList }) => {
	const [selectedState, setSelectedState] = React.useState("");
	const [licenseOption, setLicenseOption] = React.useState({});
	const [licenseFound, setLicenseFound] = React.useState({});
	const [showResult, setShowResult] = React.useState(false);

	const cards = content.cards;
	let dropdownOptionsTwo = [];

	businessIndustryList.map((item) => {
		dropdownOptionsTwo.push({
			value: item.id,
			label: item.name,
		});
	});

	const findLicense = (e) => {
		e.preventDefault();

		if (!licenseOption?.label) {
			return;
		}

		let finds = businessIndustryList.find(
			(item) => item.id === licenseOption.value
		);
		setLicenseFound(finds);
		setShowResult(true);
	};

	return (
		<SearchTool>
			<Oval heigh="720" width="720" top="0" left="0">
				<OvalSVG />
			</Oval>
			<ContentCenter>
				<TextCenterLayout
					headline={content.header}
					headlineWidth="770"
					text={content.text}
					className="section-headline"
				/>

				{!showResult ? (
					<>
						<ImageBoxes>
							<TopImageBox
								className="box box--left"
                                image="your-state-7282"
                                imageAlt="business license search tool"
								color={color.blue3}
							>
								<Heading size={3} template={4} center>
									{cards[0]}
								</Heading>
								<Dropdown
									className="dropdown"
									placeholder="Select"
									options={dropdownOptions}
									onChange={(option) => setSelectedState(option.value)}
								/>
							</TopImageBox>
							<TopImageBox
								className="box box--right"
								image="forming-a-corporation"
								color={color.orange3}
							>
								<Heading size={3} template={4} center>
									{cards[1]}
								</Heading>
								<Dropdown
									className="dropdown"
									placeholder="Select"
									options={dropdownOptionsTwo}
									onChange={(option) => setLicenseOption(option)}
								/>
							</TopImageBox>
						</ImageBoxes>

						<Button
							content={content.button}
							theme="primary56"
							arrow
							onClick={(e) => findLicense(e)}
						/>
					</>
				) : (
					<>
						<Whitebox className="license-holder" style={{ maxWidth: "630px" }}>
							<StyledParagraph big mixed>
								<span>Your State</span>
								<span>{selectedState}</span>
							</StyledParagraph>
							<StyledParagraph big mixed>
								<span>Your Industry</span>
								<span>{licenseFound.name}</span>
							</StyledParagraph>

							{licenseFound.licenses.length ? (
								<LicenseItemWrapper>
									{licenseFound.licenses.map((item) => (
										<LicenseItem>
											<Icon className="icon">
												<LicenseIcon />
											</Icon>
											<Paragraph>{item}</Paragraph>
										</LicenseItem>
									))}
								</LicenseItemWrapper>
							) : (
								<Paragraph style={{ textAlign: `center` }}>
									There was no licenses that you needed.
								</Paragraph>
							)}

							<TopButtonsBox style={{ justifyContent: "center" }}>
								<ArrowLink
									bottomMargin={0}
									content={{ text: "Search Again", url: "#" }}
									onClick={(e) => {
										e.preventDefault();
										setShowResult(false);
									}}
								/>
							</TopButtonsBox>
						</Whitebox>

						<TextCenterLayout
							headline={`Want more 1-on-1 help?`}
							headlineWidth="700"
							text={`Our Business License Research Package offers total peace of mind by having our licensing
                                specialist conduct the necessary research to determine all of the licenses and permits
                                required on a city, state, and county level specifically for your business.`}
							style={{ marginBottom: "34px" }}
						/>

						<Button
							content={{
								text: `Do The Research For me`,
								url: `/business-license-research-package/`,
							}}
							theme="primary56"
							width="250px"
							arrow
						/>
					</>
				)}
			</ContentCenter>
		</SearchTool>
	);
};

export default SearchToolSection;
