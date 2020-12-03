import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../../components/styles/colors";
import { states } from "../../../../components/states";
import Dropdown from "../../../molecules/form/dropdown";
import ContentCenter from "../../../partials/content-center";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { getFullPricesAndFilings } from "../../../../api/Api";

const SearchTool = styled.div`
	padding-bottom: 100px;
	padding-top: 100px;
	position: relative;

	&::before {
		content: "";
		height: 1650px;
		width: 100%;
		background-image: ${gradient.orange3};
		position: absolute;
		top: 0;
		left: 0;
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
                border-radius: 50px 5px 5px 5px;
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
                border-radius: 5px 50px 5px 5px;
            }
        }
    }
  }

  .dropdown {
      max-width: 304px;
      margin: 0 auto;
`;

const dropdownOptions = states.state.map((state) => state.name);
const dropdownOptionsTwo = [
	{ value: `LLC`, label: `LLC` },
	{ value: `SCorporation`, label: `S Corporation` },
	{ value: `CCorporation`, label: `C Corporation` },
	{ value: `Nonprofit`, label: `Nonprofit` },
];

const SearchToolSection = ({ content, getDataApi }) => {
	const cards = content.cards;
	const [entityType, setEntityType] = React.useState("");
	const [entityState, setEntityState] = React.useState("");

	React.useEffect(() => {
		if (entityType && entityState) {
			getFullPricesAndFilings(entityState, entityType).then((data) => {
				getDataApi(data);
			});
		}
	}, [entityType, entityState]);

	return (
		<SearchTool>
			<Oval heigh="720" width="720" top="0" right="0">
				<OvalSVG />
			</Oval>
			<ContentCenter>
				<TextCenterLayout
					headline={content.header}
					headlineWidth="700"
					text={content.text}
				/>
				<ImageBoxes>
					<TopImageBox
						className="box box--left"
						image="lcsn-4343"
						color={color.green3}
					>
						<Heading size="4">{cards[0]}</Heading>
						<Dropdown
							className="dropdown"
							placeholder="Select"
							options={dropdownOptionsTwo}
							onChange={(option) => setEntityType(option.value)}
						/>
					</TopImageBox>
					<TopImageBox
						className="box box--right"
						image="your-state-7282"
						color={color.blue3}
					>
						<Heading size="4">{cards[1]}</Heading>
						<Dropdown
							className="dropdown"
							placeholder="Select"
							options={dropdownOptions}
							onChange={(option) => setEntityState(option.value)}
						/>
					</TopImageBox>
				</ImageBoxes>
			</ContentCenter>
		</SearchTool>
	);
};

export default SearchToolSection;
