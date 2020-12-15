import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
	header: `Why Form a Limited Liability Company (LLC)?`,
	text: `$0 + State Fee & 1st Year FREE Registered Agent`,
	buttons: [
		{
			text: `See detailed pricing`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ`,
		},
	],
};

export const howToGuide = [
	{
		type: `header`,
		content: `Creating an LLC in Arizona`,
		size: 1,
		template: 3,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `Arizona is considered both a western and a mountain state, sharing borders with four other states and Mexico. Its geography makes it an ideal location for businesses who want to set their sights on expanding further afield.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Famed for its desert-like climate, Arizona’s economy includes tourism as one of the main sectors. Built on the cotton trade, fruit growing, cattle ranching and copper mining, Arizona industry has since expanded to strengthen an increasingly diverse statewide economy. The state is also well-served by universities and has developed a rich culture, including film, music and sports.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `For most business owners, the fastest and easiest way to start a business in Arizona is by creating an Arizona LLC. A Limited Liability Company (LLC) is a type of business entity that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger Arizona corporations but with much simpler rules and regulations.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Briefly, the benefits of starting an Arizona LLC include:`,
		marginBottom: 32,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Separating and limiting your personal liability from your business liability and debts`,
				`Quick and simple filing, management, compliance, regulations and administration of your Arizona LLC`,
				`Easy tax filing and potential advantages for tax treatment`,
			],
		},
		marginBottom: 16,
		color: color.blue3,
		curve: true,
		curveColor: color.red1,
	},
	{
		type: `text`,
		content: `Learn more about the <a href="/limited-liability-company/">benefits of the LLC business structure here. </a>`,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `In this guide, we’ll tell you everything you need to know about how to form an LLC in Arizona, including business searches with the Arizona Secretary of State, how to get Arizona business licenses, LLC applications in Arizona, AZ LLC registration, LLC forms, assigning a statutory agent and much more. `,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Six Quick Steps to Form an LLC in Arizona`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `This guide has plenty of information on how to start an LLC in Arizona, but you can break down the basics of creating a business in AZ into just a few simple steps.`,
		marginBottom: 32,
	},
	{
		type: `accordion`,
		header: 3,
		content: {
			items: [
				{
					question: `STEP 1: Gather Information for Your Members`,
					answer: `First, you need to gather basic information about your LLC, including the names and addresses of the managers or members. The LLC members are typically the people who own and run the business. They are also the ones who can take profits out of the business to pay themselves.`,
				},
				{
					question: `STEP 2: Search for and Choose a Unique Business Name for Your Arizona LLC`,
					answer: `<p>You will need a distinctive and original name for your Arizona LLC that’s not used by any other business in AZ. To find out if another company is using your chosen business name, carry out an Arizona business entity name search on the AZ Corporation Commission website.</p></br>

          <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Arizona LLC.</p></br>
          
          <p><a href="/arizona-llc/how-to-name-your-llc/">Learn about Arizona LLC business naming rules.</a></p>`,
				},
				{
					question: `STEP 3: Provide an Official Address for Your AZ LLC`,
					answer: `Every Arizona LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of Arizona, but it cannot be a P.O. Box.`,
				},
				{
					question: `STEP 4: Assign a Statutory Agent (Registered Agent) for Your Arizona LLC`,
					answer: `<p>Every AZ LLC must have a “Registered Agent,” known in Arizona as a “Statutory Agent” when it is formed. This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Arizona Corporation Commission.</p></br> 

          <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your AZ Registered Agent must have a physical street address in Arizona and must be present to receive important documents for your company during business hours.</p></br>
          
          <p>At Incfile, all of our packages include an Arizona Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
          
          <p><a href="/arizona-llc/registered-agents-arizona-llc/">Learn more about Arizona Registered Agents.</a></p>`,
				},
				{
					question: `STEP 5: Get an Employee Identification Number (EIN) From the Internal Revenue Service`,
					answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Arizona LLC business formation process.`,
				},
				{
					question: `STEP 6: File Articles of Organization for AZ Registration`,
					answer: `<p>Once you've gathered all the information for your Arizona LLC, you’ll need to file a formal document with the AZ Corporation Commission. This document is known as your “Articles of Organization,” and filing the document creates your Arizona LLC. Here’s what is typically included:</p></br
          <ol>
          <li>Your business name and address</li>
          <li>The type of Arizona LLC that you’re creating</li>
          <li>Details of your Registered Agent</li>
          <li>Names of managers or members of the LLC at the time of filing</li>
          <li>Addresses of managers or members of the LLC at the time of filing</li>
          <li>Name of the incorporator</li>
          </ol></br>
          <p>You can file your Arizona LLC Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Arizona. You only need to file your Articles of Organization once.</p>
          <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ">Form your LLC now </a>`,
				},
			],
		},
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `More Information From the Arizona Corporation Commission`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `In addition to what you’ll find in this guide, the AZ Corporation Commission has plenty of information on forming and running a business in Arizona.`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`<a href="https://azsos.gov/business" target="_blank" rel="noopener noreferrer">Arizona Secretary of State for forming and running your AZ LLC</a>`,
				`<a href="https://www.azica.gov/" target="_blank" rel="noopener noreferrer"> Arizona Bureau of Workers' Compensation for AZ employers and hiring</a>`,
				`<a href="https://azdor.gov/transaction-privilege-tax-tpt" target="_blank" rel="noopener noreferrer"> Arizona Department of Taxation for AZ taxes</a>`,
			],
		},
		marginBottom: 32,
		color: color.blue3,
	},
	{
		type: `header`,
		content: `Special Types of Arizona LLCs`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `A regular Arizona LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
		marginBottom: 24,
	},
	{
		type: `accordion`,
		header: 3,
		content: {
			items: [
				{
					question: `Form a Professional Arizona LLC`,
					answer: `<p>Some states, including Arizona, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. Arizona does not specify the professions that can form a professional LLC, but they do say the following:</p></br>
                  <ul>
                  <li>The name of an Arizona professional LLC must contain the words "professional limited liability company" or the abbreviations "P.L.L.C.", "P.L.C.", "PLLC" or "PLC", in uppercase or lowercase letters</li>
                  </ul>`,
				},
				{
					question: `Form a Foreign LLC in Arizona`,
					answer: `<p>If your business is already operating in another state and expanding to Arizona, you’ll need to form a foreign LLC.</p></br>
                   <p><a href="/arizona-llc/form-filling-permit-requirements/">More information on Arizona filing and licensing requirements here.</a></p>`,
				},
			],
		},
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `What to Do After Forming Your LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Want to know your next steps after creating a new LLC in Arizona? We’ve got you covered. <a href="/after-forming-llc/"> Here’s our guide</a> to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more. `,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Learn More About Arizona LLCs a`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You’ll find plenty more insight and guidance on the other pages of this guide, including:`,
		marginBottom: 32,
	},
	{
		type: `header`,
		size: 3,
		content: `<a href="/arizona-llc/how-to-name-your-llc/">Arizona Business Search and Naming</a>`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to search the Arizona business registry of the AZ Corporation Commission and find the right name. Includes information on naming rules, fictitious names, reserving an Arizona LLC name and more.`,
		marginBottom: 40,
	},
	{
		type: `header`,
		size: 3,
		content: `<a href="/arizona-llc/registered-agents-arizona-llc/">Arizona Statutory Agents for LLCs</a>`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to appoint an Arizona Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Arizona Registered Agents.`,
		marginBottom: 40,
	},
	{
		type: `header`,
		size: 3,
		content: `<a href="/arizona-llc/form-filling-permit-requirements/">Fees and Requirements for Your Arizona LLC</a>`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Arizona rules. Includes details of Employee Identification Numbers (EINs), Arizona and federal business licenses, Arizona annual reports and more.`,
		marginBottom: 40,
	},
	{
		type: `header`,
		size: 3,
		content: `<a href="/arizona-llc/business-taxes/">Business Taxes for Your Arizona LLC</a>`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to understand the various taxes you will need to pay to the federal and Arizona government. Includes details of federal taxes like income and self-employment, and Arizona taxes like sales tax and income tax.`,
		marginBottom: 32,
	},
];

export const namingYourBusiness = [
	{
		type: `header`,
		content: `Arizona Business Entity Searches & Naming Your LLC`,
		size: 1,
		template: 3,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `We’re here to help you find the right business name for your Arizona LLC. From searching for a business entity name with the AZ Corporation Commission to understanding naming rules or creating a “Doing Business As” name to register your entity, you’re in the right place.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Arizona Corporation Commission Search`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `It’s the Arizona Corporation Commission that administers businesses in AZ, rather than the secretary of state. They’ll help you check whether there’s already another Arizona LLC registered with your desired business name. That means searching the Arizona Corporation Commission website using their business search tool. You can easily look up AZ LLCs and corporations by name and other details. `,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If the business name is already used, that means it’s not available and you won’t be able to register it. Try searching for a different business name instead.`,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `<a href="https://ecorp.azcc.gov/EntitySearch/Index" target="_blank" rel="noopener noreferrer">Arizona Corporation Commission LLC name search tool</a>`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Business Name Registration Rules for Arizona LLCs`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Arizona Corporation Commission naming rules. Naming rules do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in AZ.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Standard LLC Naming Rules`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules, as they will influence the name you choose for your Arizona LLC.`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Your LLC Business Name Must Be Unique`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Arizona. This is why you should check business name availability on the AZ CC website.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Your LLC Business Name Must Not Be Confusable With Another Business Name`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `It’s not enough for your AZ LLC name to be unique; it also cannot be similar to the name of another corporation or LLC in Arizona. For example, you cannot use the following factors to say your name is different from the name of another business:`,
		marginBottom: 32,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Suffixes, such as Corporation, Company, Incorporated, Incorporation, Limited, Corp., Co., Inc., Ltd., LLC, etc.`,
				`Definite articles like “A,” “And,” “An,” “&,” “The,” etc.`,
				`The singular, plural or possessive forms of a word`,
				`Abbreviations, punctuation, symbols, fonts, typefaces, etc.`,
			],
		},
		marginBottom: 32,
		color: color.yellow3,
	},
	{
		type: `header`,
		content: `Your LLC Business Name Must Contain Certain Words`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `All LLCs must have the words “Limited Liability Company,” “L.L.C.” or “LLC” in their name. These words should normally come at the end of the name.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Your LLC Business Name May Have Other General Restrictions`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Most states will not allow you to form LLCs with names that:`,
		marginBottom: 32,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Are very similar to the name of a federal or AZ agency or organization (e.g., FBI, FDA, Arizona Department of Revenue, Arizona Police, Treasury, etc.)`,
				`Suggest affiliation with a federal or state agency or organization`,
				`Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
				`Imply a purpose that it would be illegal for your business to carry out`,
			],
		},
		marginBottom: 48,
		color: color.babyblue3,
	},
	{
		type: `header`,
		content: `Specific Business Naming Rules in Arizona`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `In addition to the general rules listed above, the Arizona Corporation Commission has some specific business naming rules for your LLC. You will need to follow these rules if you want to name your AZ business appropriately:`,
		marginBottom: 32,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`If the LLC name contains any of the following words, prior written approval must be obtained from the Arizona Department of Financial Institutions before registration is allowed: Bank; Banker; Banking; Banc; Banco; Banque; Credit Union; Deposit; Savings Association; Building Association; Savings and Loan Association; Building and Loan Association; Savings Bank; Thrift; Trust; or Trust Company`,
				`Non-professional LLCs shall contain the words “limited liability company” or “limited company” or the abbreviations “L.L.C.”, “L.C.”, “LLC”, or “LC”. If the existing limited liability company name or the fictitious name adopted for use in Arizona does not contain one of those words or an abbreviation of one of those words, then one of those words or an abbreviation of one of those words must be added to it. `,
				`Non-professional LLCs shall not contain the words “association”, “corporation”, “incorporated”, or an abbreviation of those words`,
			],
		},
		marginBottom: 16,
		color: color.yellow3,
	},
	{
		type: `text`,
		content: `<a href="https://www.azcc.gov/corporations/naming-policy" target="_blank" rel="noopener noreferrer">More on Arizona Corporation Commission business naming rules</a>`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Arizona LLC Trade Names/“DBA” Names`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You might choose to do business under a different name from your legal LLC name. In Arizona, a “DBA” or “Doing Business As” name is referred to as a “Trade Name.” You might choose to use a different name from your AZ formal LLC name for a variety of reasons.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `For example, your LLC might be called Phoenix Property Development Holding Company LLC, and you have a chain called Gila Riverside Apartments. You should file a Trade Name to let the Arizona Corporation Commission know. In Arizona, you can do that online, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's trade name service`,
			url: `/fictitious-business-or-trade-name/`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Register an LLC Business Name in Arizona`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Once you’ve searched for your Arizona business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your AZ LLC name. There are a couple of ways to do this.`,
		marginBottom: 16,
	},
	{
		type: `numeric-list`,
		content: [
			{
				text: `<p>If you don’t want to form your Arizona LLC right now, you can reserve the business name with the Arizona Corporation Commission online. You will need to complete an application and file it with the AZ CC. You do not need to reserve a name if you are forming your business right away.</p></br>
               <p><a href="https://azcc.gov/corporations/name-reservations" target="_blank" rel="noopener noreferrer">Arizona CC LLC name reservation form</a></p>`,
			},
			{
				text: `If you’re ready to start your Arizona LLC, you can formally file your Articles of Organization with the Arizona CC, or <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ"> let Incfile take care of it for you.</a>`,
			},
		],
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `FAQs on Naming Your Arizona LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You might find the following answers useful.`,
		marginBottom: 16,
	},
	{
		type: `accordion`,
		header: 3,
		content: {
			items: [
				{
					question: `How Do I Search for My Arizona LLC Business Name?`,
					answer: `Just go to the <a href="https://ecorp.azcc.gov/EntitySearch/Index" target="_blank" rel="noopener noreferrer">Arizona business search tool</a> and enter your proposed business name. You can search the register of the Arizona Corporation Commission, which will tell you if there are any AZ corporations or LLCs with that name.`,
				},
				{
					question: `Are There Any Rules on Naming My Arizona LLC?`,
					answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Arizona). We’ve detailed these rules above.`,
				},
				{
					question: `Can I Do Business Under a Different Name Than My LLC Name in Arizona?`,
					answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above. `,
				},
				{
					question: `Can I Reserve a Name for My Arizona LLC?`,
					answer: `Yes. The Arizona Corporation Commission allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
				},
			],
		},
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Useful Resources for Naming Your Arizona LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You might find these resources helpful.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Trademarks and Service Marks`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You must be careful that your Arizona LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register the name you want as a trademark yourself.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile trademark search and registration service`,
			url: `/trademark-name-search/`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Find the Perfect Name for Your Arizona LLC`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The perfect business name can be elusive. We have a complete guide to choosing the right business name, but basically, you'll want to choose a name that will:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Appeal to your customers`,
				`Be memorable enough to stand out`,
				`Best represent your product or services`,
				`Not be used by another business`,
			],
		},
		marginBottom: 40,
		color: color.green3,
	},
	{
		type: `text`,
		content: `<a href=https://www.incfile.com/blog/post/llc-name-search-50-states/" target="_blank" rel="noopener noreferrer">Incfile guide to choosing a business name</a>`,
		marginBottom: 32,
	},
];

