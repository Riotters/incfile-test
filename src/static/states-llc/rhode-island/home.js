import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
	header: `Why Form a Limited Liability Company (LLC)?`,
	text: `$0 + State Fee & 1st Year FREE Registered Agent`,
	buttons: [
		{
			text: `See detailed pricing`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=RI`,
		},
	],
};

export const howToGuide = [
	{
		type: `header`,
		content: `How to Start an LLC in Rhode Island`,
		size: 1,
		template: 2,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `Located in New England, Rhode Island is the smallest of all the states in the U.S. Called the Ocean State, RI is known for its maritime history and a large proportion of inlets and waterways. Major economies in the state include textiles, healthcare, education, manufacturing, banking and tourism.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `For most business owners, the fastest and easiest way to start a business in Rhode Island is by creating a Rhode Island LLC. A limited liability company (LLC) is a type of business entity that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger Rhode Island corporations, but with much simpler rules and regulations.`,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `Briefly, the benefits of starting a Rhode Island LLC include:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Separating and limiting your personal liability from your business liability and debts`,
				`Quick and simple filing, management, compliance, regulation and administration of your Rhode Island LLC`,
				`Easy tax filing and potential advantages for your tax treatment`,
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
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Six Quick Steps to Forming an LLC in Rhode Island`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `We’ve got lots of useful information on starting a business in RI. On this page, you’ll find the basic steps of how to form a Rhode Island LLC, with more in-depth content throughout the rest of our guide.`,
		marginBottom: 32,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `STEP 1: Gather Information for Your Members`,
					answer: `First, you need to gather basic information about your LLC, including the names and addresses of the managers or members. The LLC members are typically the people who own and run the business. They are also the ones who can take profits out of the business to pay themselves.`,
				},
				{
					question: `STEP 2: Search for and Choose a Unique Business Name for Your Rhode Island LLC`,
					answer: `<p>You will need a distinctive and original name for your LLC that’s not used by any other business in RI. To find out if another company is using your chosen business name, carry out a Rhode Island business entity name search on the Secretary of State website.</p></br>
                   <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Rhode Island LLC.</p></br>
                   <a href="/rhode-island-llc/how-to-name-your-llc/"> Learn about Rhode Island LLC business naming rules. </a>`,
				},
				{
					question: `STEP 3: Provide an Official Address for your RI LLC`,
					answer: `Every Rhode Island LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of Rhode Island, but it cannot be a P.O. Box.`,
				},
				{
					question: `STEP 4: Assign a Registered Agent for Your Rhode Island LLC`,
					answer: `<p>Every RI LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Rhode Island Secretary of State.
          </p></br>

          <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your Registered Agent must have a physical street address in Rhode Island and must be present to receive important documents for your company during business hours.</p></br>
          
          <p>At Incfile, all of our packages include a Rhode Island Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
          <a href="/rhode-island-llc/registered-agents-rhode-island-llc/">Learn more about Rhode Island Registered Agents</a>`,
				},
				{
					question: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
					answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or Incfile can get one for you as part of the Rhode Island LLC business formation process.`,
				},
				{
					question: `STEP 6: File A Certificate of Organization With the Rhode Island Secretary of State`,
					answer: `<p> Once you've gathered all the information together for your Rhode Island LLC, you’ll need to file a formal document with the RI Secretary of State. This document is known as your “Certificate of Organization,” and filing the document creates your Rhode Island LLC. Here’s what is typically included:</p></br>
                   <ul>
                   <li> Your business name and address </li>
                   <li> Details of your Registered Agent </li>
                   <li> Names of managers or members of the LLC at the time of filing </li>
                   <li> Addresses of managers or members of the LLC at the time of filing </li>
                   <li> Name of the incorporator </li>
                   </ul></br>
                   <p>You can file your Rhode Island LLC Certificate of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Rhode Island. You only need to file your Certificate of Organization once.</p></br>
                   <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=RI"> Form your LLC now </a>`,
				},
			],
		},
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Review Information From the Rhode Island Secretary of State`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `The Secretary of State has plenty of information on forming and running a business in Rhode Island. These are all the basic steps for forming an LLC in Rhode Island. You’ll find other useful information below.`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`<a href="https://www.sos.ri.gov/divisions/business-services/" target="_blank" rel="noopener noreferrer">Rhode Island Secretary of State for forming and running your LLC</a>`,
				`<a href="http://www.dlt.ri.gov/employer.htm" target="_blank" rel="noopener noreferrer">Rhode Island Department of Labor and Training for employers and hiring</a>`,
				`<a href="http://www.tax.ri.gov/" target="_blank" rel="noopener noreferrer">Rhode Island Department of Revenue for taxes</a>`,
			],
		},
		marginBottom: 32,
		color: color.babyblue2,
	},
	{
		type: `header`,
		content: `Special Types of Rhode Island LLCs`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `A regular Rhode Island LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
		marginBottom: 32,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `Form a Professional Rhode Island LLC`,
					answer: `Some states, including Rhode Island, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. You can find more information here.`,
				},
				{
					question: `Form a Foreign LLC in Rhode Island`,
					answer: `<p>If your business is already operating in another state and expanding to Rhode Island, you’ll need to form a foreign LLC.</p></br>
            <p><a href="/rhode-island-llc/form-filling-permit-requirements/">More information on Rhode Island filing and licensing requirements here.</a></p>`,
				},
			],
		},
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `What to Do After Forming Your Rhode Island LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Want to know your next steps after creating a new LLC in Rhode Island? We’ve got you covered. <a href="/after-forming-llc/">Here’s our guide</a> to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Detailed Information for Your Rhode Island LLC`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `You’ll find plenty more insight and guidance on the other pages of this guide, including:`,
		marginBottom: 32,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Naming Your Rhode Island LLC`,
			url: `/rhode-island-llc/how-to-name-your-llc/`,
		},
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to search the Rhode Island business registry of the RI Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a Rhode Island LLC name and more.`,
		marginBottom: 32,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Rhode Island Registered Agents`,
			url: `/rhode-island-llc/registered-agents-rhode-island-llc/`,
		},
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to appoint a Rhode Island Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Rhode Island Registered Agents.`,
		marginBottom: 32,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Fees and Requirements for Rhode Island LLCs`,
			url: `/rhode-island-llc/form-filling-permit-requirements/`,
		},
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Rhode Island rules. Includes details of Employee Identification Numbers (EINs), Rhode Island and federal business licenses, Rhode Island annual reports and more.`,
		marginBottom: 32,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Federal, State, Sales and Other Taxes for Your Rhode Island LLC`,
			url: `/rhode-island-llc/business-taxes/`,
		},
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to understand the various taxes you will need to pay to the federal and Rhode Island government. Includes details of federal taxes like income and self-employment and Rhode Island taxes like sales tax and income tax.`,
		marginBottom: 32,
	},
];

