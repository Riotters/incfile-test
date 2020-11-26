import { color } from "../../../atomic/atoms/styles/colors";

export const top = {
  header: `Why Form a Limited Liability Company (LLC)?`,
  text: `$0 + State Fee & 1st Year FREE Registered Agent`,
  buttons: [
    {
      text: `See detailed pricing`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NJ`,
    },
  ],
};

export const howToGuide = [
  {
    type: `header`,
    content: `How to Start a New Jersey LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `New Jersey, the Garden State, is located on the East Coast of the U.S. between New York, Delaware and Pennsylvania. Although it is one of the smallest states, it's the second-wealthiest and the most densely populated state in America, making it a great place to start a business.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `New Jersey's economy is boosted by several major industries including tourism, finance and investment, telecommunications, food processing, agriculture, printing, equipment manufacturing, pharmaceuticals and chemical production.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For most business owners, the fastest and easiest way to start a business in New Jersey is by creating a New Jersey LLC. A Limited Liability Company (LLC) is a type of business entity that's ideal for startups and small- to medium-sized businesses. You get the advantages and protections of larger New Jersey corporations but with much simpler rules and regulations.`,
    marginBottom: 16,
  },
  {
    type: "text", //video
    content: '<iframe width="720" height="350" src="https://www.youtube.com/watch?v=0sh4OgPJ3kE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>',
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `Briefly, the benefits of starting a New Jersey LLC include:`,
      list: [`Separating and limiting your personal liability from your business liability and debts`, `Quick and simple filing, management, compliance, regulations and administration of your New Jersey LLC`, `Easy tax filing and potential advantages for tax treatment`],
    },
    marginBottom: 16,
    color: color.green3,
    curve: true,
    curveColor: color.red1,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Learn more about the benefits of the LLC business structure.`,
      url: `/limited-liability-company/`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Six Quick Steps for Creating Your New Jersey LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `We've got lots of useful information on starting a business in NJ. On this page you'll find the basic steps of how to form a New Jersey LLC, with more in-depth content throughout the rest of our guide.`,
    marginBottom: 24,
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
          question: `STEP 2: Search for and Choose a Unique Business Name for Your New Jersey LLC`,
          answer: `<p>You will need a distinctive and original name for your New Jersey LLC that's not used by any other business in NJ. To find out if another company is using your chosen business name, carry out a New Jersey business entity name search on the NJ Division of Revenue and Enterprise Services website.</p></br>
            <p>There are a few rules you'll need to follow when choosing an LLC name. You can find out more in our guide to searching for and naming your New Jersey LLC.</p></br>
            <p><a href="/new-jersey-llc/new-jersey-business-names/" target="_blank">Learn about New Jersey LLC business naming rules.</a></p>`,
        },
        {
          question: `STEP 3: Provide an Official Address for Your NJ LLC`,
          answer: `Every New Jersey LLC must have a designated street address. That could be your home address (if you're running the company from your residence), your company's office building or any physical address of your preference. The address can be outside the state of New Jersey, but it cannot be a P.O. Box.`,
        },
        {
          question: `STEP 4: Assign a Registered Agent for Your New Jersey LLC`,
          answer: `<p>Every NJ LLC must have a “Registered Agent” when it is formed. This is an official position; the Registered Agent is someone who receives official legal and tax correspondence and has responsibility for filing reports with the New Jersey Division of Revenue and Enterprise Services.</p></br>
            <p>This position can be filled by you, another manager in the business or a dedicated Registered Agent service. Your NJ Registered Agent must have a physical street address in New Jersey and must be present to receive important documents for your company during business hours.</p></br>
            <p>At Incfile, all of our packages include a New Jersey Registered Agent service that is free for the first year and just $119 per year afterward. We also have a dashboard where you can log in and easily view any document your Registered Agent has received on your behalf.</p></br>
            <p><a href="/new-jersey-llc/registered-agents-new-jersey-llc/" target="_blank">Learn more about New Jersey Registered Agents.</a></p>`,
        },
        {
          question: `STEP 5: Get an Employee Identification Number (EIN) From the Internal Revenue Service`,
          answer: `You will need an EIN to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. You can obtain one directly from the IRS, or we can get one for you as part of the New Jersey LLC business formation process.`,
        },
        {
          question: `STEP 6: File a Business Registration Application With the New Jersey Division of Revenue and Enterprise Services`,
          answer: `<p>Once you've gathered all the information together for your New Jersey LLC, you'll need to file a formal document with the NJ Division of Revenue and Enterprise Services. This document is known as your “Business Registration Application,” and filing the document creates your New Jersey LLC. This is a long and complex form that requires detailed information.</p></br>
            <p>You can file your New Jersey LLC Business Registration Application online, mail in a form or have Incfile do it on your behalf. There is a fee to file and start an LLC in New Jersey. You only need to file your Business Registration Application once.</p></br>
            <p><a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NJ" target="_blank">Form your LLC now</a></p>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Review Information From the New Jersey Division of Revenue and Enterprise Services`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The NJ Division of Revenue and Enterprise Services has plenty of additional information on forming and running a business in New Jersey.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `These are all the basic steps for forming an LLC in New Jersey. You’ll find other useful information below:`,
      list: [
        `<a href="https://www.state.nj.us/treasury/revenue/" target="_blank" rel="noopener noreferrer">New Jersey Division of Revenue and Enterprise Services for forming and running your NJ LLC</a>`,
        `<a href="https://www.nj.gov/labor/" target="_blank" rel="noopener noreferrer">New Jersey Department of Labor for NJ employers and hiring</a>`,
        `<a href="https://www.state.nj.us/treasury/taxation/businesses.shtml" target="_blank" rel="noopener noreferrer">New Jersey Division of Taxation for NJ taxes</a>`,
      ],
    },
    marginBottom: 48,
    color: color.blue3,
  },
  {
    type: `header`,
    content: `Special Types of New Jersey LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `A regular New Jersey LLC is suitable for most business needs, but you also have a few other options to incorporate a special type of LLC.`,
    marginBottom: 16,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Form a Professional New Jersey LLC`,
          answer: `Some states allow certain occupations to form “Professional LLCs.” These types of business typically have specialized requirements and licensing. New Jersey does not formally recognize professional LLCs, but groups of professionals may form regular LLCs.`,
        },
        {
          question: `Form a Foreign LLC in New Jersey`,
          answer: `<p>If your business is already operating in another state and expanding to New Jersey, you'll need to form a foreign LLC</p></br>
            <a href="/new-york-llc/fees-filing-requirements/" target="_blank">More information on New Jersey filing and licensing requirements here.</a>`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Detailed Information for Your New Jersey LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You'll find plenty more insight and guidance on the other pages of this guide, including:`,
    marginBottom: 32,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Naming Your New Jersey LLC`,
      url: `/new-jersey-llc/new-jersey-business-names/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to search the New Jersey business registry of the NJ Division of Revenue and Enterprise Services and find the right name. Includes information on naming rules, fictitious names, reserving a New Jersey LLC name and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `New Jersey Registered Agents for Your LLC`,
      url: `/new-jersey-llc/registered-agents-new-jersey-llc/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to appoint a New Jersey Registered Agent to your new LLC or change to a different Registered Agent. Includes information on Registered Agent rules and searching for New Jersey Registered Agents.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Fees and Requirements for Your New Jersey LLC`,
      url: `/new-jersey-llc/fees-filing-requirements/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various fees you'll need to pay and the requirements you'll need to meet for both federal and New Jersey rules. Includes details of Employee Identification Numbers (EINs), New Jersey and federal business licenses, New Jersey annual reports and more.`,
    marginBottom: 48,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Federal, State, Sales and Other Taxes for Your New Jersey LLC`,
      url: `/new-jersey-llc/business-taxes/`,
    },
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `How to understand the various taxes you will need to pay to the federal and New Jersey government. Includes details of federal taxes like income and self-employment and New Jersey taxes like sales tax and income tax.`,
    marginBottom: 48,
  },
];

export const namingYourBusiness = [
  {
    type: `header`,
    content: `Business Name Search and Registration for Your New Jersey LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your New Jersey business entity needs the perfect name, and we’re here to help. In this section we’ll guide you through searching the NJ Division of Revenue and Enterprise Services business register, tell you about the rules for naming your business, describe “Alternate Names” and get you started with registering your LLC.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `New Jersey Business Name LLC Lookup`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You need to check whether there’s already another New Jersey LLC registered with your desired business name. That means searching the New Jersey Division of Revenue and Enterprise Services website using their Business Entity Name Search. You can easily look up NJ LLCs and corporations by name and other details.`,
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
      text: `Use our name search tool to check your name availability.`,
      url: `/new-jersey-entity-search/?open=true`,
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `New Jersey DORES Rules on Your LLC Business Name`,
    size: 3,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve decided on a name for your LLC and checked business name availability, you’ll need to meet New Jersey Division of Revenue and Enterprise Services naming rules. These do vary from state to state — we’ve got general naming rules below, as well as naming rules specific to LLC businesses formed in NJ.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `General Business Naming Rules`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `These rules typically apply to all LLCs, no matter what state they are formed in. You will need to pay attention to these rules as they will influence the name you choose for your New Jersey LLC.`,
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
    content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of New Jersey. This is why you should check business name availability on the NJ DORES website.`,
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
    content: `It’s not enough for your NJ LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in New Jersey.`,
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
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: ``,
      list: [
        `Are very similar to the name of a federal or NJ agency or organization (e.g., FBI, FDA, New Jersey Division of Taxation, New Jersey Police, Treasury, etc.)`,
        `Suggest affiliation with a federal or state agency or organization`,
        `Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
        `Imply a purpose that it would be illegal for your business to carry out`,
      ],
    },
    marginBottom: 32,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Specific Business Naming Rules in New Jersey`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `In addition to the general rules listed above, the New Jersey Division of Revenue and Enterprise Services has some specific business naming rules for your LLC. You will need to follow these rules if you want to name your NJ business appropriately.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Certain restricted words need additional paperwork and other words are prohibited. Restricted and prohibited words include: Blind, Cemetery, Funeral Homes, Handicapped, Urban Renewal,  D.C., District of Columbia, Little League, Metropolitan, Olympia, Olympic, Postal, Realtor, Trust or Underwriters.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `New Jersey LLC Alternate Names`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You might choose to do business under a different name from your legal LLC name. In New Jersey, doing business under a different name is known as an “Alternate Name.” You might choose to use a different name from your NJ formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You might choose to use a different name from your NV formal LLC name for a variety of reasons.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `For example, your LLC might be called New Jersey Construction Holding Company LLC and you have a chain called Stewart’s Building Supplies. You should file an Alternate Name form to let the New Jersey Division of Revenue and Enterprise Services know. In New Jersey, you do that through a C-150G Registration of Alternate Name form, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
    marginBottom: 16,
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
    content: `Register Your New Jersey LLC Business Name`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Once you’ve searched for your New Jersey business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your NJ LLC name. There are a couple of ways to do this:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `<p>If you don’t want to form your New Jersey LLC right now, you can reserve  a name with the New Jersey Division of Revenue and Enterprise Services. You do not need to reserve a name if you are forming your business right away.</p></br>
          <a href="https://www.nj.gov/treasury/revenue/" target="_blank" rel="noopener noreferrer">​New Jersey DORES LLC name reservation.</a>`,
      },
      {
        text: `If you’re ready to start your New Jersey LLC, you can file your Business Registration Application with the New Jersey Division of Revenue and Enterprise Services yourself, or
          <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NJ" target="_blank" rel="noopener noreferrer">let Incfile take care of it for you.</a>`,
      },
    ],
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs on Naming Your New Jersey LLC`,
    size: 3,
    marginBottom: 24,
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
          question: `How Do I Search for My New Jersey LLC Business Name?`,
          answer: `<p>Just go to the <a href="https://www.njportal.com/dor/businessnamesearch/" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the New Jersey Division of Revenue and Enterprise Services, which will tell you if there are any NJ corporations or LLCs with that name.`,
        },
        {
          question: `Are There Any Rules on Naming My New Jersey LLC?`,
          answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of New Jersey). We’ve detailed these rules above.`,
        },
        {
          question: `Can I Do Business Under a Different Name Than My LLC Name in New Jersey?`,
          answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name.`,
        },
        {
          question: `Can I Reserve a Name for My New Jersey LLC?`,
          answer: `Yes. The New Jersey Division of Revenue and Enterprise Services allows you to reserve a name if you don’t want to start your business immediately. If you are ready to start your business now, you do not need to reserve a name.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for Naming Your New Jersey LLC`,
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
    content: `You must be careful that your New Jersey LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
    content: `Find the Perfect Name for Your New Jersey LLC`,
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
    color: color.orange3,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Incfile guide to choosing a business name.`,
      url: `/blog/post/llc-name-search-50-states/`,
    },
    marginBottom: 48,
  },
];

export const registeredAgent = [
  {
    type: `header`,
    content: `Get a New Jersey LLC Registered Agent in Place`,
    size: 2,
    marginBottom: 32,
  },
  {
    type: `text`,
    content: `Your NJ LLC must assign a New Jersey Registered Agent. This is a formally recognized person or business who can receive business correspondence and other documents from the New Jersey Division of Revenue and Enterprise Services. Assigning a Registered Agent is a legal requirement.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your LLC must have a New Jersey Registered Agent at all times. You can appoint a Registered Agent when you first start your business. You can also replace your existing NJ Registered Agent at a later date, provided there is a smooth transition between the old and new Registered Agent service.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `NJ Registered Agents: The Rules You Need to Follow`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are certain rules that you must follow when you’re appointing a New Jersey Registered Agent service for your business.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `They are:`,
      list: [
        `If the Registered Agent is a person, they must reside in New Jersey`,
        `If the Registered Agent is a business, they must be able to conduct business in New Jersey`,
        `The Registered Agent must have a physical street address in New Jersey, not a P.O. Box`,
        `The NJ Registered Agent must be available in person during normal business hours to sign for any correspondence`,
      ],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `text`,
    content: `Note that the NJ Registered Agent address does not need to be the same as your New Jersey LLC business address.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `The Purpose of a New Jersey Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What can you expect from your New Jersey Registered Agent? Their main function is to accept official documents and correspondence from the NJ Division of Revenue and Enterprise Services.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `This may include:`,
      list: [
        `Correspondence from the New Jersey Division of Revenue and Enterprise Services`,
        `Service of process notices (e.g., if your NJ LLC is sued or required to appear in court)`,
        `Official New Jersey state and federal government correspondence and notifications`,
        `Tax forms and requests to complete permits, company filings and reports`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `The Incfile Registered Agent Service for New Jersey LLCs`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an LLC that’s incorporated in New Jersey and you need a NJ Registered Agent, we can help. Incfile provides a complete Registered Agent service for any New Jersey business. If you form your business through Incfile, we’ll act as your Registered Agent free for your first year (normally a $119 annual cost).`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `We are authorized to conduct business in New Jersey and can legally act as your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here’s what you need to know about Incfile’s NJ Registered Agent service:`,
      list: [
        `The Registered Agent will always be available to accept documents and letters on your behalf`,
        `We automatically notify you whenever we receive correspondence for your business from the New Jersey Division of Revenue and Enterprise Services or anyone else`,
        `We scan your correspondence and upload it to a dashboard, so you can review it when convenient`,
        `We forward all correspondence to an address you choose`,
      ],
    },
    marginBottom: 16,
    color: color.orange3,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's New Jersey registered agent service`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NJ`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Your Options for Appointing a New Jersey Registered Agent`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `You can appoint a Registered Agent when you first incorporate your New Jersey LLC or at any point after that. Here’s how to go about it.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign Your New Jersey Registered Agent When You Form Your NJ LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business needs to have a New Jersey Registered Agent Service as soon as it’s formed. You can achieve this through one of the following methods.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `File Business Registration Application With the New Jersey Division of Revenue and Enterprise Services`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will need to include details on your Registered Agent in your Business Registration Application. This is the form that you file with the NJ Division of Revenue and Enterprise Services to formally create your business.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Incorporate Through Incfile and Get a Free New Jersey Registered Agent`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you incorporate through us, we complete and file your Business Registration Application based on the information you’ve provided. Additionally, we give you a free New Jersey Registered Agent Service for the first year, and we’ll include details of your NJ Registered Agent in the form that we file.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your business through Incfile`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NJ`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Assign a Different New Jersey Registered Agent Service After Incorporation`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You can also change your NJ Registered Agent service after you’ve formed your LLC. There are a couple of ways to achieve this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Choose a Registered Agent Service and File a Form With the New Jersey Division of Revenue and Enterprise Services`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Once you’ve chosen a new New Jersey Registered Agent, you can complete a form. Once you’ve filled it out, send it to the NJ Division of Revenue and Enterprise Services so they can update your records. The New Jersey DORES may charge a nominal fee to assign or change a Registered Agent.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `Sign Up for Incfile’s New Jersey Registered Agent Service and We’ll File the Change on Your Behalf`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `When you choose to use our NJ Registered Agent service, we take care of all the form filling and filing for you. We’ll collect important information about your business, complete the form on your behalf and send it to the New Jersey Division of Revenue and Enterprise Services. We’ll let you know once we officially become your Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Order Incfile's New Jersey registered agent service`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NJ`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `New Jersey Registered Agent Search`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `In some situations, you might want to know the name of the Registered Agent that represents another New Jersey LLC. If you do, you can search the business database of the New Jersey Division of Revenue and Enterprise Services, which will often provide details of a specific business’s Registered Agent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If the NJ Registered Agent isn’t available from the searchable business registry, contact the New Jersey Division of Revenue and Enterprise Services requesting the information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `The Problems Caused When You Don’t Appoint a New Jersey Registered Agent Service`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `What happens if you choose not to assign or provide details of a Registered Agent to the New Jersey DORES?`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `There are several possible ramifications, including:`,
      list: [
        `Getting served or sued and not finding out about it: If your LLC is sued and you don’t know about it, you could lose to a default judgment in your absence.`,
        `Falling out of good standing With the New Jersey Division of Revenue and Enterprise Services: If you don’t respond to certain correspondence (like the request for your annual report), certain states may revoke your right to do business.`,
        `Losing your status as a New Jersey LLC: A NJ Registered Agent “proves” to the state that your business exists. Without it, you could lose your business entity protections and your New Jersey LLC may be dissolved.`,
      ],
    },
    marginBottom: 48,
    color: color.purple3,
  },
  {
    type: `header`,
    content: `Acting as Your Own Registered Agent for Your NJ LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you have an address in New Jersey, you can choose to be the Registered Agent for your LLC.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `We don’t recommend this approach as there can be some drawbacks:`,
      list: [
        `The NJ Registered Agent must have a physical street address in New Jersey. If you’re forming an LLC outside NJ, you will need to use an in-state Registered Agent.`,
        `You always need to have someone on hand during business hours at the New Jersey address to sign for important documents.`,
        `The NJ Registered Agent’s name and address are part of the public record and available through the New Jersey Division of Revenue and Enterprise Service's website. If you would prefer your name and address aren’t published, you might choose a Registered Agent service.`,
        `If you change your New Jersey business address or move out of state, you would need to file additional documentation with the NJ Division of Revenue and Enterprise Services for the new address if you act as your own Registered Agent. This would not be the case if you use a Registered Agent service, making a move or address change much simpler.`,
      ],
    },
    marginBottom: 48,
    color: color.green3,
  },
  {
    type: `header`,
    content: `FAQs About New Jersey Registered Agents`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Do I Need to Appoint a New Jersey Registered Agent?`,
          answer: `Yes. All NJ LLCs are required to have a Registered Agent. This is mandated by the New Jersey Division of Revenue and Enterprise Services.`,
        },
        {
          question: `When Can I Assign a New Jersey Registered Agent Service?`,
          answer: `You can either do it when you incorporate your New Jersey business through paperwork filed with the NJ Division of Revenue and Enterprise Services or afterward by filing the correct form. If you form your business through Incfile, we will file all necessary forms on your behalf.`,
        },
        {
          question: `Can I Be My Own Registered Agent in New Jersey?`,
          answer: `Yes, but we don’t recommend it for the reasons listed above. If you still want to be your own Registered Agent, you just need to fill in the correct forms and pay a fee to the New Jersey Division of Revenue and Enterprise Services.`,
        },
        {
          question: `Does My NJ Registered Agent Need to Have an Address in New Jersey?`,
          answer: `Yes. Additionally, if they are a business providing Registered Agent services, they must be legally able to conduct business in your state.`,
        },
      ],
    },
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Useful Resources for New Jersey Registered Agent Services`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `list-dot`,
    content: {
      header: `You might find these resources helpful:`,
      list: [
        `<a href="/research-topics/registered-agent/registered-agent-function/" target="_blank">The Main Functions of a New Jersey Registered Agent</a>`,
        `<a href="/manage-your-company/change-of-registered-agent/" target="_blank" >Changing Your New Jersey Registered Agent</a>`,
        `<a href="/research-topics/registered-agent/registered-agent-tasks/" target="_blank" >What a New Jersey Registered Agent Does</a>`,
      ],
    },
    marginBottom: 0,
    color: color.blue3,
  },
];

