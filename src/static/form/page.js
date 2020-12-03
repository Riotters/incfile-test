import { color } from "../../atomic/atoms/styles/colors";

export const top = {
	header: `The Easiest Way 
    To Setup Your LLC`,
	text: `Join Over <span>500,000</span> Businesses Launched 
    With incfile Since <span>2004</span>`,
	buttons: [
		{
			text: "Get Started",
			url: `${process.env.ORDER_URL}/kit-info.php`,
		},
		{
			text: "Watch Video",
			url: `${process.env.ORDER_URL}/kit-info.php`,
		},
	],
};

export const about = {
	header: `Incfile Compared to LegalZoom: A Summary`,
	table: {
		headers: [`Company`, `incfile-logo`, `legalzoom-logo`],
		rows: [
			[
				`Cost for Standing an LLC <span>(Basic Package)</span>`,
				`$0 + state fee`,
				`$79 + state fee`,
			],
			[`Processing Time`, `1 day`, `30 days`],
			[`Expedited State Filing`, `+$50`, `Not available in standard package`],
			[
				`Registered Agent`,
				`Free for the first year, then $119 a year thereafter`,
				`$299 a year`,
			],
			[
				`Other Services Offered`,
				`<ul>
                    <li>File a DBA</li>
                    <li>Get an EIN</li>
                    <li>Customized Operating Agreement</li>
                    <li>Banking resolution</li>
                    <li>Business license and permit search</li>
                    <li>S Corporation tax filing structure for LLCs</li>
                    <li>Trademark search and registration</li>
                    <li>Bookkeeping and tax services</li>
                    <li>Domain and email</li>
                    <li>Virtual business address and mailbox serviceaa</li>
                </ul>`,
				`<ul>
                    <li>Reserve an entity name</li>
                    <li>File a DBA</li>
                    <li>Get an EIN</li>
                    <li>Business license and permit research</li>
                    <li>Customized Operating Agreement</li>
                    <li>Trademark search and registration</li>
                </ul>`,
			],
		],
		bottomMargin: `72`,
	},
	header2: `Expertise & Information on LLC Formation`,
	cards: [
		{
			image: `incfile-vs-image-4453`,
			header: `Arriving at the Company Formation Website`,
			text: `What can you expect when you visit the websites 
        for the first time?`,
			textWidth: "370",
			bottomMargin: `32`,
			boxes: [
				{
					radius: "15px 15px 0 0",
					color: color.blue3,
					header: `Incfile’s`,
					text: `front page gets you straight into the process of starting a business by asking you the type of entity you want to create and providing information for each one.`,
					bottomMargin: "6",
				},
				{
					radius: "0 0 15px 15px",
					color: color.blue3,
					header: `LegalZoom`,
					text: `provides services besides business formation, including wills, personal affairs, intellectual property and other attorney services. As a result, finding information on company formation is a little more complex`,
				},
			],
		},
		{
			image: `incfile-vs-image-4454`,
			header: `Comparing Different Business Entity Types`,
			text: `Prospective business owners will need to review their options when deciding on the right business structure. It’s important to have the right information so you can make an informed, educated choice.`,
			textWidth: "470",
			bottomMargin: `40`,
			boxes: [
				{
					radius: "15px 15px 0 0",
					color: color.green3,
					header: `Incfile’s`,
					text: `has dedicated pages on each entity type, from LLCs to C Corporations, plus an interactive <a href="/">Business Entity Quiz</a> designed to give a prospective business owner deep insight into the business structure that’s best for them. It also has an <a href="/">overview page and comparison chart</a> highlighting the key benefits and drawbacks for each type of business entity.`,
					bottomMargin: "6",
				},
				{
					radius: "0 0 15px 15px",
					color: color.green3,
					header: `LegalZoom`,
					text: `also has a comparison page listing the differences between the various types of business entities. Unfortunately, their individual business entity information pages lack detail and enough information to make a truly informed choice, meaning more research would be needed.`,
				},
			],
		},
	],
	text: `Both Incfile and LegalZoom have large collections of helpful documents to help prospective business owners.`,
	header3: `How Easy Is It to Set Up an LLC with Incfile vs. LegalZoom?`,
	text2: `To directly compare services, we went through the process of setting up 
    a limited liability company — the most popular type of legal entity for startup, small and medium businesses.`,
	header4: `Forming an LLC with <span>Incfile</span>`,
	text3: `Here are the steps you need to take to form an LLC with Incfile.`,
	list: [
		`Choose the business entity type and the state you would like to form the business in.`,
		`Choose a “package” for forming your LLC — each package is priced differently and features different options.`,
		`Incfile requests your contact information.`,
		`Choose whether to expedite company formation.`,
		`Incfile provides one year of Registered Agent service free.`,
		`Provide the company name, business type and company contact details.`,
		`Choose if you want Incfile to get an Employer Identification Number (EIN) for you.`,
		`Choose if you want a customized LLC kit.`,
		`Choose how quickly you would like the company formation documents sent to you.`,
		`Confirm the details you have entered.`,
		`Decide if you want a Business License Research package, which helps you understand the types of business licenses you will need to fill in and file.`,
		`Decide if you want a business tax consultation.`,
		`Provide payment information and the formation process starts.`,
	],
	text4: `All stages in the LLC formation process are supported by frequently asked questions so you can make an informed choice.`,
	header5: `Forming an LLC with <span>LegalZoom</span>`,
	text5: `Here are the steps you need to take to form an LLC with LegalZoom.`,
	list2: [
		`Choose the state you want to form your business entity in.`,
		`Provide information on the field your business operates in.`,
		`Provide further detail on what your business does.`,
		`Answer questions about the number of owners the business will have, whether it is a new business, whether it will have employees in the next 12 months and when the end of its fiscal year will be.`,
		`Provide the company contact details of your new business.`,
		`Provide the business name and a backup name if the one you have chosen is not available.`,
		`Provide the name of the business owner.`,
		`Provide the name(s) of any business manager(s).`,
		`Decide if you want LegalZoom’s Registered Agent service for $299.`,
		`Provide the name of the Registered Agent if it is not LegalZoom.`,
		`Choose if you want LegalZoom to get an EIN for you.`,
		`Choose if you want a complimentary tax consultation.`,
		`Choose a compliance and tax package, or do the work yourself.`,
		`Choose if you want to hire an attorney to help with business formation and planning.`,
		`Decide if you want a business license package, which helps you understand the types of business licenses you will need to fill in and file.`,
		`Choose if you want to subscribe to a “Compliance Calendar.”`,
		`Choose if you want to subscribe to LegalZoom’s “Business Advantage” service.`,
		`Choose if you want to open a business checking account.`,
		`Choose if you want to apply for a business credit card or a business credit consultation.`,
		`Decide if you want a website domain name and website design consultation.`,
		`Review the information you have entered.`,
		`Choose the company formation package and pay the fee.`,
		`Checkout and supply payment information.`,
	],
	text6: `The stages in the LLC formation process with LegalZoom are not supported by FAQs, so further research may be needed.`,
	text7: `Clearly, the company formation process with LegalZoom is longer and more involved than the Incfile process.`,
	header6: `Cost Comparison: Incfile and LegalZoom`,
	text8: `Both incorporation businesses provide three packages for LLC company formation. As you can see, LegalZoom is much more expensive across each package, and they also provide fewer services than Incfile.`,
	table2: {
		badge: [``, `silver`, `economy`],
		headers: [`Company`, `incfile-logo`, `legalzoom-logo`],
		rows: [
			[`Cost`, `$0 + state fee`, `$79 + state fee`],
			[
				`Whats Included`,
				`<ul>
                    <li>Unlimited business name searches</li>
                    <li>Verification of company name availability</li>
                    <li>Preparation and filing of articles</li>
                    <li>Setup of a business bank account with Bank of America</li>
                    <li>Free electronic delivery of documents</li>
                    <li>An online dashboard</li>
                    <li>Unlimited phone and email support</li>
                    <li>Free business tax consultation</li>
                    <li>Lifetime customer alerts</li>
                    <li>Lifetime customer support</li>
                </ul>`,
				`<ul>
                    <li>Free entity name check</li>
                    <li>Preparation and filing of articles</li>
                    <li>Tracking of order progress</li>
                    <li>Free electronic delivery of documents</li>
                    <li>Customer support</li>
                    <li>Free business tax consultation</li>
                </ul>`,
			],
		],
		bottomMargin: `56`,
	},
	table3: {
		badge: [``, `gold`, `standard`],
		headers: [`Company`, `incfile-logo`, `legalzoom-logo`],
		rows: [
			[`Cost`, `$149 + state fee`, `$329 + state fee`],
			[
				`Whats Included`,
				`Includes everything in the Silver package, plus:
                <ul style="margin-top: 24px">
                    <li>A corporate kit</li>
                    <li>An Employer Identification Number from the IRS</li>
                    <li>Filing of IRS Form 2553 if needed to have your LLC taxed as an S Corporation</li>
                    <li>Creation of a customized Operating Agreement</li>
                    <li>Provision of a banking resolution</li>
                    <li>Express shipping of physical documents</li>
                </ul>`,
				`Includes everything in the Economy package, plus:
                <ul style="margin-top: 24px">
                    <li>A corporate kit</li>
                    <li>A business newsletter</li>
                    <li>Expedited processing</li>
                </ul>`,
			],
		],
		bottomMargin: `48`,
	},
	table4: {
		badge: [``, `platinum`, `express`],
		headers: [`Company`, `incfile-logo`, `legalzoom-logo`],
		rows: [
			[`Cost`, `$299 + state fee`, `$349 + state fee`],
			[
				`Whats Included`,
				`Includes everything in the Silver and Gold packages, plus:
                <ul style="margin-top: 24px">
                    <li>Access to a business document and contract templates library</li>
                    <liExpedited filing</li>
                    <li>FedEx delivery</li>
                    <li>A website domain name and business email</li>
                </ul>`,
				`Includes everything in the Economy and Standard packages, plus:
                <ul style="margin-top: 24px">
                    <li>Priority filing</li>
                    <li>Express shipping</li>
                </ul>`,
			],
		],
		bottomMargin: `72`,
	},
	header7: `Other Business Services Offered`,
	text9: `Both Incfile and LegalZoom provide several business services besides company formation. We’ve included a summary of those services below, along with the price from each provider.`,
	services: [
		{
			image: `bc-18`,
			boxColor: `${color.green3}`,
			header: `Registered Agent Services`,
			text: `Provides a Registered Agent to take care of receiving your official business filings and paperwork`,
			table: {
				headers: [`Incorporate Business`, `Cost`],
				rows: [
					[
						`Incfile`,
						`<strong>Free for the first year</strong>, then $119 a year thereafter`,
					],
					[`LegalZoom`, `$299 a year`],
				],
			},
			bottomMargin: `48`,
		},
		{
			image: `proposed-name-4338`,
			boxColor: `${color.purple3}`,
			header: `Reserve an Entity Name`,
			text: `Reserve the name you want to use for your business prior to your legal formation.`,
			table: {
				headers: [`Incorporate Business`, `Cost`],
				rows: [
					[
						`Incfile`,
						`Not offered as a service, since name reservation is automatically included in business formation process`,
					],
					[`LegalZoom`, `$49 + state fees`],
				],
			},
			bottomMargin: `48`,
		},
		{
			image: `chart3456`,
			boxColor: `${color.yellow3}`,
			header: `“Fictitious” or “Doing Business As” Name`,
			text: `Use this filing to do business under a different name than the name of your LLC.`,
			table: {
				headers: [`Incorporate Business`, `Cost`],
				rows: [
					[`Incfile`, `$99 + state fees`],
					[`LegalZoom`, `$99–$119 + state fees`],
				],
			},
			bottomMargin: `48`,
		},
		{
			image: `taking-on-staff`,
			boxColor: `${color.red3}`,
			header: `Employer Identification Number from the IRS`,
			text: `Most LLCs will need an EIN for tax identification purposes.`,
			table: {
				headers: [`Incorporate Business`, `Cost`],
				rows: [
					[
						`Incfile`,
						`Included as part of the Gold and Platinum packages, or $70 as a one-off fee`,
					],
					[`LegalZoom`, `$79`],
				],
			},
			bottomMargin: `48`,
		},
		{
			image: `sign-932`,
			boxColor: `${color.purple3}`,
			header: `Customized Operating Agreement`,
			text: `An Operating Agreement defines various facts about the owners of a business and how they will interact.`,
			table: {
				headers: [`Incorporate Business`, `Cost`],
				rows: [
					[`Incfile`, `Included as part of the Gold and Platinum packages`],
					[`LegalZoom`, `$99–$199`],
				],
			},
			bottomMargin: `48`,
		},
		{
			image: `ongoing-filling-requirements-02`,
			boxColor: `${color.blue3}`,
			header: `Business Licenses and Permits Research`,
			text: `LLCs require various permits and licenses to operate. Incfile and LegalZoom both provide a research service.`,
			table: {
				headers: [`Incorporate Business`, `Cost`],
				rows: [
					[`Incfile`, `$99`],
					[`LegalZoom`, `$100`],
				],
			},
			bottomMargin: `48`,
		},
		{
			image: `business-licence-search-4730`,
			boxColor: `${color.purple3}`,
			header: `S Corporation Tax Filing Structure for an LLC`,
			text: `This type of tax filing can save significantly on self-employed taxes.`,
			table: {
				headers: [`Incorporate Business`, `Cost`],
				rows: [
					[
						`Incfile`,
						`Included as part of the Gold and Platinum packages, or $50 as a one-off fee`,
					],
					[`LegalZoom`, `Not offered as a service`],
				],
			},
			bottomMargin: `48`,
		},
		{
			image: `bc-18`,
			boxColor: `${color.yellow3}`,
			header: `Trademark Search and Registration`,
			text: `Trademark searches look for trademarks similar to those you want to register. Trademark registration takes care of the trademark filing and approval process.`,
			table: {
				headers: [`Incorporate Business`, `Cost`],
				rows: [
					[
						`Incfile`,
						`$199 + federal fee for both trademark search and registration`,
					],
					[
						`LegalZoom`,
						`$199–$499 for trademark search, an additional $199–$219 for registration`,
					],
				],
			},
		},
	],
};

export const conclusion = {
	header: `All of these services are more expensive through LegalZoom than Incfile.`,
	text: `Here at Incfile, we’ve worked hard to provide a comprehensive range of business formation and management services 
    at a competitive price. We hope this comparison against LegalZoom shows how much value for money we provide.`,
	image: `conclusion-3629`,
};

export const selections = {
	header: `Get started by making your selections`,
	cards: [`Entity Type`, `State of Formation`],
};
