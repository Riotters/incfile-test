import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
	header: `Why Form a Limited Liability Company (LLC)?`,
	text: `$0 + State Fee & 1st Year FREE Registered Agent`,
	buttons: [
		{
			text: `See detailed pricing`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=KS`,
		},
	],
};

export const howToGuide = [
	{
		type: `header`,
		content: `How to Start a Kansas LLC`,
		size: 1,
		template: 2,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `Kansas is named after a Native American tribe and is located in the Midwestern U.S. It is one of the most productive agricultural states in America.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If you want to start your own business in Kansas, one of the best ways to do so is by forming a Kansas LLC. Limited Liability Companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. Kansas LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Briefly, the benefits of starting a Kansas LLC include:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Separating and limiting your personal liability from your business liability and debts`,
				`Quick and simple filing, management, compliance, regulation and administration of your Kansas LLC`,
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
		marginBottom: 16,
	},
	{
		type: `header`,
		content: `Form an Kansas LLC in Six Quick Steps`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `We’ve got lots of useful information on starting a business in KS. On this page, you’ll find the basic steps of how to form an Kansas LLC, with more in-depth content throughout the rest of our guide.`,
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
					question: `STEP 2: Choose a Unique Business Name for Your Kansas LLC`,
					answer: `<p>You will need a distinctive and original name for your LLC that’s not used by any other business in Kansas. To find out if another company is using your chosen business name, carry out a business entity name search on the KS Secretary of State website.</p></br>
                   <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to naming your Kansas LLC.</p></br>
                   <a href="/kansas-llc/how-to-name-your-llc/"> Learn about Kansas LLC Business Naming Rules. </a>`,
				},
				{
					question: `STEP 3: Provide an Official Address for Your KS LLC`,
					answer: `Every Kansas LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address must be inside the state of Kansas, but it cannot be a P.O. Box. You can also use a Virtual Mailbox service if you do not have a physical address.`,
				},
				{
					question: `STEP 4: Assign a Kansas Registered Agent`,
					answer: `<p>Every Kansas LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Kansas Secretary of State.</p></br>
          <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your Registered Agent must have a physical street address in Kansas and must be present to receive important documents for your company during business hours.</p></br>
          
          <p>At Incfile, all of our packages include a Kansas Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
          <a href="/kansas-llc/registered-agents-kansas-llc/">Learn more about Kansas Registered Agents.</a>`,
				},
				{
					question: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
					answer: `You will need an EIN to identify your business with the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Kansas LLC business formation process.`,
				},
				{
					question: `STEP 6: File Articles of Organization With the Kansas Secretary of State`,
					answer: `<p> Once you've gathered all the information for your LLC, you’ll need to file a formal document with the KS Secretary of State. This document is known as your “Articles of Organization,” and filing the document creates your Kansas LLC. Here’s what is typically included:</p></br>
                   <ul>
                   <li> Your business name and address </li>
                   <li> Details of your Registered Agent </li>
                   <li> Tax closing month </li>
                   </ul></br>
                   <p>You can file your Kansas Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Kansas, but you only need to file your Articles of Organization once.</p></br>
                   <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=KS"> Form your LLC now </a>`,
				},
			],
		},
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Review Information From the Kansas Secretary of State`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The KS Secretary of State has plenty of information on forming and running a business in Kansas. Check out additional resources below. These are all the basic steps for forming an LLC in Kansas. You’ll find other useful information below.`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`<a href="https://sos.kansas.gov/business/" target="_blank" rel="noopener noreferrer">Kansas Secretary of State for forming and running your KS LLC</a>`,
				`<a href="https://www.dol.ks.gov/" target="_blank" rel="noopener noreferrer">Kansas Department of Labor for KS employers and hiring</a>`,
				`<a href="https://www.ksrevenue.org/business.html" target="_blank" rel="noopener noreferrer">Kansas Department of Revenue for KS taxes</a>`,
			],
		},
		marginBottom: 32,
		color: color.yellow3,
	},
	{
		type: `header`,
		content: `Special Types of Kansas LLCs`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `A regular Kansas LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Form a Kansas Series LLC`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `In Kansas, you also have the option to set up a “Series LLC” — these are specialized LLCs designed to allow you to manage multiple separate LLCs under one master, umbrella LLC. These can be very useful if you don’t want to set up a separate Kansas LLC for every individual business you run.`,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `<a href="https://www.incfile.com/blog/post/series-llc-why-need-one/">Decide if a Kansas Series LLC is right for your new business.</a>`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Form a Professional Kansas LLC`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `In Kansas certain professions can form “Professional LLCs.” These are companies providing defined, professional services. Kansas does not state the specific professions that can form professional LLCs.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Form a Foreign LLC in Kansas`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `<p>If your business is already operating in another state and expanding to Kansas, you’ll need to form a foreign LLC.</p></br>
              <p><a href="/kansas-llc/form-filling-permit-requirements/">More information on Kansas filing and licensing requirements here.</a></p>`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `What to Do After Forming Your Kansas LLC`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Want to know your next steps after creating a new LLC in Kansas? We’ve got you covered. <a href="/after-forming-llc/">Here’s our guide</a> to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Detailed Information for Your Kansas LLC`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You’ll find plenty more insight and guidance on the other pages of this guide, including`,
		marginBottom: 32,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Naming Your Kansas LLC`,
			url: `/kansas-llc/how-to-name-your-llc/`,
		},
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to search the Kansas business registry of the Division of Corporations and find the right name. Includes information on naming rules, fictitious names, reserving a Kansas LLC name and more.`,
		marginBottom: 32,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Kansas Registered Agents for LLCs`,
			url: `/kansas-llc/registered-agents-kansas-llc/`,
		},
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to appoint a Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for Kansas Registered Agents.`,
		marginBottom: 32,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Fees and Requirements for Kansas LLCs`,
			url: `/kansas-llc/form-filling-permit-requirements/`,
		},
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Kansas rules. Includes details of Employer Identification Numbers (EINs), Kansas and federal business licenses, annual reports and more.`,
		marginBottom: 32,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Federal, State, Sales and Other Taxes for Your Kansas LLC`,
			url: `/kansas-llc/business-taxes/`,
		},
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to understand the various taxes you will need to pay to the federal and Kansas government. Includes details of federal taxes like income and self-employment, and Kansas taxes like sales tax and income tax.`,
		marginBottom: 32,
	},
];

export const namingYourBusiness = [
	{
		type: `header`,
		content: `Search Your Business Name With the Kansas Secretary of State and Register Your LLC`,
		size: 2,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `We’re here to help you find the right business name for your Kansas LLC. From searching for a business name with the KS Secretary of State to understanding naming rules or creating a “Doing Business As” name to register your entity, you’re in the right place.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Kansas Business Name LLC Lookup`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You should start naming your business by completing a “Kansas business entity search” with the secretary of state. They have a helpful tool on their website that lets you search the register of KS LLCs and corporations to see if someone already has your desired business name. Just visit the Business Search Tool on the Kansas SOS website and enter the KS business name you want to search for.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If the business name is already used by an LLC or Corporation in Kansas, that means it’s not available and you won’t be able to register it. Try searching for a different business name instead.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The Kansas Secretary of State search tool lets you enter details and search for a KS LLC by the following fields:`,
		marginBottom: 8,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`By business entity name.`,
				`By business entity ID number`,
				`By a keyword`,
				`By a Resident Agent's full name or keyword`,
			],
		},
		marginBottom: 32,
		color: color.blue3,
	},
	{
		type: `header`,
		content: `Kansas SOS Rules on Your LLC Business Name`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Kansas Secretary of State naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in KS.`,
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
		content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules, as they will influence the name you choose for your Kansas LLC.`,
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
		content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Kansas. This is why you should check business name availability on the KS SOS website.`,
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
		content: `It’s not enough for your LLC name to be unique; it also cannot be similar to the name of another corporation or LLC in Kansas. For example, you cannot use the following factors to say your name is different from the name of another business:`,
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
				`Are very similar to the name of a federal or AK agency or organization (e.g. FBI, FDA, Kansas Department of Revenue, Kansas Police, Treasury, etc)`,
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
		content: `Specific Rules for Naming LLCs in Kansas`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `In addition to the general rules listed above, the Kansas Secretary of State has some specific business naming rules for your LLC. You will need to follow these rules if you want to name your AK business appropriately.`,
		marginBottom: 32,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`You cannot use the following words as qualifiers in the overall Kansas LLC business name: "companies," "corporations," "incorporation," "unlimited," “limited partnerships."`,
				`Certain restricted words may need additional paperwork if you want to use them in your business name.`,
			],
		},
		marginBottom: 48,
		color: color.green3,
	},
	{
		type: `header`,
		content: `Kansas LLC Fictitious Names`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `According to the secretary of state website, the state of Kansas does not register DBA, Assumed Name, Trade Name, Fictitious Name or Sole Proprietorships.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's assumed bussiness name service`,
			url: `/fictitious-business-or-trade-name/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Business Name Registration for Your Kansas LLC`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Once you’ve searched for your Kansas business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your KS LLC name. There are a couple of ways to do this.`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`If you don’t want to form your LLC right now, you can reserve the business name`,
				`If you’re ready to start your Kansas LLC, you can register it through Incfile`,
			],
		},
		marginBottom: 32,
		color: color.purple3,
	},
	{
		type: `header`,
		content: `Reserve Your LLC Name With the Kansas Secretary of State`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If you don’t want to form your business immediately, you can reserve a name with the Kansas Secretary of State. You do not need to reserve a name if you are forming your business right away. Find the
     Kansas SOS LLC name reservation form here.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Form Your Kansas LLC With Incfile`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Now that you’ve chosen the perfect name, you can formally register your Kansas business through Incfile. You will need to gather some more information, but we’ll guide you through the entire process. We make it fast and simple to start your Kansas LLC.`,
		marginBottom: 32,
	},
	{
		type: `button`,
		content: {
			text: `Register your Kansas LLC now.`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=KS`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `FAQs on Naming Your Kansas LLC`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You might find the following answers useful.
    `,
		marginBottom: 32,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `How Do I Search for My Kansas LLC Business Name?`,
					answer: `Just go to the <a href="https://www.kansas.gov/bess/flow/main;jsessionid=75A489D3F7DC1B9EB12A5554F21768D4.aptcs03-inst0?execution=e1s1" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Kansas Secretary of State, which will tell you if there are any KS corporations or LLCs with that name.`,
				},
				{
					question: `Are There Any Rules on Naming My Kansas LLC?`,
					answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Kansas). We’ve detailed these rules above.`,
				},
				{
					question: `Can I Reserve a Name for My Kansas LLC?`,
					answer: `Yes. The Kansas Secretary of State allows you to reserve a name if you don’t want to start your business immediately. If you are ready to start your business now, you do not need to reserve a name`,
				},
			],
		},
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Useful Resources for Naming Your Kansas LLC`,
		size: 4,
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
		content: `You must be careful that your Kansas LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
		content: `Find the Perfect Name for Your Kansas LLC`,
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
		type: `arrow-link`,
		content: {
			text: `Incfile guide to choosing a business name`,
			url: `https://www.incfile.com/blog/post/llc-name-search-50-states/`,
		},
		marginBottom: 32,
	},
];

