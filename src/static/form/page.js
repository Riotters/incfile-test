import { color } from "../../atomic/atoms/styles/colors";

export const top = {
	header: `The Easiest Way 
    To Setup Your LLC`,
	text: `Join Over <span>500,000</span> Businesses Launched 
    With incfile Since <span>2004</span>`,
	buttons: [
		{
			text: "Get Started",
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC`,
		},
		{
			text: "Watch Video",
			url: `${process.env.ORDER_URL}/kit-info.php`,
		},
		{
			text: "Watch Video",
			url: `/`,
		},
	],
};

export const opinions = {
	header: `Why Do Our Customers Love Us?`,
	text: `4.8 Overall Satisfaction Rating based on <span id="js_dynamic_total_review">0</span> reviews`,
	customers: [
		{
			photo: `mattweik-11`,
			name: `Jade B.`,
			city: `California`,
			text: `Very easy to use, there are no questions if I'm doing things wrong or if I'm forgetting anything. incfile has it covered.`,
		},
		{
			photo: `mattweik-12`,
			name: `Jarret C.`,
			city: `Pennsylvania`,
			text: `I normally get my corp filings from another company, but after purchasing a corp thru incfile.com, and how fast I received everything, this is my new go-to for legal business filings. Highly recommend!`,
		},
	],
};

export const choose = {
	header: `Why choose Incfile?`,
	text: `We Make Starting Your [STATE_NAME] LLC Easy`,
	boxes: [
		{
			color: color.red3,
			image: `software-codders-and-application-developers`,
			header: `Simple System`,
			text: `Our proprietary filing system makes everything simple. From company name availability verification, preparation of documents, filing to followup support and industry leading customer support.`,
		},
		{
			color: color.yellow3,
			image: `state-filling-fees-0911`,
			header: `Affordable`,
			text: `Our basic filing is affordable with plans starting at $0 plus your state filing fee. We believe that starting your company shouldn't drain the bank before you even get started.`,
		},
		{
			color: color.blue3,
			image: `we-have-an-interactive-help-service-8232`,
			header: `Ongoing Support`,
			text: `We make registering a company as easy as possible. Beyond that, we have a full suite of startup services (like banking and bookkeeping), which means Incfile not only helps you get started, but supports you in your continued success as your one-stop shop.`,
		},
	],
};

export const care = {
	header: `We Take Care<br>Of Everything For You!`,
	text: `There's a reason over <span>500,000</span> businesses have started with incfile.
    We include many amazing benefits with all packages.`,
	list: [
		`Company name verification`,
		`Next business day processing`,
		`Free first year registered agent`,
		`Lifetime company alerts`,
		`Preparation and filing of articles`,
		`Online order status tracking`,
		`Free business tax consult and lifetime customer support`,
	],
	cards: [
		{
			text: `I am very satisfied with the services I received from Incfile. My business has been using this service for 3 years, keeping me updated on all facets pertaining 
            to business.`,
			author: `Linda`,
			state: ``,
		},
		{
			text: `Everyone at IncFile has been first class and quick to respond to my service needs. 
            I appreciate you going above and beyond and taking the time to educate me.`,
			author: `Tim A`,
			state: ``,
		},
	],
};
