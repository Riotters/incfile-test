import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=WA`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `Starting an LLC in Washington State`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Washington State is a region located in the far northwest of the continental U.S. Over half of the state’s population lives in and around the Seattle area. The state combines centers of business and industry with beautiful landscapes and welcoming people.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For most business owners, the fastest and easiest way to start a business in Washington is by creating a Washington LLC. A limited liability company (LLC) is a type of business entity that’s ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger Washington corporations, but with much simpler rules and regulations.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Briefly, the benefits of starting a Washington LLC include:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulation and administration of your Washington LLC`, `Easy tax filing and potential advantages for your tax treatment`],
    },
    marginBottom: 16,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `Learn more about the <a href="/limited-liability-company/"> benefits of the LLC business structure here</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How to Start a Washington State LLC in Six Quick Steps`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `We’ve got lots of useful information on starting a business in WA. On this page, you’ll find the basic steps of how to form a Washington LLC, with more in-depth content throughout the rest of our guide.`,
    marginBottom: 16,
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
          question: `STEP 2: Search for and Choose a Unique Business Name for Your Washington  LLC`,
          answer: `<p>You will need a distinctive and original name for your Washington LLC that’s not used by any other business in DC. To find out if another company is using your chosen business name, carry out a Washington business entity name search on the DC Department of Consumer and Regulatory Affairs website.</p>
                    <p>There are a few rules you’ll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your Washington LLC.</p>
                    <p><a href="/washington-dc-llc/how-to-name-your-llc/">Learn about Washington LLC business naming rules</a>.</p>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your LLC`,
          answer: `Every Washington LLC must have a designated street address. That could be your home address (if you’re running the company from your residence), your company’s office building or any physical address of your preference.`,
        },
        {
          question: `STEP 4: Assign a Registered Agent for Your Washington LLC`,
          answer: `<p>Every LLC must have a “Registered Agent.” This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the Washington Department of Consumer and Regulatory Affairs.</p>
                    <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your Registered Agent must have a physical street address in Washington and must be present to receive important documents for your company during business hours.</p>
                    <p>At Incfile, all of our packages include a Washington Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p>
                    <p><a href="/washington-dc-llc/registered-agents-washington-dc-llc/">Learn more about Washington Registered Agents</a></p>`,
        },
        {
          question: `STEP 5: Get an Employee Identification Number (EIN) From the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the Washington LLC business formation process.`,
        },
        {
          question: `STEP 6: File Articles of Organization with the Washington Department of Consumer and Regulatory Affairs`,
          answer: `<p>Once you've gathered all the information for your Washington LLC, you’ll need to file a formal document with the DC Department of Consumer and Regulatory Affairs. This document is known as your “Articles of Organization,” and filing the document creates your Washington LLC. Here’s what is typically included:</p>
                <ul>
                    <li> Your business name and address</li>
                    <li> Details of your Registered Agent</li>
                    <li>Names of managers or members of the LLC at the time of filing</li>
                    <li>Addresses of managers or members of the LLC at the time of filing</li>
                    <li>Purpose of your business</li>
                    <li>Name of the incorporator</li>
                </ul></br>
                <p>You can file your Washington LLC Articles of Organization online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in Washington. You only need to file your Articles of Organization once.</p>
                <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&amp;entityState=DC"> Form Your LLC now</a> `,
        },
      ],
    },
    marginBottom: 48,
  },

  {
    type: `header`,
    content: `Additional Information from the Washington Secretary of State`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The Secretary of State has plenty of other information on forming and running a business in Washington.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `You’ll find other useful information below:`,
      list: [
        `<a href="https://www.sos.wa.gov/corps/limitedliabilitycompaniesllconlineandpaperregistrations.aspx" target="_blank" rel="noopener noreferrer">Washington Secretary of State for forming and running your LLC</a>`,
        `<a href="https://www.lni.wa.gov/" target="_blank" rel="noopener noreferrer">Washington Division of Labor for employers and hiring</a>`,
        `<a href="https://dor.wa.gov/" target="_blank" rel="noopener noreferrer">Washington Department of Revenue for WA taxes</a>`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `header`,
    content: `Special Types of Washington LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `A regular Washington LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Professional LLCs in Washington`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some states, including Washington, allow certain occupations to form “Professional LLCs.” These types of businesses typically have special requirements and licensing.`,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here are the occupations that the WA Secretary of State allows to form professional LLCs:`,
      list: [`Attorneys-at-law`, `Physicians`, `Podiatrists`, `Dentists`, `Optometrists`, `Accountants`, `Veterinarians`, `Architects`, `Engeneers`, `Osteopathic physicians and surgeons`, `Chiropractors`, `Psychologists`, `Social workers`, `Acupuncturists`, `Land surveyors`],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `Foreign LLCs Doing Business in Washington`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If your business is already operating in another state and expanding to Washington, you’ll need to form a foreign LLC.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `More information on Washington filing and licensing requirements here.`,
      url: `/washington-llc/form-filling-permit-requirements/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What to Do After Forming Your Washington LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Want to know your next steps after creating a new LLC in Washington? We’ve got you covered. Here’s our guide to understanding your ongoing requirements, setting up new bank accounts, protecting your business name, getting accounting in place and more.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `More Information About Washington LLCs`,
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
      text: `Naming Your Washington LLC`,
      url: `/washington-llc/how-to-name-your-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the Washington business registry of the Secretary of State and find the right name. Includes information on naming rules, fictitious names, reserving a Washington LLC name and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Washington Registered Agents for LLCs`,
      url: `/washington-llc/registered-agents-washington-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching forWashington Registered Agents.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Washington LLCs`,
      url: `/washington-llc/form-filling-permit-requirements/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you’ll need to pay and the requirements you’ll need to meet for both federal and Washington rules. Includes details of Employer Identification Numbers (EINs), Washington and federal business licenses, annual reports and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes for Your Washington LLC`,
      url: `/washington-llc/business-taxes/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and Washington government. Includes details of federal taxes like income and self-employment, and Washington taxes like sales tax and income tax.`,
    marginBottom: 48,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Naming Your Washington LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Whether you’re searching for the right Washington business name or registering your LLC with the Secretary of State, we can help. We’ve got all the information you need on a business entity search, LLC naming rules, fictitious names and registering your business.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Washington Secretary of State Business Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You should start naming your business by completing a business entity search with the Secretary of State. They have a helpful tool on their website that lets you search the register of WA LLCs and corporations to see if someone already has your desired business name.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the business name is already used, that means it’s not available and you won’t be able to register it. Try searching for a different business name instead.`,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Washington Secretary of State business entity search tool`,
      url: `https://ccfs.sos.wa.gov/#/`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Washington LLC Naming Rules`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet Washington Secretary of State naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in WA.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `General Business Naming Rules`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules, as they will influence the name you choose for your Washington LLC.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Be Unique`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Washington. This is why you should check business name availability on the WA SOS website.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Your LLC Business Name Must Not Be Confusable with Another Business Name`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `It’s not enough for your LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in the state of Washington. `,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `For example, you cannot use the following factors to say your name is different from the name of another business:`,
      list: [
        `Suffixes, such as Corporation, Company, Incorporated, Incorporation, Limited, Corp., Co., Inc., Ltd., LLC, etc.`,
        `Definite articles like “A,” “And,” “An,” “&,” “The,” etc.`,
        `The singular, plural or possessive forms of a word`,
        `Abbreviations, punctuation, symbols, fonts, typefaces, etc.`,
      ],
    },
    marginBottom: 32,
    color: color.orange3,
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
    content: `Most areas will not allow you to form LLCs with names that:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Are very similar to the name of a federal or DC agency or organization (e.g., FBI, FDA, Washington DC Office of Tax and Revenue, Washington DC Police, Treasury, etc.)`,
        `Suggest affiliation with a federal or state agency or organization`,
        `Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
        `Imply a purpose that would be illegal for your business to carry out`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Specific Washington State Rules`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In addition to the general rules listed above, the Washington Secretary of State has some specific business naming rules for your LLC. You will need to follow these rules if you want to name your business appropriately.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The name of an LLC may not contain any of the following words or phrases: "Cooperative," "partnership," "corporation," "incorporated," or the abbreviations "Corp.," "Ltd.," "Inc.," "LP," "L.P.," "LLP," "L.L.P.," "LLLP," "L.L.L.P." or any words or phrases prohibited by any statute of Washington State.`,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: `More on Washington Secretary of State business naming rules.`,
    url: `https://app.leg.wa.gov/RCW/default.aspx?cite=23.95.305`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Washington “Doing Business As” (DBA) and Trade Names`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In Washington, doing business under a different name is known as a “Trade” or “Doing Business As (DBA)” name. You might choose to use a different name from your formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile’s DBA/Trade Name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called Washington Real Estate Waterside Holding Company LLC and you have a brand called “Seattle Lakefront Properties.” You should file a trade name to let the Washington Secretary of State know. In Washington, you do that through a Business License Application form, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Register Your Business Name with the Washington Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your Washington business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your WA LLC name.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `There are a couple of ways to do this:`,
      list: [
        `If you don’t want to form your LLC right now, you can reserve the business name with the Washington Secretary of State. You will need to complete a Name Reservation form and file it with the WA SOS. You do not need to reserve a name if you are forming your business right away.</br>
            <a href="https://www.sos.wa.gov/_assets/corps/namereservation2010.pdf" target="_blank" rel="noopener noreferrer">Washington SOS LLC name reservation form</a>`,
        `If you’re ready to start your Washington LLC, you can formally file your Certificate of Formation with the SOS, or <a href"${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&amp;entityState=WA">let Incfile take care of it for you</a>`,
      ],
    },
    marginBottom: 32,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your Washington LLC`,
    size: 3,
    marginBottom: 24,
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
          question: `How Do I Search for My Washington LLC Business Name?`,
          answer: `Just go to the <a href="https://ccfs.sos.wa.gov/#/" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Washington Secretary
            of State, which will tell you if there are any WA corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My Washington LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Washington). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in Washington?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
        },
        {
          question: `Can I Reserve a Name for My Washington LLC?`,
          answer: `Yes. The Washington Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your
            business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your Washington DC LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You might find these resources helpful.`,
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
    content: `You must be careful that your Washington LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile Trademark Search and Registration service`,
      url: `/trademark-name-search/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Find the Perfect Name for Your Washington LLC`,
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
      header: ``,
      list: [`Appeal to your customers`, `Be memorable enough to stand out`, `Best represent your product or services`, `Not be used by another business`],
    },
    marginBottom: 16,
    color: color.yellow3,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Incfile guide to choosing a business name`,
      url: `/blog/post/llc-name-search-50-states/`,
    },
    marginBottom: 48,
  },
];

