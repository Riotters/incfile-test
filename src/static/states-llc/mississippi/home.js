import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
	header: `Why Form a Limited Liability Company (LLC)?`,
	text: `$0 + State Fee & 1st Year FREE Registered Agent`,
	buttons: [
		{
			text: `See detailed pricing`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MS`,
		},
	],
};

export const howToGuide = [
	{
		type: `header`,
		content: `How to Start a Mississippi LLC`,
		size: 1,
		template: 3,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `Mississippi is located in the southern U.S. and shares a border with Mexico, Alabama, Tennessee, Louisiana and Arkansas. It is a predominantly rural state and a major center for agriculture.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If you want to start your own business in Mississippi, one of the best ways to do so is by forming a Mississippi LLC. Limited Liability Companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. Mississippi LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `We cover several areas for Mississippi companies including business searches, the Mississippi Secretary of State, business licenses and sales tax.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Briefly, the benefits of starting a Mississippi LLC include:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Separating and limiting your personal liability from your business liability and debts`,
				`Quick and simple filing, management, compliance, regulations and administration of your Mississippi LLC`,
				`Easy tax filing and potential advantages for tax treatment`,
			],
		},
		marginBottom: 48,
		color: color.blue3,
		curve: true,
		curveColor: color.red1,
	},
	{
		type: `text`,
		content: `Learn more about the <a href="/limited-liability-company/">benefits of the LLC business structure here</a>.`,
		marginBottom: 16,
	},
	{
		type: `header`,
		content: `Six Quick Steps for Setting Up Your Mississippi Company`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `We've got lots of useful information on starting a business in MS. On this page you'll find the basic steps of how to form a Mississippi LLC, with more in-depth content throughout the rest of our guide.`,
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
					question: `STEP 2: Search for and Choose a Unique Business Name for Your Mississippi LLC`,
					answer: `<p>YYou will need a distinctive and original name for your Mississippi LLC that's not used by any other business in MS. To find out if another company is using your chosen business name, carry out a Mississippi business entity name search on the MS Secretary of State website.</p></br>
                   <p>There are a few rules you'll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Mississippi LLC.</p></br>
                   <a href="/mississippi-llc/how-to-name-your-llc/"> Learn about Mississippi LLC business naming rules.</a>`,
				},
				{
					question: `STEP 3: Provide an Official Address for Your MS LLC`,
					answer: `<p>Every Mississippi LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address must be inside the state of Mississippi, but it cannot be a P.O. Box.</p></br>
            <p>You can also use a Virtual Mailbox service if you do not have a physical address.</p>`,
				},
				{
					question: `STEP 4: Assign a Mississippi Registered Agent`,
					answer: `<p>Every Mississippi LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Mississippi Secretary of State.</p></br>
          <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your Registered Agent must have a physical street address in Mississippi and must be present to receive important documents for your company during business hours.</p></br>
          <p>At Incfile, all of our packages include a Mississippi Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
          <a href="/mississippi-llc/registered-agents-mississippi-llc/">Learn more about Mississippi Registered Agents.</a>`,
				},
				{
					question: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
					answer: `You will need an EIN to identify your business with the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Mississippi LLC business formation process.`,
				},
				{
					question: `STEP 6: File Articles of Organization with the Mississippi Secretary of state`,
					answer: `<p> Once you've gathered all the information for your LLC, you’ll need to file a formal document with the Mississippi Secretary of State. This document is known as your “Articles of Organization,” and filing the document creates your Mississippi LLC. Here’s what is typically included:</p></br>
                   <ul>
                   <li> Your business name and address </li>
                   <li> Details of your Registered Agent </li>
                   <li> Tax closing month </li>
                   </ul></br>
                   <p>You can file your Mississippi Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Mississippi, but you only need to file your Articles of Organization once.</p></br>
                   <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MS"> Form your LLC now </a>`,
				},
			],
		},
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Review Information From the Mississippi Secretary of State`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The Mississippi Secretary of State has plenty of information on forming and running a business in Mississippi. Check out additional resources below.`,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `These are all the basic steps for forming an LLC in Mississippi. You’ll find other useful information below.`,
		marginBottom: 32,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`<a href="https://www.sos.ms.gov/BusinessServices/Pages/default.aspx" target="_blank" rel="noopener noreferrer">Mississippi Secretary of State for forming and running your MS LLC</a>`,
				`<a href="https://mdes.ms.gov/employers/" target="_blank" rel="noopener noreferrer">Mississippi Department of Labor for Mississippi employers and hiring</a>`,
				`<a href="https://www.dor.ms.gov/Business/Pages/default.aspx" target="_blank" rel="noopener noreferrer">Mississippi Department of Revenue for Mississippi taxes</a>`,
			],
		},
		marginBottom: 32,
		color: color.yellow2,
	},
	{
		type: `header`,
		content: `Special Types of Mississippi LLCs`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `A regular Mississippi LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
		marginBottom: 32,
	},
	{
		type: `accordion`,
		header: 3,
		content: {
			items: [
				{
					question: `Form a Professional Mississippi LLC`,
					answer: `<p>Some states, including Mississippi, allow certain occupations to form “Professional LLCs.” These types of business typically have specialized requirements and licensing. Here are the occupations that the MS Secretary of State allows to form Mississippi professional LLCs:</p>
                <ul>
                  <li>Public accountants</li>
                  <li>Dentists</li>
                  <li>Architects</li>
                  <li>Veterinarians</li>
                  <li>Osteopaths</li>
                  <li>Physicians</li>
                  <li>Surgeons</li>
                  <li>Attorneys-at-law</li>
                </ul>`,
				},
				{
					question: `Form a Foreign LLC in Mississippi`,
					answer: `<p>If your business is already operating in another state and expanding to Mississippi, you'll need to form a foreign LLC.</p></br>
          <p><a href="/mississippi-llc/fees-filing-requirements/">More information on Mississippi filing and licensing requirements here.</a></p>`,
				},
			],
		},
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Detailed Information for Your Mississippi LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You’ll find plenty more insight and guidance on the other pages of this guide, including:`,
		marginBottom: 32,
	},
	{
		type: `header`,
		size: 3,
		content: `<a href="/mississippi-llc/how-to-name-your-llc/">Naming Your Mississippi LLC</a>`,
		marginBottom: 16,
	},

	{
		type: `text`,
		content: `How to search the Mississippi business registry of the Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a Mississippi  LLC name and more.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		size: 3,
		content: `<a href="/mississippi-llc/registered-agents-mississippi-llc/">Mississippi  Registered Agents for LLCs</a>`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to appoint a Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Mississippi Registered Agents.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		size: 3,
		content: `<a href="/mississippi-llc/fees-filing-requirements/">Fees and Requirements for Mississippi LLCs</a>`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Mississippi rules. Includes details of Employer Identification Numbers (EINs), Mississippi and federal business licenses, annual reports and more.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		size: 3,
		content: `<a href="/mississippi-llc/business-taxes/">Federal, State, Sales and Other Taxes for Your Mississippi LLC</a>`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to understand the various taxes you will need to pay to the federal and Mississippi government. Includes details of federal taxes like income and self-employment, and Mississippi taxes like sales tax and income tax.`,
		marginBottom: 32,
	},
];