export const registeredAgent = [
	{
		type: `header`,
		content: `Arizona Statutory Agents & Your LLC`,
		size: 1,
		template: 3,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `The Arizona Corporation Commission requires every AZ LLC to have a Statutory Agent, or as it’s referred to in other states, a Registered Agent. We’ll use those names interchangeably in this guide, since their functions and requirements are identical. `,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Once you have assigned an Arizona Statutory Agent, they can receive official correspondence and documents on behalf of your AZ business. Statutory Agents can be individuals or other specialized Statutory/Registered Agent service organizations. `,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Your LLC must have an Arizona Statutory Agent at all times. You can appoint a one when you first start your business, and you can also replace your existing AZ Statutory Agent at a later date, provided there is a smooth transition between the old and new Statutory Agent service. `,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Arizona LLC Statutory Agent Service Rules`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `There are certain rules that you must follow when you’re appointing an Arizona Statutory Agent service for your business. They are:`,
		marginBottom: 32,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`If the Statutory Agent is a person, they must reside in Arizona`,
				`If the Statutory Agent is a business, they must be able to conduct business in Arizona`,
				`The Statutory Agent must have a physical street address in Arizona, not a P.O. Box`,
				`The AZ Statutory Agent must be available in person during normal business hours to sign for any correspondence`,
			],
		},
		marginBottom: 24,
		color: color.yellow3,
	},
	{
		type: `text`,
		content: `Note that the AZ Statutory Agent address does not need to be the same as your Arizona LLC business address. `,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `The Purpose of an Arizona Statutory Agent`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Your Arizona Statutory/Registered Agent carries out several valuable services for your business. They accept official communications and documents from the AZ Corporation Commission on your behalf. This may include:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Correspondence from the Arizona Corporation Commission, like a notice to file reports and other forms`,
				`Service of process documents (for example, if your Arizona LLC has legal proceedings issued against it)`,
				`Official Arizona and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
			],
		},
		marginBottom: 40,
		color: color.purple3,
	},
	{
		type: `header`,
		content: `A Complete Arizona Registered Agent Service From Incfile`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Incfile provides a complete Arizona Registered Agent service for any LLC that’s incorporated in AZ. Even better, if you choose to incorporate your Arizona business through Incfile, your Statutory/Registered Agent is completely free for the first year and only $119 a year after that.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Incfile is authorized to conduct business in Arizona and can legally act as your Registered Agent. Here’s what the Incfile Arizona Registered Agent service provides for your AZ LLC:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`An always-available Arizona Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
				`A digital dashboard where you can access, store and retrieve any information we’ve received for your Arizona business`,
				`Email notification whenever we receive documents for your Arizona business`,
				`Automatic forwarding of all legal correspondence, documentation and information directly to you`,
			],
		},
		marginBottom: 16,
		color: color.green3,
	},
	{
		type: `button`,
		content: {
			text: `More about registered agents`,
			url: `/manage-your-company/registered-agent/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `How to Appoint an Arizona Statutory Agent for Your LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You can appoint a Statutory/Registered Agent when you first incorporate your Arizona LLC or at any point after that. Here’s how to go about it.`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Appoint an AZ Statutory Agent Service When You Create Your Arizona LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Your business needs to have an Arizona Statutory Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `File Articles of Organization With the Arizona Corporation Commission`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You will need to include details of your Statutory Agent in your Articles of Organization. This is the form that you file with the AZ Corporation Commission to formally create your business.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Incorporate Through Incfile and Get a Free Arizona Statutory Agent `,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you’ve provided. Additionally, we give you a free Arizona Registered Agent service for the first year, and we’ll include details of your AZ Registered Agent in the form that we file.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incorporate your business through Incfile`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Change Your Arizona Registered Agent After Your LLC Is Formed`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You can also change your AZ Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Choose a Registered Agent Service and File With the Arizona Corporation Commission`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Once you’ve chosen a new Arizona Statutory Agent, you can complete form M002 - Statutory Agent Acceptance that’s available on the AZ Corporation Commission website. Once you’ve filled it out, send it to the Corporation Commission so they can update your records.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Sign up for Incfile’s Arizona Registered Agent Service, and We’ll File the Change on Your Behalf`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `When you choose to use our AZ Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete form M002 on your behalf and send it to the Arizona Corporation Commission. We’ll let you know once we officially become your Statutory Agent. `,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Order Incfile's Arizona registered agent service`,
			url: `/manage-your-company/registered-agent/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Arizona Statutory Agent Search`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `In some situations, you might want to know the name of the Registered Agent that represents another Arizona LLC. If you do, you can <a href="https://ecorp.azcc.gov/EntitySearch/Index" target="_blank" rel="noopener noreferrer">search the business database of the Arizona Corporation Commission</a>, which will often provide details of a specific business’ Registered Agent.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If the AZ Statutory Agent isn’t available from the searchable business registry, contact the Arizona Corporation Commission requesting the information.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Possible Outcomes of Not Assigning a Statutory Agent for Your Arizona LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `What happens if you choose not to assign or provide details of a Statutory/Registered Agent to the Arizona Corporation Commission? There are several possible ramifications, including:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
				`Falling out of good standing with the Arizona Corporation Commission: If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
				`Losing your status as an Arizona LLC: An AZ Statutory Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections, and your Arizona LLC may be dissolved.`,
			],
		},
		marginBottom: 40,
		color: color.blue3,
	},
	{
		type: `header`,
		content: `Acting as Your Own Statutory Agent for Your AZ LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you have an address in Arizona, you can choose to be the Statutory Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`The AZ Statutory Agent must have a physical street address in Arizona. If you’re forming an LLC outside AZ, you will need to use an in-state Statutory Agent.`,
				`You always need to have someone on hand during business hours at the Arizona address to sign for important documents.`,
				`The AZ Statutory Agent’s name and address are part of the public record and available through the Arizona Corporation Commission's website. If you would prefer your name and address aren’t published, you might choose to use a Statutory/Registered Agent service instead.`,
				`If you change your Arizona business address or move out of state, you would need to file additional documentation with the AZ Corporation Commission for the new address if you act as your own Statutory Agent. This would not be the case if you use a Statutory/Registered Agent service, making a move or address change much simpler.`,
			],
		},
		marginBottom: 32,
		color: color.purple3,
	},
	{
		type: `header`,
		content: `FAQs About Arizona Statutory Agents`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `accordion`,
		header: 3,
		content: {
			items: [
				{
					question: `Do I Need to Appoint an Arizona Statutory Agent?`,
					answer: `Yes. All AZ LLCs are required to have a Statutory Agent. This is mandated by the Arizona Corporation Commission.`,
				},
				{
					question: `When Can I Assign an Arizona Statutory Agent Service?`,
					answer: `You can either do it when you incorporate your Arizona business through paperwork filed with the AZ Corporation Commission or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
				},
				{
					question: `Can I Be My Own Statutory Agent in Arizona?`,
					answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Statutory/Registered Agent, you just need to fill in the correct forms and pay a fee to the Arizona Corporation Commission.`,
				},
				{
					question: `Does My AZ Statutory Agent Need to Have an Address in Arizona?`,
					answer: `Yes. Additionally, if they are a business providing Statutory Agent services, they must be legally able to conduct business in your state.`,
				},
			],
		},
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Useful Resources for Arizona Statutory/Registered Agent Services`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You might find these resources helpful:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/">The Main Functions of an Arizona Registered Agent</a>`,
				`<a href="/manage-your-company/change-of-registered-agent/">Changing Your Arizona Registered Agent</a>`,
				`<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/">What an Arizona Registered Agent Does</a>`,
			],
		},
		marginBottom: 32,
		color: color.yellow3,
	},
];