export const registeredAgent = [
  {
    type: `header`,
    content: `All About Washington Registered Agents for LLCs`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your LLC must assign a Washington Registered Agent. This is a formally recognized person or business who can receive business correspondence and other documents from the Washington Secretary of State. Assigning a Registered Agent is a legal requirement.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What the Washington Secretary of State Says About Registered Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Here’s some important information from the Washington Secretary of State on Registered Agent services.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `“All Corporations, LLCs, and Limited Partnerships doing business in Washington must have a Registered Agent with a physical Washington State address. The Registered Agent may be an individual or a business. The Registered Agent receives annual reports, notices, and service of process on behalf of the organization they represent.</br>
      The Registered Agent must provide a physical address at which the agent is available for service of process. The agent may provide a P.O. Box address in addition to a physical address for receiving notice.”`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `WA Registered Agents: The Rules You Need to Follow`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a Washington Registered Agent service for your business.`,
    marginBottom: 48,
  },
  {
    type: `list-dot`,
    content: {
      header: `They are:`,
      list: [
        `If the Registered Agent is a person, they must reside in Washington.`,
        `If the Registered Agent is a business, they must be able to conduct business in Washington.`,
        `The Registered Agent must have a physical street address in Washington, not a P.O. Box.`,
        `The Registered Agent must be available in person during normal business hours to sign for any correspondence.`,
      ],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Note that the Registered Agent address does not need to be the same as your Washington LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `The Incfile Registered Agent Service for Washington LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an LLC that’s incorporated in Washington and you need a Registered Agent, we can help. Incfile provides a complete Registered Agent service for any Washington business—and we’ll even act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We are authorized to conduct business in Washington and can legally act as your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here’s what you need to know about Incfile’s WA Registered Agent service:`,
      list: [
        `The Registered Agent will always be available to accept documents and letters on your behalf.`,
        `We automatically notify you whenever we receive correspondence for your business from the Washington Secretary of State or anyone else.`,
        `We scan your correspondence and upload it to a dashboard, so you can review it when convenient.`,
        `We forward all correspondence to an address you choose.`,
      ],
    },
    marginBottom: 16,
    color: color.purple3,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile’s Washington Registered Agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How to Appoint a Washington Registered Agent for Your LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your Washington LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Appoint a Registered Agent Service When You Create Your Washington LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your business needs to have a Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `File Certificate of Formation with the Washington Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details of your Registered Agent in your Articles of Organization. This is the form that you file with the Secretary of State to formally create your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free Washington Registered Agent`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Certificate of Formation based on the information you’ve provided. Additionally, we give you a free Registered Agent service for the first year, and we’ll include details of your Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&amp;entityState=DC&quot;&quot;`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Assign a Different Washington Registered Agent Service After Incorporation`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can also change your Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File Form “Statement of Change/Designation of Agent” with the Washington Secretary of State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new Washington Registered Agent, you can complete form “Statement of Change/Designation of Agent” that’s available on the WA Secretary of State website. Once you’ve filled it out, send it to the Secretary of State so they can update your records.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile’s Washington Registered Agent Service and We’ll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you choose to use our WA Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete form “Statement of Change/Designation of Agent” on your behalf and send it to the Washington Secretary of State. We’ll let you know once we officially become your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile’s Washington Registered Agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `WA Registered Agent Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another Washington LLC. If you do, you can search the business database of the Secretary of State, which will often provide details of a specific business’s Registered Agent`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the Registered Agent isn’t available from the searchable business registry, contact the Washington Secretary of State requesting the information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `What Happens if You Don’t Have a Washington Registered Agent`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the Washington Secretary of State?`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `There are several possible ramifications, including:`,
      list: [
        `<b>Getting served or sued and not finding out about it:</b> If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `<b>Falling out of good standing with the Washington Secretary of State:</b> If you don’t respond to certain correspondence (like the request for your annual report), certain areas may revoke your right to do business.`,
        `<b>Losing your status as a Washington LLC:</b> A Registered Agent “proves” to local government that your business exists. without it, you could lose your business entity protections and your LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.babyblue3,
  },
  {
    type: `header`,
    content: `Acting as Your Own Registered Agent for Your LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in Washington, you can choose to be the Registered Agent for your LLC. We don’t recommend this approach as there can be some drawbacks:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `The Registered Agent must have a physical street address in Washington. If you’re forming an LLC outside WA, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the Washington address to sign for important documents.`,
        `The Registered Agent’s name and address are part of the public record and available through the Washington Secretary of State's website. If you prefer your name and address
             aren’t published, you should choose a Registered Agent service.`,
        `If you change your Washington business address or move out of the area, you would need to file additional documentation with the DC Department of Consumer and Regulatory Affairs for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
      marginBottom: 48,
      color: color.orange3,
    },
  },
  {
    type: `header`,
    content: `FAQs About Washington DC Registered Agents`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a Washington DC Registered Agent?`,
          answer: `Yes. All LLCs are required to have a Registered Agent. This is mandated by the Washington Secretary of State.`,
        },
        {
          question: `When Can I Assign a Washington DC Registered Agent Service?`,
          answer: `You can either do it when you incorporate your Washington business through paperwork filed with the Washington Secretary of State or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in Washington?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you need to fill in the correct forms and pay a fee to the Department of Washington Secretary of State.`,
        },
        {
          question: `Does My WA Registered Agent Need to Have an Address in Washington?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in WA.`,
        },
      ],
    },
    marginBottom: 0,
  },
  {
    type: `header`,
    content: `Useful Resources for Washington Registered Agent Services`,
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
      header: ``,
      list: [
        `<a href="/research-topics/registered-agent-help/what-is-the-main-function-of-the-registered-agent/">The Main Functions of a Washington Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/">Changing Your Washington Registered Agent</a>`,
        `<a href="/research-topics/registered-agent-help/what-does-a-registered-agent-do/">What a Washington Registered Agent Does</a>`,
      ],
    },
    marginBottom: 48,
    color: color.blue2,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `Washington LLC Fees and Filing Requirements`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some types of businesses have different requirements in Washington, including related fees and costs. Your WA LLC needs to pay various fees to the federal government, Washington government and other agencies. Some of these fees are levied by the Washington Secretary of State or statewide organizations, while others come from the federal government. On this page, we’ve summarized the most common fees and requirements.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that Washington business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Washington LLC Incorporation Filing and Fees`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `To create your business in Washington, you’ll file an LLC with the Department of Consumer and Regulatory Affairs and pay an associated LLC formation fee. Every region has different LLC filing fees and filing times. Here is the current information for Washington:`,
    marginBottom: 16,
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
    marginBottom: 8,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Compare State Filing Prices`,
      url: `/state-filing-fees/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `To create your business in Washington, you’ll file an LLC with the Secretary of State and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for Washington:`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through Incfile, we forward this fee to the Washington Secretary of State on your behalf when we file your paperwork.`,
    marginBotm: 16,
  },
  {
    type: `text`,
    content: `Some states allow you to form your LLC more quickly by paying a rush fee. You can <a href="/state-filing-times/">compare state filing times and fees here, including expedited fees for Washington DC</a>.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCORPORATE YOUR Washington LLC THROUGH INCFILE TODAY`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=WA`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Getting an Employer Identification Number for Your WA LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Every Washington LLC should have a unique Employer Identification Number (EIN). These are provided by the Internal Revenue Service, and you use them when filing taxes, opening a business bank account and paying employees. You can get one yourself at no cost from the IRS or have Incfile obtain one on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `GET AN EIN FOR YOUR Washington DC LLC THROUGH INCFILE`,
      url: `/manage-your-company/tax-id-ein/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Certificate of Authority to Operate Outside Washington`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you’re expanding your Washington LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than Washington. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Get a Foreign Qualification/Certificate of Authority through Incfile`,
      url: `/manage-your-company/foreign-qualification/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Annual Reporting and Fees in Washington State`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `<a href="/business-filing-deadlines/"> Learn about your ongoing Washington LLC filing requirements </a> and business filing deadlines with our helpful Washington ongoing filing lookup tool.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your Washington Annual Report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S Washington ANNUAL REPORT FILING SERVICE`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Washington State Business Licenses and Permits`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Washington LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by Washington, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your Washington DC LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your LLC (state, county or city) (e.g., a license to conduct business from the city of Spokane)`,
        `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
      ],
    },
    marginBottom: 16,
    color: color.purple3,
  },
  {
    type: `text`,
    content: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [`A complete report on all the licenses, permits and tax registrations your Washington DC LLC willl need`, `The application forms you will need to file with the Washington DC, regional and federal licensing authorities`],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, Washington DC and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S Washington BUSINESS LICENSE RESEARCH PACKAGE`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `An Operating Agreement for Your Washington LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `An Operating Agreement is a business document that covers how the business will be run, how managers and members are chosen, rights and duties of members and several other key areas.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `An Operating Agreement is extremely useful for several reasons (<a href="research-topics/llc-info/the-llc-operating-agreement/">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your Washington business. You can choose to make changes to the template based on your unique requirements. `,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ad Hoc Washington Fees or Requirements for Your WA LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your Washington LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name for Your Washington LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you want your WA business to trade under a different name, you can file a form with the Washington Secretary of State. You will need to pay a filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S Washington FICTITIOUS NAME SERVICE`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `To Change the Washington Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your Washington LLC needs a Registered Agent, which must be appointed when you first incorporate your LLC. You can also switch to a new Registered Agent later. Incfile provides a complete Washington Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S Washington REGISTERED AGENT SERVICE`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your Washington LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you don’t want to form your WA business right away, you can reserve a name with the Washington Secretary of State. You will need to pay a small fee to do this.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your Washington LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your Washington business when it was originally formed. Over time, these facts might change — if they do, you need to file “Articles of Amendment” with the Washington Secretary of State. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file Washington DC Articles of Amendment for include:`,
      list: [`Adding, removing or changing an Washington LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your Washington LLC`],
    },
    marginBottom: 16,
    color: color.babyblue3,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S Washington ARTICLES OF AMENDMENT SERVICE`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your Washington LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the Washington Secretary of State. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `INCFILE'S Washington CERTIFICATE OD GOOD STANDING SERVICE`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard WA LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your Washington LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About Washington LLC Requirements`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My Washington LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the Secretary of State on your behalf when forming your Washington DC business. `,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Yes. Most states, including Washington, require you to file a report for your LLC every year. You can find out more on the <a href="/compliance-filing-requirement/compliance> compilance page for your state</a>.`,
        },
        {
          question: `Who will I Need to Get Business Licenses and Permits From for My Washington LLC?`,
          answer: `It depends on various factors including:
            <ul>
            <li>The type of business you run</li>
            <li>Where you are located</li>
            <li>Governing organizations in your industry</li>
            <li>Federal, state and local regulations</li>
            </ul></br>
            <p>That’s why our <a href="/business-license-research-package/">Business License Research Package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your Washington DC LLC needs to be compliant.</p>`,
        },
      ],
    },
    marginBottom: 48,
  },
];
export const businessTaxes = [
  {
    type: `header`,
    content: `Business Taxes Payable by Your Washington LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a wide variety of business taxes that your Washington LLC will need to pay. These include tax that’s payable to the Washington government, such as sales taxes. You will also need to pay federal, self-employment and possibly payroll tax to the IRS. Unlike many other states, Washington does not have a state income tax.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/">Business Tax Filing service</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How Your Washington LLC will Be Taxed`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of an Washington LLC are not taxed at the business level like those of C Corporations. Instead, taxes for an Washington LLC work as follows:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `Washington LLC owners pay self-employment tax on business profits`,
      },
      {
        text: `Washington LLC owners pay DC state tax on any profits, less state allowances or deductions`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
      },
      {
        text: `Some LLCs pay Washington Washinton sales tax on products`,
      },
      {
        text: `Employers pay payroll tax on any salaries they pay to employees`,
      },
      {
        text: `Employees pay federal, state and payroll tax on their earnings`,
      },
    ],
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Washington State Sales Tax`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the WA Department of Revenue. Washington sales tax is collected at the point of purchase. Sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your Washington DC business might provide`],
    },
    marginBottom: 16,
    color: color.purple3,
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
    content: `Get details on the <a href="https://dor.wa.gov/find-taxes-rates/sales-and-use-tax-rates" target="_blank" rel="noopener noreferrer">Washington sales tax here</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Federal Self-Employment and Income Taxes for Your Washington LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `All Washington LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your Washington DC business. The current self-employment tax rate is 15.3 percent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will be able to deduct your business expenses from your income when determining how much self-employment tax you owe. Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      list: [
        `On profits of $60,000, you would pay self-employment tax of $9,180.`,
        `On profits of $90,000, you would pay self-employment tax of $13,770.`,
        `On profits of $140,000, you would pay self-employment tax of $21,420.`,
        `On profits of $160,000, you would pay self-employment tax of $24,480.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },

  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your Washington LLC as an S Corporation`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The Internal Revenue Service allows LLCs to ask to be treated as an S Corporation for tax purposes. This can help you reduce the amount of self-employment tax that you pay by declaring some of your income as salary and other income as distributions or withdrawals. `,
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
      text: `Incfile Form 2553 S Corporation Tax Election for an LLC service`,
      url: `/llc-s-corp-election/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Speak to your accountant for more information on reducing your Washington LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Washington LLC Federal Income Tax`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your Washington LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your Washington LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employer and Employee Taxes for Your Washington LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you pay employees, there are some slightly different tax implications. Speak to your accountant to get clear guidance for your own unique situation.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employer Payroll Tax withholding for Your Washington LLC `,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Federal Tax Withholding`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You may also choose to withhold federal income tax on the wages you pay to employees. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employees May Need to File Tax Returns`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You may also choose to withhold federal and Washington DC income tax on the wages you pay to employees. Speak to your accountant for more information.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Employees May Need to File Tax Returns`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Regardless of whether you withhold federal and Washington DC income tax, your employees may need to file their own tax returns.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Employee Insurance and Other Requirements`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You may also need to pay insurance for any employees, like employee compensation insurance or unemployment tax. There will also be other requirements you have for employees.`,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Get more requirements from the Washington Department of Labor &amp; Industries website.`,
      url: `https://www.lni.wa.gov/`,
    },
    bottomMargin: 48,
  },
  {
    type: `header`,
    size: 3,
    content: `Other Taxes and Duties for Your Washington LLC`,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Depending on the industry you are in, your Washington LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Estimated Taxes for Your Washington LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Depending on the industry you are in, your Washington LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
    bottomMargin: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `The most common types of estimated tax are:`,
      list: [`Federal income tax`, `Federal self-employment tax`, `Washington DC local tax`],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `text`,
    content: `Most Washington LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on Washington LLC Business Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does Washington Have Sales Tax?`,
          answer: `Yes. Washington does have a sales tax, which may vary among cities and counties.`,
        },
        {
          question: `Does Washington Have a State Tax?`,
          answer: `No, Washington does not have a general state income tax.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your federal income tax and self-employment tax. Speak to your accountant for more information.`,
        },
      ],
    },
    marginBottom: 48,
  },
];