export const namingYourBusiness = [
	{
		type: `header`,
		content: `Search Your Business Name With the Mississippi Secretary of State and Register Your LLC`,
		size: 1,
		template: 3,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `We’re here to help you find the right business name for your Mississippi LLC. From searching for a business name with the Mississippi Secretary of State to understanding naming rules or creating a “Doing Business As” name to register your entity, you’re in the right place.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Mississippi Secretary of State LLC Business Search`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You should start naming your business by completing a Mississippi business entity search” with the secretary of state. They have a helpful tool on their website that lets you search the register of Mississippi LLCs and corporations to see if someone already has your desired business name. Just visit the Business Search Tool on the Mississippi SOS website and enter the MS business name you want to search for.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If the business name is already used by an LLC or Corporation in Mississippi, that means it’s not available and you won’t be able to register it. Try searching for a different business name instead.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The Mississippi Secretary of State search tool lets you enter details and search for your MS LLC by the following fields:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Business Name`,
				`Business ID`,
				`Officer Name`,
				`Registered Agent`,
			],
		},
		marginBottom: 32,
		color: color.purple3,
	},
	{
		type: `header`,
		content: `Mississippi Secretary of State Rules for Naming Your LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Mississippi Secretary of State naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in MS.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Standard LLC Naming Rules`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules, as they will influence the name you choose for your Mississippi LLC.`,
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
		content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Mississippi. This is why you should check business name availability on the MS SOS website.`,
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
		content: `It’s not enough for your LLC name to be unique; it also cannot be similar to the name of another corporation or LLC in Mississippi. For example, you cannot use the following factors to say your name is different from the name of another business:`,
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
		color: color.babyblue3,
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
				`Are very similar to the name of a federal or MS agency or organization (e.g. FBI, FDA, Mississippi Department of Revenue, Mississippi Police, Treasury, etc)`,
				`Suggest affiliation with a federal or state agency or organization`,
				`Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
				`Imply a purpose that it would be illegal for your business to carry out`,
			],
		},
		marginBottom: 48,
		color: color.yellow3,
		curve: true,
		curveColor: color.red1,
	},
	{
		type: `header`,
		content: `Mississippi LLC Trade Names`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You might choose to do business under a different name from your legal LLC name. In Mississippi, doing business under a different name is known as a “Trade Name.” You might choose to use a different name from your MS formal LLC name for a variety of reasons.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `For example, your LLC might be called Mississippi Leisure and Tourism Holding Company LLC and you have a chain called Steamboat. You should file a Trade Name to let the Mississippi Secretary of State know. In Mississippi, you do that through a form, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
		marginBottom: 32,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's assumed bussiness name service`,
			url: `/fictitious-business-or-trade-name/`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Register Your Mississippi LLC Business Entity`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Once you’ve searched for your Mississippi business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your MS LLC name. There are a couple of ways to do this.`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`If you don’t want to form your Mississippi LLC right now, you can reserve the business name`,
				`If you’re ready to start your Mississippi LLC, you can register it through Incfile`,
			],
		},
		marginBottom: 32,
		color: color.purple3,
	},
	{
		type: `header`,
		content: `Reserve Your LLC Name With the Mississippi Secretary of State`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If you don’t want to form your business immediately, you can reserve a name with the Mississippi Secretary of State. You will need to complete an Application for Name Reservation with the Mississippi Secretary of State through their 
    <a href="https://corp.sos.ms.gov/corp/portal/c/page/login/portal.aspx" target="_blank" rel="noopener noreferrer">online filing system.</a> You do not need to reserve a name if you are forming your business right away.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Register Your Mississippi LLC With Incfile`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Now that you’ve chosen the perfect name, you can formally register your Mississippi business through Incfile. You will need to gather some more information, but we’ll guide you through the entire process. We make it fast and simple to start your Mississippi LLC.`,
		marginBottom: 32,
	},
	{
		type: `button`,
		content: {
			text: `Register your Mississippi LLC now.`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MS`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `FAQs on Naming Your Mississippi LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You might find the following answers useful.`,
		marginBottom: 32,
	},
	{
		type: `accordion`,
		header: 3,
		content: {
			items: [
				{
					question: `How Do I Search for My Mississippi LLC Business Name?`,
					answer: `Just go to the <a href="https://corp.sos.ms.gov/corp/portal/c/page/corpbusinessidsearch/portal.aspx?#clear=1" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Mississippi Secretary of State, which will tell you if there are any Mississippi corporations or LLCs with that name.`,
				},
				{
					question: `Are There Any Rules on Naming My Mississippi LLC?`,
					answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Mississippi). We’ve detailed these rules above.`,
				},
				{
					question: `Can I Do Business Under a Different Name Than My LLC Name in Mississippi?`,
					answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. See our section on “Mississippi LLC Trade Names” above.`,
				},
				{
					question: `Can I Reserve a Name for My Mississippi LLC?`,
					answer: `Yes. The Mississippi Secretary of State allows you to reserve a name if you don’t want to start your business immediately. If you are ready to start your business now, you do not need to reserve a name`,
				},
			],
		},
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Useful Resources for Naming Your Mississippi LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You might find these other resources helpful.`,
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
		content: `You must be careful that your Mississippi LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
		content: `Find the Perfect Name for Your Mississippi LLC`,
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
		color: color.blue3,
	},
	{
		type: `text`,
		content: `<a href="https://www.incfile.com/blog/post/llc-name-search-50-states/" target="_blank">Incfile guide to choosing a business name</a>`,
		marginBottom: 48,
	},
];

export const registeredAgent = [
	{
		type: `header`,
		content: `Mississippi Registered Agents for Your LLC`,
		size: 1,
		template: 3,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `The Mississippi Secretary of State requires every MS LLC to have a Registered Agent. Once you have assigned a Mississippi Registered Agent, they can receive official correspondence and documents on behalf of your MS business. Registered Agents can be individuals or other specialized Registered Agent service businesses.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Your LLC must have a Mississippi Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing MS Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `What the Mississippi Secretary of State Says About MS Registered Agents`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Here's some important information from the Mississippi Secretary of State on MS Resident Agent services.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `“Any individual, corporation or LLC may act as registered agent for any Mississippi company provided the agent has a physical address in the state of Mississippi. Noncommercial registered agents will not be listed on the Secretary of State's website. Companies seeking to utilize a noncommercial registered agent must obtain that agent’s permission prior to listing the agent on any forms filed with the Secretary of State.<br>Noncommercial registered agents will not be notified of their selection as a registered agent. If a company chooses a noncommercial registered agent without permission, that agent has no obligation to the company and may refuse to perform the duties of registered agent without penalty.<br>If properly selected, both commercial and noncommercial registered agents have the same duties and obligations to their clients. The same forms are used for naming, amending or terminating registered agents regardless of type. Those forms are found with all of the other business forms on the Business Services page.”`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Mississippi LLC Resident Agent Service Rules`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `There are certain rules that you must follow when you’re appointing a Mississippi Registered Agent service for your business. They are:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`If the Registered Agent is a person, they must reside in Mississippi.`,
				`If the Registered Agent is a business, they must be able to conduct business in Mississippi.`,
				`The Registered Agent must have a physical street address in Mississippi, not a P.O. Box.`,
				`The Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
			],
		},
		marginBottom: 32,
		color: color.yellow3,
	},
	{
		type: `text`,
		content: `Note that the Registered Agent address does not need to be the same as your Mississippi LLC business address.`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Services Provided by a Mississippi Registered Agent`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Your Mississippi Registered Agent carries out several valuable services for your business. They accept official communications and documents from the MS Secretary of State on your behalf. This includes:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Correspondence from the Mississippi Secretary of State, like a notice to file reports and other forms`,
				`Service of process documents (for example, if your Mississippi LLC has legal proceedings issued against it)`,
				`Official Mississippi and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
			],
		},
		marginBottom: 48,
		color: color.blue3,
		curve: true,
		curveColor: color.blue1,
	},
	{
		type: `header`,
		content: `The Incfile Registered Agent Service for Mississippi LLCs`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `If you have an LLC that’s incorporated in Mississippi and you need a Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Mississippi business—plus, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `We are authorized to conduct business in Mississippi and can legally act as your Registered Agent. We also have an address in Mississippi, which is required to operate as a Registered Agent. Here's what the Incfile Mississippi Resident Agent service provides for your MS LLC.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `We are authorized to conduct business in Mississippi and can legally act as your Registered Agent. We also have an address in Mississippi, which is required to operate as a Registered Agent. Here’s what you need to know about Incfile’s MS Registered Agent service:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`The Registered Agent will always be available to accept documents and letters on your behalf`,
				`We automatically notify you whenever we receive correspondence for your business from the Mississippi Secretary of State or anyone else`,
				`We scan your correspondence and upload it to a dashboard, so you can review it when convenient`,
				`We forward all correspondence to an address you choose`,
			],
		},
		marginBottom: 32,
		color: color.green3,
	},
	{
		type: `button`,
		content: {
			text: `Order Incfile's Mississippi registered agent service`,
			url: `/manage-your-company/registered-agent/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `How to Appoint a Mississippi Registered Agent for Your LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `You can appoint a Registered Agent when you first incorporate your Mississippi LLC or at any point after that. Here’s how to go about it.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Assign Your Mississippi Registered Agent When You Form Your LLC`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Your business needs to have a Mississippi Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
		marginBottom: 16,
	},
	{
		type: `header`,
		content: `File Articles of Organization With the Mississippi Secretary of State`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the Mississippi Secretary of State to formally create your business.`,
		marginBottom: 24,
	},
	{
		type: `header`,
		content: `Incorporate Through Incfile and Get a Free Mississippi Resident Agent`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you've provided. Additionally, we give you a free Mississippi Resident Agent Service for the first year, and we'll include details of your Mississippi Resident Agent in the form that we file.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Registered Agent Service for the first year, and we’ll include details of your MS Registered Agent in the form that we file.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Form your business now`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MS`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Change Your Mississippi Registered Agent After Your LLC Is Formed`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You can also change your Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
		marginBottom: 16,
	},
	{
		type: `header`,
		content: `Choose a Registered Agent Service and File a Form With the Mississippi Secretary of State`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Once you’ve chosen a new Mississippi Registered Agent, you can complete a form. Once you’ve filled it out, send it to the secretary of state so they can update your records. The Mississippi SOS may charge a nominal fee to assign or change a Registered Agent, and we do pass that fee on to you.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Sign Up for Incfile's Mississippi Resident Agent Service and We'll File the Change on Your Behalf`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `When you choose to use our MS Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the Mississippi Secretary of State. We’ll let you know once we officially become your Registered Agent. Note that the Mississippi SOS may charge a nominal fee to assign or change a Registered Agent, which will be passed on to you.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Order Incfile's Mississippi registered agent service`,
			url: `/manage-your-company/registered-agent/`,
		},
		theme: `primary48`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Searching for MS Registered Agents for Other LLCs`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `In some situations, you might want to know the name of the Registered Agent that represents another Mississippi LLC. If you do, you can search the business database of the Mississippi Secretary of State, as these will often provide details of a specific business’s Registered Agent.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If the MS Registered Agent isn’t available from the searchable business registry, contact the Mississippi Secretary of State requesting the information.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Possible Outcomes of Not Assigning a Registered Agent for Your Mississippi LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `What happens if you choose not to assign or provide details of a Registered Agent to the Mississippi Secretary of State? There are several possible ramifications, including:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
				`<b>Falling out of good standing with the Mississippi Secretary of State:</b> If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
				`<b>Losing your status as a Mississippi LLC:</b> A Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your LLC may be dissolved.`,
			],
		},
		marginBottom: 48,
		color: color.blue3,
	},
	{
		type: `header`,
		content: `You Can Appoint Yourself as Your Own Mississippi Registered Agent`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `If you have an address in Mississippi, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`The Registered Agent must have a physical street address in Mississippi. If you’re forming an LLC outside Mississippi, you will need to use an in-state Registered Agent.`,
				`You always need to have someone on hand during business hours at the Mississippi address to sign for important documents.`,
				`The Registered Agent’s name and address are part of the public record and available through the Mississippi Secretary of State's website. If you prefer your name and address aren’t published, you should choose a Registered Agent service.`,
				`If you change your Mississippi business address or move out of state, you would need to file additional documentation with the MS Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
			],
		},
		marginBottom: 16,
		color: color.green3,
	},
	{
		type: `text`,
		content: `There are more considerations, but these should help with your decision to use a Mississippi Resident Agent service.`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `FAQs About Mississippi Registered Agents`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `accordion`,
		header: 3,
		content: {
			items: [
				{
					question: `Do I Need to Appoint a Mississippi Registered Agent?`,
					answer: `Yes. All MS LLCs are required to have a Registered Agent. This is mandated by the Mississippi Secretary of State.`,
				},
				{
					question: `When Can I Assign a Mississippi Registered Agent Service?`,
					answer: `You can either do it when you incorporate your Mississippi business through paperwork filed with the MS Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
				},
				{
					question: `Can I Be My Own Registered Agent in Mississippi?`,
					answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the Mississippi Secretary of State.`,
				},
				{
					question: `Does My Registered Agent Need to Have an Address in Mississippi?`,
					answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
				},
			],
		},
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Useful Resources for Mississippi Registered Agent Services`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `You might find these resources helpful:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/">The Main Functions of a Mississippi Registered Agent</a>`,
				`<a href="/manage-your-company/change-of-registered-agent/">Changing Your Mississippi Registered Agent</a>`,
				`<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/">What a Mississippi Registered Agent Does</a>`,
			],
		},
		marginBottom: 48,
		color: color.babyblue3,
	},
];
export const feesAndRequirments = [
	{
		type: `header`,
		content: `The Fees and Filing Requirements for Your Mississippi LLC`,
		size: 1,
		template: 3,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `Some types of businesses have different requirements in Mississippi, including related fees and costs. Your MS LLC needs to pay various fees to the federal government, Mississippi government and other agencies. Some of these fees are levied by the Mississippi Secretary of State or statewide organizations, while others come from the federal government. On this page, we’ve summarized the most common fees and requirements.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Note that Mississippi business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Mississippi LLC Incorporation Filing and Fees`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `To create your business in Mississippi, you’ll file an LLC with the MS Secretary of State and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for Mississippi:`,
		marginBottom: 32,
	},
	{
		type: `dynamic_ar_box`,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Compare State Filing Times`,
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
		content: `When you form your MS LLC through Incfile, we automatically charge you this fee and forward it to the Mississippi Secretary of State when we file your incorporation paperwork.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here, including expedited fees for Mississippi.</a>`,
		marginBottom: 24,
	},
	{
		type: `button`,
		content: {
			text: `Incorporate your Mississippi LLC through Incfile today`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=MS`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Getting an Employer Identification Number for Your Mississippi LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `Every Mississippi LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Get and EIN for your AlaMississippiska LLC through Incfile`,
			url: `/manage-your-company/tax-id-ein/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Foreign Qualification to Operate in a State Outside Mississippi`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `If you’re expanding your Mississippi LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Mississippi. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
		content: `Annual Reporting and Fees for Your Mississippi LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `Most states need to file an annual (or other periodic) report with their department of state. When you file your Mississippi LLC annual report, you may need to pay a fee. Here are the annual filing requirements for Mississippi:`,
		marginBottom: 48,
	},
	{
		type: `dynamic_filing_requirement`,
	},
	{
		type: `text`,
		content: `Incfile can also complete and file your Mississippi Annual Report on your behalf.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Mississippi annual report filing service`,
			url: `/manage-your-company/annual-report/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Mississippi Business Permits and Licenses`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `Your Mississippi LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by Mississippi, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges. Permits and licenses vary based on:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`The industry your Mississippi LLC operates in (e.g., restaurants will need health permits)`,
				`The location of your Mississippi LLC (state, county or city) (e.g., a license to conduct business from the city of Jackson)`,
				`The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
			],
		},
		marginBottom: 32,
		color: color.green3,
		curve: true,
		curveColor: color.blue1,
	},
	{
		type: `text`,
		content: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `The Incfile Business License Research Package for Your Mississippi LLC`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Our <a href="/business-license-research-package/">Business License Research Package</a> tells you about all of the licenses and permits you will need for your Mississippi LLC. It includes:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`A complete report on all the licenses, permits and tax registrations your Mississippi LLC will need`,
				`The application forms you will need to file with the Mississippi, regional and federal licensing authorities`,
			],
		},
		marginBottom: 24,
		color: color.purple3,
	},
	{
		type: `text`,
		content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Mississippi and local governments.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Mississippi business license research package`,
			url: `/business-license-research-package/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Create an Operating Agreement for Your Mississippi LLC`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `<a href="/research-topics/llc-info/the-llc-operating-agreement/"> Operating agreement</a>
     is a business document that covers how the business will be run, how managers and members are chosen, rights and duties of members and several other key areas.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Mississippi LLCs aren’t required to have an Operating Agreement, but they are extremely useful for several reasons. If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Mississippi business. You can choose to make changes to the template based on your unique requirements.`,
		marginBottom: 16,
	},
	{
		type: `header`,
		content: `Ad Hoc Mississippi Fees or Requirements for Your Mississippi LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `There are several other fees or requirements that you may need to meet during the life of your Mississippi LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Obtain a Fictitious/DBA Name for Your Mississippi LLC`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If you want your MS business to trade under a different name, you can file a form with the Mississippi Secretary of State. You will need to pay a Mississippi filing fee. Incfile can file this form on your behalf.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Mississippi fictitious name service.`,
			url: `/fictitious-business-or-trade-name/`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Change the Mississippi Resident Agent for Your Mississippi LLC`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Your Mississippi LLC needs a Registered Agent. You need to appoint one when you first incorporate your LLC. You can also switch to a new Mississippi Resident Agent later. Incfile provides a complete Mississippi Resident Agent service.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Mississippi registered agent service`,
			url: `/manage-your-company/registered-agent/`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Reserve a Name`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If you don’t want to form your mississippi business right away, you can reserve a name with the Mississippi Secretary of State. You will need to pay a small fee to do this.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Amend Certain Facts About Your Mississippi LLC`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Your business formation documents state certain facts about your Mississippi business when it was originally formed. Over time, these facts might change — if they do, you need to file a “Certificate of Amendment” with the Mississippi Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf. Areas you might want to file Mississippi Articles of Amendment for include:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Adding, removing or changing a Mississippi LLC member or manager`,
				`Changing the business address of your LLC`,
				`Altering the stated business activities of your Mississippi LLC`,
			],
		},
		marginBottom: 32,
		color: color.yellow3,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Mississippi articles of amendment service`,
			url: `/manage-your-company/amendment/`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Get a Certificate of Good Standing`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Some organizations will request that you prove your Mississippi LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Mississippi Secretary of State. Incfile can obtain a certificate on your behalf.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Mississippi certificate of good standing service`,
			url: `/manage-your-company/certificate-of-good-standing/`,
		},
		theme: `primary48`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The fees listed above detail all the charges that a standard Mississippi LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Of course, your Mississippi LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for MS LLCs.`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `FAQs About Mississippi LLC fees`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `accordion`,
		header: 3,
		content: {
			items: [
				{
					question: `What Happens to the State Fees That I Am Charged When Forming My Mississippi LLC?`,
					answer: `We charge you for this fee at cost and then pay the fee to the secretary of state on your behalf when forming your Mississippi business.`,
				},
				{
					question: `Do I Need to Pay an Annual Report Fee Every Year?`,
					answer: `Yes. Most states, including Mississippi, require you to file a report for your LLC every year. You can find out more on the <a href="/compliance-filing-requirement/">compliance page for your state.</a>`,
				},
				{
					question: `Who Will I Need to Get Business Licenses and Permits From for My Mississippi LLC?`,
					answer: `<p>It depends on various factors including:</p></br>
                  <ul>
                  <li>The type of business you run</li>
                  <li>Where you are located</li>
                  <li>Governing organizations in your industry</li>
                  <li>Federal, state and local regulations</li>
                  </ul></br>
                  That’s why our <a href="/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Mississippi LLC needs to be compliant.`,
				},
			],
		},
		marginBottom: 48,
	},
];