export const registeredAgent = [
	{
		type: `header`,
		content: `Get a Kansas LLC Resident Agent in Place`,
		size: 2,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `Every business entity formed in Kansas needs to formally appoint a person or business to act as a Registered Agent. In Kansas, Registered Agents are known as Resident Agents, and we'll use the words interchangeably here. Your Kansas Resident Agent provides various services to KS LLCs, including the acceptance of formal documents and correspondence from the Kansas Secretary of State.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Your LLC must have a Kansas Resident Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing KS Resident Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Information on the Kansas Secretary of State and KS Resident Agent Services`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Here's some important information from the Kansas Secretary of State on KS Resident Agent services.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `“A resident agent is an individual or another entity that has the responsibility for accepting service of process (lawsuits) on behalf of a business entity. A resident agent can be an individual or other entities as provided in Kansas law. Limited Liability Companies (domestic and professional) are allowed to have the following entity types as their agent: a Kansas or foreign corporation, a Kansas or foreign limited liability company, a Kansas or foreign limited partnership, a Kansas or foreign business trust or the entity itself with a Kansas address.”`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Kansas LLC Resident Agent Service Rules`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `There are certain rules that you must follow when you’re appointing a Kansas Registered Agent service for your business. They are:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`If the Registered Agent is a person, they must reside in Kansas.`,
				`If the Registered Agent is a business, they must be able to conduct business in Kansas.`,
				`The Registered Agent must have a physical street address in Kansas, not a P.O. Box.`,
				`The Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
			],
		},
		marginBottom: 32,
		color: color.yellow3,
	},
	{
		type: `text`,
		content: `Note that the Registered Agent address does not need to be the same as your Kansas LLC business address.`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `What to Expect From a Kansas Resident Agent Service`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `What can you expect from your Kansas Registered Agent? Their main function is to accept official documents and correspondence. This includes:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Correspondence from the Kansas Secretary of State, like a notice to file reports and other forms`,
				`Service of process documents (for example, if your Kansas LLC has legal proceedings issued against it)`,
				`Official Kansas and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
			],
		},
		marginBottom: 24,
		color: color.blue3,
		curve: true,
		curveColor: color.blue1,
	},
	{
		type: `header`,
		content: `A Complete Kansas Resident Agent Service From Incfile`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `If you have an LLC that’s incorporated in Kansas and you need a Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Kansas business—plus, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `We are authorized to conduct business in Kansas and can legally act as your Registered Agent. We also have an address in Kansas, which is required to operate as a Registered Agent. Here's what the Infile Kansas Resident Agent service provides for your KS LLC. Here’s what the Incfile Kansas Registered Agent service provides for your LLC:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`An always-available Kansas Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
				`A digital dashboard where you can access, store and retrieve any information we’ve received for your Kansas business`,
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
			text: `More About Registered Agent Service`,
			url: `/manage-your-company/registered-agent/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Appointing a Registered Agent Service for Your Kansas LLC`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `You can appoint a Registered Agent when you first incorporate your Kansas LLC or at any point after that. Here’s how to go about it.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Assign Your Kansas Registered Agent When You Form Your LLC`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Your business needs to have a Kansas Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
		marginBottom: 16,
	},
	{
		type: `header`,
		content: `File Articles of Organization With the Kansas Secretary of State`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the KS Secretary of State to formally create your business.`,
		marginBottom: 24,
	},
	{
		type: `header`,
		content: `Incorporate Through Incfile and Get a Free Kansas Resident Agent`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you've provided. Additionally, we give you a free Kansas Resident Agent Service for the first year, and we'll include details of your KS Resident Agent in the form that we file.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Incorporate your business through Incfile for a free year of Kansas Resident Agent services.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incorporate your business through Incfile`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=KS`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Assign a Different Kansas Resident Agent Service After Incorporation`,
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
		content: `Choose a Registered Agent Service and File Form RGO 53, Change of Resident Agent Name and/or Registered Office Address by Resident Agent`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Once you've chosen a new Kansas Resident Agent, you can complete form RGO 53, Change of Resident Agent Name and/or Registered Office Address by Resident Agent that's available on the KS Secretary of State website. Once you've filled it out, send it to the Secretary of State so they can update your records.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Sign Up for Incfile's Kansas Resident Agent Service and We'll File the Change on Your Behalf`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `When you choose to use our KS Resident Agent service, we take care of all the form filling and filing for you. We'll collect important information about your business, complete form RGO 53, Change of Resident Agent Name and/or Registered Office Address by Resident Agent on your behalf and send it to the Kansas Secretary of State. We'll let you know once we officially become your Registered Agent. Note that the Kansas SOS may charge a nominal fee to assign or change a Registered Agent, which will be passed on to you.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Order Incfile's Kansas registered agent service`,
			url: `/manage-your-company/registered-agent/`,
		},
		theme: `primary48`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `KS Resident Agent Search`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `In some situations, you might want to know the name of the Registered Agent that represents another Kansas LLC. If you do, you can search the business database of the Kansas Secretary of State, as these will often provide details of a specific business's Registered Agent.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If the KS Resident Agent isn't available from the searchable business registry, contact the Kansas Secretary of State requesting the information.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Possible Outcomes of Not Assigning a Registered Agent for Your Kansas LLC`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `What happens if you choose not to assign or provide details of a Registered Agent to the Kansas Secretary of State? There are several possible ramifications, including:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
				`<b>Falling out of good standing with the Kansas Secretary of State:</b> If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
				`<b>Losing your status as a Kansas LLC:</b> A Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your LLC may be dissolved.`,
			],
		},
		marginBottom: 48,
		color: color.blue2,
	},
	{
		type: `header`,
		content: `You Can Appoint Yourself as Your Own Kansas Registered Agent`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `If you have an address in Kansas, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`The Registered Agent must have a physical street address in Kansas. If you’re forming an LLC outside KS, you will need to use an in-state Registered Agent.`,
				`You always need to have someone on hand during business hours at the Kansas address to sign for important documents.`,
				`The Registered Agent’s name and address are part of the public record and available through the Kansas Secretary of State's website. If you prefer your name and address aren’t published, you should choose a Registered Agent service.`,
				`If you change your Kansas business address or move out of state, you would need to file additional documentation with the KS Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
			],
		},
		marginBottom: 16,
		color: color.green3,
	},
	{
		type: `text`,
		content: `There are more considerations, but these should help with your decision to use a Kansas Resident Agent service.`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `FAQs About Kansas Registered Agents`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `Do I Need to Appoint a Kansas Registered Agent?`,
					answer: `Yes. All KS LLCs are required to have a Registered Agent. This is mandated by the Kansas Secretary of State.`,
				},
				{
					question: `When Can I Assign a Kansas Registered Agent Service?`,
					answer: `You can either do it when you incorporate your Kansas business through paperwork filed with the KS Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.
          `,
				},
				{
					question: `Can I Be My Own Registered Agent in Kansas?`,
					answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the Kansas Secretary of State.`,
				},
				{
					question: `Does My Registered Agent Need to Have an Address in Kansas?`,
					answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
				},
			],
		},
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Useful Resources for Kansas Registered Agent Services`,
		size: 3,
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
				`<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/">The Main Functions of a Kansas Registered Agent</a>`,
				`<a href="/manage-your-company/change-of-registered-agent/">Changing Your Kansas Registered Agent</a>`,
				`<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/">What a Kansas Registered Agent Does</a>`,
			],
		},
		marginBottom: 48,
		color: color.babyblue3,
	},
];
export const feesAndRequirments = [
	{
		type: `header`,
		content: `Kansas Fees and Filing Requirements for Your LLC`,
		size: 2,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `Some types of businesses have different requirements in Kansas, including related fees and costs. Your KS LLC needs to pay various fees to the federal government, Kansas government and other agencies. Some of these fees are levied by the Kansas Secretary of State or statewide organizations, while others come from the federal government. On this page, we’ve summarized the most common fees and requirements.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Note that Kansas business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Kansas LLC Incorporation Filing and Fees`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `When you first incorporate your business in Kansas, you’ll need to file an LLC with the KS Secretary of State and pay a Kansas filing fee. Here are the current fees and filing times for Kansas:`,
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
		content: `When you form your KS LLC through Incfile, we automatically charge you this fee and forward it to the Kansas Secretary of State when we file your incorporation paperwork.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here, including expedited fees for Kansas.</a>`,
		marginBottom: 24,
	},
	{
		type: `button`,
		content: {
			text: `Incorporate your Kansas LLC through Incfile today`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=KS`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Getting an Employer Identification Number for Your KS LLC`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `Every Kansas LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Get and EIN for your Kansas LLC through Incfile`,
			url: `/manage-your-company/tax-id-ein/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Foreign Qualification to Operate in a State Outside Kansas`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `If you’re expanding your Kansas LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Kansas. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
		content: `Annual Reporting and Fees for Your Kansas LLC`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `Most states need to file an annual (or other periodic) report with their department of state. When you file your KS LLC annual report, you may need to pay a fee. Here are the annual filing requirements for Kansas:`,
		marginBottom: 48,
	},
	{
		type: `dynamic_filing_requirement`,
	},
	{
		type: `text`,
		content: `Incfile can also complete and file your Kansas Annual Report on your behalf.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Kansas annual report filing service`,
			url: `/manage-your-company/annual-report/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Kansas Business Permits and Licenses`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `Your Kansas LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by Kansas, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges. Permits and licenses vary based on:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`The industry your Kansas LLC operates in (e.g., restaurants will need health permits)`,
				`The location of your Kansas LLC (state, county or city) (e.g., a license to conduct business from the city of Topeka)`,
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
		content: `Kansas LLCs — The Business License Research Package`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Our <a href="/business-license-research-package/">Business License Research Package</a> tells you about all of the licenses and permits you will need for your Kansas LLC. It includes:`,
		marginBottom: 8,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`A complete report on all the licenses, permits and tax registrations your Kansas LLC will need`,
				`The application forms you will need to file with the Kansas, regional and federal licensing authorities`,
			],
		},
		marginBottom: 8,
		color: color.yellow3,
	},
	{
		type: `text`,
		content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Kansas and local governments.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Create an Operating Agreement for Your Kansas LLC`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `An <a href="/research-topics/llc-info/the-llc-operating-agreement/"> Operating agreement</a>
            is a business document that covers how the business will be run, how managers and members are chosen, rights and duties of members and several other key areas.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Kansas LLCs aren’t required to have an Operating Agreement, but they are extremely useful for several reasons. If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Kansas business. You can choose to make changes to the template based on your unique requirements.`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Ad Hoc Kansas Fees or Requirements for Your KS LLC`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `There are several other fees or requirements that you may need to meet during the life of your Kansas LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Change the Kansas Resident Agent for Your KS LLC`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Your Kansas LLC needs a Registered Agent. You need to appoint one when you first incorporate your LLC. You can also switch to a new KS Resident Agent later. Incfile provides a complete Kansas Resident Agent service.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Kansas registered agent service`,
			url: `/manage-your-company/registered-agent/`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Reserve a Name`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If you don’t want to form your KS business right away, you can reserve a name with the Kansas Secretary of State. You will need to pay a small fee to do this.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Amend Certain Facts About Your Kansas LLC`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Your business formation documents state certain facts about your Kansas business when it was originally formed. Over time, these facts might change — if they do, you need to file a “Certificate of Amendment” with the Kansas Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf. Areas you might want to file Kansas Articles of Amendment for include:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Adding, removing or changing a Kansas LLC member or manager`,
				`Changing the business address of your LLC`,
				`Altering the stated business activities of your Kansas LLC`,
			],
		},
		marginBottom: 16,
		color: color.yellow3,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Kansas articles of amendment service`,
			url: `/manage-your-company/amendment/`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Get a Certificate of Good Standing`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Some organizations will request that you prove your Kansas LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Kansas Secretary of State. Incfile can obtain a certificate on your behalf.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Kansas certificate of good standing service`,
			url: `/manage-your-company/certificate-of-good-standing/`,
		},
		theme: `primary48`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The fees listed above detail all the charges that a standard KS LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Of course, your Kansas LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for KS LLCs.`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `FAQs About Kansas LLC fees`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `What Happens to the State Fees That I Am Charged When Forming My Kansas LLC?`,
					answer: `We charge you for this fee at cost and then pay the fee to the secretary of state on your behalf when forming your Kansas business.`,
				},
				{
					question: `Do I Need to Pay an Annual Report Fee Every Year?`,
					answer: `Yes. Most states, including AK, require you to file a report for your LLC every year. You can find out more on the <a href="/compliance-filing-requirement/">compliance page for your state.</a>`,
				},
				{
					question: `Who Will I Need to Get Business Licenses and Permits From for My Kansas LLC?`,
					answer: `<p>It depends on various factors including:</p></br>
                  <ul>
                  <li>The type of business you run</li>
                  <li>Where you are located</li>
                  <li>Governing organizations in your industry</li>
                  <li>Federal, state and local regulations</li>
                  </ul></br>
                  That’s why our <a href="/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Kansas LLC needs to be compliant.`,
				},
			],
		},
		marginBottom: 48,
	},
];

