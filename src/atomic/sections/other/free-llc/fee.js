import React from "react";
import styled from "styled-components";
//import { states } from "../../../../components/states";
import { states } from "../../../../static/states";
import Dropdown from "../../../molecules/form/dropdown";
import ContentLeft from "../../../partials/content-left";
import ContentCenter from "../../../partials/content-center";
import HeadingCenter from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import Button from "../../../molecules/buttons/button-action";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-babyblue.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-left-bottom-right-big.inline.svg";
import { color } from "../../../atoms/styles/colors";
import { entities } from "../../../../static/entities";
import parse from "html-react-parser";
import {PHeading} from "../../../atoms/typography/p-to-heading";

const Fee = styled.div`
	padding-bottom: 100px;
	padding-top: 100px;
	position: relative;
`;

const ImageBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  margin-top: 80px;
  padding-bottom: 48px;
  width: 100%;
  position: relative;

  @media(min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 970px) {
    width: 970px;
    margin-left: auto;
    margin-right: auto;
  }

  .box {
      padding: 16px 16px 56px;

    h4, [class*="i-believe-i-can-be-a-h"] {
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

const FeeSection = ({ content }) => {
	const cards = content.cards;
	const [entityType, setEntity] = React.useState("LLC");
	const [entityState, setEntityState] = React.useState("");

	const handleForm = (e) => {
		e.preventDefault();
		let url = `${process.env.ORDER_URL}/form-order-now.php?entityType=${entityType}&entityState=${entityState}`;

		if (typeof window !== "undefined") {
			window.location.replace(url);
		}
	};

	return (
		<Fee>
			<Oval heigh="720" width="720" top="0" left="0" y="-20">
				<OvalSVG />
			</Oval>
			<HeadingCenter
				headline={content.header}
				headlineWidth="770"
				bottomMargin="80"
			/>
			<ContentLeft contentWidth="770">
				<Paragraph big>{content.text}</Paragraph>
				<Paragraph big mixed>
					{parse(content.text2)}
				</Paragraph>
			</ContentLeft>
			<ContentCenter contentWidth="970">
				<ImageBoxes>
					<Curve top="-95" right="-15" color={color.purple2}>
						<CurveSVG />
					</Curve>
					<TopImageBox
						className="box box--left"
						image="lcsn-4343"
                        color={color.green3}
                        imageAlt="entity type"
					>
						<PHeading size={4}>{cards[0]}</PHeading>
						<Dropdown
							className="dropdown"
							placeholder="Select"
							options={entities.map((entity) => entity)}
							onChange={(option) => setEntity(option.value)}
						/>
					</TopImageBox>
					<TopImageBox
						className="box box--right"
						image="your-state-7282"
                        color={color.blue3}
                        imageAlt="state of formation"
					>
						<PHeading size={4}>{cards[1]}</PHeading>
						<Dropdown
							className="dropdown"
							placeholder="Select"
							options={states.map((state) => state.name)}
							onChange={(option) => setEntityState(option.value)}
						/>
					</TopImageBox>
				</ImageBoxes>
				<Button
					content={content.button}
					theme="primary56"
					arrow
					onClick={(e) => handleForm(e)}
				/>
			</ContentCenter>
		</Fee>
	);
};

export default FeeSection;