export const businessTaxes = [
	{
		type: `header`,
		content: `The Federal, State, Sales and Other Taxes You Need to Pay for Your Mississippi LLC`,
		size: 1,
		template: 3,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `Business taxes are a fact of life, and your MS LLC will need to pay a variety of taxes to both the federal and Mississippi governments. We’ll cover all the main taxes in Mississippi including self-employment, payroll, federal, Mississippi state tax and Mississippi sales tax.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Need help? Incfile provides a complete Business Tax Filing service.<a href="/business-accounting/"> Learn more.</a>.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `How Your Mississippi LLC Will Be Taxed`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `The profits of a Mississippi LLC are not taxed at the business level, like those of C Corporations. Instead, tax for a Mississippi LLC works as follows:`,
		marginBottom: 16,
	},
	{
		type: `numeric-list`,
		content: [
			{
				text: `Mississippi LLC owners pay self-employment tax on business profits`,
			},
			{
				text: `Mississippi LLC owners pay MS state tax on any profits, less state allowances or deductions`,
			},
			{
				text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
			},
			{
				text: `Some MS LLCs pay Mississippi sales tax on products`,
			},
			{
				text: `Employers pay payroll tax on any salaries they pay to employees`,
			},
			{
				text: `Employees pay federal, state and payroll tax on their earnings.`,
			},
		],
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Mississippi personal tax returns, and that’s where you will pay those taxes.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Mississippi Business Taxes Payable to the MS Government`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `There are two main types of tax that you will pay to the Mississippi Department of Revenue: Mississippi state income tax and Mississippi state sales tax.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Mississippi State Tax on Your LLC Earnings`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `As a Mississippi business owner, you will need to pay MS state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Mississippi income tax. You will be taxed at the standard rates for Mississippi state taxes, and you will also get to apply regular allowances and deductions.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Any salaried employees will also need to pay personal Mississippi state taxes.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The graduated Mississippi state income tax rate is:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`3 percent on the first $5,000 of taxable income`,
				`4 percent on the next $5,000 of taxable income`,
				`5 percent on all taxable income over $10,000`,
			],
		},
		marginBottom: 16,
		color: color.blue3,
		curve: true,
		curveColor: color.red1,
	},
	{
		type: `text`,
		content: `If filing a combined return, each spouse can calculate their tax liability separately and add the results.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Get more details on the Mississippi state tax on on the  <a href="https://www.dor.ms.gov/Individual/Pages/Tax-Rates.aspx" target="_blank" rel="noopener noreferrer"> MS SOS website.</a>.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Mississippi Sales Taxes on LLC Sales`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the MS Department of Revenue. Mississippi sales tax is collected at the point of purchase. Mississippi sales tax rates do vary depending on the region, county or city where you are located.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You will typically need to collect Mississippi sales tax on:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`,
				`Certain services that your Mississippi business might provide.`,
			],
		},
		marginBottom: 16,
		color: color.green3,
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
		content: `Get more details on sales tax in Mississippi from the <a href="https://www.dor.ms.gov/Business/Pages/Sales-Use-Tax-landing.aspx" target="_blank" rel="noopener noreferrer"> MS SOS website.</a>`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Mississippi Sales Tax Rates`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that. Here are the sales tax rates for the major cities in Mississippi:`,
		marginBottom: 32,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Jackson, MS sales tax rate is 8 percent`,
				`Gulfport, MS sales tax rate is 7 percent`,
				`Southaven, MS sales tax rate is 7 percent`,
				`Hattiesburg, MS sales tax rate is 7 percent`,
			],
		},
		marginBottom: 16,
		color: color.green3,
		curve: true,
		curveColor: color.red1,
	},
	{
		type: `header`,
		content: `Federal Taxes for Your Mississippi LLC: Self-Employment and Income Taxes`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `There are a couple different federal taxes that every LLC will need to pay, including Mississippi LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Mississippi LLC Federal Self-Employment Tax`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `All Mississippi LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Mississippi business. The current self-employment tax rate is 15.3 percent.`,
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
				`On profits of $10,000, you would pay self-employment tax of $1,530.`,
				`On profits of $40,000, you would pay self-employment tax of $6,120.`,
				`On profits of $70,000, you would pay self-employment tax of $10,710.`,
				`On profits of $90,000, you would pay self-employment tax of $13,770.`,
			],
		},
		marginBottom: 48,
		color: color.babyblue3,
		curve: true,
		curveColor: color.purple3,
	},
	{
		type: `header`,
		content: `Pay Less Self-Employment Tax by Treating Your Mississippi LLC as an S Corporation`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The Internal Revenue Service allows LLCs to ask to be treated as an S Corporation for tax purposes. This can help you reduce the amount of self-employment tax that you pay by declaring some of your income as salary and other income as distributions or withdrawals.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You can do this by making an “S Corporation Tax Election” with the IRS using a form known as Form 2553. We can file your Form 2553 with the IRS on your behalf.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Speak to your accountant for more information on reducing your Mississippi LLC self-employment tax through an S Corporation tax election.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Mississippi LLC Federal Income Tax`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You must also pay regular federal income tax on any earnings you take out of your Mississippi LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You only pay federal income tax on your Mississippi LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You can find details of federal income tax brackets and tax calculators online.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Employee and Employer Taxes for Your Mississippi LLC`,
		size: 2,
		template: 3,
		style: { fontSize: `28px`, lineHeight: `36px` },
		marginBottom: 24,
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
					question: `Mississippi LLC Employer Payroll Tax Withholding`,
					answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
				},
				{
					question: `Employer Federal and State Tax Withholding for Your Mississippi LLC`,
					answer: `You may also choose to withhold federal and Mississippi state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
				},
				{
					question: `Employees May Need to File Tax Returns`,
					answer: `Regardless of whether you withhold federal and Mississippi state income tax, your employees may need to file their own tax returns.`,
				},
				{
					question: `Mississippi LLC Employee Insurance and Other Requirements`,
					answer2: [
						{
							type: `paragraph`,
							content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
						},
						{
							type: `paragraph`,
							content: `<a href="https://mdes.ms.gov/" target="_blank" rel="noopener noreferrer">Get more requirements from the Mississippi Department of Employment Security website.</a>`,
							marginBottom: 48,
						},
					],
				},
				{
					question: `Other Taxes and Duties for Your Mississippi LLC`,
					answer: `Depending on the industry you are in, your Mississippi LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
				},
				{
					question: `Estimated Taxes for Your Mississippi LLC`,
					answer2: [
						{
							type: `paragraph`,
							content: `Most Mississippi LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
						},
						{
							type: `paragraph`,
							content: `The most common types of estimated taxes are:`,
						},
						{
							type: `list-dot-without-bg`,
							color: color.orange3,
							content: [
								`Federal income tax`,
								`Federal self-employment tax`,
								`Mississippi state tax`,
							],
						},
						{
							type: `paragraph`,
							content: `Most Mississippi LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
						},
					],
				},
			],
		},
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `FAQs on Mississippi LLC Business Taxes`,
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
					question: `Does Mississippi Have Sales Tax?`,
					answer: `Yes. Mississippi does have a sales tax, which may vary among cities and counties. You can find more information above.`,
				},
				{
					question: `Does Mississippi Have a State Tax?`,
					answer: `Yes. Mississippi does have a general state income tax. You can find more information above.`,
				},
				{
					question: `What Is the Sales Tax Rate in Mississippi?`,
					answer: `We have listed common sales tax rates in Mississippi cities above.`,
				},
				{
					question: `Do I Need to Pay Estimated Taxes?`,
					answer: `Yes. In most cases you must pay estimated taxes on your Mississippi tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
				},
			],
		},
		marginBottom: 24,
	},
];

export const compare = {
	header: `How We Compare. <br>Get more for less.`,
	table: {
		headers: [null, `Incfile`, `LegalZoom`, `ZenBusiness`],
		rows: [
			[`Business incorporation service`, `$49`, `$149`, `$149`],
			[
				`Registered Agent included in the price`,
				`check-green`,
				`check-red`,
				`check-red`,
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
								type: `paragraph`,
								content: `Ut tincidunt neque a viverra egestas. Suspendisse tempus metu.`,
							},
							{
								type: `arrow-links`,
								content: {
									text: `State Filing Times`,
									url: `/`,
								},
								bottomMargin: 16,
							},
							{
								type: `arrow-links`,
								content: {
									text: `State Filing Prices`,
									url: `/`,
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
							url: `/`,
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
