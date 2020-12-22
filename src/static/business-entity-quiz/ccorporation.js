import { color } from "../../atomic/atoms/styles/colors";
import { shadow } from "../../atomic/atoms/styles/shadows";

export const top = {
	header: "You Should Consider Forming a C Corp!",
	text: "Everything you need to know about forming a C Corporation",
	button: {
		text: "Form Your C Corp Today",
		url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&utm_campaign=Lead%20Gen%20-%20Business%20Entity%20Quiz&utm_source=On_Page_Click&utm_medium=CCorp%20Results%20Page&utm_term=Order%20Form`,
	},
	link: {
		text: "Retake Quiz",
		url: "/business-entity-quiz/explain/",
	},
};

export const types = {
	header: `How Is a C Corporation Formed?`,
	text: `A C Corp, also known as a corporation, is a type of business entity that 
    is formed and regulated on a state level. The corporation is formed 
    by filing “Articles of Incorporation” with the Secretary of State in the state of incorporation. The policies, articles, cost and regulations for forming 
    a C Corp vary from state-to-state. Details on exactly how to form 
    a C Corporation can be found at the end of this article.`,
	box: {
		header: "The corporation is the oldest form of business entity.",
		text: `It has long been a successful way to do business and allows groups 
        of individuals to pool their resources and capital to pursue a common purpose, with their risk limited solely to the amount of stock they own. Although a C Corp is a popular business structure, there are other options for forming businesses in the US.`,
	},
	header2: `Consider a C corp if you..`,
	list: [
		`Plan on having a larger business`,
		`Intend to publicly trade shares`,
		`Want to be attractive to potential investors`,
	],
	button: {
		text: `Form Your C Corp Today`,
		url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&utm_campaign=Lead%20Gen%20-%20Business%20Entity%20Quiz&utm_source=On_Page_Click&utm_medium=CCorp%20Results%20Page&utm_term=Order%20Form`,
	},
};

export const prosAndCons = {
	header: `The Advantages & Disadvantages of C Corporations`,
	boxes: [
		{
			disadventage: false,
			circleBackgroundColor: color.green1,
			circleBackgroundShadow: shadow.green1,
			text: `
            <ul>
                <li>
                    <span>A C Corporation has Limited Liability</span> Because a C Corp is a separate legal entity, the liabilities of the business are separate from the liabilities of the directors, investors and shareholders. Generally, the owners of a C Corporation are protected from being liable for the business’s obligations. This does not apply in all cases, for example if corporate funds are misused, there is wilful fraud, or if certain rules and regulations are not followed.
                </li>
                <li>
                    <span>A C Corporation Exists Independently of its Owners</span> A C Corporation can have “Perpetual Existence” — this is in contrast to sole proprietorships or partnerships where a business only exists for as long as the proprietors or owners are alive and in the business.
                </li>
                <li>
                    <span>Ownership of C Corporations Can Be Fluid and Transferred</span> Ownership in a C Corporation is decided by who holds the stocks 
                    it issues. These stocks can be bought and sold between investors, and if the company’s shares are publicly traded on a stock exchange, institutions and members of the public can own stock 
                    in the company.
                </li>
                <li>
                    <span>Ease of Access to Funding Through Issuing Stock</span> If a C Corporation want to raise money, it can hold an “Initial Public Offering (IPO)” where it “goes public” and offers shares for sale on a stock exchange. This can bring significant money into a business. They can also choose to issue shares periodically to raise further funding, although this can dilute the value of existing shares.
                </li>
                <li>
                    <span>Enhanced Business or Corporate Credibility</span> Most of the businesses that are household names are C Corporations. Incorporating as a C Corp demonstrates to others that you expect to see significant growth and can enhance the business’s credibility and authority.
                </li>
            </ul>
            `,
		},
		{
			disadventage: true,
			circleBackgroundColor: color.red1,
			circleBackgroundShadow: shadow.red1,
			text: `
            <ul>
                <li>
                    <span>A different tax structure to other types of businesses.</span>
                </li>
                <li>
                    <span>Double taxation for investors when dividends are paid to them.</span>
                </li>
                <li>
                    <span>Legal rules, regulations, formalities, and compliance they have to meet.</span>
                </li>
            </ul>
            `,
		},
	],
};