export const feesAndRequirments = [
	{
		type: `header`,
		content: `Arizona LLC Forms, Annual Fees and Requirements`,
		size: 1,
		template: 3,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `Some types of businesses have different requirements in Arizona, including related fees and costs. Your AZ LLC needs to pay various fees to the federal government, Arizona government and other agencies. Some of these fees are levied by the Arizona Corporation Commission or statewide organizations, while others come from the federal government. On this page, we’ve summarized the most common fees and requirements. `,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Note that Arizona business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Arizona LLC Incorporation Filing`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `To create your business in Arizona, you’ll file an LLC with the AZ Corporation Commission and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for Arizona:`,
		marginBottom: 32,
	},
	{
		type: `dynamic_ar_box`,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Compare State Filing Times `,
			url: `/state-filing-times/`,
		},
		marginBottom: 16,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Compare State Filing Prices`,
			url: `/state-filing-fees/`,
		},
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `When you incorporate through Incfile, we forward this fee to the Arizona Corporation Commission on your behalf when we file your paperwork. `,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here, including expedited fees for Arizona</a>.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incorporate your Arizona LLC through Incfile today`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AZ`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Getting an Employer Identification Number for Your AZ LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Every Arizona LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Get and EIN for your Arizona LLC through Incfile`,
			url: `/manage-your-company/tax-id-ein/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Certificate of Authority to Operate Outside Arizona`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you’re expanding your Arizona LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Arizona. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Get a foreign qualification/certificate of authority through Incfile`,
			url: `/manage-your-company/foreign-qualification/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Arizona Affidavit of Publication`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Many states require that you file an annual (or other periodic) LLC report; however, Arizona does not. Instead, Arizona requires that you publish a notice of filing of your Articles of Organization — or alternatively, you may publish the Articles of Organization in their entirety. The publication must be in a newspaper in general circulation in the county of the known place of business in Arizona for three consecutive publications. The publication must be filed within 60 days of the date of organization. The LLC may be subject to administrative dissolution if it fails to publish.`,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `The CC does not endorse any particular newspaper, but as a courtesy they provide a list of newspapers that have attested to the CC that they meet the statutory criteria for publishing documents. Upon publishing, you will receive an Affidavit of Publication. It is not required, but you may send the Affidavit of Publication you receive from the newspaper to the CC for placement into the entity’s public record. If you do not submit the Affidavit of Publication to the CC,  you should retain it as part of your entity’s permanent record.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Arizona Business License Search`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Your Arizona LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by Arizona, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges.`,
		marginBottom: 16,
	},
	{
		type: "text",
		content: "Permits and licenses vary based on:",
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`The industry your Arizona LLC operates in (e.g., restaurants will need health permits)`,
				`The location of your Arizona LLC (state, county or city) (e.g., a license to conduct business from the city of Phoenix)`,
				`The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
			],
		},
		marginBottom: 32,
		color: color.green3,
	},
	{
		type: `text`,
		content: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
		marginBottom: 32,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`A complete report on all the licenses, permits and tax registrations your Arizona LLC will need`,
				`The application forms you will need to file with the state, regional and federal licensing authorities`,
			],
		},
		marginBottom: 32,
		color: color.yellow3,
	},
	{
		type: `text`,
		content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, state and local governments.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Arizona business license research package`,
			url: `/business-license-research-package/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Create an Arizona Operating Agreement for Your LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `An Operating Agreement is a business document that covers how the business will be run, how managers and members are chosen, rights and duties of members and several other key areas.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `An Operating Agreement is extremely useful for several reasons (<a href="/research-topics/llc-info/the-llc-operating-agreement/">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Arizona business. You can choose to make changes to the template based on your unique requirements. `,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Ad Hoc Arizona Fees or Requirements for Your AZ LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `There are several other fees or requirements that you may need to meet during the life of your Arizona LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `To Obtain a Trade/DBA Name for Your Arizona LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you want your AZ business to trade under a different name, you can file a form with the Arizona Corporation Commission. You will need to pay an Arizona filing fee. Incfile can file this form on your behalf.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Arizon trade name service`,
			url: `/fictitious-business-or-trade-name/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `To Change the Arizona Statutory Agent for Your AZ LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Your Arizona LLC needs a Statutory/Resident Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new AZ Statutory Agent later. Incfile provides a complete Arizona Statutory/Resident Agent service.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Arizona registered agent service`,
			url: `/manage-your-company/registered-agent/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `To Reserve a Name for Your Arizona LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you don’t want to form your AZ business right away, you can reserve a name with the Arizona Corporation Commission. You will need to pay a small fee to do this.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Amend Certain Facts About Your Arizona LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Your business formation documents state certain facts about your Arizona business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Arizona Corporation Commission. You can do this yourself or have Incfile complete the filing on your behalf. `,
		marginBottom: 16,
	},
	{
		type: "text",
		content:
			"Areas you might want to file Arizona Articles of Amendment for include:",
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Adding, removing or changing an Arizona LLC member or manager`,
				`Changing the business address of your LLC`,
				`Altering the stated business activities of your Arizona LLC`,
			],
		},
		marginBottom: 16,
		color: color.purple3,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Arizona articles of amendment service`,
			url: `/manage-your-company/amendment/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `To Get a Certificate of Good Standing for Your Arizona LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Some organizations will request that you prove your Arizona LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Arizona Corporation Commission. Incfile can obtain a certificate on your behalf.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Arizona certificate of good standing service`,
			url: `/manage-your-company/certificate-of-good-standing/`,
		},
		theme: `primary48`,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `The fees listed above detail all the charges that a standard AZ LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above. a`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Of course, your Arizona LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for AZ LLCs.`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `FAQs About Arizona LLC Fees & Requirements`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `accordion`,
		header: 3,
		content: {
			items: [
				{
					question: `What Happens to the State Fees That I Am Charged When Forming My Arizona LLC?`,
					answer: `We charge you for this fee at cost and then pay the fee to the Corporation Commission on your behalf when forming your Arizona business. `,
				},
				{
					question: `Do I Need to Pay an Annual Report Fee Every Year?`,
					answer: `No. Most states require you to file a report for your LLC every year, but Arizona has no annual reporting requirements. `,
				},
				{
					question: `Who Will I Need to Get Business Licenses and Permits From for My Arizona LLC?`,
					answer: `It depends on various factors including:
                  <ul>
                  <li>The type of business you run</li>
                  <li>Where you are located</li>
                  <li>Governing organizations in your industry</li>
                  <li>Federal, state and local regulations</li>
                  </ul></br>
                  <p>That’s why our <a href="/business-license-research-package/">Business License Research Package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Arizona LLC needs to be compliant.</p>`,
				},
			],
		},
		marginBottom: 16,
	},
];