export const namingYourBusiness = [
	{
		type: `header`,
		content: `Search for and Register Your Rhode Island LLC Name`,
		size: 2,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `Whether you’re searching for the right Rhode Island business name or registering your LLC with the Secretary of State, we can help. We’ve got all the information you need on a Rhode Island business entity search, LLC naming rules, fictitious names and registering your business.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Rhode Island Secretary of State Business Search`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You should start naming your business by completing a Rhode Island business entity search with the Secretary of State. They have a helpful tool on their website that lets you search the register of RI LLCs and corporations to see if someone already has your desired business name.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If the business name is already used, that means it’s not available and you won’t be able to register it. Try searching for a different business name instead.`,
		marginBottom: 24,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Rhode Island Secretary of State business name search tool.`,
			url: `http://business.sos.ri.gov/CorpWeb/CorpSearch/CorpSearch.aspx/`,
		},
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Rhode Island SoS Rules for Naming LLCs`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Rhode Island Secretary of State naming rules. These do vary from state to state — we’ve got naming rules below.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Your LLC Business Name Must Be Unique`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Rhode Island. This is why you should check business name availability on the RI SOS website.`,
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
		content: `It’s not enough for your LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Rhode Island. For example, you cannot use the following factors to say your name is different from the name of another business:`,
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
				`Are very similar to the name of a federal or RI agency or organization (e.g., FBI, FDA, Rhode Island Department of Revenue, Rhode Island Police, Treasury, etc.)`,
				`Suggest affiliation with a federal or state agency or organization`,
				`Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
				`Imply a purpose that it would be illegal for your business to carry out`,
			],
		},
		marginBottom: 32,
		color: color.yellow3,
		curve: true,
		curveColor: color.red1,
	},
	{
		type: `header`,
		content: `Fictitious Names for Rhode Island LLCs`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You might choose to do business under a different name from your legal LLC name. In Rhode Island, doing business under a different name is known as a “Fictitious” or “Doing Business As (DBA)” name. You might choose to use a different name from your formal LLC name for a variety of reasons.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `For example, your LLC might be called Rhode Island Textile Mills Holding Company LLC and you have a brand called Cotton Concepts. You should file a fictitious name form to let the Rhode Island Secretary of State know. In Rhode Island, you do that through a Fictitious Business Name Statement form, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
		marginBottom: 24,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's DBA/fictitious name service`,
			url: `/fictitious-business-or-trade-name/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Register Your Business Name with the Rhode Island Secretary of State`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Once you’ve searched for your Rhode Island business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your RI LLC name. There are a couple of ways to do this.`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`If you don’t want to form your LLC right now, you can reserve the business name with the Rhode Island Secretary of State through their website. You do not need to reserve a name if you are forming your business right away.
              <a href="https://www.sos.ri.gov/divisions/business-services" target="_blank" rel="noopener noreferrer" >Rhode Island SOS LLC name reservation form.</a></br>
              If you’re ready to start your LLC, you can formally file your Articles of Organization with the Rhode Island SOS, or <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=RI">let Incfile take care of it for you</a>.`,
			],
		},
		marginBottom: 40,
		color: color.purple3,
	},
	{
		type: `header`,
		content: `FAQs on Naming Your Rhode Island LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You might find the following answers useful.`,
		marginBottom: 24,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `How Do I Search for My Rhode Island LLC Business Name?`,
					answer: `Just go to the <a href="http://business.sos.ri.gov/CorpWeb/CorpSearch/CorpSearch.aspx/" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Rhode Island Secretary of State, which will tell you if there are any corporations or LLCs with that name.`,
				},
				{
					question: `Are There Any Rules on Naming My Rhode Island LLC?`,
					answer: `Yes. Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Rhode Island). We’ve detailed these rules above.`,
				},
				{
					question: `Can I Do Business Under a Different Name Than My LLC Name in Rhode Island?`,
					answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
				},
				{
					question: `Can I Reserve a Name for My Rhode Island LLC?`,
					answer: `Yes. The Rhode Island Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
				},
			],
		},
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Useful Resources for Naming Your Rhode Island LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You might find these other resources helpful.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Trademarks and Service Marks`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You must be careful that your Rhode Island LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
		marginBottom: 24,
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
		content: `Find the Perfect Name for Your Rhode Island LLC`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The perfect business name can be elusive. We have a complete guide to choosing the right business name, but basically, you'll want to choose a name that will:`,
		marginBottom: 24,
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
		type: `arrow-link`,
		content: {
			text: `Incfile guide to choosing a business name`,
			url: `/blog/post/llc-name-search-50-states/`,
		},
		marginBottom: 32,
	},
];