export const feesAndRequirments = [
  {
    type: `header`,
    content: `New Jersey Fees and Filing Requirements for Your LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Some types of businesses have different requirements in New Jersey, including related fees and costs. Your NJ LLC needs to pay various fees to the federal government, New Jersey government and other agencies. Some of these fees are levied by the New Jersey Division of Revenue and Enterprise Services or statewide organizations, while others come from the federal government. On this page, we’ve summarized the most common fees and requirements.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Note that New Jersey business licenses and permits might need to be paid when you first form your business, on an ongoing schedule or on an ad hoc basis. Find more details below.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Initial Filing and Fees for Forming an LLC in New Jersey`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `To create your business in New Jersey, you’ll file an LLC with the NJ Division of Revenue and Enterprise Services and pay an associated LLC formation fee. Every state has different LLC filing fees and filing times. Here is the current information for New Jersey:`,
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
    content: `When you incorporate through Incfile, we charge this fee to you and pay the New Jersey Division of Revenue and Enterprise Services on your behalf when we file your paperwork. Some states allow you to form your LLC more quickly by paying a rush fee.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You can <a href="/state-filing-times/" target="_blank">compare state filing times and fees here, including expedited fees for New Jersey.</a>.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incorporate your New Jersey LLC through Incfile today`,
      url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=NJ`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Foreign Qualification to Operate in a State Outside New Jersey`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you’re expanding your New Jersey LLC beyond the borders of the state, you will need a Foreign Qualification or Certificate of Authority to operate in another state. These are typically necessary if you have a physical presence, employees or banking in a different state than New Jersey. Fees and requirements for foreign qualifications depend on each state’s rules. Incfile provides a complete Foreign Qualification service for any state.`,
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
    content: `New Jersey LLC Annual Reporting and Fees`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Most states need to file an annual (or other periodic) report with their Division of Revenue and Enterprise Services. When you file your NJ LLC annual report, you may need to pay a fee. Here are the annual filing requirements for New Jersey:`,
    marginBottom: 16,
  },
  {
    type: `dynamic_filing_requirement`,
  },
  {
    type: `text`,
    content: `Incfile can also complete and file your New Jersey annual report on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's New Jersey annual report filing service`,
      url: `/manage-your-company/annual-report/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Business Licenses and Permits in New Jersey`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `Your New Jersey LLC may need certain licenses and permits to comply with specific requirements. These business permits and licenses might be issued by New Jersey, regional or federal organizations. Some of the associated fees only need to be paid once, while others have ongoing charges.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Permits and licenses vary based on:`,
      list: [
        `The industry your New Jersey LLC operates in (e.g., restaurants will need health permits)`,
        `The location of your New Jersey LLC (state, county or city) (e.g., a license to conduct business from the city of Newark.)`,
        `The type of business that you run (e.g., healthcare providers must meet HIPAA requirements)`,
      ],
    },
    marginBottom: 24,
    color: color.purple3,
  },
  {
    type: `list-dot`,
    content: {
      header: `You can research these permits and licenses yourself or use Incfile’s Business License Research Package, which includes:`,
      list: [`A complete report on all the licenses, permits and tax registrations your New Jersey LLC will need`, `The application forms you will need to file with the New Jersey, regional and federal licensing authorities`],
    },
    marginBottom: 16,
    color: color.yellow3,
  },
  {
    type: `text`,
    content: `Remember that operating your business without the required licenses can expose you to risks and fines from federal, New Jersey and local governments.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's New Jersey business license research package`,
      url: `/business-license-research-package/`,
    },
    theme: `primary48`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Create an Operating Agreement for Your New Jersey LLC`,
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
    content: `New Jersey LLCs aren’t required to have an Operating Agreement, but they are extremely useful for several reasons (<a href="/research-topics/llc-info/the-llc-operating-agreement/" target="_blank">learn about them here</a>). If you’re interested in having your Operating Agreement created for you, Incfile can draft a general Operating Agreement template when you choose to form your New Jersey business. You can choose to make changes to the template based on your unique requirements.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Ad Hoc New Jersey Fees or Requirements for Your NJ LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are several other fees or requirements that you may need to meet during the life of your New Jersey LLC. These ad hoc fees will only be payable in specific circumstances, which we’ve listed below.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Obtain a Fictitious/DBA Name for Your New Jersey LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want your NJ business to trade under a different name, you can file a form with the New Jersey Division of Revenue and Enterprise Services. You will need to pay a New Jersey filing fee. Incfile can file this form on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's New Jersey fictitious name service`,
      url: `/fictitious-business-or-trade-name/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Change the New Jersey Registered Agent for Your NJ LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your New Jersey LLC needs a Registered Agent. You need to appoint one when you first incorporate your LLC. You can also switch to a new NJ Registered Agent later. Incfile provides a complete New Jersey Registered Agent service.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's New Jersey registered agent service`,
      url: `/manage-your-company/registered-agent/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Reserve a Name for Your New Jersey LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you don’t want to form your NJ business right away, you can reserve a name with the New Jersey Division of Revenue and Enterprise Services. You will need to pay a small fee to do this.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Amend Certain Facts About Your New Jersey LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Your business formation documents state certain facts about your New Jersey business when it was originally formed. Over time, these facts might change — if they do, you need to file a “Certificate of Amendment” with the New Jersey Division of Revenue and Enterprise Services. You can do this yourself or have Incfile complete the filing on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Areas you might want to file New Jersey Certificate of Amendment for include:`,
      list: [`Adding, removing or changing a New Jersey LLC member or manager`, `Changing the business address of your LLC`, `Altering the stated business activities of your New Jersey LLC`],
    },
    marginBottom: 16,
    color: color.green3,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's New Jersey articles of amendment service`,
      url: `/manage-your-company/amendment/`,
    },
    theme: `primary48`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `To Get a Certificate of Good Standing for Your New Jersey LLC`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Some organizations will request that you prove your New Jersey LLC’s compliance with laws and tax requirements. If you need to prove you have met your commitments, you will need a “Certificate of Good Standing” from the New Jersey Division of Revenue and Enterprise Services. Incfile can obtain a certificate on your behalf.`,
    marginBottom: 16,
  },
  {
    type: `button`,
    content: {
      text: `Incfile's New Jersey certificate of good standing service`,
      url: `/manage-your-company/certificate-of-good-standing/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `The fees listed above detail all the charges that a standard NJ LLC will be required to pay. In some unusual circumstances, there may be other one-off, periodic or ad hoc fees not listed above.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Of course, your New Jersey LLC will also probably need to pay self-employment, payroll, federal, state and sales taxes, but we will cover that when we talk about taxes for NJ LLCs.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `FAQs About New Jersey LLC Fees`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `What Happens to the State Fees That I Am Charged When Forming My New Jersey LLC?`,
          answer: `We charge you for this fee at cost and then pay the fee to the Division of Revenue and Enterprise Services on your behalf when forming your New Jersey business.`,
        },
        {
          question: `Do I Need to Pay an Annual Report Fee Every Year?`,
          answer: `Usually, yes. Most states require you file a report for your LLC every year. Some states require filing biennially (every other year), though a handful don’t require annual reports. You can find out more on the <a href="/compliance-filing-requirement/" target="_blank">compliance page for your state.</a>`,
        },
        {
          question: `Who Will I Need to Get Business Licenses and Permits From for My New Jersey LLC?`,
          answer: `
            It depends on various factors including:
              <ul>
              <li>The type of business you run</li>
              <li>Where you are located</li>
              <li>Governing organizations in your industry</li>
              <li>Federal, state and local regulations</li>
              </ul></br>
            <p>That’s why our <a href="/business-license-research-package/" target="_blank">business license research package</a> is so useful. It explores all of these areas for you and provides a comprehensive overview of exactly what your New Jersey LLC needs to be compliant.</p>`,
        },
      ],
    },
    marginBottom: 0,
  },
];

