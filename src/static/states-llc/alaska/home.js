import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
	header: `Why Form a Limited Liability Company (LLC)?`,
	text: `$0 + State Fee & 1st Year FREE Registered Agent`,
	buttons: [
		{
			text: `See detailed pricing`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AK`,
		},
	],
};

export const howToGuide = [
	{
		type: `header`,
		content: `How to Start an LLC in Alaska`,
		size: 1,
		template: 2,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `Located in the far northwest of the U.S., Alaska is the largest state in the country, but one of the most sparsely populated. The main industries in Alaska include natural resources, agriculture, shipping, transportation and tourism. Alaska does not have a statewide income tax and no centralized sales tax, although many areas do impose local sales taxes.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If you want to start your own business in Alaska, one of the best ways to do so is by forming an Alaska LLC. Limited liability companies (LLCs) are a business entity designed for startups and small- and medium-sized businesses. Alaska LLCs give you many of the protections and advantages of larger corporations without all the rules, regulations and compliance issues common to larger business entities.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Briefly, the benefits of starting a Alaska LLC include:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Separating and limiting your personal liability from your business liability and debts`,
				`Quick and simple filing, management, compliance, regulation and administration of your Alaska LLC`,
				`Easy tax filing and potential advantages for your tax treatment`,
			],
		},
		marginBottom: 24,
		color: color.green3,
		curve: true,
		curveColor: color.red1,
	},
	{
		type: `text`,
		content: `Learn more about the <a href="/limited-liability-company/">benefits of the LLC business structure here</a>.`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Form an Alaska LLC in Six Quick Steps`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `We’ve got lots of useful information on starting a business in AK. On this page, you’ll find the basic steps of how to form an Alaska LLC, with more in-depth content throughout the rest of our guide.`,
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
					question: `STEP 2: Choose a Unique Business Name for Your Alaska LLC`,
					answer: `<p>You will need a distinctive and original name for your LLC that’s not used by any other business in Alaska. To find out if another company is using your chosen business name, carry out a business entity name search on the Alaska Division of Corporations website.</p></br>
                   <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to naming your Alaska LLC.</p></br>
                   <a href="/alaska-llc/how-to-name-your-llc/"> Learn about Alaska LLC Business Naming Rules. </a>`,
				},
				{
					question: `STEP 3: Provide an Official Address for Your Alaska LLC`,
					answer: `Every Alaska LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address must be inside the state of Alaska, but it cannot be a P.O. Box.`,
				},
				{
					question: `STEP 4: Assign a Alaska Registered Agent`,
					answer: `<p>Every Alaska LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Alaska Division of Corporations.</p></br>

          <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your Registered Agent must have a physical street address in Alaska and must be present to receive important documents for your company during business hours.</p></br>
          
          <p>At Incfile, all of our packages include a Alaska Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
          <a href="/alaska-llc/registered-agents-alaska-llc/">Learn more about Alaska Registered Agents.</a>`,
				},
				{
					question: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
					answer: `You will need an EIN to identify your business with the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Alaska LLC business formation process.`,
				},
				{
					question: `STEP 6: File Articles of Organization with the Alaska Division of Corporations`,
					answer: `<p> Once you've gathered all the information for your LLC, you’ll need to file a formal document with the Alaska Division of Corporations. This document is known as your “Articles of Organization,” and filing the document creates your Alaska LLC. Here’s what is typically included:</p></br>
                   <ul>
                   <li> Your business name and address </li>
                   <li> Details of your Registered Agent </li>
                   <li> Purpose of your business </li>
                   <li> Name of the incorporator </li>
                   </ul></br>
                   <p>You can file your Alaska Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Alaska, but you only need to file your Articles of Organization once.</p></br>
                   <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AK/"> Form your LLC now </a>`,
				},
			],
		},
		marginBottom: 56,
	},
	{
		type: `header`,
		content: `Review Information from the Alaska Division of Corporations`,
		size: 3,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `The Division of Corporations has plenty of information on forming and running a business in Alaska. Check out additional resources below.`,
		marginBottom: 48,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`<a href="https://www.commerce.alaska.gov/web/cbpl/Corporations.aspx" target="_blank" rel="noopener noreferrer">Alaska Division of Corporations for forming and running your LLC</a>`,
				`<a href="https://labor.alaska.gov/" target="_blank" rel="noopener noreferrer">Alaska Department of Labor for employers and hiring</a>`,
				`<a href="http://tax.alaska.gov/" target="_blank" rel="noopener noreferrer">Alaska Department of Revenue for AK taxes</a>`,
			],
		},
		marginBottom: 48,
		color: color.yellow3,
	},
	{
		type: `header`,
		content: `Special Types of Alaska LLCs`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `A regular Alaska LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Professional Alaska LLCs`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Some states allow certain occupations to form “professional LLCs.” These types of businesses typically have special requirements and licensing. Alaska does not recognize or allow for the formation of professional LLCs.`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Form a Foreign LLC in Alaska`,
		size: 3,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `<p>If your business is already operating in another state and expanding to Alaska, you’ll need to form a foreign LLC.</p></br>
              <p><a href="/alaska-llc/form-filling-permit-requirements/">More information on Alaska filing and licensing requirements here.</a></p>`,
		marginBottom: 56,
	},
	{
		type: `header`,
		content: `What to Do After Forming Your Alaska LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Want to know your next steps after creating a new LLC in Alaska? We’ve got you covered. <a href="/after-forming-llc/">Here’s our guide</a> to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Other Information in This Guide`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You’ll find plenty more insight and guidance on the other pages of this guide, including:`,
		marginBottom: 32,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Naming Your Alaska LLC`,
			url: `/alaska-llc/how-to-name-your-llc/`,
		},
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to search the Alaska business registry of the Division of Corporations and find the right name. Includes information on naming rules, fictitious names, reserving a Alaska LLC name and more.`,
		marginBottom: 32,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Alaska Registered Agents for LLCs`,
			url: `/alaska-llc/registered-agents-alaska-llc/`,
		},
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to appoint a Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching forAlaska Registered Agents.`,
		marginBottom: 32,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Fees and Requirements for Alaska LLCs`,
			url: `/alaska-llc/form-filling-permit-requirements/`,
		},
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Alaska rules. Includes details of Employer Identification Numbers (EINs), Alaska and federal business licenses, annual reports and more.`,
		marginBottom: 32,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Federal, State, Sales and Other Taxes for Your Alaska LLC`,
			url: `/alaska-llc/business-taxes/`,
		},
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `How to understand the various taxes you will need to pay to the federal and Alaska government. Includes details of federal taxes like income and self-employment, and Alaska taxes like sales tax and income tax.`,
		marginBottom: 32,
	},
];

