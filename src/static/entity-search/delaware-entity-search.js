export const top = {
	header: `Discover If the Business Name You Want Is Available to Register in Delaware`,
	text: `Perform a Delaware Entity Search Before Creating an LLC or Corporation`,
	button: [
		{
			text: "Check Name Availability",
			url: "#form",
		},
	],
};

export const about = {
	text: `<span>Delaware is one of the most popular states to start a business due to its favorable laws and pro-business institutions.</span> If you want to start a new business entity in Delaware, you need the right name. Our helpful Delaware corporation search tool lets you easily check for existing business names on the company register with the Delaware Division of Corporations.`,
	box: {
		header: `Once you’ve decided on the perfect name, you can quickly register your Delaware LLC or corporation through us for one low fee.`,
		text: `To search for Delaware business entities, just enter your details in the box below, and we’ll take care of everything else.`,
	},
};

export const search = {
	header: `Free Business Name Search`,
	header2: `We’ll Take Care of the Entity Search.`,
	text: `We’ll tell you if your business name is available with
  the Delaware Division of Corporations. Just fill in your proposed business name, and we’ll search the company registrar for you.`,
	form: {
		header: `Please enter the business name information`,
		field: {
			label: `First Name*`,
		},
		field2: {
			label: `Entity Type`,
			link: {
				text: `Not sure?`,
				url: `/business-entity-comparison/`,
			},
			options: [`LLC`, `Corporation`],
		},
		header2: `Let us know where we can let you know if your business name is available`,
		field3: {
			label: `First Name*`,
		},
		field4: {
			label: `Last Name*`,
		},
		field5: {
			label: `Email*`,
		},
		button: {
			text: `Check Name Availability`,
			url: `/`,
		},
	},
};

export const faq = {
	header: `Common Questions About Delaware Company Searches`,
	items: [
		{
			question: `Why Is Delaware such a popular place to start a business?`,
			answer: `Delaware has long been a favored state to start a business for several reasons:`,
			list: [
				"The state has a large and well-resourced Division of Corporations that promotes business interests and provides plenty of support to help businesses incorporate and register there",
				"Delaware state law is very supportive of businesses and is used as precedent in courts across the U.S.",
				"Tax laws in Delaware can be beneficial and advantageous, especially for out-of-state income",
				"Delaware has low costs to register and provide ongoing filing requirements",
				"Delaware has strong privacy protections",
			],
			text:
				"As a result, half of all publicly-traded corporations and two-thirds of Fortune 500 companies are incorporated in Delaware.",
		},
		{
			question: `What should I consider when deciding on a Delaware business name?`,
			answer: [
				{
					text: `The perfect business name can be elusive. We have a`,
				},
				{
					text: `complete guide to choosing the right business name,`,
					url: `https://www.incfile.com/blog/llc-name-search-50-states/`,
				},
				{
					text: `but put briefly, you'll want to choose a name that will:`,
				},
			],
			list: [
				"Appeal to your customers",
				"Be memorable enough to stand out",
				"Best represent your product or services",
				"Not be used by another business",
			],
		},
		{
			question: `What information is included in an Annual Report?`,
			answer: `It varies from state to state, but typically includes any changes to:`,
			list: [
				"The management structure of your business (like managers, members or directors)",
				"The names or addresses of senior people in your business",
				"Your business name or address",
				"Your registered agent details",
				"Main business activities",
				"Share structures or amounts",
				"Other authorized signatories",
				"Some other areas",
			],
		},
		{
			question: `How do I protect my Delaware business name?`,
			answer: [
				{
					text: `The easiest way to protect the business name you’ve chosen is to`,
				},
				{
					text: "incorporate your business in Delaware,",
					url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=DE`,
				},
				{
					text:
						"generally as a Limited Liability Company (LLC) or a corporation. If you want extra protection, you could consider ",
				},
				{
					text: "registering your Delaware business name as a trademark.",
					url: "/trademark-name-search/",
				},
				{
					text:
						'Note that filing a fictitious or “doing business as" (DBA) name in Delaware will not be sufficient to protect it.',
				},
			],
		},
		{
			question: `What organization registers and manages business names in Delaware?`,
			answer: `Businesses are incorporated in Delaware via the state's Division of Corporations. They manage the Delaware company register, and it is their business name database that we will search on your behalf.`,
		},
	],
};