export const businessTaxes = [
	{
		type: `header`,
		content: `Arizona Business Taxes for LLCs`,
		size: 1,
		template: 3,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `There are a wide variety of business taxes that your Arizona LLC will need to pay. These include tax that’s payable to the Arizona government, like Arizona sales taxes and Arizona state tax. You will also need to pay federal, self-employment and possibly payroll tax to the IRS. `,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/">Business Tax Filing service</a>.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `How Your Arizona LLC Will Be Taxed`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `The profits of an Arizona LLC are not taxed at the business level like those of C Corporations. Instead, taxes for an Arizona LLC work as follows:`,
		marginBottom: 32,
	},
	{
		type: `numeric-list`,
		content: [
			{
				text: `Arizona LLC owners pay self-employment tax on business profits`,
			},
			{
				text: `Arizona LLC owners pay AZ state tax on any profits, less state allowances or deductions`,
			},
			{
				text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
			},
			{
				text: `Some AZ LLCs pay Arizona sales tax on products`,
			},
			{
				text: `Employers pay payroll tax on any salaries they pay to employees`,
			},
			{
				text: `Employees pay federal, state and payroll tax on their earnings`,
			},
		],
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Arizona personal tax returns, and that’s where you will pay those taxes.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Arizona Sales Tax and State Taxes`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `There are two main types of tax that you will pay to the Arizona Department of Revenue: Arizona state income tax and Arizona state sales tax.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Arizona State Income Tax Payable on LLC Earnings`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `As an Arizona business owner, you will need to pay AZ state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Arizona income tax. You will be taxed at the standard rates for Arizona state taxes, and you will also get to apply regular allowances and deductions.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Any salaried employees will also need to pay personal Arizona state taxes.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The Arizona state tax rates run between 2.59 percent and 4.54 percent, depending on income. `,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Get details on the <a href="https://azdor.gov/" target="_blank" rel="noopener noreferrer">Arizona state tax online here</a>.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Arizona Transaction Privilege Tax (TPT)/Sales Tax Rates on LLC Sales`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you sell physical products or certain types of services, you may need to collect sales tax (known in Arizona as a Transaction Privilege Tax) and then pay it to the AZ Department of Revenue. Arizona sales tax is collected at the point of purchase. Arizona sales tax rates do vary depending on the region, county or city where you are located. `,
		marginBottom: 16,
	},
	{
		type: "text",
		content: "You will typically need to collect Arizona sales tax on:",
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`,
				`Certain services that your Arizona business might provide`,
			],
		},
		marginBottom: 24,
		color: color.blue3,
		curve: true,
		curveColor: color.red1,
	},
	{
		type: `text`,
		content: `Most states do not levy sales tax on goods that are considered necessities, like food, medications, clothing or gas.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Get details on the <a href="https://azdor.gov/transaction-privilege-tax-tpt" target="_blank" rel="noopener noreferrer">Arizona Transaction Privilege Tax online here</a>.`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Federal Taxes for Your Arizona LLC: Self-Employment and Income Taxes`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `There are a couple different federal taxes that every LLC will need to pay, including Arizona LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Arizona LLC Federal Self-Employment Tax`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `All Arizona LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Arizona business. The current self-employment tax rate is 15.3 percent.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe. Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`On profits of $20,000, you would pay self-employment tax of $3,060`,
				`On profits of $50,000, you would pay self-employment tax of $7,650`,
				`On profits of $100,000, you would pay self-employment tax of $15,300`,
				`On profits of $160,000, you would pay self-employment tax of $24,480`,
			],
		},
		marginBottom: 48,
		color: color.purple3,
	},
	{
		type: `header`,
		content: `Pay Less Self-Employment Tax by Treating Your Arizona LLC as an S Corporation`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `The Internal Revenue Service allows LLCs to ask to be treated as an S Corporation for tax purposes. This can help you reduce the amount of self-employment tax that you pay by declaring some of your income as salary and other income as distributions or withdrawals. `,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You can do this by making an “S Corporation Tax Election” with the IRS using a form known as Form 2553. We can file your Form 2553 with the IRS on your behalf.`,
		marginBottom: 32,
	},
	{
		type: `button`,
		content: {
			text: `Incifle Form 2553 S corporation tax election for an LLC service`,
			url: `/llc-s-corp-election/`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Speak to your accountant for more information on reducing your Arizona LLC self-employment tax through an S Corporation tax election.`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Arizona LLC Federal Income Tax`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You must also pay regular federal income tax on any earnings you take out of your Arizona LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file. `,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You only pay federal income tax on your Arizona LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Employer and Employee Taxes for Your Arizona LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you pay employees, there are some slightly different tax implications. Speak to your accountant to get clear guidance for your own unique situation.`,
		marginBottom: 32,
	},
	{
		type: `accordion`,
		header: 3,
		content: {
			items: [
				{
					question: `Employer Payroll Tax Withholding`,
					answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
				},
				{
					question: `Employer Federal and State Tax Withholding for Your Arizona LLC`,
					answer: `You may also choose to withhold federal and Arizona state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
				},
				{
					question: `Employees May Need to File Tax Returns`,
					answer: `Regardless of whether you withhold federal and Arizona state income tax, your employees may need to file their own tax returns.`,
				},
				{
					question: `Arizona LLC Employee Insurance and Other Requirements`,
					answer2: [
						{
							type: `paragraph`,
							content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
						},
						{
							type: `paragraph`,
							content: `Get more requirements from the <a href="https://www.azica.gov/divisions/labor-department/" target="_blank" rel="noopener noreferrer">Arizona Labor Department website.</a>`,
						},
					],
				},
			],
		},
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Estimated Taxes for Your Arizona LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Most Arizona LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make. The most common types of estimated tax are:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Federal income tax`,
				`Federal self-employment tax`,
				`Arizona state tax`,
			],
		},
		marginBottom: 16,
		color: color.green3,
	},
	{
		type: `text`,
		content: `Most Arizona LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Other Taxes and Duties for Your Arizona LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Depending on the industry you are in, your Arizona LLC may be liable for certain other taxes and duties. For example, if you sell gasoline, you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods, you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `FAQs on Arizona LLC Business Taxes`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 32,
	},
	{
		type: `accordion`,
		header: 3,
		content: {
			items: [
				{
					question: `Does Arizona Have Sales Tax?`,
					answer: `Yes. Arizona does have a sales tax, which may vary among cities and counties. You can find more information above.`,
				},
				{
					question: `Does Arizona Have a State Tax?`,
					answer: `Yes. Arizona does have a general state income tax. You can find more information above.`,
				},
				{
					question: `Do I Need to Pay Estimated Taxes?`,
					answer: `Yes. In most cases you must pay estimated taxes on your Arizona tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
				},
			],
		},
		marginBottom: 48,
	},
];

export const compare = {
	header: `How We Compare. <br>Get more for less.`,
	table: {
		headers: [null, `Incfile`, `LegalZoom`, `ZenBusiness`],
		rows: [
			[
				`Initial Filing Price`,
				`$0 +\u00a0State\u00a0Fee`,
				`$79 +\u00a0State\u00a0Fee`,
				[
					`$49 +\u00a0State\u00a0Fee`,
					{
						content: "<strong>Billed\u00a0Annually</strong>",
						className: "nobox",
					},
				],
			],
			[`File Articles`, `check-green`, `check-green`, `check-green`],
			[`Name Search`, `check-green`, `check-green`, `check-green`],
			[
				`Business Dashboard with Additional Services, Content & Support`,
				`check-green`,
				`check-red`,
				`check-green`,
			],
			[
				`Business Tax Consultation`,
				`check-green`,
				`check-green`,
				`check-green`,
			],
			[`First Year Registered Agent`, `FREE`, `$249`, `check-green`],
			[`Operating Agreement`, `$40`, `$99`, `check-green`],
			[
				`EIN`,
				`$70`,
				[
					`$159`,
					{
						className: "nobox",
						content:
							"Has to be purchased as a package with Operating\u00a0Agreement",
					},
				],
				`$70`,
			],
			[
				`Business Contract Templates`,
				[
					`$150`,
					{
						className: "nobox",
						content: "One-time fee or FREE\u00a0with\u00a0Platinum package.",
					},
				],
				[
					`$40`,
					{
						className: "nobox",
						content:
							"Monthly\u00a0subscription *part\u00a0of\u00a0Smart\u00a0Employer Package",
					},
				],
				`check-red`,
			],
			[
				`Expedited Order`,
				`(+$50)`,
				[
					`$350`,
					{
						className: "nobox",
						content: "*must\u00a0purchase Express\u00a0Gold\u00a0package",
					},
				],
				[
					`$50`,
					{
						content: "*rush order $100\u00a0+\u00a0state\u00a0fee",
						className: "nobox",
					},
				],
			],
		],
	},
};

export const requirements = {
	header: `Fees and requirements in California.`,
	rows: [
		{
			box: {
				fields: [
					{
						header: `$75`,
						text: `State fee`,
					},
					{
						header: `15 days`,
						text: `State filing time`,
					},
					{
						header: `5 days`,
						text: `Expected filling time`,
					},
				],
			},
			content: {
				columns: [
					{
						content: [
							{
								type: `heading`,
								size: 3,
								content: `Filing time and price`,
							},
							{
								type: `paragraph`,
								content: `The state charges this amount to file a new business entity. This fee goes directly to the Secretary of State.`,
							},
							{
								type: `arrow-links`,
								content: {
									text: `State Filing Times`,
									url: `/state-filing-times/`,
								},
								bottomMargin: 16,
							},
							{
								type: `arrow-links`,
								content: {
									text: `State Filing Prices`,
									url: `/state-filing-fees/`,
								},
							},
						],
					},
					{
						header: `Compliance  Requirements`,
						text: `This report is mandatory and must be filed within the specified time frame in order for the entity to remain in good standing with the state.`,
						text2: `Failure to file this report can lead to the company being revoked or administratively dissolved.`,
						link: {
							text: `Other State Requirements`,
							url: `/compliance-filing-requirement/`,
						},
					},
				],
			},
		},
		{
			box: {
				fields: [
					{
						header: `Annually`,
						text: `Frequency`,
					},
					{
						header: `$800 (min)`,
						text: `Filing fee`,
					},
				],
			},
			content: {
				header: `California Franchise Tax`,
				text: `$800 payment for the LLC Franchise Tax is due by 15th day of the 4th month after your LLC is filed. The month your LLC is filed counts as Month 1, regardless if you file on the 1st of the month, the last of the month, or any day of the month, really.`,
				text2: `This means that if you were to file your LLC on March 22nd, then you must pay the $800 fee no later than June 15th (in this example, March is Month 1, April is Month 2, May is Month 3, and June is Month 4). Then, every year after your first payment $800 LLC Franchise Tax will be due April 15th. You pay the $800 LLC Franchise Tax using Form 3522 called the LLC Tax Voucher.`,
			},
		},
		{
			box: {
				fields: [
					{
						header: `Biennially`,
						text: `Frequency`,
					},
					{
						header: `$20`,
						text: `Filing fee`,
					},
				],
			},
			content: {
				header: `Statement of Information`,
				header2: `Due Date:`,
				text: `During six-month period ending on last day of anniversary month of incorporation or qualification.`,
				header3: `Important:`,
				text2: `The initial Statement of Information filing is due within 90 days of the entity formation date.`,
			},
		},
	],
};