export const namingYourBusiness = [
	{
		type: `header`,
		content: `Register Your LLC Name with the Alaska Division of Corporations`,
		size: 2,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `We’re here to help you find the right business name for your Alaska LLC. From searching for a business name with the Division of Corporations to understanding naming rules or creating a “Doing Business As” name to register your entity, you’re in the right place.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Alaska Business Search`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You need to check whether there’s already another Alaska LLC registered with your desired business name. That means searching the Alaska Division of Corporations website using their business name search tool. You can easily look up LLCs and corporations by name and other details.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If your chosen business name is already being used, that means you won’t be able to register it. Try searching for a different business name instead.`,
		marginBottom: 32,
	},
	{
		type: `arrow-link`,
		content: {
			text: `Alaska Division of Corporations business search tool`,
			url: `https://www.commerce.alaska.gov/cbp/main/search/entities`,
		},
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Alaska Division of Corporations Rules for Naming Your LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Alaska Division of Corporations naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in AK.`,
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
		content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules, as they will influence the name you choose for your Alaska LLC.`,
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
		content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Alaska. This is why you should check business name availability on the AK DOC website.`,
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
		content: `It’s not enough for your LLC name to be unique; it also cannot be similar to the name of another corporation or LLC in Alaska. For example, you cannot use the following factors to say your name is different from the name of another business:`,
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
				`Are very similar to the name of a federal or AK agency or organization (e.g., FBI, FDA, Alaska Department of Revenue, Alaska Police, Treasury, etc.)`,
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
		content: `Specific Rules for Naming LLCs in Alaska`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `In addition to the general rules listed above, the Alaska Division of Corporations has some specific business naming rules for your LLC. You will need to follow these rules if you want to name your AK business appropriately.`,
		marginBottom: 32,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`An unincorporated business may not use "incorporated" or "corporation" as part of its name, whereas an incorporated name must contain "corporation," "company," "incorporation," "limited" or an abbreviation. A business name may not imply that the organization is a governmental unit (e.g. a city, village or borough) unless they are a governmental unit.`,
				`Entity names that mislead regarding corporate purpose are not allowed. For example: An entity’s whose true purpose is clothing tailoring/design could not use the word “construction” in its name since the word “construction” misleads and implies the purpose of the entity is construction contracting.`,
				`A business name may not contain a word with professional licensing restrictions, such as “Engineer,” unless the business has the appropriate professional license. Vulgar names may be in violation of local law or other agency (e.g., banking) requirements.`,
			],
		},
		marginBottom: 40,
		color: color.green3,
	},
	{
		type: `arrow-link`,
		content: {
			text: `More on Alaska Division of Corporations business naming rules`,
			url: `https://www.commerce.alaska.gov/web/cbpl/BusinessLicensing/SelectaBusinessName.aspx `,
		},
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Alaska LLC Assumed Names and “Doing Business As” (DBA) Names`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You might choose to do business under a different name from your legal LLC name. In Alaska, doing business under a different name is known as a “Trade Name.” You might choose to use a different name from your AK formal LLC name for a variety of reasons.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `For example, your LLC might be called Alaska Potato Processing Holding Company LLC and you have a brand called Northwestern Kettle Chips. You should file an assumed business name to let the Alaska Division of Corporations know. In Alaska, you do that through the Cancellation or Amendment of Certificate of Assumed Business Name form, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's DBA name service`,
			url: `/fictitious-business-or-trade-name/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Business Name Registration for Your Alaska LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Once you’ve searched for your Alaska business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your AK LLC name. There are a couple of ways to do this.`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`If you don’t want to form your LLC right now, you can reserve the business name with the Alaska Division of Corporations. You will need to complete a Business Name Registration form and file it with the AK DOC. You do not need to reserve a name if you are forming your business right away.</br>
              <a href="https://www.commerce.alaska.gov/web/cbpl/Corporations/ReservingRegisteringBusinessName.aspx" target="_blank" rel="noopener noreferrer">Alaska DOC LLC name reservation form</a>`,
				`If you’re ready to start your LLC, you can formally file your Certificate of Formation with the Alaska DOC, or <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AK">let Incfile take care of it for you</a>.`,
			],
		},
		marginBottom: 40,
		color: color.purple3,
	},
	{
		type: `header`,
		content: `FAQs on Naming Your Alaska LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You might find the following answers useful.`,
		marginBottom: 16,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `How Do I Search for My Alaska LLC Business Name?`,
					answer: `Just go to the <a href="https://www.commerce.alaska.gov/cbp/main/search/entities" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Alaska Division of Corporations, which will tell you if there are any AK corporations or LLCs with that name.`,
				},
				{
					question: `Are There Any Rules on Naming My Alaska LLC?`,
					answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Alaska). We’ve detailed these rules above.`,
				},
				{
					question: `Can I Do Business Under a Different Name Than My LLC Name in Alaska?`,
					answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
				},
				{
					question: `Can I Reserve a Name for My Alaska LLC?`,
					answer: `Yes. The Alaska Division of Corporations allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
				},
			],
		},
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Additional Resources for Naming Your Alaska LLC`,
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
		content: `You must be careful that your Alaska LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
		content: `Find the Perfect Name for Your Alaska LLC`,
		size: 4,
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
		content: `Registered Agents and Your Alaska LLC`,
		size: 2,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `The Alaska Division of Corporations requires every LLC to have a Registered Agent. Once you have assigned an Alaska Registered Agent, they can receive official correspondence and documents on behalf of your business. Registered Agents can be individuals or other specialized Registered Agent service businesses.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Your LLC must have an Alaska Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `What the Alaska Division of Corporations Says About Registered Agents`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Here’s some important information from the Alaska Division of Corporations on Registered Agent services.`,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `“The registered agent of a corporation is an agent upon who may be served processes, notices, or demands required or permitted by law to be served upon the corporation.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Failure to maintain a current and valid physical and mailing address (i.e. as may be demonstrated by return USPS mail to this division) will result in non-compliance status for the entity and may lead to involuntarily dissolution or revocation of the entity’s authority to transact business in the State of Alaska.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The registered agent is statutorily responsible for receiving and forwarding processes, notices, or demands on to the last known address of the entity.”`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Rules for Alaska Registered Agents`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `There are certain rules that you must follow when you’re appointing a Alaska Registered Agent service for your business. They are:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`If the Registered Agent is a person, they must reside in Alaska.`,
				`If the Registered Agent is a business, they must be able to conduct business in Alaska.`,
				`The Registered Agent must have a physical street address in Alaska, not a P.O. Box.`,
				`The Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
			],
		},
		marginBottom: 32,
		color: color.yellow3,
	},
	{
		type: `text`,
		content: `Note that the Registered Agent address does not need to be the same as your Alaska LLC business address.`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Services Provided by a Alaska Registered Agent`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `What can you expect from your Alaska Registered Agent? Their main function is to accept official documents and correspondence. This includes:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Correspondence from the Alaska Division of Corporations, like a notice to file reports and other forms`,
				`Service of process documents (for example, if your Alaska LLC has legal proceedings issued against it)`,
				`Official Alaska and federal government documents, form filings and requests for information (including taxes, permits and company filings)`,
			],
		},
		marginBottom: 32,
		color: color.babyblue3,
		curve: true,
		curveColor: color.blue1,
	},
	{
		type: `header`,
		content: `The Incfile Registered Agent Service for Alaska LLCs`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you have an LLC that’s incorporated in Alaska and you need a Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Alaska business—plus, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `We are authorized to conduct business in Alaska and can legally act as your Registered Agent. Here’s what the Incfile Alaska Registered Agent service provides for your LLC:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`An always-available Alaska Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
				`A digital dashboard where you can access, store and retrieve any information we’ve received for your Alaska business`,
				`Email notification whenever we receive documents for your business`,
				`Automatic forwarding of all legal correspondence, documentation and information directly to you`,
				`Your first year free ($119 a year after), whether you incorporate with Incfile or not`,
			],
		},
		marginBottom: 32,
		color: color.green3,
	},
	{
		type: `button`,
		content: {
			text: `Order Incfile's Alaska registered agent service`,
			url: `/manage-your-company/registered-agent/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Appointing a Registered Agent Service for Your Alaska LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `You can appoint a Registered Agent when you first incorporate your Alaska LLC or at any point after that. Here’s how to go about it.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Assign Your Alaska Registered Agent When You Form Your LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Your business needs to have a Alaska Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `File Certificate of Formation with the Alaska Division of Corporations`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You will need to include details of your Registered Agent in your Certificate of Formation. This is the form that you file with the AK Division of Corporations to formally create your business.`,
		marginBottom: 24,
	},
	{
		type: `header`,
		content: `Incorporate Through Incfile and Get a Free Alaska Registered Agent`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `When you incorporate through us, we complete and file your Certificate of Formation based on the information you’ve provided. Additionally, we give you a free Alaska Registered Agent service for the first year, and we’ll include details of your Registered Agent in the form that we file.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incorporate your business through Incfile`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AK`,
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
		marginBottom: 24,
	},
	{
		type: `header`,
		content: `Choose a Registered Agent Service and File Form Statement of Change of Registered Office or Registered Agent, or Both with the Alaska Division of Corporations`,
		size: 4,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `Once you’ve chosen a new Registered Agent, you can complete a form that’s available on the AK Division of Corporations website. Once you’ve filled it out, send it to the Division of Corporations so they can update your records.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Sign Up for Incfile’s Alaska Registered Agent Service and We’ll File the Change on Your Behalf`,
		size: 4,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `When you choose to use our AK Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the Alaska Division of Corporations. We’ll let you know once we officially become your Registered Agent.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Order Incfile's Alaska registered agent service`,
			url: `/manage-your-company/registered-agent/`,
		},
		theme: `primary48`,
		marginBottom: 40,
	},
	{
		type: `header`,
		content: `Alaska Registered Agent Search`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `In some situations, you might want to know the name of the Registered Agent that represents another Alaska LLC. If you do, you can search the business database of the Alaska Division of Corporations, which will often provide details of a specific business’s Registered Agent.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If the Registered Agent isn’t available from the searchable business registry, contact the Alaska Division of Corporations requesting the information.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Issues with Not Having an Alaska Registered Agent`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `What happens if you choose not to assign or provide details of a Registered Agent to the Alaska Division of Corporations? There are several possible ramifications, including:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
				`<b>Falling out of good standing with the Alaska Division of Corporations:</b> If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
				`<b>Losing your status as a Alaska LLC:</b> A Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your LLC may be dissolved.`,
			],
		},
		marginBottom: 48,
		color: color.blue3,
	},
	{
		type: `header`,
		content: `You Can Appoint Yourself as Your Own Alaska Registered Agent`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you have an address in Alaska, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`The Registered Agent must have a physical street address in Alaska. If you’re forming an LLC outside AK, you will need to use an in-state Registered Agent.`,
				`You always need to have someone on hand during business hours at the Alaska address to sign for important documents.`,
				`The Registered Agent’s name and address are part of the public record and available through the Alaska Division of Corporations's website. If you prefer your name and address aren’t published, you should choose a Registered Agent service.`,
				`If you change your Alaska business address or move out of state, you need to file additional documentation with the AK Division of Corporations for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
			],
		},
		marginBottom: 48,
		color: color.green3,
	},
	{
		type: `header`,
		content: `FAQs About Alaska Registered Agents`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `Do I Need to Appoint a Alaska Registered Agent?`,
					answer: `Yes. All AK LLCs are required to have a Registered Agent. This is mandated by the Alaska Division of Corporations.`,
				},
				{
					question: `When Can I Assign a Alaska Registered Agent Service?`,
					answer: `You can either do it when you incorporate your Alaska business through paperwork filed with the Division of Corporations or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
				},
				{
					question: `Can I Be My Own Registered Agent in Alaska?`,
					answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the Alaska Division of Corporations.`,
				},
				{
					question: `Does My Registered Agent Need to Have an Address in Alaska?`,
					answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
				},
			],
		},
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Useful Resources for Alaska Registered Agent Services`,
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
				`<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/">The Main Functions of a Alaska Registered Agent</a>`,
				`<a href="/manage-your-company/change-of-registered-agent/">Changing Your Alaska Registered Agent</a>`,
				`<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/">What a Alaska Registered Agent Does</a>`,
			],
		},
		marginBottom: 48,
		color: color.babyblue3,
	},
];