export const businessTaxes = [
	{
		type: `header`,
		content: `Business Taxes Payable by Your Kansas LLC`,
		size: 2,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `There are a wide variety of business taxes that your Kansas LLC will need to pay. These include tax that’s payable to the Kansas government, like Kansas sales taxes and Kansas state tax. You will also need to pay federal, self-employment and possibly payroll tax to the IRS.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Need help? Incfile provides a complete Business Tax Filing service.<a href="/business-accounting/"> Learn more.</a>.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `How Your Kansas LLC Will Be Taxed`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `The profits of a Kansas LLC are not taxed at the business level, like those of C Corporations. Instead, tax for a Kansas LLC works as follows:`,
		marginBottom: 16,
	},
	{
		type: `numeric-list`,
		content: [
			{
				text: `Kansas LLC owners pay self-employment tax on business profits`,
			},
			{
				text: `Kansas LLC owners pay KS state tax on any profits, less state allowances or deductions`,
			},
			{
				text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
			},
			{
				text: `Some KS LLCs pay Kansas sales tax on products`,
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
		content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Kansas personal tax returns, and that’s where you will pay those taxes.
    `,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Kansas Business Taxes Payable to the KS Government`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `There are two main types of tax that you will pay to the Kansas Department of Revenue: Kansas state income tax and Kansas state sales tax.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Kansas State Tax on Your LLC Earnings`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `As a Kansas business owner, you will need to pay KS state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay Kansas income tax. You will be taxed at the standard rates for Kansas state taxes, and you will also get to apply regular allowances and deductions.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Any salaried employees will also need to pay personal Kansas state taxes. Here are the Kansas state tax rates if you’re filing single:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`2.7 percent on the first $15,000 of taxable income`,
				`4.6 percent on taxable income of $15,001 and more`,
			],
		},
		marginBottom: 16,
		color: color.blue3,
		curve: true,
		curveColor: color.red1,
	},
	{
		type: `text`,
		content: `If you’re married filing jointly, double the dollar amounts above.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Get more details on the Kansas state tax on on the  <a href="https://www.ksrevenue.org/personal.html" target="_blank" rel="noopener noreferrer"> KS SOS website.</a>.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Your Kansas LLC and KS Sales Taxes`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the KS Department of Revenue. Kansas sales tax is collected at the point of purchase. Kansas sales tax rates do vary depending on the region, county or city where you are located. You will typically need to collect Kansas sales tax on:`,
		marginBottom: 32,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`,
				`Certain services that your Kansas business might provide.`,
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
		content: `Get more details on sales tax in Kansas from the <a href="https://www.ksrevenue.org/faqs-salestax.html" target="_blank" rel="noopener noreferrer"> KS SOS website.</a>`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Sales Tax Rates for Your Kansas LLC`,
		size: 3,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that. Here are the sales tax rates for the major cities in Kansas:
    `,
		marginBottom: 32,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Wichita, KS sales tax rate is 7.5 percent`,
				`Overland Park, KS sales tax rate is 9.6 percent`,
				`Kansas City, KS sales tax rate is 9.125 percent`,
				`Olathe, KS sales tax rate is 9.475 percent`,
			],
		},
		marginBottom: 16,
		color: color.green3,
		curve: true,
		curveColor: color.red1,
	},
	{
		type: `header`,
		content: `Federal Taxes for Your Kansas LLC: Self-Employment and Income Taxes`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `There are a couple different federal taxes that every LLC will need to pay, including Kansas LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Kansas LLC Federal Self-Employment Tax`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `All Kansas LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Kansas business. The current self-employment tax rate is 15.3 percent.`,
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
				`On profits of $40,000, you would pay self-employment tax of $6,120.`,
				`On profits of $70,000, you would pay self-employment tax of $10,710.`,
				`On profits of $100,000, you would pay self-employment tax of $15,300.`,
				`On profits of $160,000, you would pay self-employment tax of $24,480.`,
			],
		},
		marginBottom: 48,
		color: color.babyblue3,
		curve: true,
		curveColor: color.purple3,
	},
	{
		type: `header`,
		content: `Pay Less Self-Employment Tax by Treating Your Kansas LLC as an S Corporation`,
		size: 4,
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
		content: `Speak to your accountant for more information on reducing your Kansas LLC self-employment tax through an S Corporation tax election.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Employee and Employer Taxes for Your Kansas LLC`,
		size: 3,
		marginBottom: 24,
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
					question: `Employer Payroll Tax Withholding for Your Kansas LLC`,
					answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
				},
				{
					question: `Kansas LLC Federal and State Tax Withholding`,
					answer: `You may also choose to withhold federal and Kansas state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
				},
				{
					question: `Employees May Need to File Tax Returns`,
					answer: `Regardless of whether you withhold federal and Kansas state income tax, your employees may need to file their own tax returns.`,
				},
				{
					question: `Kansas LLC Employee Insurance and Other Requirements`,
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
									text: `Get more requirements from the Kansas Department of Labor website.`,
									url: `https://www.dol.ks.gov/KansasEmployer.aspx`,
								},
							],
						},
					],
				},
				{
					question: `Other Taxes and Duties for Your Kansas LLC`,
					answer: `Depending on the industry you are in, your Kansas LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
				},
				{
					question: `Estimated Taxes for Your Kansas LLC`,
					answer2: [
						{
							type: `paragraph`,
							content: `Most Kansas LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
						},
						{
							type: `list-dot-without-bg`,
							color: color.orange3,
							header: `The most common types of estimated taxes are:`,
							content: [
								`Federal income tax`,
								`Federal self-employment tax`,
								`Kansas state tax`,
							],
						},
						{
							type: `paragraph`,
							content: `Most Kansas LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
						},
					],
				},
			],
		},
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `FAQs on Kansas LLC Business Taxes`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `Does Kansas Have Sales Tax?`,
					answer: `Yes. Kansas does have a sales tax, which may vary among cities and counties. You can find more information above.`,
				},
				{
					question: `Does Kansas Have a State Tax?`,
					answer: `Yes. Kansas does have a general state income tax. You can find more information above.`,
				},
				{
					question: `What Is the Sales Tax Rate in Kansas?`,
					answer: `We have listed common sales tax rates in Kansas cities above.`,
				},
				{
					question: `Do I Need to Pay Estimated Taxes?`,
					answer: `Yes. In most cases you must pay estimated taxes on your Kansas tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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
