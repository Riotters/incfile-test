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

export const opinions = {
	header: `Why Do Our Customers Love Us?`,
	text: `4.8 Overall Satisfaction Rating based on 13,797 reviews`,
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
	text: `We Make Starting Your LLC Easy`,
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
