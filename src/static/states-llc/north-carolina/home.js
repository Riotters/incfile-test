import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NC`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `Starting an LLC in North Carolina`,
    size: 1,
    template: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Located on the East Coast of the U.S. and sandwiched between South Carolina, Georgia, Tennessee and Virginia, North Carolina is a great location to start a business. It has excellent land and air links, with both Charlotte and Raleigh being major transport hubs. North Carolina is also the ninth most populous state in the U.S., so businesses are sure to find plenty of potential customers in their locality.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `North Carolina’s landscape, culture and geography are extremely varied, from the coastal lowlands in the east to the Appalachian Mountains in the west. The state is known for being a major center of banking and finance (Charlotte has the biggest banking center outside New York City) and for its research triangle, comprising Raleigh, Durham and Chapel Hill. North Carolina leads the southeastern states in both agriculture and industry. Western North Carolina is known for its tourist industry, with “leaf peepers” traveling from all over the U.S. to witness the spectacular fall colors.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For most business owners, the fastest and easiest way to start a business in North Carolina is by creating a North Carolina LLC. A Limited Liability Company (LLC) is a type of business entity that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger North Carolina corporations but with much simpler rules and regulations.`,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Briefly, the benefits of starting a North Carolina LLC include:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Separating and limiting your personal liability from your business liability and debts`,
        `Quick and simple filing, management, compliance, regulation and administration of your North Carolina LLC`,
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
    content: `Six Quick Steps to Starting an LLC in NC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `We’ve got lots of useful information on registering a business in NC. On this page you’ll find the basic steps of how to form a North Carolina LLC, with more in-depth content throughout the rest of our guide.`,
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
          question: `STEP 2: Search for and Choose a Unique Business Name for Your North Carolina LLC`,
          answer: `<p>You will need a distinctive and original name for your North Carolina LLC that’s not used by any other business in NC. To find out if another company is using your chosen business name, carry out a North Carolina business entity name search on the NC Secretary of State website.</p></br>
                     <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your North Carolina LLC.</p></br>
                     <a href="/north-carolina-llc/how-to-name-your-llc/"> Learn about North Carolina LLC Business Naming Rules. </a>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your North Carolina LLC`,
          answer: `Every North Carolina LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference. The address can be outside the state of North Carolina, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Registered Agent for Your North Carolina LLC`,
          answer: `<p>Every NC LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the North Carolina Secretary of State.
            </p></br>
  
            <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your NC Registered Agent must have a physical street address in North Carolina and must be present to receive important documents for your company during business hours.</p></br>
            
            <p>At Incfile, all of our packages include a North Carolina Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
            <a href="/north-carolina-llc/registered-agents-north-carolina-llc/">Learn more about North Carolina Registered Agents.</a>`,
        },
        {
          question: `STEP 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the North Carolina LLC business formation process.`,
        },
        {
          question: `STEP 6: File Articles of Organization With the North Carolina Secretary of State`,
          answer: `<p> Once you've gathered all the information for your North Carolina LLC, you’ll need to file a formal document with the NC Secretary of State. This document is known as your “Articles of Organization,” and filing the document creates your North Carolina LLC. Here’s what is typically included:</p></br>
                     <ul>
                     <li> Your business name and address </li>
                     <li> Details of your Registered Agent </li>
                     <li> Names of managers or members of the LLC at the time of filing </li>
                     <li> Addresses of managers or members of the LLC at the time of filing </li>
                     <li> Purpose of your business </li>
                     <li> Name of the incorporator </li>
                     </ul></br>
                     <p>You can file your North Carolina LLC Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in North Carolina. You only need to file your Articles of Organization once.</p></br>
                     <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NC"> Form your LLC now </a>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information From the North Carolina Secretary of State`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The NC Secretary of State has plenty of additional information on forming and running a business in North Carolina.`,
    marginBottom: 32,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `<a href="https://www.sosnc.gov/divisions/business_registration" target="_blank" rel="noopener noreferrer">North Carolina Secretary of State for forming and running your NC LLC</a>`,
        `<a href="https://www.labor.nc.gov/" target="_blank" rel="noopener noreferrer">North Carolina Department of Labor for NC employers and hiring</a>`,
        `<a href="https://www.ncdor.gov/" target="_blank" rel="noopener noreferrer">North Carolina Department of Revenue for NC taxes</a>`,
      ],
    },
    marginBottom: 40,
    color: color.babyblue3,
  },
  {
    type: `header`,
    content: `Special Types of North Carolina LLCs`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `A regular North Carolina LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Professional North Carolina LLCs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Some states, including North Carolina, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing. North Carolina does not list the specific professions that can form a Professional LLC.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Foreign LLCs in North Carolina`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `<p>If your business is already operating in another state and expanding to North Carolina, you’ll need to form a foreign LLC.</p></br>
                <p><a href="/north-carolina-llc/form-filling-permit-requirements/">More information on North Carolina filing and licensing requirements here.</a></p>`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `What to Do After Forming Your North Carolina LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in North Carolina? We’ve got you covered. <a href="/after-forming-llc/">Here’s our guide</a> to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Read the Rest of the Guide for More`,
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
    content: `<a href="/north-carolina-llc/how-to-name-your-llc/">Naming Your North Carolina LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the North Carolina business registry of the NC Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a North Carolina LLC name and more.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/north-carolina-llc/registered-agents-north-carolina-llc/">North Carolina Registered Agents</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a North Carolina Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for North Carolina Registered Agents.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/north-carolina-llc/form-filling-permit-requirements/">Fees and Requirements for North Carolina LLCs</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and North Carolina rules. Includes details of Employee Identification Numbers (EINs), North Carolina and federal business licenses, North Carolina Annual Reports and more.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    size: 3,
    content: `<a href="/north-carolina-llc/business-taxes/">Federal, State, Sales and Other Taxes for Your North Carolina LLC</a>`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and North Carolina government. Includes details of federal taxes like income and self-employment, and North Carolina taxes like sales tax and income tax.`,
    marginBottom: 32,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `NC Secretary of State Business Searches & Naming Your LLC`,
    size: 1,
    template: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `We’re here to help you find the right business name for your North Carolina LLC. From carrying out a North Carolina business search to understanding naming rules or creating a “Doing Business As” name to register your entity, you’re in the right place.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `North Carolina Business Entity Search`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You should start naming your business by completing a “North Carolina business entity search” with the NC Secretary of State. They have a helpful tool on their website that lets you search the register of NC LLCs and corporations to see if someone already has your desired business name. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the business name is already used, that means it’s not available and you won’t be able to register it. Try searching for a different business name instead.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `<a href="https://www.sosnc.gov/search/index/corp/" target="_blank" rel="noopener noreferrer">North Carolina Secretary of State business name search tool</a>`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `North Carolina SOS Rules for Naming an LLC `,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet North Carolina Secretary of State naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in NC.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Be Unique`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of North Carolina. This is why you should check business name availability on the NC SOS website.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Not Be Confusable With Another Business Name`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `It’s not enough for your NC LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in North Carolina. For example, you cannot use the following factors to say your name is different from the name of another business:`,
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
    size: 3,
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
    size: 3,
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
        `Are very similar to the name of a federal or NC agency or organization (e.g., FBI, FDA, North Carolina Department of Revenue, North Carolina Police, Treasury, etc.)`,
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
    content: `“DBA”/Assumed Business Names for North Carolina LLCs`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. Often called a “DBA” (“doing business as”) name, in North Carolina, it’s referred to as an “Assumed Business Name.” You might choose to use a different name from your formal NC LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called North Carolina Travel Holding Company LLC, and you have a chain called Appalachian Outdoor Adventures. You should file an Assumed Business Name to let the North Carolina Secretary of State know. In North Carolina, you do that through an Assumed Business Name Certificate, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's assumed business name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Register Your Business Name in NC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your North Carolina business name, checked availability, followed the naming rules and decided whether you need an Assumed Business Name, you can register your NC LLC name.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `If you’re ready to start your North Carolina LLC, you can formally file your Articles of Organization with the North Carolina SOS, or <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NC">let Incfile take care of it for you</a>.`,
      ],
    },
    marginBottom: 40,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your North Carolina LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You might find the following answers useful.`,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    header: 3,
    content: {
      items: [
        {
          question: `How Do I Search for My North Carolina LLC Business Name?`,
          answer: `Just go to the <a href="https://www.sosnc.gov/search/index/corp/" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the North Carolina Secretary of State, which will tell you if there are any NC corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My North Carolina LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of North Carolina). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in North Carolina?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Other Useful Resources for Naming Your North Carolina LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
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
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must be careful that your North Carolina LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
    content: `Find the Perfect Name for Your North Carolina LLC`,
    size: 3,
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
    type: `text`,
    content: `<a href="/blog/post/llc-name-search-50-states/" target="_blank">Incfile guide to choosing a business name</a>`,
    marginBottom: 48,
  },
];