export const businessTaxes = [
  {
    type: `header`,
    content: `The Business Taxes Payable by Your New Jersey LLC`,
    size: 2,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There’s a wide variety of business taxes that your New Jersey LLC will need to pay. These include tax that’s payable to the New Jersey government, like New Jersey sales taxes and New Jersey state tax. You will also need to pay federal, self-employment and possibly payroll tax to the IRS.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `If you want help with your taxes, Incfile provides a complete <a href="/business-accounting/" target="_blank">Business Tax Filing service</a>.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `How Your New Jersey LLC Will Be Taxed`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `The profits of a New Jersey LLC are not taxed at the business level, like those of C Corporations. Instead, tax for a New Jersey LLC works as follows:`,
    marginBottom: 16,
  },
  {
    type: `numeric-list`,
    content: [
      {
        text: `New Jersey LLC owners pay self-employment tax on business profits`,
      },
      {
        text: `New Jersey LLC owners pay NJ state tax on any profits, less state allowances or deductions`,
      },
      {
        text: `All LLC owners pay federal income tax on any profits less federal allowances or deductions`,
      },
      {
        text: `Some NJ LLCs pay New Jersey sales tax on products`,
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
    content: `Items 1, 2 and 3 are taxed as “pass-through” income for any LLC owners, managers or members who receive profits from the business. Any profits are reported on federal and New Jersey personal tax returns, and that’s where you will pay those taxes.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `New Jersey Taxes Payable to the NJ Division of Taxation`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are two main types of tax that you will pay to the New Jersey Division of Taxation: New Jersey state income tax and New Jersey state sales tax.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `New Jersey State Tax on Your LLC Earnings`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `As a New Jersey business owner, you will need to pay NJ state tax on any money you pay to yourself. These earnings flow through to your personal tax return, which is where you will pay New Jersey income tax. You will be taxed at the standard rates for New Jersey state taxes, and you will also get to apply regular allowances and deductions.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Any salaried employees will also need to pay personal New Jersey state taxes. New Jersey tax rates vary widely depending on income.`,
    marginBottom: 16,
  },
  {
    type: `arrow-link`,
    content: {
      text: `Get more details on the New Jersey state tax online here.`,
      url: `https://www.state.nj.us/treasury/taxation/taxtables.shtml`,
    },
    bottomMargin: 48,
  },
  {
    type: `header`,
    content: `Your New Jersey LLC and NJ Sales Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `If you sell physical products or certain types of services, you may need to collect sales tax (also known as sales and use tax) and then pay it to the NJ Division of Taxation. New Jersey sales tax is collected at the point of purchase. New Jersey sales tax rates do vary depending on the region, county or city where you are located.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `You will typically need to collect New Jersey sales tax on:`,
      list: [`Tangible, personal property and goods that you sell like furniture, cars, electronics, appliances, books, raw materials, etc.`, `Certain services that your New Jersey business might provide`],
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
    type: `arrow-link`,
    content: {
      text: `Get more details on the New Jersey sales tax online here.`,
      url: `https://www.state.nj.us/treasury/taxation/su.shtml`,
    },
    bottomMargin: 32,
  },
  {
    type: `header`,
    content: `New Jersey Sales Tax Rates`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Sales tax rates do vary between states, counties and cities. Typically, the state will set a base sales tax rate, then specific counties and cities may levy small additional sales tax amounts on top of that.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here are the sales tax rates for the major cities in New Jersey:`,
      list: [`Newark:  6.875 percent`, `Jersey City:  6.875 percent`, `Edison:  6.875 percent`, `Parsippany-Troy Hills:  6.875 percent`],
    },
    marginBottom: 48,
    color: color.orange3,
  },
  {
    type: `header`,
    content: `Federal Self-Employment and Income Taxes for Your New Jersey LLC`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `text`,
    content: `There are a couple different federal taxes that every LLC will need to pay, including New Jersey LLCs. These are self-employment tax and federal income tax, which are taxed as “pass-through” income via your tax return forms.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `New Jersey LLC Federal Self-Employment Tax`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `All New Jersey LLC business members or managers who take profits out of the LLC will need to pay self-employment tax. This tax is also known as FICA, Social Security or Medicare tax. It applies to all the earnings you withdraw from your New Jersey business. The current self-employment tax rate is 15.3 percent.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You will be able to deduct your business expenses from your income when working out how much self-employment tax you owe.`,
    marginBottom: 16,
  },
  {
    type: `list-dot`,
    content: {
      header: `Here are some examples of how much self-employment tax you may need to pay, depending on your earnings:`,
      list: [`On profits of $50,000, you would pay self-employment tax of $7,650`, `On profits of $80,000, you would pay self-employment tax of $12,240`, `On profits of $120,000, you would pay self-employment tax of $18,360`, `On profits of $160,000, you would pay self-employment tax of $24,480`],
    },
    marginBottom: 32,
    color: color.babyblue3,
  },
  {
    type: `header`,
    content: `Pay Less Self-Employment Tax by Treating Your New Jersey LLC as an S Corporation`,
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
      text: `Incfile form 2553 S Corporation tax election for an LLC service`,
      url: `/llc-s-corp-election/`,
    },
    theme: `primary48`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `Speak to your accountant for more information on reducing your New Jersey LLC self-employment tax through an S Corporation tax election.`,
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `New Jersey LLC Federal Income Tax`,
    size: 4,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You must also pay regular federal income tax on any earnings you take out of your New Jersey LLC. The amount of income tax you pay depends on your earnings, current income tax brackets, deductions and how you file.`,
    marginBottom: 16,
  },
  {
    type: `text`,
    content: `You only pay federal income tax on your New Jersey LLC profits that you take out of the business, less certain deductions and allowances. This includes your tax-free amount, plus LLC business expenses and other deductions for areas such as healthcare and some retirement plans. Speak to your accountant for more information.`,
    marginBottom: 48,
  },
  {
    type: `header`,
    content: `Employer and Employee Taxes for Your New Jersey LLC`,
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
          question: `Employer Payroll Tax Withholding for Your New Jersey LLC`,
          answer: `All employers must collect and withhold payroll tax from their employees when they receive their salaries. You would normally withhold 7.65 percent of the taxable salary that you pay to your employees.`,
        },
        {
          question: `Employer Federal and State Tax Withholding for Your New Jersey LLC`,
          answer: `You may also choose to withhold federal and New Jersey state income tax on the wages you pay to employees. Speak to your accountant for more information.`,
        },
        {
          question: `Employees May Need to File Tax Returns`,
          answer: `Regardless of whether you withhold federal and New Jersey state income tax, your employees may need to file their own tax returns.`,
        },
        {
          question: `New Jersey LLC Employee Insurance and Other Requirements`,
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
                  text: `Get more requirements from the New Jersey Department of Labor website.`,
                  url: `https://nj.gov/labor/`,
                },
              ],
            },
          ],
        },
        {
          question: `Other Taxes and Duties for Your New Jersey LLC`,
          answer: `Depending on the industry you are in, your New Jersey LLC may be liable for certain other taxes and duties. For example, if you sell gasoline you may need to pay a tax on any fuel you sell. Likewise, if you import or export goods you may need to pay certain duties. Speak to your accountant about any other taxes you may need to withhold or pay.`,
        },
        {
          question: `Estimated Taxes for Your New Jersey LLC`,
          answer2: [
            {
              type: `paragraph`,
              content: `Most New Jersey LLCs will need to pay estimated taxes throughout the year, depending on the amount of income and profit you expect to make.`,
            },
            {
              type: `list-dot-without-bg`,
              color: color.orange3,
              header: `The most common types of estimated taxes are:`,
              content: [`Federal income tax`, `Federal self-employment tax`, `New Jersey state tax`],
            },
            {
              type: `paragraph`,
              content: `Most New Jersey LLCs will pay estimated taxes four times a year. Speak to your accountant for more information.`,
            },
          ],
        },
      ],
    },
    marginBottom: 32,
  },
  {
    type: `header`,
    content: `FAQs on New Jersey LLC Business Taxes`,
    size: 3,
    marginBottom: 24,
  },
  {
    type: `accordion`,
    content: {
      items: [
        {
          question: `Does New Jersey Have Sales Tax?`,
          answer: `Yes. New Jersey does have a sales tax, which may vary among cities and counties. You can find more information above.`,
        },
        {
          question: `Does New Jersey Have a State Tax?`,
          answer: `No, New Jersey does not have a general state income tax.`,
        },
        {
          question: `What Is the Sales Tax Rate in New Jersey?`,
          answer: `Yes. In most cases you must pay estimated taxes for your federal income tax and self-employment tax. Speak to your accountant for more information.`,
        },
        {
          question: `Do I Need to Pay Estimated Taxes?`,
          answer: `Yes. In most cases you must pay estimated taxes on your New Jersey tax, federal income tax and self-employment tax. Speak to your accountant for more information.`,
        },
      ],
    },
    marginBottom: 0,
  },
];

export const compare = {
  header: `How We Compare. <br>Get more for less.`,
  table: {
    headers: [null, `Incfile`, `LegalZoom`, `ZenBusiness`],
    rows: [
      [`Business incorporation service`, `$49`, `$149`, `$149`],
      [`Registered Agent included in the price`, `check-green`, `check-red`, `check-red`],
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
                type: `arrow-link`,
                content: {
                  text: `State Filing Times`,
                  url: `/`,
                },
                bottomMargin: 16,
              },
              {
                type: `arrow-link`,
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
              text: `Other State's Ongoing`,
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