export const registeredAgent = [
	{
		type: `header`,
		content: `Rhode Island Registered Agent Services`,
		size: 2,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `The Rhode Island Secretary of State requires every LLC to have a Registered Agent. Once you have assigned a Rhode Island Registered Agent, they can receive official correspondence and documents on behalf of your business. Registered Agents can be individuals or other specialized Registered Agent service businesses.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Your LLC must have a Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Rules for Rhode Island Registered Agents`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `There are certain rules that you must follow when you’re appointing a Rhode Island Registered Agent service for your business. They are:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`If the Registered Agent is a person, they must reside in Rhode Island.`,
				`If the Registered Agent is a business, they must be able to conduct business in Rhode Island.`,
				`The Registered Agent must have a physical street address in Rhode Island, not a P.O. Box.`,
				`The Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
			],
		},
		marginBottom: 32,
		color: color.yellow3,
	},
	{
		type: `text`,
		content: `Note that the Registered Agent address does not need to be the same as your Rhode Island LLC business address.`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Services Provided by a Rhode Island Registered Agent`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Your Rhode Island Registered Agent carries out several valuable services for your business. They accept official communications and documents from the Secretary of State on your behalf. This may include:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Correspondence from the Rhode Island Secretary of State, like a notice to file reports and other forms`,
				`Service of process documents (for example, if your Rhode Island LLC has legal proceedings issued against it)`,
				`Official Rhode Island and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
			],
		},
		marginBottom: 24,
		color: color.purple3,
		curve: true,
		curveColor: color.blue1,
	},
	{
		type: `header`,
		content: `The Incfile Registered Agent Service for Rhode Island LLCs`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you have an LLC that’s incorporated in Rhode Island and you need a Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Rhode Island business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `We are authorized to conduct business in Rhode Island and can legally act as your Registered Agent.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Here’s what you need to know about Incfile’s Registered Agent service:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`An always-available Rhode Island Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
				`A digital dashboard where you can access, store and retrieve any information we’ve received for your business`,
				`Email notification whenever we receive documents for your business`,
				`Automatic forwarding of all legal correspondence, documentation and information directly to you`,
			],
		},
		marginBottom: 32,
		color: color.green3,
	},
	{
		type: `button`,
		content: {
			text: `Order Incfile's Rhode Island registered agent service`,
			url: `/manage-your-company/registered-agent/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `How to Appoint a Rhode Island Registered Agent for Your LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You can appoint a Registered Agent when you first incorporate your Rhode Island LLC or at any point after that. Here’s how to go about it.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Assign Your Registered Agent When You Form Your RI LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Your business needs to have a Rhode Island Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
		marginBottom: 16,
	},
	{
		type: `header`,
		content: `File Articles of Organization with the Rhode Island Secretary of State`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the Secretary of State to formally create your business.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Incorporate Through Incfile and Get a Free Rhode Island Registered Agent`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you’ve provided. Additionally, we give you a free South Dakota Registered Agent service for the first year, and we’ll include details of your Registered Agent in the form that we file.`,
		marginBottom: 24,
	},
	{
		type: `button`,
		content: {
			text: `Incorporate your business through Incfile`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=RI`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Change Your Registered Agent After Your LLC Is Formed`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You can also change your Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Choose a Registered Agent Service and File a Statement of Change with the Rhode Island Secretary of State`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Once you’ve chosen a new Rhode Island Registered Agent, you can complete a “Statement of Change” form that’s available on the RI Secretary of State website. Once you’ve filled it out, send it to the Secretary of State so they can update your records.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Sign Up for Incfile’s Rhode Island Registered Agent Service and We’ll File the Change on Your Behalf`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `When you choose to use our RI Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete form “Statement of Change” on your behalf and send it to the Rhode Island Secretary of State. We’ll let you know once we officially become your Registered Agent.`,
		marginBottom: 24,
	},
	{
		type: `button`,
		content: {
			text: `Order Incfile's Rhode Island registered agent service`,
			url: `/manage-your-company/registered-agent/`,
		},
		theme: `primary48`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `RI Registered Agent Search`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `In some situations, you might want to know the name of the Registered Agent that represents another Rhode Island LLC. If you do, you can search the business database of the Rhode Island Secretary of State, which will often provide details of a specific business’s Registered Agent.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If the Registered Agent isn’t available from the searchable business registry, contact the Rhode Island Secretary of State requesting the information.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `The Risks When You Don’t Appoint a Rhode Island Registered Agent Service`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `What happens if you choose not to assign or provide details of a Registered Agent to the Rhode Island Secretary of State? There are several possible ramifications, including:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
				`<b>Falling out of good standing with the Rhode Island Secretary of State:</b> If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
				`<b>Losing your status as a Rhode Island LLC:</b> A Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your Rhode Island LLC may be dissolved.`,
			],
		},
		marginBottom: 48,
		color: color.blue3,
	},
	{
		type: `header`,
		content: `You Can Appoint Yourself as Your Own Rhode Island Registered Agent`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you have an address in Rhode Island, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`The Registered Agent must have a physical street address in Rhode Island. If you’re forming an LLC outside RI, you will need to use an in-state Registered Agent.`,
				`You always need to have someone on hand during business hours at the Rhode Island address to sign for important documents.`,
				`The Registered Agent’s name and address are part of the public record and available through the Rhode Island Secretary of State's website. If you prefer your name and address aren’t published, you should choose a Registered Agent service.`,
				`If you change your Rhode Island business address or move out of state, you need to file additional documentation with the RI Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
			],
		},
		marginBottom: 48,
		color: color.green3,
	},
	{
		type: `header`,
		content: `FAQs About Rhode Island Registered Agents`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `Do I Need to Appoint a Rhode Island Registered Agent?`,
					answer: `Yes. All RI LLCs are required to have a Registered Agent. This is mandated by the Rhode Island Secretary of State.`,
				},
				{
					question: `When Can I Assign a Rhode Island Registered Agent Service?`,
					answer: `You can either do it when you incorporate your Rhode Island business through paperwork filed with the Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
				},
				{
					question: `Can I Be My Own Registered Agent in Rhode Island?`,
					answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the South Dakota Secretary of State.`,
				},
				{
					question: `Does My Registered Agent Need to Have an Address in Rhode Island?`,
					answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
				},
			],
		},
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Useful Resources for Rhode Island Registered Agent Services`,
		size: 3,
		marginBottom: 32,
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
				`<a href="/research-topics/registered-agent/registered-agent-function/">The Main Functions of a Rhode Island Registered Agent</a>`,
				`<a href="/manage-your-company/change-of-registered-agent/">Changing Your Rhode Island Registered Agent</a>`,
				`<a href="/research-topics/registered-agent/registered-agent-tasks/">What a Rhode Island Registered Agent Does</a>`,
			],
		},
		marginBottom: 48,
		color: color.babyblue3,
	},
];