export const registeredAgent = [
  {
    type: `header`,
    content: `Registered Agents and Your NC LLC`,
    size: 1,
    template: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Your North Carolina LLC must assign a state Registered Agent. This is a formally recognized person or business who can receive business correspondence and other documents from the North Carolina Secretary of State. Assigning a Registered Agent is a legal requirement.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a North Carolina Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing NC Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `What the North Carolina Secretary of State Says About NC Registered Agents`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Here’s some important information from the North Carolina Secretary of State on NC Registered Agent services:`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must identify the business entity’s Registered Agent name. The sole duty of the Registered Agent is to forward to the business entity at its last known address any notice, process, or demand that is served on the Registered Agent. A Registered Agent may be any one of the following:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `An individual who resides in North Carolina and whose business address is identical to the registered office;`,
        `A domestic business corporation, nonprofit corporation, limited liability company, whose business address is identical to the registered office; or`,
        `A foreign business corporation, nonprofit corporation, limited liability company authorized to transact business in this state and whose business address is identical to the registered office.`,
      ],
    },
    marginBottom: 32,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `If the Registered Agent is a business entity required to be filed with the Secretary of State’s Office, the entity must be active upon the business registry in North Carolina.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `NC Registered Agents: The Rules You Need to Follow`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are certain rules you must follow when you’re appointing a North Carolina Registered Agent service for your business. They are:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `If the Registered Agent is a person, they must reside in North Carolina.`,
        `If the Registered Agent is a business, they must be able to conduct business in North Carolina.`,
        `The Registered Agent must have a physical street address in North Carolina, not a P.O. Box.`,
        `The Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 32,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `Note that the Registered Agent address does not need to be the same as your North Carolina LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Expect From a North Carolina Registered Agent Service`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `What can you expect from your North Carolina Registered Agent? Their main function is to accept official documents and correspondence from the NC Secretary of State. This includes:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Correspondence from the North Carolina Secretary of State`,
        `Service of process notices (e.g., if your NC LLC is sued or required to appear in court)`,
        `Official North Carolina state and federal government correspondence and notifications`,
        `Tax forms and requests to complete permits, company filings and reports`,
      ],
    },
    marginBottom: 40,
    color: color.purple3,
    curve: true,
    curveColor: color.blue1,
  },
  {
    type: `header`,
    content: `The Incfile Registered Agent Service for North Carolina LLCs`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Incfile provides a complete North Carolina Registered Agent service for any LLC that’s incorporated in NC. Even better, if you choose to incorporate your North Carolina business through Incfile, your Registered Agent is completely free for the first year and only $119 a year after that. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile is authorized to conduct business in North Carolina and can legally act as your Registered Agent. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Here’s what the Infile North Carolina Registered Agent service provides for your NC LLC:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `An always-available North Carolina Registered Agent who can receive correspondence, documents and legal proceedings on your LLC’s behalf`,
        `A digital dashboard where you can access, store and retrieve any information we’ve received for your North Carolina business`,
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
      text: `Order Incfile's North Carolina registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How to Appoint a North Carolina Registered Agent for Your LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your North Carolina LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Appoint a NC Registered Agent Service When You Create Your North Carolina LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your business needs to have a North Carolina Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `File Articles of Organization With the North Carolina Secretary of State`,
    size: 4,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the NC Secretary of State to formally create your business.`,
    marginBottom: 24,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free North Carolina Registered Agent `,
    size: 4,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Articles of Organization based on the information you’ve provided. Additionally, we give you a free North Carolina Registered Agent service for the first year, and we’ll include details of your NC Registered Agent in the form that we file.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NC`,
    },
    theme: `primary48`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Assign a Different North Carolina Registered Agent Service After Incorporation`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You can also change your NC Registered Agent service after you’ve formed your LLC.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File a Form With the North Carolina Secretary of State`,
    size: 4,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new North Carolina Registered Agent, you can complete a form. Once you’ve filled it out, send it to the secretary of state so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign up for Incfile’s North Carolina Registered Agent Service, and We’ll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you choose to use our NC Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the North Carolina Secretary of State. We’ll let you know once we officially become your Registered Agent. `,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's North Carolina registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `North Carolina Registered Agent Search`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another North Carolina LLC. If you do, you can search the business database of the North Carolina Secretary of State, which will often provide details of a specific business’ Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the NC Registered Agent isn’t available from the searchable business registry, contact the North Carolina Secretary of State requesting the information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `The Problems Caused When You Don’t Appoint a North Carolina Registered Agent Service`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the North Carolina Secretary of State? There are several possible ramifications, including:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `<b>Falling out of good standing with the North Carolina Secretary of State:</b> If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `<b>Losing your status as a North Carolina LLC:</b> A NC Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your North Carolina LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Acting as Your Own Registered Agent for Your NC LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you have an address in North Carolina, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach, as there can be some drawbacks:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `The NC Registered Agent must have a physical street address in North Carolina. If you’re forming an LLC outside NC, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the North Carolina address to sign for important documents.`,
        `The NC Registered Agent’s name and address are part of the public record and available through the North Carolina Secretary of State's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
        `If you change your North Carolina business address or move out of state, you would need to file additional documentation with the NC Secretary of State for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About North Carolina Registered Agents`,
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
          question: `Do I Need to Appoint a North Carolina Registered Agent?`,
          answer: `Yes. All NC LLCs are required to have a Registered Agent. This is mandated by the North Carolina Secretary of State.`,
        },
        {
          question: `When Can I Assign a North Carolina Registered Agent Service?`,
          answer: `You can either do it when you incorporate your North Carolina business through paperwork filed with the NC Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in North Carolina?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the North Carolina Secretary of State.`,
        },
        {
          question: `Does My Registered Agent Need to Have an Address in North Carolina?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Additional Resources for North Carolina Registered Agent Services`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
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
        `<a href="/research-topics/registered-agent/registered-agent-function/">The Main Functions of a North Carolina Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/">Changing Your North Carolina Registered Agent</a>`,
        `<a href="/research-topics/registered-agent/registered-agent-tasks/">What a North Carolina Registered Agent Does</a>`,
      ],
    },
    marginBottom: 48,
    color: color.babyblue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `The Fees and Filing Requirements for Your North Carolina LLC`,
    size: 1,
    template: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `Depending on the specifics of your North Carolina business, you’ll be required to pay certain fees and fulfill different filing requirements. Some of these costs are payable to the North Carolina Secretary of State, while others are due to the federal or North Carolina government. We’ve summarized the most common requirements and fees here. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that North Carolina business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Forming an LLC in NC: Filing and Fees `,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `When you first incorporate your business in North Carolina, you’ll need to file an LLC with the NC Secretary of State and pay a North Carolina filing fee. Here are the current fees and filing times for North Carolina:`,
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
    content: `When you form your NC LLC through Incfile, we automatically forward this fee to the North Carolina Secretary of State when we file your incorporation paperwork. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here, including expedited fees for North Carolina.</a>`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your North Carolina LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NC`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an EIN/Tax ID for Your North Carolina LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Every North Carolina LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Get and EIN for your North Carolina LLC through Incfile`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Certificate of Authority to Operate Outside North Carolina`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you’re expanding your North Carolina LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than North Carolina. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
    content: `North Carolina LLC Annual Reporting and Fees`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Most states need you to file an annual (or other periodic) report with their secretary of state. When you file your NC LLC Annual Report, you may need to pay a fee. Here are the annual filing requirements for North Carolina: `,
    marginBottom: 48,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/">Learn about your ongoing North Carolina LLC filing requirements</a> and business filing deadlines with our helpful North Carolina ongoing filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your North Carolina Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's North Carolina annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `North Carolina Business License Applications and Permits`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your North Carolina LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by North Carolina, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges. Permits and licenses vary based on:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `The industry your North Carolina LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your North Carolina LLC (state, county or city) (e.g., a license to conduct business from the city of Raleigh)`,
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
    type: `list-dot`,
    content: {
      list: [
        `A complete report on all the licenses, permits and tax registrations your North Carolina LLC will need`,
        `The application forms you will need to file with the North Carolina, regional and federal licensing authorities`,
      ],
    },
    marginBottom: 24,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, North Carolina and local governments.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's North Carolina business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Create an Operating Agreement for Your North Carolina LLC`,
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
    content: `An Operating Agreement is extremely useful for several reasons (<a href="/research-topics/llc-info/llc-operating-agreement/">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your North Carolina business. You can choose to make changes to the template based on your unique requirements. `,
    marginBottom: 40,
  },
  {
    type: `header`,
    content: `Ad Hoc North Carolina Fees or Requirements for Your NC LLC`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your North Carolina LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name for Your North Carolina LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you want your NC business to trade under a different name, you can file a form with the North Carolina Secretary of State. You will need to pay a North Carolina filing fee; Incfile can file this form on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's North Carolina fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the North Carolina Registered Agent for Your NC LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your North Carolina LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new NC Registered Agent later. Incfile provides a complete North Carolina Registered Agent service.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's North Carolina registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your North Carolina LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your North Carolina business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the North Carolina Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf. Areas you might want to file North Carolina Articles of Amendment for include:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Adding, removing or changing a North Carolina LLC member or manager`,
        `Changing the business address of your LLC`,
        `Altering the stated business activities of your North Carolina LLC`,
      ],
    },
    marginBottom: 24,
    color: color.yellow3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's North Carolina articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing for Your North Carolina LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your North Carolina LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the North Carolina Secretary of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 24,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's North Carolina certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard NC LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your North Carolina LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for NC LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About North Carolina LLC Fees`,
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
          question: `What Happens to the State Fees That I Am Charged When Forming My North Carolina LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the secretary of state on your behalf when forming your North Carolina business. `,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Usually, yes. Most states require you to file a report for your LLC every year. Some states require filing biennially (every other year), though a handful don’t require Annual Reports. You can find out more on the <a href="/compliance-filing-requirement/">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My North Carolina LLC?`,
          answer: `<p>It depends on various factors including:</p></br>
                    <ul>
                    <li>The type of business you run</li>
                    <li>Where you are located</li>
                    <li>Governing organizations in your industry</li>
                    <li>Federal, state and local regulations</li>
                    </ul></br>
                    That’s why our <a href="/business-license-research-package/">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your North Carolina LLC needs to be compliant.`,
        },
      ],
    },
    marginBottom: 48,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `The NC Department of Revenue & Business Taxes for Your LLC `,
    size: 1,
    template: 3,
    marginBottom: 40,
  },
  {
    type: `text`,
    content: `There are a wide variety of business taxes that your North Carolina LLC will need to pay. These include tax that’s payable to the North Carolina government, like North Carolina sales and use taxes and North Carolina state tax. You will also need to pay federal, self-employment and possibly payroll tax to the IRS.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/"> Business Tax Filing service</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `How Your North Carolina LLC Will Be Taxed`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `The profits of a North Carolina LLC are not taxed at the business level like those of C Corporations. Instead, taxes for a North Carolina LLC work as follows:`,
    marginBottom: 24,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `North Carolina LLC owners pay self-employment tax on business profits`,
      },
      {
        text: `North Carolina LLC owners pay NC state tax on any profits, less state allowances or deductions`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
      },
      {
        text: `Some NC LLCs pay North Carolina sales tax on products`,
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
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and North Carolina personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `North Carolina Taxes Payable to the NC Department of Revenue`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the North Carolina Department of Revenue: North Carolina state income tax and North Carolina state sales tax.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `North Carolina State Income Tax Payable on LLC Earnings`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `As a North Carolina business owner, you will need to pay NC state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay North Carolina income tax. You will be taxed at the standard rates for North Carolina state taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal North Carolina state taxes.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The North Carolina state tax rate is 5.25 percent. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Get details on the <a href="https://www.ncdor.gov/" target="_blank" rel="noopener noreferrer" >North Carolina state tax online here.</a>`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `North Carolina Sales and Use Tax`,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the NC Department of Revenue. North Carolina sales tax is collected at the point of purchase. North Carolina sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will typically need to collect North Carolina sales tax on:`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`,
        `Certain services that your North Carolina business might provide`,
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
    content: `Get details on the <a href="https://www.ncdor.gov/taxes-forms/sales-and-use-tax" target="_blank" rel="noopener noreferrer">North Carolina sales and use tax online here.</a>.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sales Tax Rates for Your North Carolina LLC`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that. `,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Federal Self-Employment and Income Taxes `,
    size: 2,
    template: 3,
    style: { fontSize: `28px`, lineHeight: `36px` },
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including North Carolina LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Federal Self-Employment Tax for LLCs`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `All North Carolina LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your North Carolina business. The current self-employment tax rate is 15.3 percent.`,
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
        `On profits of $30,000, you would pay self-employment tax of $4,590`,
        `On profits of $60,000, you would pay self-employment tax of $9,180`,
        `On profits of $90,000, you would pay self-employment tax of $13,770`,
        `On profits of $140,000, you would pay self-employment tax of $21,420`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your North Carolina LLC as an S Corporation`,
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
    content: `Speak to your accountant for more information on reducing your North Carolina LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `North Carolina LLC Federal Income Tax`,
    size: 3,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your North Carolina LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file. `,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your North Carolina LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employer and Employee Taxes for Your North Carolina LLC`,
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
          question: `Employer Payroll Tax Withholding `,
          answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
        },
        {
          question: `Employer Federal and State Tax Withholding `,
          answer: `You may also choose to withhold federal and North Carolina state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
        },
        {
          question: `Employees May Need to File Tax Returns`,
          answer: `Regardless of whether you withhold federal and North Carolina state income tax, your employees may need to file their own tax returns.`,
        },
        {
          question: `North Carolina LLC Employee Insurance and Other Requirements`,
          answer2: [
            {
              type: `paragraph`,
              content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
            },
            {
              type: `paragraph`,
              content: `<a href="https://www.labor.nc.gov/" target="_blank" rel="noopener noreferrer">Get more requirements from the North Carolina Department of Labor website.</a>`,
            },
          ],
        },
        {
          question: `Other Taxes and Duties for Your North Carolina LLC`,
          answer: `Depending on the industry you are in, your North Carolina LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
        },
        {
          question: `Estimated Taxes for Your North Carolina LLC`,
          answer2: [
            {
              type: `paragraph`,
              content: `Most North Carolina LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
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
                `North Carolina state tax`,
              ],
            },
            {
              type: `paragraph`,
              content: `Most North Carolina LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
            },
          ],
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on North Carolina LLC Business Taxes`,
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
          question: `Does North Carolina Have Sales Tax?`,
          answer: `Yes. North Carolina does have a sales tax, which may vary among cities and counties. You can find more information above.`,
        },
        {
          question: `Does North Carolina Have a State Tax?`,
          answer: `Yes. North Carolina does have a general state income tax. You can find more information above.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your North Carolina tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
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
