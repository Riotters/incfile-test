import { color } from "../../atomic/atoms/styles/colors";
import { shadow } from "../../atomic/atoms/styles/shadows";

export const top = {
	header: "You should consider forming a Nonprofit!",
	text:
		"Here's how to get your nonprofit corporation off the ground quickly and smoothly",
	button: {
		text: "Form Your Nonprofit Today",
		url: `${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&utm_campaign=Lead%20Gen%20-%20Business%20Entity%20Quiz&utm_source=On_Page_Click&utm_medium=Nonprofit%20Results%20Page&utm_term=Order%20Form`,
	},
	link: {
		text: "Retake Quiz",
		url: "/business-entity-quiz/explain/",
	},
};

export const about = {
	box: {
		header: `Incorporating your company is not always an easy process.`,
		text: `Incfile is here to help you decide not only how to incorporate, but to understand exactly which type of status to file.`,
	},
	text: `Many companies who incorporate are actually charities that do not intend to make a profit, but rather donate all profits to another organization. In this case, a charity would want to incorporate as a nonprofit and, ultimately, apply for tax exempt status. By having tax exempt status, your donations can be recorded by donors as not taxable by both the federal and state government. This is a great incentive to be able to offer your constituents.`,
	text2: `People who start nonprofits are driven by passion about a certain cause. Whatever your cause, creating a nonprofit can make a difference. We've provided as much information as you need to know in choosing to incorporate as a nonprofit corporation.`,
};

export const prosAndCons = {
	header: `Advantages and Disadvantages of Starting a Nonprofit`,
	boxes: [
		{
			disadventage: false,
			circleBackgroundColor: color.green1,
			circleBackgroundShadow: shadow.green1,
			text: `
            Another advantage is legal protection, as the founders and members are generally not held personally responsible for 
            a nonprofit’s debts. The legal advantage is available without 501c3 status, as is the benefits that become available for employees, such as health and retirement plans. Furthermore, a nonprofit corporation that formalizes their existence improve the chances for longevity and success because the mission and vision must be clear and achievable.
            <br><br>
            Another advantage is legal protection, as the founders and members are generally not held personally responsible for 
            a nonprofit’s debts. The legal advantage is available without 501c3 status, as is the benefits that become available for employees, such as health and retirement plans. Furthermore, a nonprofit corporation that formalizes their existence improve the chances for longevity and success because the mission and vision must be clear and achievable.
            `,
		},
		{
			disadventage: true,
			circleBackgroundColor: color.red1,
			circleBackgroundShadow: shadow.red1,
			text: `
            There are few disadvantages of becoming a nonprofit. Nonprofits cost money and time to start. Once a nonprofit is started, you must keep excellent records and make sure to file all paperwork yearly. This can be resolved by hiring the proper professionals to handle such details. Since nonprofits are there to serve the public, they are also under greater public scrutiny.
            `,
		},
	],
};

export const types = {
	header: `How to Achieve 501c3 Status`,
	text: `Corporations may file for federal tax exempt status, also known as 501c3 by the IRS, if they are incorporated as a nonprofit corporation or trust. They must meet and maintain certain stringent criteria to be considered free from paying taxes. These include:`,
	list: [
		`For most states, you must name a Board of Directors to manage the high-level decisions of the non-profit corporation. These must be individuals and not corporations.`,
		`You must create a purpose statement and operate solely within the guidelines it sets forth. Purposes that are acceptable include charitable, educational, scientific, literary, sports competition and preventing cruelty to animals or children.`,
		`When incorporating, the assets of your nonprofit must be dedicated to other charities, especially should the corporation dissolve. This would be written 
        as a dissolution statement in your Articles of Incorporation.`,
	],
	text2: `All other steps associated with Incorporation apply to the creation of a nonprofit organization, such as paying fees, registering for business locally and applying for your EIN.`,
	button: {
		text: `Form Your Nonprofit Today`,
		url: `${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&utm_campaign=Lead%20Gen%20-%20Business%20Entity%20Quiz&utm_source=On_Page_Click&utm_medium=Nonprofit%20Results%20Page&utm_term=Order%20Form`,
	},
};

export const requirements = {
	list: [
		`Pick a Name`,
		`File Paperwork`,
		`File for Tax Exemption`,
		`Create Bylaws & Acquire Licenses`,
		`Appoint Directors and Hold Your First Meetings`,
	],
};

export const faq = {
	header: `Other Frequently Asked Questions about LLCs`,
	items: [
		{
			question: `How do I create a budget for my nonprofit?`,
			answer: `Creating an operational budget for your nonprofit is essential. The board of directors will establish a budget period and set organizational goals for that period. Make sure you estimate your expenses and anticipated revenue.`,
		},
		{
			question: `Do I need to have a mission statement for my nonprofit?`,
			answer: `It is a good idea to have a mission statement that clearly defines your nonprofits’ goal. Learn more about writing nonprofit mission statements.`,
		},
		{
			question: `What is an Advisory Group and do I need one for my nonprofit?`,
			answer: `An advisory groups is a group of individuals outside of the board who bring a skill set to help advise a nonprofit. They don’t have actual authority, but they can make recommendations to the board of directors. Sometimes they are made up of retired board members who have worked in similar fields to your nonprofit. It may be a good idea to establish an advisory group if there are major disagreements or complex issues for the board to handle.`,
		},
	],
};