export const advancesAndDisadvances = {
	header: `The Advantages & Disadvantages of C Corporations`,
	text: ` A C Corporation is taxed as a separate business entity. Unlike individuals, C Corporations have to file a designated tax form with the IRS, which is called IRS Form 1120. Additionally, C Corporations have their own tax rates.`,
	text2: `Corporations can retain some of their profits and earnings as part of their operating capital, this can shelter some of the profits from taxation.`,
	header2: `C Corporation Tax Rates`,
	text3: `The tax rates levied on C Corporations are as follows.`,
	table: {
		headers: [`Profit`],
		rows: [
			[
				`<span>Up to $50,000</span><strong>15%</strong>`,
				`<span>$335,000 - $10,000,000</span><strong>34%</strong>`,
			],
			[
				`<span>$50,000 - $75,000</span><strong>21%</strong>`,
				`<span>$10,000,000 - $15,000,000</span><strong>35%</strong>`,
			],
			[
				`<span>$75,000 - $100,000</span><strong>34%</strong>`,
				`<span>$15,000,000 - $18,333,333</span><strong>38%</strong>`,
			],
			[
				`<span>$100,000 - $335,000</span><strong>39%</strong>`,
				`<span>More than $18,333,333</span><strong>35%</strong>`,
			],
		],
		bottomMargin: `72`,
	},
	header3: `Stock Dividends from C Corporations`,
	text4: `A C Corporation may choose to distribute some of the profits of the company as dividends, which are distributed to shareholders. The percentage of dividends that each shareholder is entitled to depends on how many shares they own.`,
	text5: `Dividends that are distributed to shareholders are taxed twice (double-taxed). They are taxed first at the corporate level as profit (on the corporation’s form 1120), and again at the individual level as stock dividends (on the shareholder's form 1040).`,
};

export const differences = {
	header: `What Are the Differences Between an S Corp, C Corp and LLC?`,
	text: `Two other popular business entity structures in the US are the S Corp and the LLC. They provide many of the same protections offered by a C Corp but have less formal rules on taxation, governance and compliance. This can mean more flexibility in how an LLC or S Corp is owned and funded.`,
	header2: `One of the main differences between C Corps and S Corps / LLCs are how income from the different types of businesses are taxed.`,
	list: [
		`For LLCs and S Corps, any income earned by the business “flows through” to the business owners’ / shareholders’ / members’ tax returns, where it is taxed as part of1 their overall income. The company does not have to file a separate tax return.`,
		`S Corps and C Corps can pass on some of their profits to shareholders as dividends.`,
		`S Corps are limited to having a maximum of 100 shareholders.`,
		`A C Corp is taxed at the corporate level — That means it has to file a separate tax return as a business entity and will need to pay corporation tax on any profits earned.`,
	],
};

export const howForm = {
	header: `How to Form a C Corporation`,
	text: `If a C Corporation is right for you, here’s how to form one:`,
	list: [
		`Choose a legal name for your new business.`,
		`If the Secretary of State in your state reserves business names, reserve the name.`,
		`Draft and file your Articles of Incorporation — These should be sent to your Secretary 
        of State.`,
		`Establish who your initial investors and shareholders are.`,
		`Create and issue stock certificates to your shareholders.`,
		`Apply for a business license — You may require licenses from your state, county, and township.`,
		`Apply for any other certificates you need to conduct business — These can vary from industry to industry.`,
		`Get an “Employer Identification Number (EIN): from the IRS — You can file online, 
        or complete form SS-4.`,
		`Apply for any other ID numbers and complete other formalities required by your state and local government agencies.`,
		`Requirements do vary from one jurisdiction to another, but you will generally need to get ID numbers for the unemployment, disability and other payroll taxes.`,
		`Appoint a board of directors.`,
		`Assign other positions in the business as required by law.`,
	],
	text2: `Forming a C Corporation can be tricky, so let us do the hard work for you. Here at Incfile, we’ve helped to form thousands of businesses, and our experts are on hand 
    to help you, right now. <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&utm_campaign=Lead%20Gen%20-%20Business%20Entity%20Quiz&utm_source=On_Page_Click&utm_medium=CCorp%20Results%20Page&utm_term=Order%20Form">Incorporate your business with Incfile for as little as $0 plus the state fee.</a>`,
	button: {
		text: `From Your C Corp Today`,
		url: `${process.env.ORDER_URL}/form-order-now.php?entityType=CCorporation&utm_campaign=Lead%20Gen%20-%20Business%20Entity%20Quiz&utm_source=On_Page_Click&utm_medium=CCorp%20Results%20Page&utm_term=Order%20Form`,
	},
};