export const feesAndRequirments = [
	{
		type: `header`,
		content: `Fees and Filing Requirements for Rhode Island LLCs`,
		size: 2,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `Depending on the specifics of your Rhode Island business, you’ll be required to pay certain fees and fulfill different filing requirements. Some of these costs are payable to the Rhode Island Secretary of State, while others are due to the federal or Rhode Island government. We’ve summarized the most common requirements and fees here.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Note that Rhode Island business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Rhode Island LLC Incorporation Filing and Fees `,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `To create your business in Rhode Island, you’ll file an LLC with the Secretary of State and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for Rhode Island:`,
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
		content: `When you form your LLC through Incfile, we automatically forward this fee to the Rhode Island Secretary of State when we file your incorporation paperwork.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here, including expedited fees for Rhode Island.</a>`,
		marginBottom: 24,
	},
	{
		type: `button`,
		content: {
			text: `Incorporate your Rhode Island LLC through Incfile today`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=RI`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Getting an EIN/Tax ID for Your Rhode Island LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Every Rhode Island LLC should have a unique employer identification number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
		marginBottom: 24,
	},
	{
		type: `button`,
		content: {
			text: `Get and EIN for your Rhode Island LLC through Incfile`,
			url: `/manage-your-company/tax-id-ein/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Foreign Qualification to Operate in a State Outside Rhode Island`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you’re expanding your Rhode Island LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Rhode Island. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
		marginBottom: 24,
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
		content: `Annual Reporting and Fees for Your Rhode Island LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Most states need to file an annual (or other periodic) report with their department of state. When you file your RI LLC annual report, you may need to pay a fee. Here are the annual filing requirements for Rhode Island:`,
		marginBottom: 48,
	},
	{
		type: `dynamic_filing_requirement`,
	},
	{
		type: `text`,
		content: `<a href="/business-filing-deadlines/">Learn about your ongoing Rhode Island LLC filing requirements</a> and business filing deadlines with our helpful Rhode Island ongoing filing lookup tool.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Incfile can also complete and file your Rhode Island annual report on your behalf.`,
		marginBottom: 24,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Rhode Island annual report filing service`,
			url: `/manage-your-company/annual-report/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Rhode Island Business Permits and Licenses`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Some RI LLCs will need certain business licenses and permits from federal, state and regional organizations. These permits and licenses will have associated fees that you should pay on a one-off or regular basis. Permits and licenses vary based on:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`The industry your Rhode Island LLC operates in (e.g., restaurants will need health permits)`,
				`The location of your Rhode Island LLC (state, county or city) (e.g., a license to conduct business from the city of Pittsburgh)`,
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
		content: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `The Incfile Business License Research Package for Your Rhode Island LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Our Business License Research Package tells you about all of the licenses and permits you will need for your Rhode Island LLC.`,
		marginBottom: 32,
	},
	{
		type: `list-dot`,
		content: {
			header: `It includes:`,
			list: [
				`A complete report on all the licenses, permits and tax registrations your Rhode Island LLC will need`,
				`The application forms you will need to file with the Rhode Island, regional and federal licensing authorities`,
			],
		},
		marginBottom: 24,
		color: color.purple3,
	},
	{
		type: `text`,
		content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Rhode Island and local governments.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Rhode Island business license research package`,
			url: `/business-license-research-package/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Create an Operating Agreement for Your Rhode Island LLC`,
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
		content: `Rhode Island LLCs aren’t required to have an Operating Agreement, but they are extremely useful for several reasons (<a href="/research-topics/llc-info/llc-operating-agreement/">learn about them here</a>).  If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Rhode Island business. You can choose to make changes to the template based on your unique requirements.`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Ad Hoc Rhode Island Fees or Requirements for Your RI LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `There are several other fees or requirements that you may need to meet during the life of your Rhode Island LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Obtain a Fictitious/DBA Name for Your Rhode Island LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you want your RI business to trade under a different name, you can file a form with the Rhode Island Department of State. You will need to pay a Rhode Island filing fee. Incfile can file this form on your behalf.`,
		marginBottom: 24,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Rhode Island fictitious name service`,
			url: `/fictitious-business-or-trade-name/`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Change the Rhode Island Registered Agent for Your RI LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Your Rhode Island LLC needs a Registered Agent. You need to appoint one when you first incorporate your LLC. You can also switch to a new RI Registered Agent later. Incfile provides a complete Rhode Island Registered Agent service.`,
		marginBottom: 24,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Rhode Island registered agent service`,
			url: `/manage-your-company/registered-agent/`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Reserve a Name for Your Rhode Island LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you don’t want to form your RI business right away, you can reserve a name with the Rhode Island Department of State. You will need to pay a small fee to do this.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Amend Certain Facts About Your Rhode Island LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Your business formation documents state certain facts about your Rhode Island business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Rhode Island Department of State. You can do this yourself or have Incfile complete the filing on your behalf. Areas you might want to file Rhode Island Articles of Amendment for include:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Adding, removing or changing a Rhode Island LLC member or manager`,
				`Changing the business address of your LLC`,
				`Altering the stated business activities of your Rhode Island LLC`,
			],
		},
		marginBottom: 24,
		color: color.yellow3,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Rhode Island articles of amendment service`,
			url: `/manage-your-company/amendment/`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Get a Certificate of Good Standing`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Some organizations will request that you prove your Rhode Island LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Rhode Island Department of State. Incfile can obtain a certificate on your behalf.`,
		marginBottom: 24,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Rhode Island certificate of good standing service`,
			url: `/manage-your-company/certificate-of-good-standing/`,
		},
		theme: `primary48`,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `The fees listed above detail all the charges that a standard RI LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Of course, your Rhode Island LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for RI LLCs.`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `FAQs About Rhode Island LLC Fees`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `What Happens to the State Fees That I Am Charged When Forming My Rhode Islanda LLC?`,
					answer: `We charge you for this fee at cost and then pay the fee to the department of state on your behalf when forming your Rhode Island business.`,
				},
				{
					question: `Do I Need to Pay an Annual Report Fee Every Year?`,
					answer: `Usually, yes. Most states require you file a report for your LLC every year. Some states require filing biennially (every other year), though a handful don’t require annual reports. You can find out more on the  <a href="/compliance-filing-requirement/">compliance page for your state.</a>`,
				},
				{
					question: `Who Will I Need to Get Business Licenses and Permits From for My Rhode Island LLC?`,
					answer: `<p>It depends on various factors including:</p></br>
                  <ul>
                  <li>The type of business you run</li>
                  <li>Where you are located</li>
                  <li>Governing organizations in your industry</li>
                  <li>Federal, state and local regulations</li>
                  </ul></br>
                  That’s why our <a href="/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Rhode Island LLC needs to be compliant.`,
				},
			],
		},
		marginBottom: 48,
	},
];

