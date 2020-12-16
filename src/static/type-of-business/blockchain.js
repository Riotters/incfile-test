import Tab1Icon from "../../images/icons/blockchain-technology.inline.svg";
import Tab2Icon from "../../images/icons/light.inline.svg";
import Tab3Icon from "../../images/icons/series-is-this-business-for-you.inline.svg";

export const typeBusiness = {
	items: [
		{
			circleText: 1,
			imageName: "healthcare-startup-business",
			headline: "Healthcare startup businesses",
			text:
				"Recording medical and patient details in the blockchain, including medical records, diagnostics and other information",
		},
		{
			circleText: 2,
			imageName: "real-estate-1528",
			headline: "Real estate startup businesses",
			text:
				"Capturing and sharing details of property listings, transactions, contracts, funding and similar details",
		},
		{
			circleText: 3,
			imageName: "supply-chain-startup-business",
			headline: "Supply chain startup businesses",
			text:
				"Gathering information on raw materials, parts and products; capturing handoff of goods through the supply chain; providing details of contracts, documentation, shipping and payment processing to suppliers and third parties",
		},
		{
			circleText: 4,
			imageName: "shield-icon",
			headline: "Insurance startup businesses",
			text: "Capturing policy details, managing claims or making payments",
		},
	],
};

export const tabs = {
	panels: [
		{
			icon: Tab1Icon,
			name: `Blockchain Technology`,
		},
		{
			icon: Tab2Icon,
			name: `Why This Industry`,
		},
		{
			icon: Tab3Icon,
			name: `Is This Business For You?`,
		},
	],
};