export const feesAndRequirments = [
	{
		type: `header`,
		content: `The Fees and Filing Requirements for Your Alaska LLC`,
		size: 2,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `Some types of businesses have different requirements in Alaska, including related fees and costs. Your LLC needs to pay various fees to the federal government, Alaska government and other agencies. Some of these fees are levied by the Alaska Division of Corporations or statewide organizations, while others come from the federal government. On this page, we’ve summarized the most common fees and requirements.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Note that Alaska business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Initial Filing and Fees for Forming an LLC in Alaska`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `To create your business in Alaska, you’ll file an LLC with the Division of Corporations and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for Alaska:`,
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
		content: `When you form your LLC through Incfile, we automatically forward this fee to the Alaska Division of Corporations when we file your incorporation paperwork.`,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here, including expedited fees for Alaska.</a>`,
		marginBottom: 24,
	},
	{
		type: `button`,
		content: {
			text: `Incorporate your Alaska LLC through Incfile today`,
			url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=AK`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Getting an EIN/Tax AK for Your Alaska LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Every Alaska LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Get and EIN for your Alaska LLC through Incfile`,
			url: `/manage-your-company/tax-id-ein/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Foreign Qualification to Operate in a State Outside Alaska`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you’re expanding your Alaska LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Alaska. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
		content: `Annual Reporting and Fees for Your Alaska LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Most states need to file an annual (or other periodic) report with their department of state. When you file your AK LLC annual report, you may need to pay a fee. Here are the annual filing requirements for Alaska:`,
		marginBottom: 48,
	},
	{
		type: `dynamic_filing_requirement`,
	},

	{
		type: `text`,
		content: `<a href="/business-filing-deadlines/">Learn about your ongoing Alaska LLC filing requirements</a> and business filing deadlines with our helpful Alaska ongoing filing lookup tool.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Incfile can also complete and file your Alaska Annual Report on your behalf.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Alaska annual report filing service`,
			url: `/manage-your-company/annual-report/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `Business Licenses and Permits in Alaska`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Some Alaska LLCs will need certain business licenses and permits from federal, state and regional organizations. These permits and licenses will have associated fees that you should pay on a one-off or regular basis. Permits and licenses vary based on:`,
		marginBottom: 32,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`The industry your Alaska LLC operates in (e.g., restaurants will need health permits)`,
				`The location of your Alaska LLC (state, county or city) (e.g., a license to conduct business from the city of Anchorage)`,
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
		content: `The Incfile Business License Research Package for Your Alaska LLC`,
		size: 4,
		marginBottom: 24,
	},
	{
		type: `text`,
		content: `Our Business License Research Package tells you about all of the licenses and permits you will need for your Alaska LLC. It includes:`,
		marginBottom: 24,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`A complete report on all the licenses, permits and tax registrations your Alaska LLC will need`,
				`The application forms you will need to file with the Alaska, regional and federal licensing authorities`,
			],
		},
		marginBottom: 24,
		color: color.purple3,
	},
	{
		type: `text`,
		content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Alaska and local governments.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Alaska business license research package`,
			url: `/business-license-research-package/`,
		},
		theme: `primary48`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `An Operating Agreement for Your Alaska LLC`,
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
		content: `Alaska LLCs aren’t required to have an Operating Agreement, but they are extremely useful for several reasons (<a href="/research-topics/llc-info/the-llc-operating-agreement/">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Alaska business. You can choose to make changes to the template based on your unique requirements.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Ad Hoc Alaska Fees or Requirements for Your Alaska LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `There are several other fees or requirements that you may need to meet during the life of your Alaska LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Obtain a Fictitious/DBA Name`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you want your business to trade under a different name, you can file a form with the Alaska Division of Corporations. You will need to pay a filing fee. Incfile can file this form on your behalf.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Alaska fictitious name service`,
			url: `/fictitious-business-or-trade-name/`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Change the Alaska Registered Agent`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Your Alaska LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new Registered Agent later. Incfile provides a complete Alaska Registered Agent service.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Alaska registered agent service`,
			url: `/manage-your-company/registered-agent/`,
		},
		theme: `primary48`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Reserve a Name`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you don’t want to form your business right away, you can reserve a name with the Alaska Division of Corporations. You will need to pay a small fee to do this.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `To Amend Certain Facts About Your Alaska LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Your business formation documents state certain facts about your Alaska business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Division of Corporations. You can do this yourself or have Incfile complete the filing on your behalf. Areas you might want to file Alaska Articles of Amendment for include:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Adding, removing or changing a Alaska LLC member or manager`,
				`Changing the business address of your LLC`,
				`Altering the stated business activities of your Alaska LLC`,
			],
		},
		marginBottom: 32,
		color: color.yellow3,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Alaska articles of amendment service`,
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
		content: `Some organizations will request that you prove your Alaska LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Alaska Division of Corporations. Incfile can obtain a certificate on your behalf.`,
		marginBottom: 16,
	},
	{
		type: `button`,
		content: {
			text: `Incfile's Alaska certificate of good standing service`,
			url: `/manage-your-company/certificate-of-good-standing/`,
		},
		theme: `primary48`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `The fees listed above detail all the charges that a standard Alaska LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Of course, your Alaska LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for Alaska LLCs.`,
		marginBottom: 48,
	},
	{
		type: `header`,
		content: `FAQs About Alaska LLC Requirements`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `What Happens to the State Fees That I Am Charged When Forming My Alaska LLC?`,
					answer: `We charge you for this fee at cost and then pay the fee to the Division of Corporations on your behalf when forming your Alaska business.`,
				},
				{
					question: `Do I Need to Pay an Annual Report Fee Every Year?`,
					answer: `Yes. Most states, including AK, require you to file a report for your LLC every year. You can find out more on the <a href="/compliance-filing-requirement/">compliance page for your state.</a>`,
				},
				{
					question: `Who Will I Need to Get Business Licenses and Permits From for My Alaska LLC?`,
					answer: `<p>It depends on various factors including:</p></br>
                  <ul>
                  <li>The type of business you run</li>
                  <li>Where you are located</li>
                  <li>Governing organizations in your industry</li>
                  <li>Federal, state and local regulations</li>
                  </ul></br>
                  That’s why our <a href="/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Alaska LLC needs to be compliant.`,
				},
			],
		},
		marginBottom: 48,
	},
];