export const businessTaxes = [
	{
		type: `header`,
		content: `The Business Taxes Your Rhode Island LLC Will Pay`,
		size: 2,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `There are a wide variety of business taxes that your Rhode Island LLC will need to pay. These include tax that’s payable to the Rhode Island government, like sales taxes and state tax. You will also need to pay federal, self-employment and possibly payroll tax to the IRS.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/"> Business Tax Filing service</a>.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `How Your Rhode Island LLC Will Be Taxed`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `The profits of an LLC are not taxed at the business level like those of C Corporations. Instead, taxes for an LLC work as follows:`,
		marginBottom: 24,
	},
	{
		type: `numeric-list`,
		content: [
			{
				text: `Rhode Island LLC owners pay self-employment tax on business profits.`,
			},
			{
				text: `Rhode Island LLC owners pay state tax on any profits, less state allowances or deductions.`,
			},
			{
				text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions.`,
			},
			{
				text: `Some LLCs pay Rhode Island sales tax on products.`,
			},
			{
				text: `Employers pay payroll tax on any salaries they pay to employees.`,
			},
			{
				text: `Employees pay federal, state and payroll tax on their earnings.`,
			},
		],
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and personal tax returns, and that’s where you will pay those taxes.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Business Taxes Payable to the RI Government`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `There are two main types of tax that you will pay to the Rhode Island Department of Revenue: state income tax and state sales tax.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Rhode Island State Tax on Your LLC Earnings`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `As a Rhode Island business owner, you will need to pay state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Rhode Island income tax. You will be taxed at the standard rates for Rhode Island state taxes, and you will also get to apply regular allowances and deductions.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Any salaried employees will also need to pay personal state taxes.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The Rhode Island state tax rates are between 3.75 percent and 5.99 percent, depending on income. `,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Get details on the <a href="http://www.tax.ri.gov/" target="_blank" rel="noopener noreferrer" >Rhode Island sales tax here.</a>`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Rhode Island Sales Taxes`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the RI Department of Revenue. Rhode Island sales tax is collected at the point of purchase. Sales tax rates do vary depending on the region, county or city where you are located. You will typically need to collect Rhode Island sales tax on:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`,
				`Certain services that your Rhode Island business might provide`,
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
		content: `Get details on the <a href="http://www.tax.ri.gov/" target="_blank" rel="noopener noreferrer">Rhode Island sales tax here.</a>.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Federal Taxes for Your Rhode Island LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `There are a couple of different federal taxes that every LLC will need to pay, including Rhode Island LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Federal Self-Employment Tax`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `All Rhode Island LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Rhode Island business. The current self-employment tax rate is 15.3 percent.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe. Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`On profits of $40,000, you would pay self-employment tax of $6,120.`,
				`On profits of $70,000, you would pay self-employment tax of $10,710.`,
				`On profits of $100,000, you would pay self-employment tax of $15,300.`,
				`On profits of $120,000, you would pay self-employment tax of $18,360.`,
			],
		},
		marginBottom: 48,
		color: color.green3,
		curve: true,
		curveColor: color.red1,
	},
	{
		type: `header`,
		content: `Pay Less Self-Employment Tax by Treating Your Rhode Island LLC as an S Corporation`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `The Internal Revenue Service allows LLCs to ask to be treated as an S Corporation for tax purposes. This can help you reduce the amount of self-employment tax that you pay by declaring some of your income as salary and other income as distributions or withdrawals.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You can do this by making an “S Corporation Tax Election” with the IRS using a form known as Form 2553. We can file your Form 2553 with the IRS on your behalf.`,
		marginBottom: 24,
	},
	{
		type: `button`,
		content: {
			text: `Incifle Form 2553 S corporation tax election for an LLC service`,
			url: `/llc-s-corp-election/`,
		},
		theme: `primary48`,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `Speak to your accountant for more information on reducing your Rhode Island LLC self-employment tax through an S Corporation tax election.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Federal Income Tax`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You must also pay regular federal income tax on any earnings you take out of your Rhode Island LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You only pay federal income tax on your LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Employee and Employer Taxes for Your Rhode Island LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you pay employees, there are some slightly different tax implications. Speak to your accountant to get clear guidance for your own unique situation.`,
		marginBottom: 32,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `Rhode Island LLC Employer Payroll Tax Withholding`,
					answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
				},
				{
					question: `Employer Federal Tax Withholding for Your Rhode Island LLC`,
					answer: `You may also choose to withhold federal income tax on the wages you pay to employees. Speak to your accountant for more information.`,
				},
				{
					question: `Employees May Need to File Tax Returns`,
					answer: `Regardless of whether you withhold federal income tax, your employees may need to file their own tax returns.`,
				},
				{
					question: `Rhode Island LLC Employee Insurance and Other Requirements`,
					answer2: [
						{
							type: `paragraph`,
							content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
						},
						{
							type: `arrow-links`,
							content: [
								{
									styles: { marginTop: `24px` },
									text: `Get more requirements from the Rhode Island Department of Labor and Regulation website.`,
									url: `http://www.dlt.state.ri.us/`,
								},
							],
						},
					],
				},
				{
					question: `Other Taxes and Duties for Your Rhode Island LLC`,
					answer: `Depending on the industry you are in, your Rhode Island LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
				},
				{
					question: `Estimated Taxes for Your Rhode Island LLC`,
					answer2: [
						{
							type: `paragraph`,
							content: `Most Rhode Island LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
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
								`Rhode Island state tax`,
							],
						},
						{
							type: `paragraph`,
							content: `Most Rhode Island LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
						},
					],
				},
			],
		},
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `FAQs on Rhode Island LLC Business Taxes`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `Does Rhode Island Have Sales Tax?`,
					answer: `Yes. Rhode Island does have a sales tax, which may vary among cities and counties. You can find more information above.`,
				},
				{
					question: `Does Rhode Island Have a State Tax?`,
					answer: `Yes. Rhode Island does have a general state income tax. You can find more information above.`,
				},
				{
					question: `Do I Need to Pay Estimated Taxes?`,
					answer: `Yes. In most cases, you must pay estimated taxes on your Rhode Island tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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
