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
	box2: {
		disadventage: false,
		circleBackgroundColor: color.green1,
		circleBackgroundShadow: shadow.green1,
		text: `Save Time and Money. We'll Handle The Paperwork to <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&amp;utm_campaign=Lead%20Gen%20-%20Business%20Entity%20Quiz&amp;utm_source=On_Page_Click&amp;utm_medium=Nonprofit%20Results%20Page&amp;utm_term=Order%20Form" target="_blank">Form
        Your Nonprofit Corporation</a>.`,
	},
};

export const whatIs = {
	header: `What Is a Nonprofit Corporation?`,
	text: `A nonprofit corporation is an organization whose purpose is something other than making a profit. A nonprofit donates its revenue to achieve a specific goal that benefits the public, instead of distributing it to shareholders. There are over 1.5 million nonprofit organizations registered in the US.`,
	text2: `Being a nonprofit does not mean the organization won’t make a profit. Nonprofits can make money, but all of the money must go back into the organization by paying employee salaries, administrative expenses and other overhead costs. No one person or group owns a nonprofit. Assets from a nonprofit can be sold, but it benefits the whole organization rather than individuals.`,
	text3: `While anyone can incorporate as a nonprofit, only those who pass the stringent standards set forth by the government can achieve tax exempt, or 501c3, status. 
    The process of creating incorporation papers is just the first step in becoming a completely recognized nonprofit organization. We discuss the steps to becoming a nonprofit further into this page.`,
};

export const forWho = {
	header: `Who Is a Nonprofit Corporation 
    Right For?`,
	text: `Nonprofits are agents of change in the world today. They are established for a specific noncommercial purpose, usually religious, educational or charitable.`,
	text2: `Common not for profit businesses include...`,
	icons: [
		{
			image: `church-4247`,
			text: `Churches`,
		},
		{
			image: `bakery-6288`,
			text: `Food Banks`,
		},
		{
			image: `specialist-building`,
			text: `Hospitals`,
		},
		{
			image: `municipal-8990`,
			text: `Museums`,
		},
		{
			image: `real-estate-1528`,
			text: `Schools/Universitites`,
		},
		{
			image: `daycare-6328`,
			text: `Homeless Shelters`,
		},
	],
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
	text: `Don't get stuck, let us help you navigate the process. <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&utm_campaign=Lead%20Gen%20-%20Business%20Entity%20Quiz&utm_source=On_Page_Click&utm_medium=Nonprofit%20Results%20Page&utm_term=Order%20Form">Form your Nonprofit Corporation today!</a>`,
};

export const types = {
	header: `Types of Nonprofit Companies`,
	text: `There are four main types of non-profits common in the United States. Each contains the ability to achieve tax exempt status despite their slightly different goals and corporate structure. They include:`,
	boxes: [
		{
			header: `Social Advocacy Organizations`,
			text: `This type of group is member-based and sets out to achieve specific goals without achieving a profit. The organization uses donations and member dues to send out information that promotes a particular social agenda.`,
		},
		{
			header: `Foundations`,
			text: `This type of organization often works to better the community, whether contributing financially to local charities, or holding events that benefit residents. They are funded by and contribute on behalf of another for-profit corporation.`,
		},
		{
			header: `Public Charities`,
			text: `aaTypically, a charity provides low cost or free services to the public using funds received from the public, known as a donation. This can be obtained through private donations or fundraising events specifically designed to solicit members or advocates of the organization.a`,
		},
		{
			header: `Trade and Professional Organizations`,
			text: `People in the same organization can benefit from the activities of this type of non-profit. They are funded primarily through membership dues.`,
		},
	],
	text2: `Political parties are also eligible for tax exempt status, but do not fall under the standard nonprofit category.`,
	button: {
		text: `Form Your Nonprofit Today`,
		url: `${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit&utm_campaign=Lead%20Gen%20-%20Business%20Entity%20Quiz&utm_source=On_Page_Click&utm_medium=Nonprofit%20Results%20Page&utm_term=Order%20Form`,
	},
};

export const howTo = {
	header: `How to Achieve 501c3 Status`,
	text: `Corporations may file for federal tax exempt status, also known as 501c3 by the IRS, if they are incorporated as a nonprofit corporation or trust. They must meet and maintain certain stringent criteria to be considered free from paying taxes. These include:`,
	list: [
		`For most states, you must name a Board of Directors to manage the high-level decisions of the non-profit corporation. These must be individuals and not corporations.`,
		`You must create a purpose statement and operate solely within the guidelines it sets forth. Purposes that are acceptable include charitable, educational, scientific, literary, sports competition and preventing cruelty to animals or children.`,
		`When incorporating, the assets of your nonprofit must be dedicated to other charities, especially should the corporation dissolve. This would be written 
        as a dissolution statement in your Articles of Incorporation.`,
	],
	text2: `All other steps associated with Incorporation apply to the creation of a nonprofit organization, such as paying fees, registering for business locally and <a href="/manage-your-company/tax-id-ein/">applying for your EIN</a>.`,
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