export const businessTaxes = [
	{
		type: `header`,
		content: `Business Taxes Payable by Your Alaska LLC`,
		size: 2,
		marginBottom: 40,
	},
	{
		type: `text`,
		content: `Business taxes are a fact of life, and your LLC will need to pay a variety of taxes to both the federal and Alaska governments. We’ll cover all the main taxes in Alaska, including self-employment, payroll, federal and sales tax.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/"> Business Tax Filing service</a>.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `How Your Alaska LLC Will Be Taxed`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `The profits of a Alaska LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a Alaska LLC work as follows:`,
		marginBottom: 16,
	},
	{
		type: `numeric-list`,
		content: [
			{
				text: `Alaska LLC owners pay self-employment tax on business profits.`,
			},
			{
				text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions.`,
			},
			{
				text: `Some LLCs pay Alaska sales tax on products.`,
			},
			{
				text: `Employers pay payroll tax on any salaries they pay to employees.`,
			},
			{
				text: `Employees pay federal, state and payroll tax on their earnings.`,
			},
		],
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Items 1, 2 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and Alaska personal tax returns, and that’s where you will pay those taxes.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Alaska Taxes Payable to the Department of Revenue`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `Alaska does not charge a state income tax and does not have a statewide sales tax. However, many localities, towns and cities in Alaska do charge their own sales tax.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Your Alaska Sales Taxes`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to your local or regional authority. Alaska sales tax is collected at the point of purchase. Alaska sales tax rates do vary depending on the region, county or city where you are located, although Alaska does not have a statewide sales tax rate. You will typically need to collect Alaska sales tax on:`,
		marginBottom: 16,
	},
	{
		type: `list-dot`,
		content: {
			list: [
				`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`,
				`Certain services that your Alaska business might provide`,
			],
		},
		marginBottom: 16,
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
		content: `Get details on the <a href="https://www.commerce.alaska.gov/web/dcra/OfficeoftheStateAssessor/AlaskaSalesTaxInformation.aspx" target="_blank" rel="noopener noreferrer">Alaska sales tax here</a>.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Federal Taxes for Your Alaska LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `There are a couple of different federal taxes that every LLC will need to pay, including Alaska LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Federal Self-Employment Tax`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `All Alaska LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Alaska business. The current self-employment tax rate is 15.3 percent.`,
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
		color: color.green3,
		curve: true,
		curveColor: color.red1,
	},
	{
		type: `header`,
		content: `Pay Less Self-Employment Tax by Treating Your Alaska LLC as an S Corporation`,
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
		type: `button`,
		content: {
			text: `Incifle Form 2553 S corporation tax election for an LLC service`,
			url: `/llc-s-corp-election/`,
		},
		theme: `primary48`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `Speak to your accountant for more information on reducing your Alaska LLC self-employment tax through an S Corporation tax election.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Federal Income Tax`,
		size: 4,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You must also pay regular federal income tax on any earnings you take out of your Alaska LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
		marginBottom: 16,
	},
	{
		type: `text`,
		content: `You only pay federal income tax on your LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `Employee and Employer Taxes for Your Alaska LLC`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `text`,
		content: `If you pay employees, there are some slightly different tax implications. Speak to your accountant to get clear guidance for your own unique situation.`,
		marginBottom: 24,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `Employer Payroll Tax Withholding`,
					answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
				},
				{
					question: `Employer Federal Tax Withholding`,
					answer: `You may also choose to withhold federal income tax on the wages you pay to employees. Speak to your accountant for more information.`,
				},
				{
					question: `Employees May Need to File Tax Returns`,
					answer: `Regardless of whether you withhold federal tax, your employees may need to file their own tax returns.`,
				},
				{
					question: `Employee Insurance and Other Requirements`,
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
									text: `Get more requirements from the Alaska Department of Labor and Workforce Development website.`,
									url: `https://labor.alaska.gov/`,
								},
							],
						},
					],
				},
				{
					question: `Other Taxes and Duties for Your Alaska LLC`,
					answer: `Depending on the industry you are in, your Alaska LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
				},
				{
					question: `Estimated Taxes for Your Alaska LLC`,
					answer2: [
						{
							type: `paragraph`,
							content: `Most Alaska LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
						},
						{
							type: `list-dot-without-bg`,
							color: color.orange3,
							content: [`Federal income tax`, `Federal self-employment tax`],
						},
						{
							type: `paragraph`,
							content: `Most Alaska LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
						},
					],
				},
			],
		},
		marginBottom: 32,
	},
	{
		type: `header`,
		content: `FAQs on Alaska LLC Business Taxes`,
		size: 3,
		marginBottom: 32,
	},
	{
		type: `accordion`,
		content: {
			items: [
				{
					question: `Does Alaska Have Sales Tax?`,
					answer: `Alaska does not have a statewide sales tax, although many towns, cities, regions and localities have their own sales tax.`,
				},
				{
					question: `Does Alaska Have a State Tax?`,
					answer: `No. Alaska does not have a general state income tax.`,
				},
				{
					question: `Do I Need to Pay Estimated Taxes?`,
					answer: `Yes. In most cases you must pay estimated taxes on any Alaska tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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
